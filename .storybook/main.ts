import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    delete config.optimization?.splitChunks
    if (config.module?.rules){
      const fileLoaderRule = config.module.rules.find((rule: any) => rule.test && rule.test.test('.svg'));

      if (fileLoaderRule){
          // @ts-ignore
          fileLoaderRule.test = /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;  
      }

      config.module?.rules?.push(
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        }
      )

      config.module?.rules?.push(
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
              },
            }
          ]      
        }
      )
    }
    
    return config;
  },
  babel: async (options) => {
    options.presets?.push('@babel/preset-typescript')

    return options;
  },
};
export default config;
