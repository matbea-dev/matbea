import fs from 'fs-extra'
import {execa} from 'execa';
import fg from 'fast-glob';
import path from 'path';

export const generateDeclarations = async (location: string)=>{
  if(fs.pathExists(location)){
    await execa('yarn', ['tsc', '-p', 'tsconfig.build.json'], {
      cwd: location
    })
  }

  const files = await fg([
    'lib/**/*.js',
    'lib/**/*.stories.d.ts',
    'lib/**/*.stories.d.ts.map',
  ], { cwd: location });

  return Promise.all(files.map((file) => fs.remove(path.join(location, file))));
}
