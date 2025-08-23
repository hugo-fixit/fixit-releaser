# FixIt Releaser

[![NPM version](https://img.shields.io/npm/v/@hugo-fixit/fixit-releaser.svg)](https://www.npmjs.com/package/@hugo-fixit/fixit-releaser)

English | [中文](/README.md)

Versioning, change-log and release tool that supports Conventional Commits specification.

## Features

- Update FixIt internal version number. (**[FixIt](https://github.com/hugo-fixit/FixIt) Only**)
- Automatically generate changelog based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification
  - `feat:` New features
  - `fix:` Bug fixes
  - `docs:` Documentation changes
  - `style:` Code formatting
  - `refactor:` Code refactoring
  - `perf:` Performance optimization
  - `test:` Test related
  - `chore:` Build process or auxiliary tool changes
  - Scope support: `feat(api):`, `fix(ui):`, etc.
  - Emoji support: `:sparkles: feat:`, `✨ feat:`, etc.
  - Breaking Changes support: `feat!:`, `feat(scope)!:`, `BREAKING CHANGE:`, etc.

## Installation

| Package Manager | Command                                  |
| --------------- | ---------------------------------------- |
| pnpm            | `pnpm add -D @hugo-fixit/fixit-releaser` |
| yarn            | `yarn add -D @hugo-fixit/fixit-releaser` |
| npm             | `npm i -D @hugo-fixit/fixit-releaser`    |

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

> The `fixit-releaser changelog` configuration is compatible with auto-changelog.

## Usage

### Version

Update the FixIt version from v0.3.12-1ca9fdb7 to v0.3.12.

```bash
npx fixit-releaser version --prod
```

Update the FixIt version from v0.3.12-1ca9fdb7 to v0.3.12-2ca9fdb7.

```bash
npx fixit-releaser version --dev
```

### Changelog

Generate the changelog from v0.3.10.

```bash
npx fixit-releaser changelog --starting-version v0.3.10
# auto-changelog: 6 kB written to CHANGELOG.md
```

See more usage in [auto-changelog](https://github.com/cookpete/auto-changelog).

## Acknowledgments

The changelog generation functionality of this project is powered by [auto-changelog](https://github.com/cookpete/auto-changelog).
