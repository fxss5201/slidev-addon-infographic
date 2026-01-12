---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: slidev-addon-infographic
info: |
  ## slidev-addon-infographic

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
---

# slidev-addon-infographic

[@antv/infographic](https://infographic.antv.vision/) component for slidev

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/fxss5201/slidev-addon-infographic" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

---
title: 图表型 - chart-bar-plain-text
transition: fade-out
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic chart-bar-plain-text
data
  title 年度营收增长
  desc 展示近三年及本年目标营收对比（单位：亿元）
  items
    - label 2021年
      value 120
      desc 转型初期，稳步试水
      icon lucide/sprout
    - label 2022年
      value 150
      desc 平台优化，效率显著提升
      icon lucide/zap
    - label 2023年
      value 190
      desc 深化数智融合，全面增长
      icon lucide/brain-circuit
    - label 2024年
      value 240
      desc 拓展生态协同，冲击新高
      icon lucide/trophy
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
图表型 [chart-bar-plain-text](https://infographic.antv.vision/gallery/example?template=chart-bar-plain-text)
-->

---
title: 图表型 - chart-column-simple
transition: fade-out
clicks: 3
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="width: 68%;height: 100%;margin: 0 auto;">
  <Infographic click :data="`infographic chart-column-simple
data
  title 年度营收增长
  desc 展示近三年及本年目标营收对比（单位：亿元）
  items
    - label 2021年
      value 120
      desc 转型初期，稳步试水
      icon lucide/sprout
    - label 2022年
      value 150
      desc 平台优化，效率显著提升
      icon lucide/zap
    - label 2023年
      value 190
      desc 深化数智融合，全面增长
      icon lucide/brain-circuit
    - label 2024年
      value 240
      desc 拓展生态协同，冲击新高
      icon lucide/trophy
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
图表型 [chart-column-simple](https://infographic.antv.vision/gallery/example?template=chart-column-simple)
-->

---
title: 图表型 - chart-line-plain-text
transition: fade-out
clicks: 3
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 80%;margin: 50px auto;">
  <Infographic click :data="`infographic chart-line-plain-text
data
  title 年度营收增长
  desc 展示近三年及本年目标营收对比（单位：亿元）
  items
    - label 2021年
      value 120
      desc 转型初期，稳步试水
      icon lucide/sprout
    - label 2022年
      value 150
      desc 平台优化，效率显著提升
      icon lucide/zap
    - label 2023年
      value 190
      desc 深化数智融合，全面增长
      icon lucide/brain-circuit
    - label 2024年
      value 240
      desc 拓展生态协同，冲击新高
      icon lucide/trophy
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
图表型 [chart-line-plain-text](https://infographic.antv.vision/gallery/example?template=chart-line-plain-text)
-->

---
title: 图表型 - chart-pie-compact-card
transition: fade-out
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic chart-pie-compact-card
data
  title 年度营收增长
  desc 展示近三年及本年目标营收对比（单位：亿元）
  items
    - label 2021年
      value 120
      desc 转型初期，稳步试水
      icon lucide/sprout
    - label 2022年
      value 150
      desc 平台优化，效率显著提升
      icon lucide/zap
    - label 2023年
      value 190
      desc 深化数智融合，全面增长
      icon lucide/brain-circuit
    - label 2024年
      value 240
      desc 拓展生态协同，冲击新高
      icon lucide/trophy
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
图表型 [chart-pie-compact-card](https://infographic.antv.vision/gallery/example?template=chart-pie-compact-card)
-->

---
title: 图表型 - chart-pie-donut-compact-card
transition: fade-out
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic chart-pie-donut-compact-card
data
  title 年度营收增长
  desc 展示近三年及本年目标营收对比（单位：亿元）
  items
    - label 2021年
      value 120
      desc 转型初期，稳步试水
      icon lucide/sprout
    - label 2022年
      value 150
      desc 平台优化，效率显著提升
      icon lucide/zap
    - label 2023年
      value 190
      desc 深化数智融合，全面增长
      icon lucide/brain-circuit
    - label 2024年
      value 240
      desc 拓展生态协同，冲击新高
      icon lucide/trophy
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
图表型 [chart-pie-donut-compact-card](https://infographic.antv.vision/gallery/example?template=chart-pie-donut-compact-card)
-->

---
title: 图表型 - chart-wordcloud
transition: fade-out
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic chart-wordcloud
data
  items
    - label 数据分析
      value 100
    - label 人工智能
      value 96
    - label 数据可视化
      value 92
    - label 大数据
      value 90
    - label 机器学习
      value 88
    - label 深度学习
      value 84
    - label 数据工程
      value 82
    - label 数据仓库
      value 80
    - label 数据挖掘
      value 78
    - label 商业智能
      value 76
    - label 统计学
      value 74
    - label 预测分析
      value 72
    - label 特征工程
      value 70
    - label 模型训练
      value 69
    - label 模型评估
      value 68
    - label 模型部署
      value 67
    - label MLOps
      value 66
    - label A/B测试
      value 65
    - label 因果推断
      value 64
    - label 实验平台
      value 63
    - label 推荐系统
      value 62
    - label 搜索排序
      value 61
    - label 用户画像
      value 60
    - label 实时计算
      value 59
    - label 离线计算
      value 58
    - label 流式处理
      value 57
    - label 批处理
      value 56
    - label ETL
      value 55
    - label ELT
      value 54
    - label 数据治理
      value 53
    - label 数据质量
      value 52
    - label 数据血缘
      value 51
    - label 元数据管理
      value 50
    - label 指标体系
      value 49
    - label 指标平台
      value 48
    - label 埋点分析
      value 47
    - label 日志分析
      value 46
    - label 漏斗分析
      value 45
    - label 留存分析
      value 44
    - label 增长分析
      value 43
    - label 用户行为
      value 42
    - label 客户分群
      value 41
    - label 数据建模
      value 40
    - label 维度建模
      value 39
    - label 星型模型
      value 38
    - label 雪花模型
      value 37
    - label 湖仓一体
      value 36
    - label 数据湖
      value 35
    - label OLAP
      value 34
    - label OLTP
      value 33
    - label SQL
      value 32
    - label NoSQL
      value 31
    - label 图数据库
      value 30
    - label 向量数据库
      value 29
    - label 分布式系统
      value 28
    - label 并行计算
      value 27
    - label 容器化
      value 26
    - label 微服务
      value 25
    - label 云原生
      value 24
    - label 数据安全
      value 23
    - label 权限管理
      value 22
    - label 隐私计算
      value 21
    - label 差分隐私
      value 20
    - label 联邦学习
      value 19
    - label 风控模型
      value 18
    - label 异常检测
      value 17
    - label 反欺诈
      value 16
    - label 知识图谱
      value 15
    - label 自然语言处理
      value 14
    - label 计算机视觉
      value 13
    - label 文本分类
      value 12
    - label 情感分析
      value 11
    - label 实体识别
      value 10
    - label 关系抽取
      value 9
    - label 对话系统
      value 8
    - label 提示工程
      value 7
    - label 大模型
      value 6
    - label 向量检索
      value 5
    - label RAG
      value 4
    - label 数据标注
      value 3
    - label 监控告警
      value 22
    - label 可观测性
      value 24
    - label 性能优化
      value 26
    - label 成本优化
      value 28
    - label 任务调度
      value 30
    - label 工作流编排
      value 32
    - label 容灾备份
      value 34
    - label 高可用
      value 36
    - label 可扩展性
      value 38
    - label 数据产品
      value 40
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
图表型 [chart-wordcloud](https://infographic.antv.vision/gallery/example?template=chart-wordcloud)
-->

---
title: 对比型 - compare-binary-horizontal-badge-card-arrow
transition: fade-out
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic compare-binary-horizontal-badge-card-arrow
data
  title 企业优劣势对比
  desc 呈现企业当前在市场中的核心优势与待改善劣势
  items
    - label 优势
      children
        - label 产品研发强
          desc 技术领先，具备自主创新能力
        - label 客户粘性高
          desc 用户复购率超60%，口碑良好
        - label 服务体系完善
          desc 售后服务响应快，客户满意度高
    - label 劣势
      children
        - label 品牌曝光弱
          desc 市场宣传不足，认知度待提升
        - label 渠道覆盖窄
          desc 线上渠道布局不全，触达受限
        - label 运营成本高
          desc 人力与物流成本高于行业均值
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
对比型 [compare-binary-horizontal-badge-card-arrow](https://infographic.antv.vision/gallery/example?template=compare-binary-horizontal-badge-card-arrow)
-->

---
title: 对比型 - compare-hierarchy-left-right-circle-node-pill-badge
transition: fade-out
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic compare-hierarchy-left-right-circle-node-pill-badge
data
  title 竞品分析
  desc 通过对比分析，找出差距，明确改进方向
  items
    - label 产品分析
      children
        - label 架构升级
          desc 品牌营销策略就是以品牌输出为核心的营销策略
        - label 架构升级
          desc 品牌营销策略就是以品牌输出为核心的营销策略
        - label 架构升级
          desc 品牌营销策略就是以品牌输出为核心的营销策略
    - label 竞品分析
      children
        - label 架构升级
          desc 品牌营销策略就是以品牌输出为核心的营销策略
        - label 架构升级
          desc 品牌营销策略就是以品牌输出为核心的营销策略
        - label 架构升级
          desc 品牌营销策略就是以品牌输出为核心的营销策略
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
对比型 [compare-hierarchy-left-right-circle-node-pill-badge](https://infographic.antv.vision/gallery/example?template=compare-hierarchy-left-right-circle-node-pill-badge)
-->

---
title: 对比型 - compare-swot
transition: fade-out
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic compare-swot
data
  title SWOT分析
  desc 通过全面分析内外部因素，指导企业战略制定与调整
  items
    - label Strengths
      children
        - label 领先的技术研发能力
        - label 完善的供应链体系
        - label 高效的客户服务机制
        - label 成熟的管理团队
        - label 良好的用户口碑
        - label 稳定的产品质量
    - label Weaknesses
      children
        - label 品牌曝光度不足
        - label 产品线更新缓慢
        - label 市场渠道单一
        - label 运营成本较高
        - label 组织决策效率偏低
        - label 用户增长放缓
    - label Opportunities
      children
        - label 数字化转型趋势加速
        - label 新兴市场持续扩展
        - label 政策利好推动行业发展
        - label 智能化应用场景增加
        - label 跨界合作机会增多
        - label 用户消费升级趋势
    - label Threats
      children
        - label 行业竞争日益激烈
        - label 用户需求快速变化
        - label 市场进入门槛降低
        - label 供应链风险上升
        - label 数据与安全挑战加剧
        - label 宏观经济不确定性
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
对比型 [compare-swot](https://infographic.antv.vision/gallery/example?template=compare-swot)
-->

---
title: 层级型 - hierarchy-mindmap-branch-gradient-circle-progress
transition: fade-out
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic hierarchy-mindmap-branch-gradient-circle-progress
data
  title 用户调研
  desc 通过用户调研，了解用户需求和痛点，指导产品设计和优化
  items
    - label 用户调研
      value 100
      icon mingcute/user-question-line
      children
        - label 用户为什么要使用某个音乐平台
          value 80
          icon mingcute/music-2-ai-line
          children
            - label 用户从哪些渠道了解到这个平台
              value 70
              icon mingcute/ad-circle-line
            - label 这个平台是哪些方面吸引了用户
              value 65
              icon mingcute/mushroom-line
        - label 用户在什么场景下使用这个平台
          value 75
          icon mingcute/time-line
          children
            - label 用户从什么事件什么场景下使用
              value 60
              icon mingcute/calendar-time-add-line
            - label 用户在某个场景下用到哪些功能
              value 55
              icon mingcute/danmaku-line
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
层级型 [hierarchy-mindmap-branch-gradient-circle-progress](https://infographic.antv.vision/gallery/example?template=hierarchy-mindmap-branch-gradient-circle-progress)
-->

---
title: 层级型 - hierarchy-structure
transition: fade-out
---

<RenderWhen
  :context="['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']"
  style="height: 100%;">
  <Infographic :data="`infographic hierarchy-structure
data
  title 系统分层结构
  desc 展示不同层级的模块与功能分组
  items
    - label 展现层
      children
        - label 小程序
        - label APP
        - label PAD
        - label 客户端
        - label WEB
    - label 应用层
      children
        - label 核心模块
          children
            - label 功能1
            - label 功能2
            - label 功能3
            - label 功能4
            - label 功能5
            - label 功能6
        - label 基础模块
          children
            - label 功能1
            - label 功能2
            - label 功能3
            - label 功能4
            - label 功能5
            - label 功能6
        - label 其他模块
          children
            - label 功能1
            - label 功能2
            - label 功能3
            - label 功能4
            - label 功能5
            - label 功能6
    - label 平台层
      children
        - label 模块1
          children
            - label 功能1
            - label 功能2
            - label 功能3
            - label 功能4
        - label 模块2
          children
            - label 功能1
            - label 功能2
            - label 功能3
            - label 功能4
        - label 模块3
          children
            - label 功能1
            - label 功能2
            - label 功能3
            - label 功能4
theme light
  palette antv
  `"></Infographic>
</RenderWhen>

<!--
层级型 [hierarchy-structure](https://infographic.antv.vision/gallery/example?template=hierarchy-structure)
-->
