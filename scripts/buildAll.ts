import path from 'path';
import { PkgConfigInput } from '../configs/rollup';
import { getPackagesList } from './utils/getPackagesList';
import { compile } from './utils/compile';

export const buildAll = async ()=>{
  const packages = await getPackagesList();

  const configs: Array<PkgConfigInput> = [];
  
  for (let i = 0; i<packages.length; i++){
    configs.push({
      basePath: path.resolve(__dirname, '../packages', packages[i]) 
    })
  }

  
  for (let i=0; i<configs.length; i++){
    await compile(configs[i])
  }
};
