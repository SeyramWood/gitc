import{r,j as e,a as o}from"./app-16b6fe95.js";import{l as S,a as N,b as u,M as E,c as t}from"./index-e4f51a0e.js";import{A as f}from"./index.esm-1a13465c.js";import{W as T}from"./WebsiteLayout-96d25b2a.js";/* empty css               */import"./helpers-16255e8b.js";const _=[{id:"1",name:"CUSTOMS VALUATION AND DISPUTE SETTLEMENT REGULATIONS, 2019 L.I 2382",pdf:"pdfFiles/resourcesPdfs/CUSTOMS_VALUATION_AND_DISPUTE_SETTLEMENT_REGULATIONS_2019_L.I_2382.pdf"},{id:"2",name:"GHANA INTERNATONAL TRADE COMMISSION ACT, 2016 ",pdf:"pdfFiles/resourcesPdfs/GHANA_INTERNATONAL_TRADE_COMMISSION_ACT_2016 _ ACT_2016.pdf"},{id:"3",name:"ANTI DUMPING REGULATIONS, 2019",pdf:"pdfFiles/resourcesPdfs/GITC_ANTI_DUMPING_REGULATIONS,2019_PASSED.pdf"},{id:"4",name:"SAFEGUARD MEASURES REGULATION, 2020",pdf:"pdfFiles/resourcesPdfs/GITC_SAFEGUARD_MEASURES_REGULATIONS_2020_YET_TO_BE_PASSED.pdf"},{id:"5",name:"SUBSIDY AND COUNTERVAILING MEASURES REGULATIONS, 2020",pdf:"pdfFiles/resourcesPdfs/SUBSIDY_AND_COUNTERVAILING_MEASURES_REGULATIONS_2020_PASSED.pdf"}],I={transformSize:({size:s})=>({height:s.height+20,width:s.width+20})};function P(){const s=S.defaultLayoutPlugin(),l=N.pageNavigationPlugin(),[i,d]=r.useState(!1),[n,p]=r.useState();r.useState(null),r.useState(1);function c(a){p(a),d(!0)}const m=u.getFilePlugin();return e(T,{page:"resource",children:o("div",{className:"bg-white py-16  overflow-hidden",children:[e("div",{className:"grid w-[70%] sm:grid-cols-2 gap-16 mx-auto sm:px-16",children:_.map((a,A)=>e("div",{className:"border shadow-xl sm:my-0 my-3 h-[26rem] cursor-pointer hover:bg-red-100/30 transition duration-500 ease-in-out hover:scale-110",onClick:()=>c(a.pdf),children:o("div",{className:"mx-auto ",children:[e(f,{className:"text-[20rem] w-[100%] text-center text-red-700 "}),e("p",{className:"text-center px-3 ",children:a.name})]})},A))}),e("div",{className:"grid grid-cols-5 gap-5 mx-auto px-10",children:e(E,{classNames:{modal:"pdf__modal"},open:i,onClose:()=>d(!1),children:e("div",{className:"sm:w-[50rem] sm:h-[60rem] w-[19rem] h-[30rem]  mt-10",children:i&&e(t.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js",children:e(t.Viewer,{fileUrl:n,plugins:[s,m,l],defaultScale:t.SpecialZoomLevel.PageFit,pageLayout:I})})})},"pdf__modal")})]})})}export{P as default};
