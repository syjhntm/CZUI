# CZUI

[English](#english) | [中文](#中文)

---

## What is CZUI

CZUI is a tiny, zero-dependency browser UI utility that provides simple modal dialogs (alert / confirm / input) and helpers to create styled buttons and inputs. It is distributed as a single UMD file (CZUI.js) that injects its own CSS into the page at runtime.

This repository contains the build artifact (CZUI.js) and usage documentation.

---

## Table of contents

- [What is CZUI](#what-is-czui)
- [Installation](#installation)
- [Quick start](#quick-start)
- [API](#api)
- [Styles & Customization](#styles--customization)
- [Browser compatibility](#browser-compatibility)
- [License](#license)

---

## Installation

### Browser (direct script include)

Include the file in a page and call the global `CZUI` object:

```html
<script src="CZUI.js"></script>
<script>
  CZUI.alert('Saved', 'Your data was saved successfully.');
</script>
```

If you publish to a CDN or include from a different path, update the `src` accordingly.

### npm (package name in this repo)

This repository contains a `package.json` with `name: big-sb-czui`. If you published the package to npm, you could install it with:

```bash
npm install big-sb-czui
```

Note: This repo currently contains the single-file build (CZUI.js). If you want a library source tree (src/, build scripts, tests), see the "Improvements" section below or request that I add a build setup.

---

## Quick start

```html
<script src="CZUI.js"></script>
<script>
  // Alert
  CZUI.alert('Notice', 'This is a simple alert.');

  // Confirm
  CZUI.confirm('Delete', 'Are you sure you want to delete this item?').then(({ confirm }) => {
    if (confirm) console.log('Confirmed');
  });

  // Input
  CZUI.input('Rename', 'Enter a new name', { placeholder: 'Name' }).then(({ confirm, value }) => {
    if (confirm) console.log('New value:', value);
  });

  // Create a styled button and attach to DOM
  const btn = CZUI.createButton({ text: 'Submit', primary: true, onClick: () => alert('clicked') });
  document.body.appendChild(btn);

  // Create a styled input element
  const inputEl = CZUI.createInput({ placeholder: 'Type here' });
  document.body.appendChild(inputEl);
</script>
```

---

## API

All functions return values described below. The library is synchronous where creating DOM elements; modal helpers return Promises for user interaction.

### CZUI.alert(title, text, options)

Show a simple modal with a single confirmation button.

- title: string — modal title
- text: string — modal message
- options.confirmText?: string — text for the confirm button (default: "OK")
- options.tm?: number — auto-close timeout in milliseconds (optional)

Returns: Promise that resolves when the user confirms or the modal auto-closes.

### CZUI.confirm(title, text, options)

Show a modal with Cancel and Confirm buttons.

- options.cancelText?: string — cancel button text
- options.confirmText?: string — confirm button text
- options.tm?: number — auto-close timeout

Returns: Promise<{ confirm: boolean }>

### CZUI.input(title, text, options)

Show a modal with an input field plus Cancel and Submit buttons.

- options.inputVal?: string — initial input value
- options.placeholder?: string — input placeholder
- options.confirmText?: string — submit button text
- options.cancelText?: string — cancel button text
- options.tm?: number — auto-close timeout

Returns: Promise<{ confirm: boolean, value: string }>

### CZUI.cl()

Closes the currently open modal (if any).

Returns: true

### CZUI.createButton(options)

Create a styled `<button>` element.

Options:
- text?: string
- type?: string
- primary?: boolean — adds primary style
- accent?: boolean — adds accent style
- disabled?: boolean
- style?: object — inline styles
- onClick?: function

Returns: HTMLButtonElement

### CZUI.createInput(options)

Create a styled `<input>` element.

Options:
- type?: string
- placeholder?: string
- value?: string
- disabled?: boolean
- style?: object
- onInput?: function

Returns: HTMLInputElement

---

## Styles & customization

CZUI injects its CSS into the document head on first use. All classes are prefixed with `czui-` or `a-` in the shipped build. To customize styles you can:

1. Override CSS classes in your stylesheet. Example:

```css
.czui-btn--primary { background: #007bff; }
```

2. Apply inline styles to elements created via `createButton` / `createInput` using the `style` option.

---

## Browser compatibility

Designed for modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

Not tested in IE. The code uses standard DOM APIs and a UMD wrapper.

---

## License

MIT

---

## Improvements & notes

- This repo currently contains a single-file UMD build (CZUI.js). If you want a development setup (source files, build scripts, ESM/CJS outputs, types, tests, CI), I can add a project layout with rollup/webpack and a `package.json` configured for publishing.

---

## ENGLISH

<a name="english"></a>

# CZUI

CZUI is a tiny, zero-dependency browser UI utility providing simple modal dialogs (alert / confirm / input) and helper functions to create styled buttons and inputs. It ships as a single UMD file (CZUI.js) and injects the necessary CSS automatically when used.

### Quick usage

Include `CZUI.js` in your page and use the global `CZUI` object (see the Quick start section above for full examples).

### API

Same as described above in the main (Chinese) section — the function names and parameters are identical.

---

## 中文

<a name="中文"></a>

# CZUI

CZUI 是一个极小、无依赖的浏览器端 UI 库，提供基本的模态弹窗（alert / confirm / input）以及生成样式化按钮和输入框的辅助函数。以单文件 UMD（CZUI.js）发布，首次调用时会自动注入样式。

### 快速使用

在页面中引入 `CZUI.js`，使用全局对象 `CZUI`（示例见上文）。

### API

与上文英文部分一致。
