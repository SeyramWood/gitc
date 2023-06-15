import{r as c,b as h,j as e,a,L as i,F as m}from"./app-7ee8752f.js";import{W as p}from"./WebsiteLayout-2ea29faa.js";import{a as u}from"./helpers-16255e8b.js";/* empty css               */function f({categories:l,yearFilters:o,cases:s}){const[n,d]=c.useState();return h.useEffect(()=>{const t=document.location.pathname.split("/");if(isNaN(parseInt(t[t.length-1])))d(t.join("/"));else{const r=document.location.pathname.split("/");r.pop(),d(r.join("/"))}},[]),e(p,{page:"resource",children:e("div",{className:"w-[100%]   bg-white",children:a("div",{className:"px-10 py-16 sm:flex",children:[e("div",{className:"sm:w-[30%] sm:block hidden",children:a("div",{className:"sm:pr-7",children:[e("h2",{className:"sm:text-3xl ",children:"Notices"}),e("div",{className:"pb-20 sm:pl-3",children:l==null?void 0:l.map(t=>t.cases_count?e("p",{className:`${t.slug===(n==null?void 0:n.split("/")[2])&&"font-bold"} py-3 text-red-500  duration-700 ease-in-out cursor-pointer hover:text-red-500/90 hover:scale-105 transition`,children:e(i,{href:`/cases/${t.slug}`,preserveScroll:!0,children:`${t.name} - (${t.cases_count})`})},t.name):"")}),o.length>0&&a("div",{className:"px-2 text-center w-[50%] border rounded bg-green-100/20 ",children:[e("h2",{className:"border-b font-",children:"Filter By Year"}),e("div",{className:"",children:o.map(t=>e("p",{className:"pb-1 text-red-500 duration-700 ease-in-out border-b cursor-pointer hover:text-red-500/90 hover:scale-105 teansition",children:e(i,{preserveScroll:!0,href:`${n}/${t.year}`,children:`${t.year} - (${t.count})`})},t.year))})]})]})}),a("div",{className:" sm:w-[70%]",children:[a("article",{className:"mb-12",children:[e("p",{className:"",children:"The Commission, upon receiving a petition, undertakes thorough investigation into the matter engaging all interested parties. On concluding its investigation, the Commission gives a determination based on the merits of the case under consideration."}),e("p",{className:"mt-2",children:"Petitions could be brought by aggrieved companies or individuals or through the Commission own initiative. Before the commencement and conclusion of any investigation the Commissions issues a public notice in the national gazette as well as a newspaper with national circulation."}),e("p",{className:"mt-6",children:"The following is a list of completed and ongoing petitions:"})]}),e("div",{className:"border",children:a("table",{className:" table-fixed w-[100%] ",children:[e("thead",{className:"text-left bg-red-100/30",children:a("tr",{className:"border-b",children:[e("th",{className:"p-3 text-sm",children:"Investigation Title"}),e("th",{className:"p-3 text-sm",children:"Inv #"}),e("th",{className:"p-3 text-sm w-[25rem]",children:"Action"}),e("th",{className:"p-3 text-sm w-[5rem]",children:"Date Issued"})]})}),e("tbody",{children:s.data.length>0?s.data.map((t,r)=>a("tr",{className:"border-b",children:[e("td",{className:"p-3",children:e("a",{href:`/uploads/cases/${t.pdf}`,target:"_blank",rel:"noopener noreferrer",className:"text-primary/60 hover:underline",children:t.title})}),e("td",{className:"p-3",children:t.investigation_number}),e("td",{className:"p-3",children:t.description}),e("td",{className:"p-3",children:u(t.issued_date)})]},r)):e("tr",{children:e("td",{className:"p-3",children:"No case found!"})})})]})}),e("div",{className:"flex gap-2 pt-[2rem] justify-center",children:e(m,{children:s==null?void 0:s.links.map((t,r)=>t.url?e(i,{preserveScroll:!0,href:`${t.url}`,className:`${t.active?"bg-red-400 text-white":"bg-gray-300"} px-4 py-2 text-gray-500 rounded-md hover:bg-red-400 hover:text-white`,as:"button",type:"button",children:e("span",{dangerouslySetInnerHTML:{__html:t.label}})},r):e(i,{preserveScroll:!0,href:`${t.url}`,className:`${t.active?"bg-red-400 text-white":"bg-gray-300"} px-4 py-2 text-gray-500 rounded-md hover:bg-red-400 hover:text-white `,disabled:!0,as:"button",type:"button",children:e("span",{dangerouslySetInnerHTML:{__html:t.label}})},r))})})]})]})})})}export{f as default};
