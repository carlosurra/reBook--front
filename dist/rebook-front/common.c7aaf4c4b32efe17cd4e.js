(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{NhFT:function(e,n,t){"use strict";const r=t("8Y7J"),l=t("SVse"),i=t("PT0D");var o=r.\u0275crt({encapsulation:2,styles:[],data:{}});function a(e){return r.\u0275vid(0,[(e()(),r.\u0275eld(0,0,null,null,2,"img",[["class","img-responsive rounded-circle img-thumbnail"]],[[8,"src",4]],null,null,null,null)),r.\u0275did(1,278528,null,0,l.NgStyle,[r.KeyValueDiffers,r.ElementRef,r.Renderer2],{ngStyle:[0,"ngStyle"]},null),r.\u0275pod(2,{width:0,height:1,"min-width":2})],function(e,n){var t=n.component,r=e(n,2,0,t.width,t.height,t.width);e(n,1,0,r)},function(e,n){e(n,0,0,n.component.imageUrl)})}function u(e){return r.\u0275vid(0,[(e()(),r.\u0275and(16777216,null,null,1,null,a)),r.\u0275did(1,16384,null,0,l.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){e(n,1,0,n.component.imageUrl)},null)}function s(e){return r.\u0275vid(0,[(e()(),r.\u0275eld(0,0,null,null,1,"rb-avatar",[],null,null,null,u,o)),r.\u0275did(1,573440,null,0,i.AvatarComponent,[],null,null)],null,null)}n.RenderType_AvatarComponent=o,n.View_AvatarComponent_0=u,n.View_AvatarComponent_Host_0=s,n.AvatarComponentNgFactory=r.\u0275ccf("rb-avatar",i.AvatarComponent,s,{user:"user"},{},[])},PT0D:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("8Y7J"),n.AvatarComponent=class{constructor(){this.imageUrl=""}ngOnChanges(e){console.log({changes:e}),this.imageUrl=e.user&&e.user.currentValue&&void 0!==e.user.currentValue.avatar?e.user.currentValue.avatar:"https://api.adorable.io/avatars/128/"}}},PfoU:function(e,n,t){"use strict";const r=t("8Y7J"),l=t("SVse"),i=t("VJxb");var o=r.\u0275crt({encapsulation:2,styles:[],data:{}});function a(e){return r.\u0275vid(0,[(e()(),r.\u0275eld(0,0,null,null,2,"img",[["class","img-responsive"]],[[8,"src",4]],null,null,null,null)),r.\u0275did(1,278528,null,0,l.NgStyle,[r.KeyValueDiffers,r.ElementRef,r.Renderer2],{ngStyle:[0,"ngStyle"]},null),r.\u0275pod(2,{width:0,height:1,"min-width":2})],function(e,n){var t=n.component,r=e(n,2,0,t.width,t.height,t.width);e(n,1,0,r)},function(e,n){e(n,0,0,n.component.imageUrl)})}function u(e){return r.\u0275vid(0,[(e()(),r.\u0275and(16777216,null,null,1,null,a)),r.\u0275did(1,16384,null,0,l.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){e(n,1,0,n.component.imageUrl)},null)}function s(e){return r.\u0275vid(0,[(e()(),r.\u0275eld(0,0,null,null,1,"rb-cover",[],null,null,null,u,o)),r.\u0275did(1,573440,null,0,i.CoverComponent,[],null,null)],null,null)}n.RenderType_CoverComponent=o,n.View_CoverComponent_0=u,n.View_CoverComponent_Host_0=s,n.CoverComponentNgFactory=r.\u0275ccf("rb-cover",i.CoverComponent,s,{library:"library"},{},[])},VJxb:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("8Y7J"),n.CoverComponent=class{constructor(){this.imageUrl=""}ngOnChanges(e){e.library&&void 0!==e.library.currentValue&&(this.imageUrl=e.library.currentValue||`https://api.adorable.io/avatars/128/${e.library.currentValue.uuid}`)}}},ev3r:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("IheW");const r=t("AytR"),l=(t("iInd"),t("kU1M")),i=t("8Y7J"),o=t("IheW"),a=t("iInd");class u{constructor(e,n){this.http=e,this.router=n,this.library=[],this.stock=[],this.userLibrary={users_uuid:0}}getLibrary(){return this.http.get(`${r.environment.apiBaseUrl}/library`).pipe(l.tap(e=>{this.library=e,console.log(this.library)}))}deleteBook(e){return this.http.delete(`${r.environment.apiBaseUrl}/delete/${e}`).pipe(l.tap(()=>{this.library=this.library.filter(n=>n.id!==e)}))}uploadCover(e,n){const t=new FormData;return console.log({bookId:n}),t.append("cover",e),t.append("id",n),this.http.post(`${r.environment.apiBaseUrl}/cover`,t,{observe:"response"}).pipe(l.tap(e=>{console.log({something:e})}))}getLibraryByUuid(e){return this.http.get(`${r.environment.apiBaseUrl}/librarybyuuid`,{params:{library_uuid:e}}).pipe(l.tap(e=>{this.userLibrary=e[0],console.log(this.userLibrary)}))}getStock(){return this.http.get(`${r.environment.apiBaseUrl}/stock`).pipe(l.tap(e=>{this.stock=e,console.log(this.stock)}))}}u.ngInjectableDef=i.defineInjectable({factory:function(){return new u(i.inject(o.HttpClient),i.inject(a.Router))},token:u,providedIn:"root"}),n.LibraryService=u}}]);