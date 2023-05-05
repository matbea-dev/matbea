import { RollupOptions } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import fs from 'fs-extra';
import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup'
import image from '@rollup/plugin-image';
import nodeExternals from 'rollup-plugin-node-externals';
import postcssUrl from 'postcss-url';
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import dotenv from "rollup-plugin-dotenv"


export interface PkgConfigInput {
  basePath: string;
}

export const buildRollupConfig = (config: PkgConfigInput): RollupOptions=>{
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(config.basePath, './package.json')).toString('utf-8')
  );

  return {
    input: path.resolve(config.basePath, 'src', 'index.ts'),
    output: [
      {
        name: packageJson.name,
        dir: path.resolve(config.basePath, 'dist', 'esm'),
        format: "es",
        preserveModules: true,
        sourcemap: true
      },
      {
        name: packageJson.name,
        dir: path.resolve(config.basePath, 'dist', 'cjs'),
        format: "cjs",
        preserveModules: true,
        sourcemap: true,
        exports: 'named'
      }
    ],
    external: [
      /style-inject/,
      ...Object.keys({
        ...packageJson.peerDependencies,
        ...packageJson.dependencies,
      }),
    ],
    plugins: [
      commonjs(),
      dotenv({
        cwd: process.cwd()
      }),
      postcss({
        inject: true,
        minimize: true,
        plugins: [
          postcssUrl({
            url: "inline",
          }),
          autoprefixer()
        ],
        use: ['sass']
      }),
      nodeExternals(),
      nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
      esbuild({
        minify: true,
        sourceMap: false,
        tsconfig: path.resolve(config.basePath,'./tsconfig.json'),
        exclude: [
          'node_modules/**',
          '**/*.test.ts',
          '**/*.stories.ts'
        ]
      }),
      svgr({
        icon: true
      }),
      image({
        include: ['*.png', '*.jpg']
      }),
      {
        name: 'Custom Rollup Plugin`',
        generateBundle: (options, bundle) => {
            Object.entries(bundle).forEach((entry) => {
                if (!entry[0].match(/.*(.scss.js)$/)) {
                    return;
                }
                // @ts-ignore
                bundle[entry[0]].code = entry[1].code.replace(
                    /\/[^\n"?:*<>|]+\/style-inject\/dist\/style-inject.es.js/,
                    'style-inject',
                );
            });
        },
      }
    ]
  }
}
