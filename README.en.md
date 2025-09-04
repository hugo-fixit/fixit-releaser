# FixIt Releaser

[![NPM version](https://img.shields.io/npm/v/@hugo-fixit/fixit-releaser.svg)](https://www.npmjs.com/package/@hugo-fixit/fixit-releaser)

English | [中文](/README.md)

Versioning, change-log and release tool.

> [!CAUTION]
> Maintenance of this tool has stopped! It is recommended to use [auto changelog plus](https://github.com/Lruihao/auto-changelog-plus) or [auto changelog](https://github.com/cookpete/auto-changelog) to generate changelogs.

## ✨ Features

- 📝 Automatically generate changelog (Conventional Commits specification)
- 🔖 Update FixIt internal version number `*`

> Features marked with `*` are only applicable to [FixIt](https://github.com/hugo-fixit/FixIt).

## 📦 Installation

| Package Manager | Command                                  |
| --------------- | ---------------------------------------- |
| pnpm            | `pnpm add -D @hugo-fixit/fixit-releaser` |
| yarn            | `yarn add -D @hugo-fixit/fixit-releaser` |
| npm             | `npm i -D @hugo-fixit/fixit-releaser`    |

Add commands to `package.json`:

```json
{
  "scripts": {
    "version": "fixit-releaser changelog -p && git add CHANGELOG.md"
  }
}
```

## 🚀 Usage

### Changelog

Based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification, supports the following commit types:

- `feat:` New features
- `fix:` Bug fixes
- `perf:` Performance optimization
- `refactor:` Code refactoring
- `docs:` Documentation changes
- `test:` Test related
- `style:` Code formatting
- `chore:` Build process or auxiliary tool changes
- `build:` Build system changes
- `ci:` Continuous integration configuration changes
- `revert:` Code rollback
- Scope support: `feat(api):`, `fix(ui):`, etc.
- Emoji support: `:sparkles: feat:`, `✨ feat:`, etc.
- Breaking Changes support: `feat!:`, `feat(scope)!:`, `BREAKING CHANGE:`, etc.
- Automatically ignore WIP commits: `wip:`, `Wip:` and other temporary commits are excluded from changelog

For example:

```bash
# Generate changelog for all versions
npx fixit-releaser changelog
# Generate changelog from specified version
npx fixit-releaser changelog --starting-version v0.3.10
```

> Execute `fixit-releaser changelog -h` to get help or refer to the [auto-changelog](https://github.com/cookpete/auto-changelog) documentation.

### Version `*`

> [!WARNING]
> Already integrated into [FixIt](https://github.com/hugo-fixit/FixIt) monorepo， See [FixIt#629](https://github.com/hugo-fixit/FixIt/pull/629)

FixIt internal development version format:

```plaintext
v{major}.{minor}.{patch+1}-{timestamp}-{shortHash}
```

For example:

```bash
# Update FixIt production version
npx fixit-releaser version prod
# Update FixIt development version
npx fixit-releaser version dev
```

## ⚙️ Configuration

The `fixit-releaser changelog` configuration is compatible with auto-changelog.

## 🙏 Acknowledgments

- [auto-changelog](https://github.com/cookpete/auto-changelog)
