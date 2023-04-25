import { PkgConfigInput, buildRollupConfig } from "../../configs/rollup";
import { OutputOptions, rollup } from "rollup";

export const compile = async (conf: PkgConfigInput)=>{
    const config = buildRollupConfig(conf);
    const build = await rollup(config);

    const outputs: OutputOptions[] = Array.isArray(config.output) ? config.output : [config.output];
    await Promise.all(outputs.map((output) => build.write(output)));
}
