# FixIt Releaser

Versioning, change-log and release for Hugo FixIt Similar commit style.

## Features

- Update FixIt internal version number. (**[FixIt](https://github.com/hugo-fixit/FixIt) Only**)
- Generate changelog. (General)

## Installation

```bash
npm install @hugo-fixit/fixit-releaser --save-dev
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
