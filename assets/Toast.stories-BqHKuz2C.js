import{j as a}from"./jsx-runtime-ZBDiWtst.js";import{r as l}from"./iframe-DNuNDALD.js";import"./preload-helper-DZ9j9ITo.js";const f="_container_rlxpw_1",v="_toast_rlxpw_12",w="_slideUp_rlxpw_1",b="_fadeIn_rlxpw_1",h="_content_rlxpw_41",C="_message_rlxpw_47",j="_close_rlxpw_52",U="_info_rlxpw_60",R="_success_rlxpw_63",k="_error_rlxpw_66",I="_warning_rlxpw_69",c={container:f,toast:v,slideUp:w,fadeIn:b,content:h,message:C,close:j,info:U,success:R,error:k,warning:I},T=({id:e,type:n="info",message:r,duration:s=3e3,onClose:o,closable:i=!1})=>(l.useEffect(()=>{if(s===0)return;const d=setTimeout(()=>o(e),s);return()=>clearTimeout(d)},[s,e,o]),a.jsx("div",{className:`${c.toast} ${c[n]}`,role:"status","aria-live":"polite",children:a.jsxs("div",{className:c.content,children:[a.jsx("div",{className:c.message,children:r}),i&&a.jsx("button",{"aria-label":"Close",className:c.close,onClick:()=>o(e),children:"X"})]})}));T.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{id:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function D(e,n=0){return(t[e[n+0]]+t[e[n+1]]+t[e[n+2]]+t[e[n+3]]+"-"+t[e[n+4]]+t[e[n+5]]+"-"+t[e[n+6]]+t[e[n+7]]+"-"+t[e[n+8]]+t[e[n+9]]+"-"+t[e[n+10]]+t[e[n+11]]+t[e[n+12]]+t[e[n+13]]+t[e[n+14]]+t[e[n+15]]).toLowerCase()}let m;const N=new Uint8Array(16);function S(){if(!m){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");m=crypto.getRandomValues.bind(crypto)}return m(N)}const q=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g={randomUUID:q};function V(e,n,r){var o;e=e||{};const s=e.random??((o=e.rng)==null?void 0:o.call(e))??S();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,D(s)}function E(e,n,r){return g.randomUUID&&!e?g.randomUUID():V(e)}const $=()=>{const[e,n]=l.useState([]),r=l.useCallback(o=>{const i=E();return n(d=>[...d,{id:i,onClose:()=>{},...o}]),i},[]),s=l.useCallback(o=>{n(i=>i.filter(d=>d.id!==o))},[]);return{toasts:e,add:r,remove:s}},p=({toasts:e,onRemove:n})=>a.jsx("div",{className:c.container,"aria-live":"polite","aria-atomic":"false",children:e.map(r=>a.jsx(T,{...r,onClose:()=>n(r.id)},r.id))});p.__docgenInfo={description:"",methods:[],displayName:"ToastContainer",props:{toasts:{required:!0,tsType:{name:"Array",elements:[{name:"ToastProps"}],raw:"ToastProps[]"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const H={title:"Feedback / Toast",component:p},u=()=>{const{toasts:e,add:n,remove:r}=$(),s=(o,i=3e3)=>{Date.now().toString(),n({message:`This is ${o}`,type:o,duration:i,closable:!0})};return a.jsxs("div",{style:{padding:20},children:[a.jsx("button",{onClick:()=>s("info"),children:"Show info"})," ",a.jsx("button",{onClick:()=>s("success"),children:"success"})," ",a.jsx("button",{onClick:()=>s("error",0),children:"error (sticky)"}),a.jsx(p,{toasts:e,onRemove:o=>r(o)})]})};u.__docgenInfo={description:"",methods:[],displayName:"Demo"};var y,_,x;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const {
    toasts,
    add,
    remove
  } = useToasts();
  const addToast = (type: ToastProps['type'], duration = 3000) => {
    const id = Date.now().toString();
    const t = {
      id,
      type,
      message: \`This is a \${type} toast\`,
      duration,
      closable: true,
      onClose: () => {}
    } as any;
    (add as any)({
      message: \`This is \${type}\`,
      type,
      duration,
      closable: true
    });
  };
  return <div style={{
    padding: 20
  }}>
      <button onClick={() => addToast('info')}>Show info</button>{' '}
      <button onClick={() => addToast('success')}>success</button>{' '}
      <button onClick={() => addToast('error', 0)}>error (sticky)</button>
      <ToastContainer toasts={toasts as any} onRemove={(id: string) => remove(id)} />
    </div>;
}`,...(x=(_=u.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const L=["Demo"];export{u as Demo,L as __namedExportsOrder,H as default};
