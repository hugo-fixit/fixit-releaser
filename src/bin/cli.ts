#!/usr/bin/env node
import { execSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { run } from 'auto-changelog/src/run.js'

const args: string[] = process.argv.slice(2)
const __root: string = join(dirname(fileURLToPath(import.meta.url)), '../..')

if (args.length === 0) {
  console.error('Please provide a command: version or changelog, e.g. fixit-releaser version --dev')
  process.exit(1)
}

const command: string = args[0]

if (command === 'version') {
  const stage: string = args[1]
  const updateVersionPath: string = join(__root, './dist/scripts/update-version.js')
  if (stage === '--dev') {
    execSync(`node ${updateVersionPath} --dev`, { stdio: 'inherit' })
  }
  else if (stage === '--prod') {
    execSync(`node ${updateVersionPath} --prod`, { stdio: 'inherit' })
  }
  else {
    console.error('Invalid argument. Use --dev or --prod')
    process.exit(1)
  }
}
else if (command === 'changelog') {
  const configPath: string = join(__root, 'changelog/config.json')
  const templatePath: string = join(__root, 'changelog/template.hbs')
  const setupPath: string = join(__root, 'changelog/setup.cjs')
  const changelogArgs: string[] = process.argv
  changelogArgs.splice(2, 1)
  if (!changelogArgs.includes('--config')) {
    changelogArgs.push('--config', configPath)
  }
  if (!changelogArgs.includes('--template')) {
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
