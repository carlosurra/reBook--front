(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+dM8":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("iInd"),e("4W/a"),l.StockModule=class{}},"4W/a":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.StockComponent=class{}},"50yH":function(n,l,e){"use strict";const t=e("FDsP"),o=e("8Y7J"),u=e("PfoU"),r=e("VJxb"),i=e("SVse"),c=e("Rb0V"),a=e("iInd"),s=e("ev3r");var d=o.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function p(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,0,"div",[["class","container"]],null,null,null,null,null))],null,null)}function f(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),o.\u0275eld(1,0,null,null,9,"div",[["class","card"],["style","width: 21rem"]],null,null,null,null,null)),(n()(),o.\u0275eld(2,0,null,null,1,"rb-cover",[],null,null,null,u.View_CoverComponent_0,u.RenderType_CoverComponent)),o.\u0275did(3,573440,null,0,r.CoverComponent,[],{library:[0,"library"]},null),(n()(),o.\u0275eld(4,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),o.\u0275eld(5,0,null,null,1,"h5",[["class","card-title text-info"]],null,null,null,null,null)),(n()(),o.\u0275ted(6,null,["",""])),(n()(),o.\u0275eld(7,0,null,null,1,"h5",[["class","card-title text-info"]],null,null,null,null,null)),(n()(),o.\u0275ted(8,null,["",""])),(n()(),o.\u0275eld(9,0,null,null,1,"p",[["class","card-text text-white"]],null,null,null,null,null)),(n()(),o.\u0275ted(10,null,["",""]))],function(n,l){n(l,3,0,l.context.$implicit.cover)},function(n,l){n(l,6,0,l.context.$implicit.title),n(l,8,0,l.context.$implicit.author),n(l,10,0,l.context.$implicit.description)})}function m(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,2,"div",[["class","global"]],null,null,null,null,null)),(n()(),o.\u0275and(16777216,null,null,1,null,f)),o.\u0275did(2,278528,null,0,i.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.libraryService.stock)},null)}function g(n){return o.\u0275vid(0,[(n()(),o.\u0275and(16777216,null,null,1,null,p)),o.\u0275did(1,16384,null,0,i.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o.\u0275and(16777216,null,null,1,null,m)),o.\u0275did(3,16384,null,0,i.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,!1===e.showShelves),n(l,3,0,!0===e.showShelves)},null)}function b(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,1,"rb-shelves",[],null,null,null,g,d)),o.\u0275did(1,114688,null,0,c.ShelvesComponent,[a.Router,s.LibraryService],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_ShelvesComponent=d,l.View_ShelvesComponent_0=g,l.View_ShelvesComponent_Host_0=b,l.ShelvesComponentNgFactory=o.\u0275ccf("rb-shelves",c.ShelvesComponent,b,{},{},[])},"8dDu":function(n,l,e){"use strict";const t=e("8Y7J"),o=e("NhFT"),u=e("PT0D"),r=e("iInd"),i=e("yBZV"),c=e("f4AX");var a=t.\u0275crt({encapsulation:0,styles:[".header-container[_ngcontent-%COMP%]{\n          background-color: black;\n        }\n        .header[_ngcontent-%COMP%] {\n          height: 55vh;\n          background-image: \n          linear-gradient(to right bottom, \n          rgba(204, 227, 233, 0.8),\n          rgba(6, 6, 7, 0.3)),   \n          url('https://media.giphy.com/media/Gf5pzZxHdyTcs/giphy.gif');  \n          background-size: 10rem;\n          background-repeat: round;\n          background-position: inherit;\n          position: relative;\n          background-clip: black;\n          clip-path: polygon(0 0, 100% 0, 100% 35vh, 0 100%);\n        }\n        \n        .brand[_ngcontent-%COMP%] { \n          font-size: 20px; \n          color:black;\n        }\n        \n        .brand2[_ngcontent-%COMP%]{\n          font-size: 30px;\n          color:#FFBF00;\n        }\n        \n        .text-box[_ngcontent-%COMP%] {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          text-align: center;\n        }\n        \n        .heading-primary[_ngcontent-%COMP%] {\n          color: #fff;\n          text-transform: uppercase;\n          backface-visibility: hidden;\n          margin-bottom: 30px;\n        }\n        \n        .heading-primary-sim[_ngcontent-%COMP%]{\n          color: #FFBF00;\n          font-weight: bold;\n          font-size: 40px;\n        }\n        \n        .heading-primary-main[_ngcontent-%COMP%] {\n          display: block;\n          font-size: 26px;\n          font-weight: 400;\n          letter-spacing: 5px;\n        }\n        \n        .heading-primary-sub[_ngcontent-%COMP%] {\n          display: block;\n          font-size: 18px;\n          font-weight: 700;\n          letter-spacing: 7.4px;\n        }\n\n        #popup[_ngcontent-%COMP%] {\n          border-radius: 100px;\n\n        }\n        \n        .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n          text-transform: uppercase;\n          text-decoration: none;\n          padding: 10px 20px;\n          display: inline-block;\n          transition: all .2s;\n          position: relative;\n        }\n        \n        .btn[_ngcontent-%COMP%]:hover {\n          transform: translateY(-3px);\n          box-shadow: 0 10px 20px rgba(0, 0, 0, 1);\n        }\n        \n        .btn[_ngcontent-%COMP%]:active {\n          transform: translateY(-1px);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n        }\n        \n        .btn-white[_ngcontent-%COMP%] {\n          background-color: #fff;\n          font-size: 14px;\n        }"],data:{}});function s(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,13,"div",[["class","header-container"]],null,null,null,null,null)),(n()(),t.\u0275eld(1,0,null,null,12,"header",[["class","header"]],null,null,null,null,null)),(n()(),t.\u0275eld(2,0,null,null,11,"div",[["class","text-box d-flex align-items-center"]],null,null,null,null,null)),(n()(),t.\u0275eld(3,0,null,null,7,"h1",[["class","heading-primary d-flex align-items-center"]],null,null,null,null,null)),(n()(),t.\u0275eld(4,0,null,null,1,"rb-avatar",[["class","avatar"]],null,null,null,o.View_AvatarComponent_0,o.RenderType_AvatarComponent)),t.\u0275did(5,573440,null,0,u.AvatarComponent,[],{user:[0,"user"]},null),(n()(),t.\u0275eld(6,0,null,null,3,"span",[["class","heading-primary-main text-dark"]],null,null,null,null,null)),(n()(),t.\u0275ted(-1,null,["Choose your favorite books"])),(n()(),t.\u0275eld(8,0,null,null,1,"span",[["class","heading-primary-sim"]],null,null,null,null,null)),(n()(),t.\u0275ted(-1,null,["/"])),(n()(),t.\u0275eld(10,0,null,null,0,"span",[["class","heading-primary-sub"]],null,null,null,null,null)),(n()(),t.\u0275eld(11,0,null,null,2,"button",[["class","btn btn-white btn-animated text-info"],["id","popup"],["routerLink","/wall"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t.\u0275nov(n,12).onClick()&&o),o},null,null)),t.\u0275did(12,16384,null,0,r.RouterLink,[r.Router,r.ActivatedRoute,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),(n()(),t.\u0275ted(-1,null,["MY LIBRARY"]))],function(n,l){var e=l.component;n(l,5,0,null==e.userService?null:e.userService.currentUser),n(l,12,0,"/wall")},null)}function d(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,1,"rb-stock-header",[],null,null,null,s,a)),t.\u0275did(1,114688,null,0,i.StockHeaderComponent,[r.Router,c.UserService],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_StockHeaderComponent=a,l.View_StockHeaderComponent_0=s,l.View_StockHeaderComponent_Host_0=d,l.StockHeaderComponentNgFactory=t.\u0275ccf("rb-stock-header",i.StockHeaderComponent,d,{},{},[])},FDsP:function(n,l,e){"use strict";l.styles=[".global[_ngcontent-%COMP%]{background-size:cover;background-color:#000;margin:3rem;display:flex;flex-wrap:wrap;justify-content:space-between}.card[_ngcontent-%COMP%]{flex:0 1 24%;margin-top:2rem;padding:2rem;height:35rem;text-align:center;border-color:#ffbf00;background-color:#000}.btn[_ngcontent-%COMP%]{margin-top:1rem}.btn[_ngcontent-%COMP%]:visited{text-decoration:none;padding:10px 20px;display:inline-block;border-radius:100px;transition:all .2s;position:relative}.btn[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);box-shadow:0 10px 20px #fff}.btn[_ngcontent-%COMP%]:active{-webkit-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 10px 10px rgba(255,191,0,.75)}.btn-white[_ngcontent-%COMP%]{background-color:#fff;color:#ffbf00;font-size:14px;border-radius:100px}@media screen and (min-width:40em){.cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.card[_ngcontent-%COMP%]{flex:0 1 calc(25% - 1em)}}@media (min-width:768px){#max-height[_ngcontent-%COMP%]{max-height:32rem}}"]},PtBb:function(n,l,e){"use strict";const t=e("8Y7J"),o=e("8dDu"),u=e("yBZV"),r=e("iInd"),i=e("f4AX"),c=e("50yH"),a=e("Rb0V"),s=e("ev3r"),d=e("eYaR"),p=e("T1RK"),f=e("4W/a");var m=t.\u0275crt({encapsulation:0,styles:[".global[_ngcontent-%COMP%] {\n          background: black;\n        }"],data:{}});function g(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,11,"div",[["class","global d-flex flex-column"]],null,null,null,null,null)),(n()(),t.\u0275eld(1,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.\u0275eld(2,0,null,null,1,"rb-stock-header",[],null,null,null,o.View_StockHeaderComponent_0,o.RenderType_StockHeaderComponent)),t.\u0275did(3,114688,null,0,u.StockHeaderComponent,[r.Router,i.UserService],null,null),(n()(),t.\u0275eld(4,0,null,null,4,"main",[],null,null,null,null,null)),(n()(),t.\u0275eld(5,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.\u0275eld(6,0,null,null,1,"rb-shelves",[],null,null,null,c.View_ShelvesComponent_0,c.RenderType_ShelvesComponent)),t.\u0275did(7,114688,null,0,a.ShelvesComponent,[r.Router,s.LibraryService],null,null),(n()(),t.\u0275eld(8,0,null,null,0,"div",[["class","p-2"]],null,null,null,null,null)),(n()(),t.\u0275eld(9,0,null,null,2,"div",[["class","p-2"]],null,null,null,null,null)),(n()(),t.\u0275eld(10,0,null,null,1,"rb-stock-footer",[],null,null,null,d.View_StockFooterComponent_0,d.RenderType_StockFooterComponent)),t.\u0275did(11,49152,null,0,p.StockFooterComponent,[],null,null)],function(n,l){n(l,3,0),n(l,7,0)},null)}function b(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,1,"rb-stock",[],null,null,null,g,m)),t.\u0275did(1,49152,null,0,f.StockComponent,[],null,null)],null,null)}l.RenderType_StockComponent=m,l.View_StockComponent_0=g,l.View_StockComponent_Host_0=b,l.StockComponentNgFactory=t.\u0275ccf("rb-stock",f.StockComponent,b,{},{},[])},Rb0V:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("8Y7J"),e("iInd"),e("ev3r"),l.ShelvesComponent=class{constructor(n,l){this.router=n,this.libraryService=l,this.showShelves=!1}ngOnInit(){this.libraryService.getStock().subscribe(n=>{n.length>0&&(this.showShelves=!0)})}}},T1RK:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.StockFooterComponent=class{}},eYaR:function(n,l,e){"use strict";const t=e("8Y7J"),o=e("iInd"),u=e("SVse"),r=e("T1RK");var i=t.\u0275crt({encapsulation:0,styles:["footer[_ngcontent-%COMP%]{\n            background-color: black;\n            padding: 20px 0px;\n        }\n        \n        footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\n            list-style:none;\n            margin:0 auto;\n            display:inline-block;\n            padding-top:30px;\n        }\n        \n        footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n            float:left;\n        }\n        \n        footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n            color:white;\n            padding:20px;\n        }\n        \n        footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n            color:#FFBF00;\n            text-decoration:none;\n        }"],data:{}});function c(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,14,"footer",[],null,null,null,null,null)),(n()(),t.\u0275eld(1,0,null,null,13,"div",[["class","container"],["style","border-top:1px solid grey"]],null,null,null,null,null)),(n()(),t.\u0275eld(2,0,null,null,12,"div",[["class","d-flex"]],null,null,null,null,null)),(n()(),t.\u0275eld(3,0,null,null,11,"ul",[["class","list-inline mx-auto justify-content-center"]],null,null,null,null,null)),(n()(),t.\u0275eld(4,0,null,null,2,"li",[["class","list-inline-item"]],null,null,null,null,null)),(n()(),t.\u0275eld(5,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(n()(),t.\u0275ted(-1,null,["Home"])),(n()(),t.\u0275eld(7,0,null,null,3,"li",[["class","list-inline-item"]],null,null,null,null,null)),(n()(),t.\u0275eld(8,0,null,null,2,"a",[["routerLink","/about"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t.\u0275nov(n,9).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t.\u0275did(9,671744,null,0,o.RouterLinkWithHref,[o.Router,o.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),t.\u0275ted(-1,null,["About"])),(n()(),t.\u0275eld(11,0,null,null,3,"li",[["class","list-inline-item"]],null,null,null,null,null)),(n()(),t.\u0275eld(12,0,null,null,2,"a",[["routerLink","/users"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t.\u0275nov(n,13).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t.\u0275did(13,671744,null,0,o.RouterLinkWithHref,[o.Router,o.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),t.\u0275ted(-1,null,["Users"]))],function(n,l){n(l,9,0,"/about"),n(l,13,0,"/users")},function(n,l){n(l,8,0,t.\u0275nov(l,9).target,t.\u0275nov(l,9).href),n(l,12,0,t.\u0275nov(l,13).target,t.\u0275nov(l,13).href)})}function a(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,1,"rb-stock-footer",[],null,null,null,c,i)),t.\u0275did(1,49152,null,0,r.StockFooterComponent,[],null,null)],null,null)}l.RenderType_StockFooterComponent=i,l.View_StockFooterComponent_0=c,l.View_StockFooterComponent_Host_0=a,l.StockFooterComponentNgFactory=t.\u0275ccf("rb-stock-footer",r.StockFooterComponent,a,{},{},[])},hyuE:function(n,l,e){"use strict";const t=e("8Y7J"),o=e("+dM8"),u=e("pMnS"),r=e("PtBb"),i=e("SVse"),c=e("s7LF"),a=e("iInd"),s=e("PCNd"),d=e("4W/a");l.StockModuleNgFactory=t.\u0275cmf(o.StockModule,[],function(n){return t.\u0275mod([t.\u0275mpd(512,t.ComponentFactoryResolver,t.\u0275CodegenComponentFactoryResolver,[[8,[u.\u0275EmptyOutletComponentNgFactory,r.StockComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.\u0275mpd(4608,i.NgLocalization,i.NgLocaleLocalization,[t.LOCALE_ID,[2,i.\u0275angular_packages_common_common_a]]),t.\u0275mpd(4608,c.FormBuilder,c.FormBuilder,[]),t.\u0275mpd(4608,c.\u0275angular_packages_forms_forms_j,c.\u0275angular_packages_forms_forms_j,[]),t.\u0275mpd(1073742336,i.CommonModule,i.CommonModule,[]),t.\u0275mpd(1073742336,a.RouterModule,a.RouterModule,[[2,a.\u0275angular_packages_router_router_a],[2,a.Router]]),t.\u0275mpd(1073742336,c.\u0275angular_packages_forms_forms_bc,c.\u0275angular_packages_forms_forms_bc,[]),t.\u0275mpd(1073742336,c.ReactiveFormsModule,c.ReactiveFormsModule,[]),t.\u0275mpd(1073742336,s.SharedModule,s.SharedModule,[]),t.\u0275mpd(1073742336,o.StockModule,o.StockModule,[]),t.\u0275mpd(1024,a.ROUTES,function(){return[[{path:"",component:d.StockComponent}]]},[])])})},yBZV:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("iInd"),e("f4AX"),l.StockHeaderComponent=class{constructor(n,l){this.router=n,this.userService=l}ngOnInit(){this.userService.getUserProfile().subscribe(n=>{console.log({res:n})})}}}}]);