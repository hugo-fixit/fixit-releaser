#!/usr/bin/env node

import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const args = process.argv.slice(2)
const __root = join(dirname(fileURLToPath(import.meta.url)), '../')

if (args.length === 0) {
  console.error('Please provide a command: version or changelog, e.g. fixit-releaser version --dev')
  process.exit(1)
}

const command = args[0]

if (command === 'version') {
  const stage = args[1]
  const updateVersionPath = join(__root, 'scripts/update-version.js')
  if (stage === '--dev') {
    execSync(`node ${updateVersionPath} --dev`, { stdio: 'inherit' })
  } else if (stage === '--prod') {
    execSync(`node ${updateVersionPath} --prod`, { stdio: 'inherit' })
  } else {
    console.error('Invalid argument. Use --dev or --prod')
    process.exit(1)
  }
} else if (command === 'changelog') {
  const changelogArgs = args.slice(1).join(' ')
  const configPath = join(__root, 'changelog/config.json')
  const templatePath = join(__root, 'changelog/template.hbs')
  const setupPath = join(__root, 'changelog/setup.cjs')

  execSync(
    `auto-changelog --config ${configPath} --template ${templatePath} --handlebars-setup ${setupPath} ${changelogArgs}`,
    { stdio: 'inherit' },
  )
} else {
  console.error('Invalid command. Use version or changelog')
  process.exit(1)
}
