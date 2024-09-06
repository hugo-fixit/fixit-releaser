# FixIt Releaser

Automatically update FixIt internal version number and generate changelog.

## Installation

```bash
npm install fixit-releaser --save-dev
```

## Configuration

Add the following to `package.json` of FixIt project.

```json
{
  "scripts": {
    "version": "fixit-releaser version --prod",
    "release": "fixit-releaser changelog"
  }
}
```

## Usage

```bash
npx fixit-releaser version --prod
# Update the FixIt version from v0.3.12-1ca9fdb7 to v0.3.12.
npx fixit-releaser version --dev
# Update the FixIt version from v0.3.12-1ca9fdb7 to v0.3.12-2ca9fdb7.
npx fixit-releaser changelog --starting-version v0.3.10
# auto-changelog: 6 kB written to CHANGELOG.md
```
