(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"/0fA":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup, FormControl } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  existingUsers = [\n    <span class="hljs-string">\'user1\'</span>,\n    <span class="hljs-string">\'user2\'</span>,\n    <span class="hljs-string">\'user3\'</span>,\n  ];\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Username\'</span>,\n        placeholder: <span class="hljs-string">\'Username\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      asyncValidators: {\n        uniqueUsername: {\n          expression: <span class="hljs-function">(<span class="hljs-params">control: FormControl</span>) =&gt;</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {\n              setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n                resolve(<span class="hljs-keyword">this</span>.existingUsers.indexOf(control.value) === <span class="hljs-number">-1</span>);\n              }, <span class="hljs-number">1000</span>);\n            });\n          },\n          message: <span class="hljs-string">\'This username is already taken.\'</span>,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},J0cF:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},Stwh:function(n,s,a){"use strict";a.r(s);var l=a("Mlb/"),o=a("QZuW"),e=function(){function n(){var n=this;this.form=new o.FormGroup({}),this.model={},this.options={},this.existingUsers=["user1","user2","user3"],this.fields=[{key:"text",type:"input",templateOptions:{label:"Username",placeholder:"Username",required:!0},asyncValidators:{uniqueUsername:{expression:function(s){return new Promise((function(a,l){setTimeout((function(){a(-1===n.existingUsers.indexOf(s.value))}),1e3)}))},message:"This username is already taken."}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"Async validation of unique value",description:"\n              This example shows how to validate a username uniqueness on input.<br/>\n              The goal is to show:\n              <ul>\n                <li>how to use async validation (A server request is simulated here with a one second timeout).</li>\n              <ul>\n            ",component:e,files:[{file:"app.component.html",content:a("xT++"),filecontent:a("kmQN")},{file:"app.component.ts",content:a("/0fA"),filecontent:a("vSMU")},{file:"app.module.ts",content:a("J0cF"),filecontent:a("Vbvz")}]}]},t=function(){},r=a("n91+"),m=a("aUi8"),i=a("xRU+"),u=a("l9Gt"),c=a("tb2p"),d=a("5swT"),f=a("rGUg"),g=a("qEw3"),h=a("KL5v"),j=a("WPgD"),y=a("wR1y"),b=a("fYis"),v=a("mSm0"),w=a("vk2e"),F=a("g/x9"),k=a("Ea/l"),x=a("kY9M"),C=a("cXvR"),M=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function U(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["",""]))],null,(function(n,s){n(s,1,0,s.context.$implicit)}))}function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Existing usernames"])),(n()(),l["\u0275eld"](2,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,U)),l["\u0275did"](4,278528,null,0,w.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),l["\u0275eld"](5,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,a){var o=!0,e=n.component;return"submit"===s&&(o=!1!==l["\u0275nov"](n,7).onSubmit(a)&&o),"reset"===s&&(o=!1!==l["\u0275nov"](n,7).onReset()&&o),"ngSubmit"===s&&(o=!1!==e.submit()&&o),o}),null,null)),l["\u0275did"](6,16384,null,0,o["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](7,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),l["\u0275did"](9,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),l["\u0275eld"](10,0,null,null,2,"formly-form",[],null,null,null,F.b,F.a)),l["\u0275prd"](512,null,k.a,k.a,[x.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](12,966656,null,0,C.a,[k.a,x.b,[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](13,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var a=s.component;n(s,4,0,a.existingUsers),n(s,7,0,a.form),n(s,12,0,a.form,a.model,a.fields,a.options)}),(function(n,s){n(s,5,0,l["\u0275nov"](s,9).ngClassUntouched,l["\u0275nov"](s,9).ngClassTouched,l["\u0275nov"](s,9).ngClassPristine,l["\u0275nov"](s,9).ngClassDirty,l["\u0275nov"](s,9).ngClassValid,l["\u0275nov"](s,9).ngClassInvalid,l["\u0275nov"](s,9).ngClassPending)}))}var R=l["\u0275ccf"]("formly-app-example",e,(function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,_,M)),l["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}),{},{},[]),S=a("o3+a"),T=a("9b0e"),N=a("6YJn"),q=a("dvHj"),O=a("C0xW"),A=a("W9sv"),G=a("m6lo"),L=a("S6Ld"),P=a("cTZo"),V=a("Kfqh"),J=a("Ienz"),D=a("KuLc"),E=a("Z7++"),I=a("2lML"),W=a("pgVP"),z=a("pk7F"),B=a("T8+l"),K=a("0hby"),Y=a("tVba"),X=a("XX7/"),Z=a("pLrJ"),Q=a("U5/R"),H=a("TqxR"),$=a("soK0"),nn=a("1k+g"),sn=a("pAed"),an=a("VtvF"),ln=a("lN7U"),on=a("NPi3"),en=a("PCNd"),pn=a("WCiw"),tn=a("Vtge"),rn=a("+5Wd"),mn=a("+R4m"),un=a("SSYk"),cn=a("KJU8"),dn=a("eTA3"),fn=a("o12O"),gn=a("iWYX"),hn=a("h18T"),jn=function(){},yn=a("qk26"),bn=a("P+xK");a.d(s,"ConfigModuleNgFactory",(function(){return vn}));var vn=l["\u0275cmf"](t,[],(function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,u.a,c.a,d.a,f.a,g.a,h.a,j.a,y.a,b.a,v.a,R]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[l.LOCALE_ID,[2,w["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,S.c,S.c,[]),l["\u0275mpd"](4608,T.c,T.c,[T.i,T.e,l.ComponentFactoryResolver,T.h,T.f,l.Injector,l.NgZone,w.DOCUMENT,N.b,[2,w.Location]]),l["\u0275mpd"](5120,T.j,T.k,[T.c]),l["\u0275mpd"](5120,q.b,q.c,[T.c]),l["\u0275mpd"](4608,O.e,A.c,[[2,A.g],[2,A.l]]),l["\u0275mpd"](5120,G.c,G.j,[T.c]),l["\u0275mpd"](4608,L.a,L.a,[]),l["\u0275mpd"](4608,P.a,P.a,[]),l["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),l["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_o"],o["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,k.a,k.a,[x.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,w.CommonModule,w.CommonModule,[]),l["\u0275mpd"](1073742336,V.b,V.b,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,J.a,J.a,[]),l["\u0275mpd"](1073742336,N.a,N.a,[]),l["\u0275mpd"](1073742336,D.g,D.g,[]),l["\u0275mpd"](1073742336,E.ScrollingModule,E.ScrollingModule,[]),l["\u0275mpd"](1073742336,T.g,T.g,[]),l["\u0275mpd"](1073742336,A.l,A.l,[[2,A.d],[2,O.f]]),l["\u0275mpd"](1073742336,q.e,q.e,[]),l["\u0275mpd"](1073742336,A.v,A.v,[]),l["\u0275mpd"](1073742336,I.j,I.j,[]),l["\u0275mpd"](1073742336,G.i,G.i,[]),l["\u0275mpd"](1073742336,G.f,G.f,[]),l["\u0275mpd"](1073742336,W.c,W.c,[]),l["\u0275mpd"](1073742336,z.c,z.c,[]),l["\u0275mpd"](1073742336,B.b,B.b,[]),l["\u0275mpd"](512,x.b,x.b,[]),l["\u0275mpd"](1024,x.a,(function(n){return[{wrappers:[{name:"form-field",component:K.a}]},{types:[{name:"input",component:Y.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:X.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:Z.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:H.a,wrappers:["form-field"]}]},{types:[{name:"select",component:$.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:nn.a}],extensions:[{name:"addons",extension:{postPopulate:sn.a}}]},an.b(n),{validationMessages:[{name:"required",message:"This field is required"}]}]}),[x.b]),l["\u0275mpd"](1073742336,an.a,an.a,[x.b,[2,x.a]]),l["\u0275mpd"](1073742336,ln.h,ln.h,[]),l["\u0275mpd"](1073742336,on.b,on.b,[]),l["\u0275mpd"](1073742336,en.a,en.a,[]),l["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_d"],o["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,pn.a,pn.a,[]),l["\u0275mpd"](1073742336,tn.a,tn.a,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,fn.a,fn.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,hn.a,hn.a,[]),l["\u0275mpd"](1073742336,jn,jn,[]),l["\u0275mpd"](1073742336,yn.t,yn.t,[[2,yn.y],[2,yn.p]]),l["\u0275mpd"](1073742336,t,t,[]),l["\u0275mpd"](1024,yn.n,(function(){return[[{path:"",component:bn.a,data:p}]]}),[])])}))},Vbvz:function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},kmQN:function(n,s,a){"use strict";a.r(s),s.default='<b>Existing usernames</b>\n<ul>\n  <li *ngFor="let u of existingUsers">{{ u }}</li>\n</ul>\n\n<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},vSMU:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup, FormControl } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  existingUsers = [\n    'user1',\n    'user2',\n    'user3',\n  ];\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Username',\n        placeholder: 'Username',\n        required: true,\n      },\n      asyncValidators: {\n        uniqueUsername: {\n          expression: (control: FormControl) => {\n            return new Promise((resolve, reject) => {\n              setTimeout(() => {\n                resolve(this.existingUsers.indexOf(control.value) === -1);\n              }, 1000);\n            });\n          },\n          message: 'This username is already taken.',\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},"xT++":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Existing usernames<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let u of existingUsers"</span>&gt;</span>{{ u }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);