import{j as e,a as t,F as d,L as l}from"./app-16b6fe95.js";import{W as c}from"./WebsiteLayout-96d25b2a.js";/* empty css                        *//* empty css               */import"./helpers-16255e8b.js";const i={0:"JAN",1:"FEB",2:"MAR",3:"APR",4:"MAY",5:"JUN",6:"JUL",7:"AUG",8:"SEP",9:"OCT",10:"NOV",11:"DEC"},b=({publications:a})=>e(c,{page:"publication",children:t("div",{className:"overflow-hidden bg-white",children:[e("div",{className:"pt-10 text-center",children:e("h2",{className:"sm:pb-16 pb-5 sm:text-[3rem] text-[2rem] text-center text-red-600",children:"Press Releases and Speeches"})}),e("div",{className:" sm:px-[6rem]  ",children:t("div",{className:"relative sm:pb-28",children:[e("div",{className:"grid gap-6 sm:grid-cols-3",children:a.data.map((r,s)=>e("div",{className:"",children:t("a",{href:`/uploads/publications/pdf/${r.pdf}`,target:"_blank",rel:"noopener noreferrer",className:"block",children:[t("div",{className:"relative",children:[e("img",{src:`/uploads/publications/images/${r.image}`,className:"object-cover sm:h-[20rem]",alt:r.title}),e("div",{className:"absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]",children:t("div",{className:"block font-bold text-center text-white uppercase",children:[e("div",{children:i[new Date(r.published_date).getMonth()]}),e("div",{children:new Date(r.published_date).getDate()}),e("div",{children:new Date(r.published_date).getFullYear()})]})})]}),t("div",{className:"bg-slate-100 p-3 overflow-hidden h-[60%]",children:[e("p",{className:"font-bold uppercase text-primary",children:r.title}),e("p",{children:r.description})]})]})},s))}),e("div",{className:"flex gap-2 pt-[2rem] justify-center",children:e(d,{children:a==null?void 0:a.links.map((r,s)=>r.url?e(l,{preserveScroll:!0,href:`${r.url}`,className:`${r.active?"bg-red-400 text-white":"bg-gray-300"} px-4 py-2 text-gray-500 rounded-md hover:bg-red-400 hover:text-white`,as:"button",type:"button",children:e("span",{dangerouslySetInnerHTML:{__html:r.label}})},s):e(l,{preserveScroll:!0,href:`${r.url}`,className:`${r.active?"bg-red-400 text-white":"bg-gray-300"} px-4 py-2 text-gray-500 rounded-md hover:bg-red-400 hover:text-white `,disabled:!0,as:"button",type:"button",children:e("span",{dangerouslySetInnerHTML:{__html:r.label}})},s))})})]})})]})});export{b as default};
