import { buildAll } from "./buildAll"
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { buildPackage } from "./buildPackage";

const { argv }: { argv: any } = yargs(hideBin(process.argv))
  .option('all', {
    type: 'boolean',
    default: false,
    description: 'Build all packages.',
  })
  .option('project', {
    type: 'string',
    description: 'Specify package which should be bundled.',
  })
  .example([
    ['$0 all', 'Build all packages in chain'],
    ['$0 --project core', 'Build only @matbea/core package'],
  ]);

(async () => {
  console.log(argv)
  if (argv.all) {
    await buildAll()
  } else if (argv.project) {
    await buildPackage(argv.project as string);
  }
})();
