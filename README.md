# 1. vscode prettier 配置

首先要确保`vscode`安装了 `ESLint` 和 `Prettier` 的插件，这样才可以在编辑器中规范你的代码。

## 更改 VSC 配置

```
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```

那怎么进行格式化呢？ 使用 `shift + option + f` 快捷键就可以愉快的格式化代码啦。

# 2. 使用 prettier

```
yarn add -D eslint eslint-loader babel-eslint

yarn add -D prettier eslint-plugin-prettier eslint-config-prettier

yarn add -D eslint-plugin-react
```

`eslint-plugin-prettier` 使用 Prettier 格式化代码
`eslint-config-prettier` 关闭 ESLint 与 Prettier 冲突的配置项

# 3. 编写配置文件

默认情况下，`Prettier` 会寻找项目根目录下的 `.prettierrc` 文件，如果没有，会使用 VSC 配置中的[默认配置](https://prettier.io/docs/en/options.html)（当然，你也可以更改这个配置，但不建议，最好都在 `.prettierrc` 文件中配置）。

Prettier 不像 ESLint， Prettier 的配置项很少，我们常用的也就 3、4 个。

添加 .prettierrc

```
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

添加 .eslintrc

```
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-console": "warn",
    "no-debugger": "warn"
  }
}
```

`"plugins"` 插件需要在`node_module`中下载，注意插件名忽略了`「eslint-plugin-」`前缀，所以在`package.json`中，对应的项目名是`「eslint-plugin-vue」`；插件的作用类似于解析器，用以扩展解析器的功能，用于检测非常规的 js 代码，也可能会新增一些特定的规则。

如 `eslint-plugin-vue`，是为了帮助我们检测.vue 文件中 <template> 和 <script> 中的 js 代码，[引用自这里](https://blog.csdn.net/q3254421/article/details/86477502)

这时可能需要重启一下 vsc，`shift + cmd + p` 选择 reload window，之后，报错什么的就都正常啦。

还可以添加 `ignore` 文件：

.eslintignore

```
/coverage
/dist
/build
/node_modules
/test/fixtures
CHANGELOG.md
```

.prettierignore

```
/coverage
/dist
/build
/node_modules
/test/fixtures
CHANGELOG.md
```

如果想让编辑器报错，一定要安装完整上面的依赖，否则编辑器的 ESLint 插件就会报错。

## 使用 CLI 更改代码

`prettier --write` 可以格式化代码，建议 `*.less *.jsx *.js` 格式化

script 代码为：

```
"lint-fix": "prettier --write 'src/**/*.{js,jsx,less}'",
```
