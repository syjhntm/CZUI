# CZUI

纯猿生 JS ，提供弹窗（alert / confirm / input）及按钮、输入框生成。依赖你，自动注入样式，关箱鸡用。

---

## 安装

### 浏览器直接引入

```html
<script src="big/sb/CZUI.js"></script>
<script>
  // 全局变量 CZUI
  CZUI.alert('鸡你太美', '哈哈哈');
</script>
```

### npm

```bash
npm install big-sb-czui
```
---

## 快速开始

```js
// 提示框
CZUI.alert('买了否冷🤔', '鸡你太美啦啦啦');

// 确认框
CZUI.confirm('删除', '确定删除？').then(res => {
  if (res.confirm) console.log('确认删除');
});

// 输入框
CZUI.input('输入', '请输入', { placeholder: '鸡你太美' }).then(res => {
  if (res.confirm) console.log('输入值：', res.value);
});

// 生成按钮
const btn = CZUI.createButton({
  text: '提交',
  primary: true,
  onClick: () => alert('点击')
});
document.body.appendChild(btn);

// 生成输入框
const input = CZUI.createInput({
  placeholder: '请输入',
  onInput: e => console.log(e.target.value)
});
document.body.appendChild(input);
```

---

## API

### CZUI.alert(title, text, options)

显示提示弹窗，仅包含“确定”按钮。

| 参数 | 类型 | 说明 |
|------|------|------|
| `title` | string | 弹窗标题 |
| `text` | string | 弹窗内容 |
| `options.confirmText` | string | 确定按钮文字，默认 `'确定'` |
| `options.tm` | number | 自动关闭延迟（毫秒），不设置则不自动关闭 |

**返回值**：`Promise`，点击确定后 resolve。

**示例**：

```js
CZUI.alert('保存成功', '您的数据已保存', { confirmText: '好的' });

CZUI.alert('提示', '3秒后关闭', { tm: 3000 }).then(() => {
  console.log('弹窗已关闭');
});
```

---

### CZUI.confirm(title, text, options)

显示确认弹窗，包含“取消”和“确定”按钮。

| 参数 | 类型 | 说明 |
|------|------|------|
| `title` | string | 标题 |
| `text` | string | 内容 |
| `options.confirmText` | string | 确定按钮文字，默认 `'确定'` |
| `options.cancelText` | string | 取消按钮文字，默认 `'取消'` |
| `options.tm` | number | 自动关闭延迟（毫秒） |

**返回值**：`Promise<{ confirm: boolean }>`

点击确定时 `confirm` 为 `true`，点击取消或自动关闭为 `false`。

**示例**：

```js
CZUI.confirm('删除', '确定要删除这条记录吗？').then(({ confirm }) => {
  if (confirm) {
    // 执行删除
  } else {
    console.log('取消删除');
  }
});
```

---

### CZUI.input(title, text, options)

显示带输入框的弹窗，包含输入框、“取消”和“提交”按钮。

| 参数 | 类型 | 说明 |
|------|------|------|
| `title` | string | 标题 |
| `text` | string | 提示文字 |
| `options.inputVal` | string | 输入框默认值 |
| `options.placeholder` | string | 输入框占位文字 |
| `options.confirmText` | string | 提交按钮文字，默认 `'提交'` |
| `options.cancelText` | string | 取消按钮文字，默认 `'取消'` |
| `options.tm` | number | 自动关闭延迟（毫秒） |

**返回值**：`Promise<{ confirm: boolean, value: string }>`

确认时 `confirm` 为 `true`，`value` 为输入框当前值；取消或自动关闭时 `confirm` 为 `false`。

**示例**：

```js
CZUI.input('修改昵称', '请输入新昵称', {
  placeholder: '昵称',
  inputVal: '当前昵称'
}).then(({ confirm, value }) => {
  if (confirm) {
    console.log('新昵称：', value);
  }
});
```

---

### CZUI.cl()

手动关闭当前打开的弹窗（如果有）。

**返回值**：`true`

**示例**：

```js
CZUI.alert('加载中', '请稍候...', { tm: 5000 });
// 用户可提前关闭
CZUI.cl();
```

---

### CZUI.createButton(options)

生成一个带预设样式的 `<button>` 元素。

| 选项 | 类型 | 说明 |
|------|------|------|
| `text` | string | 按钮文本 |
| `type` | string | 按钮 `type` 属性（如 `'submit'`） |
| `primary` | boolean | 是否为主按钮（蓝色背景） |
| `accent` | boolean | 是否为强调按钮（粉色背景） |
| `disabled` | boolean | 是否禁用 |
| `style` | object | 自定义样式对象 |
| `onClick` | function | 点击事件回调，接收 `event` 参数 |

**返回值**：`HTMLButtonElement`

**示例**：

```js
const btn = CZUI.createButton({
  text: '提交表单',
  type: 'submit',
  primary: true,
  style: { marginTop: '10px' },
  onClick: (e) => {
    console.log('按钮被点击', e);
  }
});
document.body.appendChild(btn);

const dangerBtn = CZUI.createButton({
  text: '删除',
  accent: true,
  disabled: false,
  onClick: () => confirm('确定删除？')
});
```

---

### CZUI.createInput(options)

生成一个带预设样式的 `<input>` 元素。

| 选项 | 类型 | 说明 |
|------|------|------|
| `type` | string | 输入框类型（如 `'text'`、`'password'`、`'email'`） |
| `placeholder` | string | 占位文字 |
| `value` | string | 初始值 |
| `disabled` | boolean | 是否禁用 |
| `style` | object | 自定义样式对象 |
| `onInput` | function | 输入事件回调，接收 `event` 参数 |

**返回值**：`HTMLInputElement`

**示例**：

```js
const input = CZUI.createInput({
  type: 'email',
  placeholder: '请输入邮箱地址',
  style: { width: '200px' },
  onInput: (e) => {
    console.log('当前值：', e.target.value);
  }
});
document.body.appendChild(input);

const disabledInput = CZUI.createInput({
  placeholder: '已禁用',
  disabled: true,
  value: '不可编辑'
});
```

---

## 样式说明

库会在首次调用时自动注入 CSS，所有类名前缀统一为 `czui-`。

如需自定义样式，有两种方式：

1. 覆盖 CSS 类名：
```css
.czui-btn--primary {
  background: #your-color;
}
```

2. 直接修改 `<head>` 中注入的样式（不可以，但也不允许）。

---

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- IE 你干嘛～哎呦

---

## License

MIT
