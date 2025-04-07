(()=>{"use strict";var e,l={335:()=>{const e=window.wp.blocks,l=window.wp.i18n,a=window.wp.blockEditor,o=window.wp.components,c=[{value:"",label:(0,l.__)("Default","filter-peach-blocks")},{value:"primary",label:(0,l.__)("Primary","filter-peach-blocks")},{value:"secondary",label:(0,l.__)("Secondary","filter-peach-blocks")},{value:"makara",label:(0,l.__)("Makara","filter-peach-blocks")},{value:"sirocco",label:(0,l.__)("Sirocco","filter-peach-blocks")},{value:"limed_ash",label:(0,l.__)("Limed Ash","filter-peach-blocks")},{value:"white",label:(0,l.__)("White","filter-peach-blocks")},{value:"transparent",label:(0,l.__)("Transparent","filter-peach-blocks")},{value:"danger",label:(0,l.__)("Red","filter-peach-blocks")},{value:"success",label:(0,l.__)("Green","filter-peach-blocks")}],i=window.ReactJSXRuntime,r=JSON.parse('{"UU":"filter-peach-blocks/content-column"}');(0,e.registerBlockType)(r.UU,{edit:function({attributes:e,setAttributes:r}){const{columnSize:s,columnBg:t,columnPaddingY:n,columnPaddingX:p,align:d,bgType:h,bgImage:b}=e,u=e=>{r({bgImage:{id:e.id,url:e.url,alt:e.alt}})};let _="col-12 position-relative mb-4",m="h-100 position-relative z-1";"color"===h&&t&&(m=`${m} bg-${t} ${"transparent"!==t?"rounded-lg":""} `,"primary"!==t&&"dark-text"!==t||(m=`${m} text-white`)),n&&(m=`${m} pt-${n} pb-${n}`),p&&(m=`${m} pl-${p} pr-${p}`),s&&(_=`${_} ${3===parseInt(s,10)?"col-md-6":""} ${2===parseInt(s,10)?"col-md-4":""} col-lg-${s}`),d&&(m=`${m} text-${d} align-items-${d}`);const g=(0,a.useBlockProps)({className:_});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.InspectorControls,{children:(0,i.jsxs)(o.PanelBody,{title:(0,l.__)("Settings","filter-peach-blocks"),initialOpen:!0,children:[(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)("fieldset",{className:"w-100",children:(0,i.jsx)(o.SelectControl,{label:(0,l.__)("Column size","filter-peach-blocks"),value:s,onChange:e=>{r({columnSize:e})},options:[{value:"auto",label:(0,l.__)("Auto","filter-peach-blocks")},{value:"12",label:(0,l.__)("12 ( 100% )","filter-peach-blocks")},{value:"9",label:(0,l.__)("9 ( 75% )","filter-peach-blocks")},{value:"8",label:(0,l.__)("8 ( 66.66% )","filter-peach-blocks")},{value:"7",label:(0,l.__)("7 ( 58.33% )","filter-peach-blocks")},{value:"6",label:(0,l.__)("6 ( 50% )","filter-peach-blocks")},{value:"5",label:(0,l.__)("5 ( 41.66% )","filter-peach-blocks")},{value:"4",label:(0,l.__)("4 ( 33.33% )","filter-peach-blocks")},{value:"3",label:(0,l.__)("3 ( 25% )","filter-peach-blocks")},{value:"2",label:(0,l.__)("2 ( 12.5% )","filter-peach-blocks")}]})})}),(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)("fieldset",{className:"w-100",children:(0,i.jsx)(o.SelectControl,{label:(0,l.__)("Background Type","filter-peach-blocks"),value:h,onChange:e=>r({bgType:e}),options:[{value:"",label:(0,l.__)("Default","filter-peach-blocks")},{value:"color",label:(0,l.__)("Color","filter-peach-blocks")},{value:"image",label:(0,l.__)("Image","filter-peach-blocks")}]})})}),"color"===h&&(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)("fieldset",{className:"w-100",children:(0,i.jsx)(o.SelectControl,{label:(0,l.__)("Background Color","filter-peach-blocks"),value:t,onChange:e=>{r({columnBg:e})},options:c})})}),"image"===h&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)("h2",{className:"components-panel__body-title",children:(0,l.__)("Background image","filter-peach-blocks")})}),(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)(a.MediaUploadCheck,{children:(0,i.jsx)(a.MediaUpload,{onSelect:u,multiple:!1,allowedTypes:["image"],value:b.id,render:({open:e})=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Button,{className:0==b.id?"editor-post-featured-image__toggle":"editor-post-featured-image__preview",onClick:e,children:[0==b.id&&(0,l.__)("Choose an image","filter-peach-blocks"),b.url&&(0,i.jsx)("img",{src:b.url})]})})})})}),0!=b.id&&(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)(a.MediaUploadCheck,{children:(0,i.jsx)(a.MediaUpload,{title:(0,l.__)("Replace image","filter-peach-blocks"),value:b.id,onSelect:u,allowedTypes:["image"],render:({open:e})=>(0,i.jsx)(o.Button,{onClick:e,variant:"secondary",isLarge:!0,children:(0,l.__)("Replace image","filter-peach-blocks")})})})}),0!=b.id&&(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)(a.MediaUploadCheck,{children:(0,i.jsx)(o.Button,{onClick:()=>{r({bgImage:{id:0,url:"",alt:""}})},variant:"link",isDestructive:!0,children:(0,l.__)("Remove image","filter-peach-blocks")})})})]}),(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)("fieldset",{className:"w-100",children:(0,i.jsx)(o.SelectControl,{label:(0,l.__)("Padding Top & Bottom","filter-peach-blocks"),value:n,onChange:e=>{r({columnPaddingY:e})},options:[{value:"0",label:(0,l.__)("Default","filter-peach-blocks")},{value:"1",label:(0,l.__)("1","filter-peach-blocks")},{value:"2",label:(0,l.__)("2","filter-peach-blocks")},{value:"3",label:(0,l.__)("3","filter-peach-blocks")},{value:"4",label:(0,l.__)("4","filter-peach-blocks")},{value:"5",label:(0,l.__)("5","filter-peach-blocks")},{value:"6",label:(0,l.__)("6","filter-peach-blocks")}]})})}),(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)("fieldset",{className:"w-100",children:(0,i.jsx)(o.SelectControl,{label:(0,l.__)("Padding Left & Right","filter-peach-blocks"),value:p,onChange:e=>{r({columnPaddingX:e})},options:[{value:"0",label:(0,l.__)("Default","filter-peach-blocks")},{value:"1",label:(0,l.__)("1","filter-peach-blocks")},{value:"2",label:(0,l.__)("2","filter-peach-blocks")},{value:"3",label:(0,l.__)("3","filter-peach-blocks")},{value:"4",label:(0,l.__)("4","filter-peach-blocks")},{value:"5",label:(0,l.__)("5","filter-peach-blocks")},{value:"6",label:(0,l.__)("6","filter-peach-blocks")}]})})})]})}),(0,i.jsx)(a.BlockControls,{group:"block",children:(0,i.jsx)(a.AlignmentControl,{value:d,onChange:e=>{r({align:void 0===e?"":e})}})}),(0,i.jsxs)("div",{...g,children:["image"===h&&0!==b.id&&(0,i.jsx)("div",{className:"position-absolute top-0 w-100 h-100 overflow-hidden z-0 pl-3 pr-3",children:(0,i.jsx)("img",{src:b.url,className:"m-0 h-100 w-100"})}),(0,i.jsx)("div",{className:m,children:(0,i.jsx)(a.InnerBlocks,{template:[["core/paragraph",{placeholder:"Lorem Ipsum ...."}]],allowedBlocks:["core/heading","core/paragraph","filter-peach-blocks/button","core/image","core/video","core/embed","core/file","core/shortcode","core/gallery","filter-peach-blocks/filter-peach-icon"]})})]})]})},save:function({attributes:e}){const{columnSize:l,columnBg:o,columnPaddingY:c,columnPaddingX:r,align:s,bgType:t,bgImage:n}=e;let p="col-12 position-relative mb-4",d="h-100 position-relative z-1 column-content-wrap";"color"===t&&o&&(d=`${d} bg-${o} ${"transparent"!==o?"rounded-lg":""}`,"primary"!==o&&"dark-text"!==o||(d=`${d} text-white`)),c&&(d=`${d} pt-${c} pb-${c}`),r&&(d=`${d} pl-${r} pr-${r}`),l&&(p=`${p} ${3===parseInt(l,10)?"col-md-6":""} ${2===parseInt(l,10)?"col-md-4":""} col-lg-${l}`),s&&(d=`${d} text-${s} align-items-${s}`),"image"===t&&(p=`${p} has-bg-image`),"color"===t&&(p=`${p} has-bg-color`);const h=a.useBlockProps.save({className:p}).className;return(0,i.jsxs)("div",{...a.useBlockProps.save(),className:h,children:["image"===t&&0!==n.id&&(0,i.jsx)("div",{className:"position-absolute start-0 top-0 w-100 h-100 overflow-hidden z-0 pl-3 pr-3",children:(0,i.jsx)("img",{"data-src":n.url,loading:"lazy",className:"m-0 h-100 w-100 lazyload",alt:n.alt})}),(0,i.jsx)("div",{className:d,children:(0,i.jsx)(a.InnerBlocks.Content,{})})]})}})}},a={};function o(e){var c=a[e];if(void 0!==c)return c.exports;var i=a[e]={exports:{}};return l[e](i,i.exports,o),i.exports}o.m=l,e=[],o.O=(l,a,c,i)=>{if(!a){var r=1/0;for(p=0;p<e.length;p++){for(var[a,c,i]=e[p],s=!0,t=0;t<a.length;t++)(!1&i||r>=i)&&Object.keys(o.O).every((e=>o.O[e](a[t])))?a.splice(t--,1):(s=!1,i<r&&(r=i));if(s){e.splice(p--,1);var n=c();void 0!==n&&(l=n)}}return l}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[a,c,i]},o.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={412:0,788:0};o.O.j=l=>0===e[l];var l=(l,a)=>{var c,i,[r,s,t]=a,n=0;if(r.some((l=>0!==e[l]))){for(c in s)o.o(s,c)&&(o.m[c]=s[c]);if(t)var p=t(o)}for(l&&l(a);n<r.length;n++)i=r[n],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},a=globalThis.webpackChunkfilter_peach_blocks=globalThis.webpackChunkfilter_peach_blocks||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))})();var c=o.O(void 0,[788],(()=>o(335)));c=o.O(c)})();