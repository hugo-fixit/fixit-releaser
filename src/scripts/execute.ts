import { dirname, join } from 'node:path'
import process from 'node:process'
import { run } from 'auto-changelog/src/run.js'
import { updateVersion } from './update-version.js'

const args: string[] = process.argv.slice(2)
const __root: string = dirname(process.argv[1])

export function execute() {
  if (args.length === 0) {
    console.error('Please provide a command: version or changelog, e.g. fixit-releaser version --dev')
    process.exit(1)
  }

  const command: string = args[0]

  if (command === 'version') {
    const type: string = args[1]
    if (type !== 'dev' && type !== 'prod') {
      console.error('Invalid argument. Use dev or prod')
      process.exit(1)
    }
    updateVersion(type)
  }
  else if (command === 'changelog') {
    const configPath: string = join(__root, 'changelog/config.json')
    const templatePath: string = join(__root, 'changelog/conventional.hbs')
    const setupPath: string = join(__root, 'changelog/setup.cjs')
    const changelogArgs: string[] = process.argv
    changelogArgs.splice(2, 1)
    if (!changelogArgs.includes('--config') && !changelogArgs.includes('-c')) {
      changelogArgs.push('--config', configPath)
    }
    if (!changelogArgs.includes('--template') && !changelogArgs.includes('-t')) {
      changelogArgs.push('--template', templatePath)
    }
    if (!changelogArgs.includes('--handlebars-setup')) {
      changelogArgs.push('--handlebars-setup', setupPath)
    }
    // run auto-changelog
    run(changelogArgs).catch((error) => {
      console.log('\n')
      console.error(error)
      process.exit(1)
    })
  }
  else {
    console.error('Invalid command. Use version or changelog')
    process.exit(1)
  }
}
