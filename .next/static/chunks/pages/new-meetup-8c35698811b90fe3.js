(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{1662:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-meetup",function(){return r(9760)}])},4117:function(e,n,r){"use strict";var t=r(5893),i=r(7849),s=r.n(i);n.Z=function(e){return(0,t.jsx)("div",{className:s().card,children:e.children})}},9760:function(e,n,r){"use strict";function t(e,n,r,t,i,s,o){try{var u=e[s](o),c=u.value}catch(a){return void r(a)}u.done?n(c):Promise.resolve(c).then(t,i)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(i,s){var o=e.apply(n,r);function u(e){t(o,i,s,u,c,"next",e)}function c(e){t(o,i,s,u,c,"throw",e)}u(void 0)}))}}r.r(n),r.d(n,{default:function(){return m}});var s=r(7582),o=r(5893),u=r(7294),c=r(9008),a=r.n(c),d=r(4117),l=r(316),f=r.n(l);var p=function(e){var n=(0,u.useRef)(),r=(0,u.useRef)(),t=(0,u.useRef)(),i=(0,u.useRef)();return(0,o.jsx)(d.Z,{children:(0,o.jsxs)("form",{className:f().form,onSubmit:function(s){s.preventDefault();var o={title:n.current.value,image:r.current.value,address:t.current.value,description:i.current.value};e.onAddMeetup(o)},children:[(0,o.jsxs)("div",{className:f().control,children:[(0,o.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),(0,o.jsx)("input",{type:"text",required:!0,id:"title",ref:n})]}),(0,o.jsxs)("div",{className:f().control,children:[(0,o.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),(0,o.jsx)("input",{type:"url",required:!0,id:"image",ref:r})]}),(0,o.jsxs)("div",{className:f().control,children:[(0,o.jsx)("label",{htmlFor:"address",children:"Address"}),(0,o.jsx)("input",{type:"text",required:!0,id:"address",ref:t})]}),(0,o.jsxs)("div",{className:f().control,children:[(0,o.jsx)("label",{htmlFor:"description",children:"Description"}),(0,o.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:i})]}),(0,o.jsx)("div",{className:f().actions,children:(0,o.jsx)("button",{children:"Add Meetup"})})]})})},h=r(1163);var m=function(){var e=(0,h.useRouter)();function n(){return(n=i((function(n){var r;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,fetch("/api/new-meetup",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})];case 1:return[4,t.sent().json()];case 2:return r=t.sent(),console.log(r),e.push("/"),[2]}}))}))).apply(this,arguments)}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"Add a new Meetup."}),(0,o.jsx)("meta",{name:"description",content:"Add your own meetups and create amazing memories."})]}),(0,o.jsx)(p,{onAddMeetup:function(e){return n.apply(this,arguments)}})]})}},316:function(e){e.exports={form:"NewMeetupForm_form__dA95d",control:"NewMeetupForm_control__jRNhP",actions:"NewMeetupForm_actions__2fkck"}},7849:function(e){e.exports={card:"Card_card__73YTa"}},9008:function(e,n,r){e.exports=r(5443)},1163:function(e,n,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return n=1662,e(e.s=n);var n}));var n=e.O();_N_E=n}]);