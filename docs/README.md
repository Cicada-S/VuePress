# Hello VuePress


| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |


**这是粗体文本**

*这是斜体文本*

~~这是错误文本~~

**此文本 _非常_ 重要**

<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)  
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com) 

VuePress 2 已经发布 :tada: ！ :two_hearts:


## 二级标题

### 三级标题

[[toc]]


```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

```ts:no-line-numbers
// 禁用行号
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```


```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

<!-- 最简单的语法 -->
@[code](./.vuepress/config.ts)

<!-- 仅导入第 1 行至第 10 行 -->
@[code{1-10}](./.vuepress/config.ts)

<!-- 指定代码语言 -->
@[code ts](./.vuepress/config.ts)

<!-- 行高亮 -->
@[code js{2,4-5}](./.vuepress/config.ts)

<!-- 复杂的例子 -->
@[code{3-10} js{3}:no-line-numbers](./.vuepress/config.ts)

<!-- 路径别名 -->
@[code](@vuepress/config.ts)



一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>


这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />


::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::


::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::


:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::


- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />


<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>


![](/user.jpg)


<img :src="$withBase('/user.jpg')" alt="VuePress Logo">




