import fs from 'fs-extra';
import path from 'path'

export const getPackagesList = async ()=>{
    const packages = await fs.readdir(path.resolve(__dirname, '../../packages'))
    return packages
}
