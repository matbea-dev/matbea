import { PkgConfigInput } from "../configs/rollup";
import { getPackagesList } from "./utils/getPackagesList"
import path from "path";
import { compile } from "./utils/compile";
import { generateDeclarations } from "./generateDeclarations";

export const buildPackage = async (name: string) => {
  const packages = await getPackagesList();

  if (!packages.includes(name)){
    throw new Error('Package not found')
  }

  const config: PkgConfigInput = {
    basePath: path.resolve(__dirname, '../packages', name)
  }  
  
  await generateDeclarations(config.basePath);
  
  await compile(config)
}
