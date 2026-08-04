# Repository Introduction / 仓库介绍

## English

CZUI — a tiny, zero-dependency browser UI utility. It provides lightweight modal dialogs (alert, confirm, input) and helpers to create styled buttons and inputs. CZUI is distributed as a single UMD file (CZUI.js) that injects its CSS at runtime, so it can be used by simply including the script in a web page.

Highlights:
- Zero external dependencies — works with plain DOM APIs.
- Single-file UMD build for drop-in usage.
- Simple API returning Promises for modal interactions.

Quick usage:

```html
<script src="CZUI.js"></script>
<script>
  CZUI.alert('Notice', 'This is a simple alert.');
</script>
```

## 中文

CZUI — 一个极小且无任何外部依赖的浏览器端 UI 工具库。提供轻量的模态弹窗（alert、confirm、input）以及生成样式化按钮与输入框的辅助函数。CZUI 以单文件 UMD（CZUI.js）发布，会在运行时自动注入所需的 CSS，因此只需在页面中引入脚本即可使用。

特点：
- 零依赖，直接使用原生 DOM API。 
- 单文件构建，直接引入即可使用。 
- 弹窗 API 返回 Promise，便于处理用户交互。

快速使用：

```html
<script src="CZUI.js"></script>
<script>
  CZUI.alert('提示', '这是一个简单的提示框');
</script>
```
