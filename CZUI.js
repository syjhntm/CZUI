!function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g.CZUI=f());}(this,function(){
const C={
O:'a-overlay',M:'a-modal',I:'a-icon',T:'a-title',Tx:'a-text',B:'a-btn',
btn:'czui-btn',btnPrimary:'czui-btn--primary',btnAccent:'czui-btn--accent',
input:'czui-input',inputDisabled:'czui-input--disabled'
};
const U={
ce(t,c=''){const e=document.createElement(t);c&&e.classList.add(c);return e;},
ap(p,cs){Array.isArray(cs)?cs.forEach(c=>p&&c&&p.appendChild(c)):(p&&cs&&p.appendChild(cs));},
rm(e){e&&e.parentElement&&e.parentElement.removeChild(e);}
};
function injectAllCSS(){
if(!document.getElementById('CZUI-alert-base-css')){
const s=U.ce('style');s.id='CZUI-alert-base-css';
s.textContent=`.${C.O}{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999;visibility:hidden;opacity:0;transition:opacity 1.2s ease,visibility 1.2s ease;}
.${C.O}.show{visibility:visible;opacity:1;}
.${C.M}{width:85%;max-width:380px;background:#fff;border-radius:8px;padding:20px;text-align:center;box-shadow:0 2px 15px rgba(0,0,0,0.1);transform:translateY(20px);opacity:0;transition:transform 1.2s ease,opacity 1.2s ease;}
.${C.O}.show .${C.M}{transform:translateY(0);opacity:1;}
.${C.I}{width:48px;height:48px;margin:0 auto 15px;border-radius:50%;background:#e8f5e9;color:#4caf50;display:flex;align-items:center;justify-content:center;font-size:24px;}
.${C.T}{font-size:18px;color:#333;margin:0 0 10px;}
.${C.Tx}{font-size:14px;color:#666;margin:0 0 20px;line-height:1.5;}
.${C.B}{padding:8px 20px;border:none;border-radius:4px;background:#2196f3;color:#fff;font-size:14px;transition:background 0.3s ease;outline:none;}`;
document.head.appendChild(s);
}
if(!document.getElementById('CZUI-alert-confirm-css')){
const s=U.ce('style');s.id='CZUI-alert-confirm-css';
s.textContent=`.${C.I}.confirm{background:#fff3e0;color:#ff9800;}
.a-btn--cancel{padding:8px 20px;border:none;border-radius:4px;background:#f5f5f5;color:#666;font-size:14px;margin-right:8px;transition:background 0.3s ease;outline:none;}
.a-btn--cancel:hover{background:#e0e0e0;}.a-btn-group{display:flex;justify-content:center;gap:8px;}`;
document.head.appendChild(s);
}
if(!document.getElementById('CZUI-alert-input-css')){
const s=U.ce('style');s.id='CZUI-alert-input-css';
s.textContent=`.a-input{width:90%;padding:8px 12px;margin:0 auto 20px;border:1px solid #ddd;border-radius:4px;font-size:14px;box-sizing:border-box;outline:none;}
.a-input:focus{border-color:#2196f3;}
.a-btn--cancel{padding:8px 20px;border:none;border-radius:4px;background:#f5f5f5;color:#666;font-size:14px;margin-right:8px;transition:background 0.3s ease;outline:none;}
.a-btn--cancel:hover{background:#e0e0e0;}.a-btn-group{display:flex;justify-content:center;gap:8px;}`;
document.head.appendChild(s);
}
if(!document.getElementById('CZUI-btn-input-css')){
const s=U.ce('style');s.id='CZUI-btn-input-css';
s.textContent=`.${C.btn}{padding:8px 20px;border:none;border-radius:4px;font-size:14px;font-weight:500;transition:all 0.3s ease;outline:none;}
.${C.btnPrimary}{background:#2196f3;color:#fff;}
.${C.btnPrimary}:hover{background:#1976d2;}
.${C.btnAccent}{background:#ff4081;color:#fff;}
.${C.btnAccent}:hover{background:#f50057;}
.${C.input}{width:100%;padding:8px 12px;border:1px solid #ddd;border-radius:4px;font-size:14px;box-sizing:border-box;transition:border 0.3s ease;outline:none;}
.${C.input}:focus{border-color:#2196f3;}
.${C.inputDisabled}{background:#f5f5f5;color:#999;border-color:#eee;}`;
document.head.appendChild(s);
}
}
class Alert{
constructor(){injectAllCSS();this.clearPrev();}
clearPrev(){
if(this.ol){
clearTimeout(this.tm);
this.ol.classList.remove('show');
U.rm(this.ol);
}
this.ol=null;this.res=null;this.tm=null;
}
b(opts){
this.clearPrev();
this.ol=U.ce('div',C.O);const m=U.ce('div',C.M);
const i=U.ce('div',C.I);i.textContent=opts.icon||'✓';
opts.confirmType&&i.classList.add('confirm');
const t=U.ce('h3',C.T);t.textContent=opts.t||'提示';
const tx=U.ce('p',C.Tx);tx.textContent=opts.tx||'';
const btnGroup=U.ce('div','a-btn-group');
if(opts.type==='confirm'||opts.type==='input'){
const cancelBtn=U.ce('button','a-btn--cancel');
cancelBtn.textContent=opts.cancelText||'取消';
cancelBtn.addEventListener('click',()=>{
this.ol.classList.remove('show');
setTimeout(()=>{
this.clearPrev();
this.res&&this.res({confirm:false,value:opts.inputVal||''});
},1200);
});
btnGroup.appendChild(cancelBtn);
}
const mainBtn=U.ce('button',C.B);
mainBtn.textContent=opts.confirmText||(opts.type==='input'?'提交':'确定');
mainBtn.addEventListener('click',()=>{
this.ol.classList.remove('show');
setTimeout(()=>{
this.clearPrev();
const resData=opts.type==='input'?{confirm:true,value:opts.inputVal||''}:{confirm:true};
this.res&&this.res(resData);
},1200);
});
btnGroup.appendChild(mainBtn);
const content=[i,t,tx];
opts.type==='input'&&content.splice(3,0,opts.inputEl);
content.push(btnGroup);
U.ap(m,content);U.ap(this.ol,[m]);document.body.appendChild(this.ol);
setTimeout(()=>this.ol.classList.add('show'),0);
if(opts.tm!==undefined&&opts.tm!==null){
this.tm=setTimeout(()=>{
this.ol.classList.remove('show');
setTimeout(()=>{
this.clearPrev();
this.res&&this.res({confirm:false,value:opts.inputVal||''});
},1200);
},opts.tm);
}
}
cl(){
this.ol&&this.ol.classList.remove('show');
setTimeout(()=>this.clearPrev(),1200);
return true;
}
alert(t,tx,o={}){return new Promise(res=>{this.res=res;this.b({t,tx,confirmText:o.confirmText,tm:o.tm});});}
confirm(t,tx,o={}){return new Promise(res=>{this.res=res;this.b({t,tx,type:'confirm',confirmType:true,cancelText:o.cancelText,confirmText:o.confirmText,tm:o.tm});});}
input(t,tx,o={}){
let inputVal=o.inputVal||'';
const inputEl=U.ce('input','a-input');
inputEl.placeholder=o.placeholder||'请输入内容';
inputEl.value=inputVal;
inputEl.addEventListener('input',(e)=>inputVal=e.target.value);
return new Promise(res=>{this.res=res;this.b({t,tx,type:'input',inputEl,inputVal,placeholder:o.placeholder,cancelText:o.cancelText,confirmText:o.confirmText,tm:o.tm});});
}
}
class BtnInput{
constructor(){injectAllCSS();}
createButton(opts={}){
const btn=U.ce('button',C.btn);
opts.type&&(btn.type=opts.type);
opts.text&&(btn.textContent=opts.text);
opts.style&&Object.assign(btn.style,opts.style);
opts.primary&&btn.classList.add(C.btnPrimary);
opts.accent&&btn.classList.add(C.btnAccent);
opts.onClick&&btn.addEventListener('click',opts.onClick);
opts.disabled&&(btn.disabled=opts.disabled);
return btn;
}
createInput(opts={}){
const input=U.ce('input',C.input);
opts.type&&(input.type=opts.type);
opts.placeholder&&(input.placeholder=opts.placeholder);
opts.value&&(input.value=opts.value);
opts.style&&Object.assign(input.style,opts.style);
opts.disabled&&(input.disabled=opts.disabled);
opts.onInput&&input.addEventListener('input',opts.onInput);
return input;
}
}
const aIns=new Alert();
const biIns=new BtnInput();
const CZUI={
alert:(t,tx,o={})=>aIns.alert(t,tx,o),
confirm:(t,tx,o={})=>aIns.confirm(t,tx,o),
input:(t,tx,o={})=>aIns.input(t,tx,o),
cl:()=>aIns.cl(),
createButton:(opts={})=>biIns.createButton(opts),
createInput:(opts={})=>biIns.createInput(opts)
};
return CZUI;
});
