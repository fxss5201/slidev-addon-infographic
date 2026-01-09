# slidev-addon-infographic

[@antv/infographic](https://infographic.antv.vision/) component for slidev

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

- **Infographic component must be used with RenderWhen component to show infographic in slidev**
- **Temporarily supports exporting in PPTX and PNG formats**

1. **Infographic组件必须与RenderWhen组件一起使用，才能在幻灯片中显示信息图**
2. **暂时支持导出 PPTX, PNG 格式**

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).
