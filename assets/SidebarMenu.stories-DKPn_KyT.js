import{j as e}from"./jsx-runtime-ZBDiWtst.js";import{r as u,R as x}from"./iframe-DNuNDALD.js";import"./preload-helper-DZ9j9ITo.js";const j="_backdrop_1kqcm_1",f="_show_1kqcm_9",N="_panel_1kqcm_14",v="_open_1kqcm_28",S="_list_1kqcm_30",w="_item_1kqcm_31",y="_labelRow_1kqcm_32",C="_link_1kqcm_33",O="_chev_1kqcm_34",g="_sublist_1kqcm_35",q="_subitem_1kqcm_36",n={backdrop:j,show:f,panel:N,open:v,list:S,item:w,labelRow:y,link:C,chev:O,sublist:g,subitem:q},d=({open:s,onClose:t,items:o})=>(u.useEffect(()=>{s?document.body.style.overflow="hidden":document.body.style.overflow=""},[s]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`${n.backdrop} ${s?n.show:""}`,onClick:t,"aria-hidden":!s}),e.jsx("aside",{className:`${n.panel} ${s?n.open:""}`,"aria-hidden":!s,children:e.jsx("nav",{children:e.jsx("ul",{className:n.list,children:o.map(a=>e.jsx(M,{item:a,onClose:t},a.id))})})})]})),M=({item:s,onClose:t})=>{const[o,a]=x.useState(!1);return e.jsxs("li",{className:n.item,children:[e.jsxs("div",{className:n.labelRow,children:[e.jsx("button",{className:n.link,onClick:()=>{var l;(l=s.onClick)==null||l.call(s),s.children?a(c=>!c):t()},children:s.label}),s.children&&e.jsx("button",{"aria-label":o?"Collapse":"Expand",className:n.chev,onClick:()=>a(l=>!l),children:o?"yes":"no"})]}),s.children&&o&&e.jsx("ul",{className:n.sublist,children:s.children.map(l=>e.jsx("li",{className:n.subitem,children:e.jsx("button",{className:n.link,onClick:()=>{var c;(c=l.onClick)==null||c.call(l),t()},children:l.label})},l.id))})]})};d.__docgenInfo={description:"",methods:[],displayName:"SidebarMenu",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:""}}};const T={title:"Navigation / SidebarMenu",component:d},R=[{id:"1",label:"Home",onClick:()=>alert("Home clicked")},{id:"2",label:"Products",children:[{id:"2-1",label:"New"},{id:"2-2",label:"Popular"}]},{id:"3",label:"About",onClick:()=>alert("About")}],r=()=>{const[s,t]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),className:"button",children:"Open sidebar"}),e.jsx(d,{open:s,onClose:()=>t(!1),items:R})]})},i=()=>{const s=[{id:"a",label:"Dashboard"},{id:"b",label:"Settings",children:[{id:"b-1",label:"Profile"},{id:"b-2",label:"Security",children:[{id:"b-2-1",label:"2FA"}]}]}],[t,o]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"button",children:"Open"}),e.jsx(d,{open:t,onClose:()=>o(!1),items:s})]})};r.__docgenInfo={description:"",methods:[],displayName:"OneLevel"};i.__docgenInfo={description:"",methods:[],displayName:"TwoLevel"};var b,m,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <>
      <button onClick={() => setOpen(true)} className='button'>
        Open sidebar
      </button>

      <SidebarMenu open={open} onClose={() => setOpen(false)} items={items} />
    </>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var _,h,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const nested: MenuItem[] = [{
    id: 'a',
    label: 'Dashboard'
  }, {
    id: 'b',
    label: 'Settings',
    children: [{
      id: 'b-1',
      label: 'Profile'
    }, {
      id: 'b-2',
      label: 'Security',
      children: [{
        id: 'b-2-1',
        label: '2FA'
      }]
    }]
  }];
  const [open, setOpen] = useState(true);
  return <>
      <button onClick={() => setOpen(true)} className="button">
        Open
      </button>
      <SidebarMenu open={open} onClose={() => setOpen(false)} items={nested} />
    </>;
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const A=["OneLevel","TwoLevel"];export{r as OneLevel,i as TwoLevel,A as __namedExportsOrder,T as default};
