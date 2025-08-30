# FixIt Releaser

[![NPM version](https://img.shields.io/npm/v/@hugo-fixit/fixit-releaser.svg)](https://www.npmjs.com/package/@hugo-fixit/fixit-releaser)

中文 | [English](/README.en.md)

版本控制、变更日志和发布工具。

> [!CAUTION]
> 该工具已停止维护！建议使用 [auto-changelog](https://github.com/Lruihao/auto-changelog)。

## ✨ 功能

- 📝 自动生成变更日志（Conventional Commits 规范）
- 🔖 更新 FixIt 内部版本号 `*`

## 📦 安装

| 包管理器 | 命令                                      |
| -------- | ----------------------------------------- |
| pnpm     | `pnpm add -D @hugo-fixit/fixit-releaser`  |
| yarn     | `yarn add -D @hugo-fixit/fixit-releaser`  |
| npm      | `npm i -D @hugo-fixit/fixit-releaser`     |

在 `package.json` 中添加命令：

```json
{
  "scripts": {
    "version": "fixit-releaser changelog -p && git add CHANGELOG.md"
  }
}
```

## 🚀 用法

### 变更日志

基于 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范，支持以下类型的提交：

- `feat:` 新功能
- `fix:` 修复问题
- `perf:` 性能优化
- `refactor:` 代码重构
- `docs:` 文档变更
- `test:` 测试相关
- `style:` 代码格式调整
- `chore:` 构建过程或辅助工具的变动
- `build:` 构建系统变动
- `ci:` 持续集成配置变动
- `revert:` 代码回滚
- 支持 scope：`feat(api):`, `fix(ui):` 等
- 支持 emoji：`:sparkles: feat:`, `✨ feat:` 等
- 支持 Breaking Changes：`feat!:`, `feat(scope)!:`, `BREAKING CHANGE:` 等格式
- 自动忽略 WIP 提交：`wip:`, `Wip:` 等临时提交不会包含在变更日志中

例如：

```bash
# 生成全部版本的变更日志
npx fixit-releaser changelog
# 从指定版本开始生成变更日志
npx fixit-releaser changelog --starting-version v0.3.10
```

> 执行 `fixit-releaser changelog -h` 获取帮助或者参考 [auto-changelog](https://github.com/cookpete/auto-changelog) 文档。

### 版本 `*`

> [!WARNING]
> 已经集成到 [FixIt](https://github.com/hugo-fixit/FixIt) monorepo，见 [FixIt#629](https://github.com/hugo-fixit/FixIt/pull/629)

FixIt 内部开发版本格式如下：

```plaintext
v{major}.{minor}.{patch+1}-{timestamp}-{shortHash}
```

例如：

```bash
# 更新 FixIt 正式版本
npx fixit-releaser version prod
# 更新 FixIt 开发版本
npx fixit-releaser version dev
```

## ⚙️ 配置

`fixit-releaser changelog` 配置与 auto-changelog 兼容。

## 🙏 致谢

- [auto-changelog](https://github.com/cookpete/auto-changelog)
