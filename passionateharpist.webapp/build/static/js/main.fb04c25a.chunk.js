(this["webpackJsonppassionateharpist.webapp"]=this["webpackJsonppassionateharpist.webapp"]||[]).push([[0],{194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(27),i=a.n(n),c=a(18),s=a(43),o=a(64),l=a(5),h=a.p+"static/media/harpist-profile-2.d78c856a.jpg",p=a.p+"static/media/welcome-light.692dbec9.png",d=(a.p,a(270)),b=a(267),j=a(30),g=a(11),u=a(2),m={isDark:!1,toggle:function(){}},x=Object(r.createContext)(m),O=function(){return Object(r.useContext)(x)},f=function(e){var t=e.children,a=function(){var e=Object(r.useState)(!1),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){return n("true"===localStorage.getItem("dark"))}),[]),[a,n]}(),n=Object(g.a)(a,2),i=n[0],c=n[1];return Object(u.jsx)(x.Provider,{value:{isDark:i,toggle:function(){localStorage.setItem("dark",JSON.stringify(!i)),c((function(e){return!e}))}},children:t})};function v(){var e=Object(j.a)(),t=Object(b.a)({root:{color:e.text,flexGrow:1},text:{textAlign:"left"},welcomeImage:{width:"300px"},image:{width:"100%"},paragraph:{padding:e.spacing(2)},grid:Object(l.a)({flexWrap:"wrap-reverse !important"},e.breakpoints.up("md"),{flexWrap:"wrap !important"})})();O();return Object(u.jsxs)("div",{className:t.root,children:[Object(u.jsx)("img",{src:p,alt:"Welcome",className:t.welcomeImage}),Object(u.jsxs)("div",{className:t.text,children:[Object(u.jsx)("p",{className:t.paragraph,children:"Abigail Moore grew up in a large musical family, starting her musical training in piano and often singing harmonies with her sisters. After becoming proficient in piano, Abigail was given the freedom to pick another instrument. She was drawn to the elegance of the harp--its breathtaking appearance and angelic sound. For three years, Abigail was self-taught, but in the years to come she studied under Dr. Heidi Hernandez and Dr. Michelle Gott."}),Object(u.jsxs)(d.a,{container:!0,rowSpacing:2,columnSpacing:{xs:2,sm:2},className:t.grid,children:[Object(u.jsxs)(d.a,{item:!0,xs:12,sm:6,children:[Object(u.jsx)("p",{className:t.paragraph,children:"Abigail enjoys performing, teaching, and composing for harp. She especially loves to share her music with people who do not regularly get to hear the harp, like the elderly, children, and those who are sick. Teaching has been one of her favorite opportunities, where she emphasizes proper technique, realistic goals, and healthy relationships with her students. As she continues to grow her repertoire, her main focuses are: classical, pop, and religious music."}),Object(u.jsx)("p",{className:t.paragraph,children:"Abigail has played the harp for 10 years, performing at a range of venues, her favorites being the Orpheum Theatre, Glendale Community College, the Phoenix Praise Symphony, and Northwest Community Church. She enjoys regularly playing for a variety of places, including restaurants, assisted living homes, funeral homes, churches, and celebrations. Abigail enjoys being involved in the harp community by attending harp conferences and being a part of the American Harp Society."})]}),Object(u.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(u.jsx)("img",{src:h,className:t.image,alt:"Abigail Moore"})})]}),Object(u.jsx)("p",{className:t.paragraph,children:"Graduating in 2020 with her Associates of Fine Arts in Instrumental Performance, Abigail had worked hard during her schooling, receiving the MCCCD Artist of Promise 1st place award two years in a row, rewarded with the Albert and Lola Chatinsky Scholarship in 2019, and honored with the Outstanding Jury Award in both fall of 2018 and 2019. "})]})]})}var w=a(33),k=a.n(w),y=a(48),N=a.p+"static/media/harpist-profile.382c823e.jpg",S=a.p+"static/media/send-a-message-light.cbb6f59b.png",C=(a.p,a(266)),A=a(268),M=a(124),I=a(86),E=a.n(I);function T(){var e=function(e){if(!e.response)return{success:!1,errors:{"*":["No response from server"]}};switch(e.response.status){case 400:return e.response.data;case 500:return{success:!1,errors:{"*":["Internal server error"]}};default:return{success:!1,errors:{"*":[e.response.status]}}}},t=function(){var t=Object(y.a)(k.a.mark((function t(a,r){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},t.next=3,E()({url:a,method:"post",data:r,headers:{"Content-Type":"application/json"}}).then((function(e){n=e.data})).catch((function(t){n=e(t)}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),a=function(){var t=Object(y.a)(k.a.mark((function t(a,r){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},t.next=3,E.a.get(a,{params:r}).then((function(e){n=e.data})).catch((function(t){n=e(t)}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return{get:a,post:t}}var P=a(63);function H(){var e=Object(j.a)(),t=Object(b.a)({root:{flexGrow:1,paddingTop:e.spacing(10)},sendAMessageImage:{width:"300px"},image:{width:"100%"},submit:{marginTop:e.spacing(2),width:"100%"},error:{color:"red"},text:{color:e.text}}),a=Object(r.useRef)(),n=t(),i=(O(),T().post),c=Object(r.useState)(""),s=Object(g.a)(c,2),o=s[0],l=s[1],h=Object(r.useState)(""),p=Object(g.a)(h,2),m=p[0],x=p[1],f=Object(r.useState)(""),v=Object(g.a)(f,2),w=v[0],I=v[1],E=Object(r.useState)(""),H=Object(g.a)(E,2),D=H[0],L=H[1],G=Object(r.useState)(""),z=Object(g.a)(G,2),_=z[0],F=z[1],R=Object(r.useState)(!1),W=Object(g.a)(R,2),B=W[0],V=W[1],Y=Object(r.useState)(!1),$=Object(g.a)(Y,2),J=$[0],q=$[1],U=function(){var e=Object(y.a)(k.a.mark((function e(t){var r,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),V(!1),F(""),!(o&&m&&w&&D)){e.next=21;break}if(!a.current){e.next=18;break}return q(!0),e.next=8,a.current.executeAsync();case 8:return r=e.sent,e.next=11,i(P.SEND_MESSAGE_URL,{Token:r,Data:{Name:o,EmailOrPhone:m,Subject:w,Message:D}});case 11:n=e.sent,V(n.success),n.success?(l(""),x(""),I(""),L(""),F("Message sent!")):F(n.errors["*"]),q(!1),a.current&&a.current.reset(),e.next=19;break;case 18:F("An error occured. Please refresh the page and try again.");case 19:e.next=22;break;case 21:F("Message not sent. Please fill in all fields.");case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:n.root,children:Object(u.jsxs)(d.a,{container:!0,spacing:3,children:[Object(u.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(u.jsx)("img",{src:N,className:n.image,alt:"Abigail Moore"})}),Object(u.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(u.jsxs)("form",{onSubmit:U,children:[Object(u.jsx)("img",{src:S,alt:"Send a Message",className:n.sendAMessageImage}),Object(u.jsx)(C.a,{label:"Name",fullWidth:!0,variant:"filled",margin:"normal",value:o,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)(C.a,{label:"Email or Phone",fullWidth:!0,variant:"filled",margin:"normal",value:m,onChange:function(e){return x(e.target.value)}}),Object(u.jsx)(C.a,{label:"Subject",fullWidth:!0,variant:"filled",margin:"normal",value:w,onChange:function(e){return I(e.target.value)}}),Object(u.jsx)(C.a,{label:"Message",fullWidth:!0,variant:"filled",margin:"normal",multiline:!0,rows:4,value:D,onChange:function(e){return L(e.target.value)}}),_&&Object(u.jsx)("div",{className:B?n.text:n.error,children:_}),Object(u.jsx)(M.a,{ref:a,size:"invisible",sitekey:P.GOOGLE_RECAPTCHA_SITEKEY}),Object(u.jsx)(A.a,{variant:"contained",className:n.submit,type:"submit",disabled:J,children:"Send"})]})})]})})}var D=a(275),L=a(276),G=a(118);function z(){var e=Object(r.useState)(!1),t=Object(g.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(0),c=Object(g.a)(i,2),s=c[0],o=c[1],l=[{src:"/1.jpg"},{src:"/2.jpg"},{src:"/3.jpg"},{src:"/4.jpg"},{src:"/5.jpg"},{src:"/6.jpg"},{src:"/7.jpg"},{src:"/8.jpg"},{src:"/9.jpg"},{src:"/10.jpg"},{src:"/11.jpg"},{src:"/12.jpg"},{src:"/13.jpg"},{src:"/14.jpg"},{src:"/15.jpg"},{src:"/16.jpg"},{src:"/17.jpg"},{src:"/18.jpg"},{src:"/19.jpg"},{src:"/20.jpg"},{src:"/21.jpg"},{src:"/22.jpg"},{src:"/23.jpg"},{src:"/24.jpg"},{src:"/25.jpg"},{src:"/26.jpg"},{src:"/27.jpg"},{src:"/28.jpg"},{src:"/29.jpg"},{src:"/30.jpg"},{src:"/31.jpg"},{src:"/32.jpg"},{src:"/33.jpg"},{src:"/34.jpg"},{src:"/35.jpg"},{src:"/36.jpg"},{src:"/37.jpg"},{src:"/38.jpg"}],h=Object(j.a)(),p=Object(b.a)({root:{flexGrow:1,paddingTop:h.spacing(10)}})();return Object(u.jsxs)("div",{className:p.root,children:[Object(u.jsx)(D.a,{variant:"masonry",cols:2,gap:8,children:l.map((function(e,t){return Object(u.jsx)(L.a,{children:Object(u.jsx)("img",{srcSet:e.src,alt:"Passionate Harpist",loading:"lazy",onClick:function(){return function(e){n(!0),o(e)}(t)}})},t)}))}),a&&Object(u.jsx)(G.a,{mainSrc:l[s].src,nextSrc:l[(s+1)%l.length].src,prevSrc:l[(s+l.length-1)%l.length].src,onCloseRequest:function(){return n(!1)},onMovePrevRequest:function(){return o((s+l.length-1)%l.length)},onMoveNextRequest:function(){return o((s+1)%l.length)}})]})}var _=a(277),F=a(278),R=a(269),W=a(279),B=a(280),V=a(272),Y=a(74),$=a.n(Y),J=a(271),q=a(256);function U(){var e=Object(j.a)(),t=Object(b.a)({root:{flexGrow:1,paddingTop:e.spacing(6),color:e.text},header:{textAlign:"left"},profileImg:{maxHeight:"40px"},lazyLoad:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},mediaContent:Object(l.a)({background:"black"},e.breakpoints.up("md"),{height:"545px"}),mediaImg:{maxHeight:"100%",maxWidth:"100%"},mediaVideo:{outline:"none",maxHeight:"100%",maxWidth:"100%"},mediaText:{color:e.text},caption:{textAlign:"left",overflow:"hidden",minHeight:"117px",display:"-webkit-box","-webkitLineClamp":"5","-webkitBoxOrient":"vertical"},link:{textDecoration:"none",cursor:"pointer","&:hover":{textDecoration:"none"}}})(),a=T().get,n=Object(r.useState)([]),i=Object(g.a)(n,2),c=i[0],s=i[1],o=Object(r.useState)(!0),h=Object(g.a)(o,2),p=h[0],m=h[1],x=Object(r.useState)(""),O=Object(g.a)(x,2),f=O[0],v=O[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(y.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(P.GET_SOCIAL_MEDIA_FEED);case 2:(t=e.sent).success?s(t.data):v("Failed to load social media data. Please refresh the page and try again."),m(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsx)("div",{className:t.root,children:Object(u.jsxs)(_.a,{children:[Object(u.jsx)(d.a,{container:!0,spacing:2,children:p?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(q.a,{spacing:1,children:[Object(u.jsx)(J.a,{variant:"circular",width:40,height:40}),Object(u.jsx)(J.a,{variant:"rectangular",height:545})]})}),Object(u.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(q.a,{spacing:1,children:[Object(u.jsx)(J.a,{variant:"circular",width:40,height:40}),Object(u.jsx)(J.a,{variant:"rectangular",height:545})]})}),Object(u.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(q.a,{spacing:1,children:[Object(u.jsx)(J.a,{variant:"circular",width:40,height:40}),Object(u.jsx)(J.a,{variant:"rectangular",height:545})]})}),Object(u.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(q.a,{spacing:1,children:[Object(u.jsx)(J.a,{variant:"circular",width:40,height:40}),Object(u.jsx)(J.a,{variant:"rectangular",height:545})]})}),Object(u.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(q.a,{spacing:1,children:[Object(u.jsx)(J.a,{variant:"circular",width:40,height:40}),Object(u.jsx)(J.a,{variant:"rectangular",height:545})]})}),Object(u.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(q.a,{spacing:1,children:[Object(u.jsx)(J.a,{variant:"circular",width:40,height:40}),Object(u.jsx)(J.a,{variant:"rectangular",height:545})]})})]}):Object(u.jsx)(u.Fragment,{children:c.map((function(e){return Object(u.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(F.a,{children:[Object(u.jsx)("a",{href:e.permaLink,target:"_blank",rel:"noopener noreferrer",className:t.link,children:Object(u.jsx)(R.a,{title:"Passionate Harpist",className:t.header,avatar:Object(u.jsx)(V.a,{"aria-label":"Passionate Harpist",children:Object(u.jsx)($.a,{children:Object(u.jsx)("img",{src:N,alt:"Passionate Harpist",className:t.profileImg})})})})}),Object(u.jsx)(W.a,{className:t.mediaContent,children:"VIDEO"===e.mediaType?Object(u.jsx)($.a,{className:t.lazyLoad,children:Object(u.jsxs)("video",{controls:!0,className:t.mediaVideo,children:[Object(u.jsx)("source",{src:e.mediaUrl,type:"video/mp4"}),"Your browser does not support the video tag."]})}):Object(u.jsx)("a",{href:e.permaLink,target:"_blank",rel:"noopener noreferrer",className:t.link,children:Object(u.jsx)($.a,{className:t.lazyLoad,children:Object(u.jsx)("img",{src:e.mediaUrl,alt:"Passionate Harpist",className:t.mediaImg})})})}),Object(u.jsx)("a",{href:e.permaLink,target:"_blank",rel:"noopener noreferrer",className:t.link,children:Object(u.jsxs)(B.a,{className:t.mediaText,children:[Object(u.jsx)("p",{className:t.caption,children:e.caption}),Object(u.jsx)("p",{children:new Date(e.timestamp).toDateString()})]})})]})},e.id)}))})}),f]})})}function K(){var e=Object(j.a)(),t=Object(b.a)({root:{flexGrow:1,paddingTop:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{color:e.text}})();return Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)("div",{className:t.text,children:"404 Page Not found :("})})}var X=a(257),Z=a.p+"static/media/harpist-background.a2f05911.jpg";function Q(){var e=Object(b.a)({container:{paddingTop:"50px",paddingBottom:"100px",textAlign:"center",minHeight:"95vh"},background:{width:"100%"}})();return Object(u.jsxs)(c.d,{children:[Object(u.jsxs)(c.a,{exact:!0,path:"/",children:[Object(u.jsx)(o.a,{htmlAttributes:{lang:"en"},title:"Passionate Harpist | Abigail Moore",meta:[{name:"title",content:"Passionate Harpist | Abigail Moore"},{name:"description",content:"Harp performer and teacher in Scottsdale Arizona"},{name:"keywords",content:"harp,harpist,harp performer,harp teacher,arizona harpist,arizona harp,harp music,passionate harpist,abigail moore"}],link:[{rel:"canonical",href:"https://www.passionateharpist.com/"}]}),Object(u.jsx)("img",{src:Z,className:e.background,alt:"Passionate Harpist"}),Object(u.jsx)(X.a,{className:e.container,children:Object(u.jsx)(v,{})})]}),Object(u.jsxs)(c.a,{path:"/gallery",children:[Object(u.jsx)(o.a,{htmlAttributes:{lang:"en"},title:"Passionate Harpist | Photo Gallery",meta:[{name:"title",content:"Passionate Harpist | Photo Gallery"},{name:"description",content:"Harp performer and teacher in Scottsdale Arizona Photo Gallery"},{name:"keywords",content:"harp,harpist,harp pictures,harp performer,harp teacher,arizona harpist,arizona harp,harp music,passionate harpist,abigail moore"}],link:[{rel:"canonical",href:"https://www.passionateharpist.com/gallery"}]}),Object(u.jsx)(X.a,{className:e.container,children:Object(u.jsx)(z,{})})]}),Object(u.jsxs)(c.a,{path:"/social-media",children:[Object(u.jsx)(o.a,{htmlAttributes:{lang:"en"},title:"Passionate Harpist | Social Media",meta:[{name:"title",content:"Passionate Harpist | Social Media"},{name:"description",content:"Harp performer and teacher in Scottsdale Arizona Social Media"},{name:"keywords",content:"harp,harpist,harp instagram,harp performer,harp teacher,arizona harpist,arizona harp,harp music,passionate harpist,abigail moore"}],link:[{rel:"canonical",href:"https://www.passionateharpist.com/social-media"}]}),Object(u.jsx)(X.a,{className:e.container,children:Object(u.jsx)(U,{})})]}),Object(u.jsxs)(c.a,{path:"/contact",children:[Object(u.jsx)(o.a,{htmlAttributes:{lang:"en"},title:"Passionate Harpist | Contact",meta:[{name:"title",content:"Passionate Harpist | Contact"},{name:"description",content:"Harp performer and teacher in Scottsdale Arizona Send a Message"},{name:"keywords",content:"harp,harpist,harp for hire,harp contact,harp connect,harp performer,harp teacher,arizona harpist,arizona harp,harp music,passionate harpist,abigail moore"}],link:[{rel:"canonical",href:"https://www.passionateharpist.com/contact"}]}),Object(u.jsx)(X.a,{className:e.container,children:Object(u.jsx)(H,{})})]}),Object(u.jsx)(c.a,{component:K})]})}var ee=a(258),te=a(259),ae=a(260),re=a(282),ne=a(261),ie=a(262),ce=a.p+"static/media/harpist-logo.d83388fe.png";a(122),a(121),a(265);function se(){var e=Object(j.a)(),t=Object(b.a)({header:{position:"fixed",top:"0",width:"100%",zIndex:"1"},logo:Object(l.a)({width:"200px"},e.breakpoints.up("md"),{width:"300px"}),toggleTheme:{margin:"0 10px"},navItem:{display:"flex",alignItems:"center"},navLink:{fontSize:"16px",fontWeight:"300",color:"white !important","&:hover":{color:"lightgray !important"}},boxShadow:{boxShadow:"0 .25rem .75rem rgba(0, 0, 0, .05)",background:"rgba(0, 0, 0, 0.35)"},controls:{display:"flex",alignItems:"center"},sectionDesktop:Object(l.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(l.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})(),a=Object(r.useRef)(null),n=Object(r.useState)(!0),i=Object(g.a)(n,2),c=i[0],o=i[1],h=function(e){a.current&&!a.current.contains(e.target)&&o(!0)};return Object(r.useEffect)((function(){return document.addEventListener("click",h,!0),function(){document.removeEventListener("click",h,!0)}}),[]),Object(u.jsx)("header",{className:t.header,ref:a,children:Object(u.jsx)(ee.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white mb-3 ".concat(t.boxShadow),dark:!0,children:Object(u.jsxs)(X.a,{children:[Object(u.jsx)(te.a,{tag:s.b,to:"/",children:Object(u.jsx)("img",{src:ce,alt:"Passionate Harpist",className:t.logo})}),Object(u.jsx)("div",{className:t.controls,children:Object(u.jsx)(ae.a,{onClick:function(){o((function(e){return!e}))},className:"mr-2"})}),Object(u.jsx)(re.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!c,navbar:!0,children:Object(u.jsxs)("ul",{className:"navbar-nav flex-grow",children:[Object(u.jsx)(ne.a,{className:t.navItem,onClick:function(){return o(!0)},children:Object(u.jsx)(ie.a,{tag:s.b,className:t.navLink,to:"/",children:"Home"})}),Object(u.jsx)(ne.a,{className:t.navItem,onClick:function(){return o(!0)},children:Object(u.jsx)(ie.a,{tag:s.b,className:t.navLink,to:"/gallery",children:"Gallery"})}),Object(u.jsx)(ne.a,{className:t.navItem,onClick:function(){return o(!0)},children:Object(u.jsx)(ie.a,{tag:s.b,className:t.navLink,to:"/social-media",children:"Social Media"})}),Object(u.jsx)(ne.a,{className:t.navItem,onClick:function(){return o(!0)},children:Object(u.jsx)(ie.a,{className:t.navLink,href:"/contact",children:"Contact"})})]})})]})})})}function oe(){var e=Object(j.a)(),t=Object(b.a)({text:Object(l.a)({textAlign:"center",display:"flex",flexDirection:"column"},e.breakpoints.up("md"),{display:"block"}),textItem:{color:e.text,margin:"0 10px","&:hover":{color:e.text,textDecoration:"none"}}})();return Object(u.jsx)(X.a,{children:Object(u.jsxs)("p",{className:t.text,children:[Object(u.jsx)("a",{href:"https://www.instagram.com/passionateharpist/",target:"_blank",rel:"noopener noreferrer",className:t.textItem,children:"Instagram"}),Object(u.jsx)("a",{href:"tel:6023301729",className:t.textItem,children:"(602) 330-1729"}),Object(u.jsx)("a",{href:"https://www.google.com/maps/place/Glendale,+AZ+85304/@33.596279,-112.1942481,14z",target:"_blank",rel:"noopener noreferrer",className:t.textItem,children:"Glendale AZ"}),Object(u.jsx)("a",{href:"mailto:passionateharpist@gmail.com",className:t.textItem,children:"passionateharpist@gmail.com"})]})})}function le(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(se,{}),Object(u.jsx)(Q,{}),Object(u.jsx)(oe,{})]})}a(191),a(192),a(193),a(194);function he(e){return e.server?Object(u.jsx)(c.c,{location:e.location,context:{},children:Object(u.jsx)(le,{})}):Object(u.jsx)(s.a,{children:Object(u.jsx)(le,{})})}var pe=a(264),de=a(123),be=a(263),je=Object(de.a)(Object(be.a)({background:"#F8F8F9",gradient:"linear-gradient(#091236, #1E215D)",text:"rgb(60,60,60)",lightText:"rgb(145,145,145)",superb:"rgb(60,60,60)",general:{dark:"rgb(255,255,255)",medium:"rgb(60,60,60)",light:"#363537"},button:{text:"rgb(255,255,255)",background:"rgb(60,60,60)",hover:"rgb(90,90,90)"},divider:{backgroundColor:"#D3D3D3"},palette:{primary:{light:"rgb(60,60,60)",main:"rgb(60,60,60)"},secondary:{light:"rgb(255,255,255)",main:"rgb(255,255,255)"}},typography:{useNextVariants:!0,fontFamily:'"Times New Roman", "Times", serif'},overrides:{MuiSwitch:{thumb:{color:"#363537"}},MuiInputLabel:{root:{color:"rgb(60,60,60)"}},MuiButton:{contained:{marginTop:"16px",color:"rgb(255,255,255)",backgroundColor:"rgb(60,60,60)","&:hover":{backgroundColor:"rgb(90,90,90)"}}},MuiTypography:{root:{color:"rgb(60,60,60)"}},MuiBottomNavigationAction:{root:{minWidth:"0"}},MuiCard:{root:{backgroundColor:"rgb(255,255,255)"}},MuiCardHeader:{subheader:{color:"rgb(60,60,60)"}},MuiToolbar:{root:{justifyContent:"center"}},MuiSnackbarContent:{message:{width:"100%"}}}})),ge=(Object(de.a)(Object(be.a)({background:"#363537",gradient:"linear-gradient(#DE4DAA, #F6D327)",text:"rgb(255,255,255)",lightText:"rgb(145,145,145)",superb:"rgb(191,191,191)",general:{dark:"#363537",medium:"rgb(191,191,191)",light:"rgb(255,255,255)"},button:{text:"rgb(255,255,255)",background:"rgb(191,191,191)",hover:"rgb(212,212,212)"},divider:{backgroundColor:"#696969"},palette:{primary:{light:"#363537",main:"#363537"},secondary:{light:"rgb(255,255,255)",main:"rgb(255,255,255)"},background:{default:"#2b2b2b"}},typography:{useNextVariants:!0,fontFamily:'"Times New Roman", "Times", serif'},overrides:{MuiSwitch:{thumb:{color:"rgb(191,191,191)"},track:{backgroundColor:"rgb(255,255,255)"}},MuiTextField:{root:{color:"rgb(191,191,191)",borderColor:"rgb(191,191,191)","&:hover":{borderColor:"rgb(191,191,191)",color:"rgb(191,191,191)"}},outlined:{color:"rgb(191,191,191)",borderColor:"rgb(191,191,191)","&:hover":{borderColor:"rgb(191,191,191)",color:"rgb(191,191,191)"}}},MuiInputLabel:{outlined:{color:"rgb(191,191,191)","&$focused":{color:"rgb(191,191,191)"}},filled:{color:"rgb(191,191,191)","&$focused":{color:"rgb(191,191,191)"}}},MuiFormLabel:{root:{"&$focused":{color:"rgb(191,191,191)"}}},MuiOutlinedInput:{notchedOutline:{borderColor:"rgb(191,191,191)",color:"rgb(191,191,191)","&:hover":{color:"rgb(191,191,191)",borderColor:"rgb(191,191,191)"}},root:{color:"rgb(191,191,191)","&$focused":{color:"rgb(191,191,191)"},"&:hover":{color:"rgb(191,191,191)",borderColor:"rgb(191,191,191)"}}},MuiFilledInput:{root:{color:"rgb(191,191,191)","&$focused":{color:"rgb(191,191,191)"}}},MuiButton:{contained:{marginTop:"16px",color:"rgb(10,10,10)",backgroundColor:"rgb(191,191,191)","&:hover":{backgroundColor:"rgb(150,150,150)"}}},MuiTypography:{root:{color:"rgb(255,255,255)"}},MuiCard:{root:{backgroundColor:"#363537"}},MuiPaper:{root:{backgroundColor:"#363537"}},MuiBottomNavigationAction:{root:{minWidth:"0"}},MuiToolbar:{root:{justifyContent:"center"}},MuiIconButton:{colorPrimary:{color:"rgb(191,191,191)"}},MuiSnackbarContent:{message:{width:"100%"}},MuiCardHeader:{subheader:{color:"#A9A9A9"}}}})),a(273));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(){O();return Object(u.jsx)(f,{children:Object(u.jsxs)(ge.a,{theme:je,children:[Object(u.jsx)(pe.a,{}),Object(u.jsx)(he,{client:!0})]})})}i.a.hydrate(Object(u.jsx)(ue,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e){e.exports=JSON.parse('{"SEND_MESSAGE_URL":"https://passionate-harpist-api.herokuapp.com/api/Contact/SendMessage","GET_SOCIAL_MEDIA_FEED":"https://passionate-harpist-api.herokuapp.com/api/Media/GetSocialMediaFeed","GET_SOCIAL_MEDIA_REFRESH_TOKEN":"https://passionate-harpist-api.herokuapp.com/api/Media/RefreshSocialMediaToken","GOOGLE_RECAPTCHA_SITEKEY":"6LeCY4EbAAAAAPOvjYS18Ab0XaRHMYTk7VXzu26k"}')}},[[195,1,2]]]);
//# sourceMappingURL=main.fb04c25a.chunk.js.map