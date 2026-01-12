# slidev-addon-infographic

[@antv/infographic](https://infographic.antv.vision/) component for slidev

## Usage Process

``` sh
pnpm i slidev-addon-infographic --save
```

Add the following to your `package.json`:

``` json
...
  "slidev": {
    "addons": [
      "slidev-addon-infographic"
    ]
  }
...
```

Add the following to your `slides.md`:

``` md
---
addons:
  - slidev-addon-infographic
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic list-row-simple-horizontal-arrow
    data
      items
        - label 步骤 1
          desc 开始
        - label 步骤 2
          desc 进行中
        - label 步骤 3
          desc 完成
    `"></Infographic>
</RenderWhen>
```

[RenderWhen](https://sli.dev/builtin/components#renderwhen)

- **Infographic component must be used with RenderWhen component to show infographic in slidev.**
- **If you want to export PDF format, please remove `visible` in `RenderWhen` component's `context` attribute.**

1. **Infographic组件必须与RenderWhen组件一起使用，才能在幻灯片中显示信息图。**
2. **如需导出 PDF 格式，请将 `RenderWhen` 组件的 `context` 属性中的 `visible` 去除。**

## Parameter Description

| Parameter | Description | Type | Default | Version |
| --------- | ----------- | ---- | ------- | ------- |
| data | Infographic data | string | - | 1.0.0 |
| click | Whether to respond to [Slidev click animation](https://sli.dev/guide/animations#click-animation), If set to `true`, you need to add a [`clicks`](https://sli.dev/guide/animations#total) field in the `frontmatter` with the value being the number of clicks. | boolean | false | 1.0.4 |

- **Note: `click` is primarily used for demonstrating effects, and it is recommended to turn it off when exporting.**
- **Note: After setting `click` to `true` and adding the `clicks` count, you need to click yourself to confirm the effect.**

| 参数 | 描述 | 类型 | 默认值 | 版本 |
| ---- | ---- | ---- | ------ | ---- |
| data | 信息图数据 | string | - | 1.0.0 |
| click | 是否响应[Slidev点击动画](https://cn.sli.dev/guide/animations#click-animation)，如果设置为 `true`，需要在 `frontmatter` 中添加 [`clicks`](https://cn.sli.dev/guide/animations#total) 字段，值为点击次数。 | boolean | false | 1.0.4 |

1. **注意：`click` 主要用于演示效果，导出时建议关闭。**
2. **注意：设置 `click` 为 `true` 后，并添加 `clicks` 点击次数之后的效果需要自行点击确认。**

## Slidev

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).
