(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"W5c+":function(l,n,o){"use strict";o.r(n);var u=o("8Y7J"),t=o("mrSG"),e=o("ZZ/e");class i{constructor(l,n,o,u){this.router=l,this.storage=n,this.navCtrl=o,this.menu=u,this.pages=[{title:"Configuraciones",url:"/menu/settings",icon:"settings"}],this.selectedPath=""}closeMenu(){this.menu.close()}logout(){return t.b(this,void 0,void 0,function*(){yield this.storage.set("isLogged",!1),this.storage.remove("currentUser"),this.navCtrl.navigateRoot("login")})}}class r{}var c=o("pMnS"),s=o("oBZk"),b=o("iInd"),a=o("SVse"),m=o("xgBC"),d=u.qb({encapsulation:0,styles:[[".header-md[_ngcontent-%COMP%]:after{background-image:none}ion-buttons[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{height:80px}.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--border-width:0}ion-list[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}ion-item[_ngcontent-%COMP%]{height:60px}.title-ios[_ngcontent-%COMP%]{padding-left:20px;text-align:left;font-size:20px}"]],data:{}});function g(l){return u.Jb(0,[(l()(),u.sb(0,0,null,null,10,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,s.U,s.q)),u.rb(1,49152,null,0,e.P,[u.h,u.k,u.x],null,null),(l()(),u.sb(2,0,null,0,8,"ion-item",[["color","primary"],["lines","none"],["routerDirection","root"]],[[2,"active-item",null]],[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==u.Eb(l,4).onClick()&&t),"click"===n&&(t=!1!==u.Eb(l,5).onClick(o)&&t),t},s.Q,s.l)),u.rb(3,49152,null,0,e.E,[u.h,u.k,u.x],{color:[0,"color"],lines:[1,"lines"],routerDirection:[2,"routerDirection"]},null),u.rb(4,16384,null,0,b.n,[b.m,b.a,[8,null],u.C,u.k],{routerLink:[0,"routerLink"]},null),u.rb(5,737280,null,0,e.Jb,[a.g,e.Fb,u.k,b.m,[2,b.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),u.sb(6,0,null,0,2,"ion-label",[],null,null,null,s.R,s.m)),u.rb(7,49152,null,0,e.K,[u.h,u.k,u.x],null,null),(l()(),u.Ib(8,0,[" "," "])),(l()(),u.sb(9,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,s.O,s.j)),u.rb(10,49152,null,0,e.z,[u.h,u.k,u.x],{name:[0,"name"]},null)],function(l,n){l(n,3,0,"primary","none","root"),l(n,4,0,n.context.$implicit.url),l(n,5,0,"root"),l(n,10,0,n.context.$implicit.icon)},function(l,n){l(n,2,0,n.component.selectedPath.startsWith(n.context.$implicit.url)),l(n,8,0,n.context.$implicit.title)})}function h(l){return u.Jb(0,[(l()(),u.sb(0,0,null,null,29,"ion-split-pane",[],null,null,null,s.db,s.y)),u.rb(1,49152,null,0,e.pb,[u.h,u.k,u.x],null,null),(l()(),u.sb(2,0,null,0,25,"ion-menu",[["contentId","content"],["side","end"]],null,null,null,s.V,s.o)),u.rb(3,49152,null,0,e.N,[u.h,u.k,u.x],{contentId:[0,"contentId"],side:[1,"side"]},null),(l()(),u.sb(4,0,null,0,12,"ion-header",[["mode","md"]],null,null,null,s.N,s.i)),u.rb(5,49152,null,0,e.y,[u.h,u.k,u.x],{mode:[0,"mode"]},null),(l()(),u.sb(6,0,null,0,10,"ion-toolbar",[["color","success"]],null,null,null,s.ib,s.D)),u.rb(7,49152,null,0,e.yb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.sb(8,0,null,0,2,"ion-title",[],null,null,null,s.hb,s.C)),u.rb(9,49152,null,0,e.wb,[u.h,u.k,u.x],null,null),(l()(),u.Ib(-1,0,["Menu"])),(l()(),u.sb(11,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,s.I,s.d)),u.rb(12,49152,null,0,e.i,[u.h,u.k,u.x],null,null),(l()(),u.sb(13,0,null,0,3,"ion-button",[["icon-only",""]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeMenu()&&u),u},s.H,s.c)),u.rb(14,49152,null,0,e.h,[u.h,u.k,u.x],null,null),(l()(),u.sb(15,0,null,0,1,"ion-icon",[["name","md-arrow-back"],["size","large"]],null,null,null,s.O,s.j)),u.rb(16,49152,null,0,e.z,[u.h,u.k,u.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),u.sb(17,0,null,0,10,"ion-content",[["color","primary"],["padding",""]],null,null,null,s.K,s.f)),u.rb(18,49152,null,0,e.r,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.sb(19,0,null,0,8,"ion-list",[["color","primary"],["lines","none"]],null,null,null,s.S,s.n)),u.rb(20,49152,null,0,e.L,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.hb(16777216,null,0,1,null,g)),u.rb(22,278528,null,0,a.h,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.sb(23,0,null,0,4,"ion-item",[["color","success"],["lines","none"],["tappable",""]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.logout()&&u),u},s.Q,s.l)),u.rb(24,49152,null,0,e.E,[u.h,u.k,u.x],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),u.sb(25,0,null,0,1,"ion-icon",[["color","primary"],["name","log-out"],["slot","start"]],null,null,null,s.O,s.j)),u.rb(26,49152,null,0,e.z,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.Ib(-1,0,[" Salir "])),(l()(),u.sb(28,16777216,null,0,1,"ion-router-outlet",[["id","content"],["main",""]],null,null,null,null,null)),u.rb(29,212992,null,0,e.eb,[b.b,u.N,u.j,[8,null],[8,null],e.b,e.Fb,a.f,u.k,b.m,u.x,b.a,[3,e.eb]],null,null)],function(l,n){var o=n.component;l(n,3,0,"content","end"),l(n,5,0,"md"),l(n,7,0,"success"),l(n,16,0,"md-arrow-back","large"),l(n,18,0,"primary"),l(n,20,0,"none"),l(n,22,0,o.pages),l(n,24,0,"success","none"),l(n,26,0,"primary","log-out"),l(n,29,0)},null)}function p(l){return u.Jb(0,[(l()(),u.sb(0,0,null,null,1,"app-menu",[],null,null,null,h,d)),u.rb(1,49152,null,0,i,[b.m,m.b,e.Fb,e.Db],null,null)],null,null)}var k=u.ob("app-menu",i,p,{},{},[]),C=o("s7LF");o.d(n,"MenuPageModuleNgFactory",function(){return x});var x=u.pb(r,[],function(l){return u.Bb([u.Cb(512,u.j,u.ab,[[8,[c.a,k]],[3,u.j],u.v]),u.Cb(4608,a.k,a.j,[u.s,[2,a.q]]),u.Cb(4608,C.q,C.q,[]),u.Cb(4608,e.a,e.a,[u.x,u.g]),u.Cb(4608,e.Eb,e.Eb,[e.a,u.j,u.p]),u.Cb(4608,e.Ib,e.Ib,[e.a,u.j,u.p]),u.Cb(1073742336,a.b,a.b,[]),u.Cb(1073742336,C.p,C.p,[]),u.Cb(1073742336,C.f,C.f,[]),u.Cb(1073742336,e.Ab,e.Ab,[]),u.Cb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),u.Cb(1073742336,r,r,[]),u.Cb(1024,b.k,function(){return[[{path:"",component:i,children:[{path:"tabs",loadChildren:"../tabs/tabs.module#TabsPageModule"},{path:"settings",loadChildren:"../settings/settings.module#SettingsPageModule"}]}]]},[])])})}}]);