(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,a,t){},112:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(27),r=t.n(i),s=(t(58),t(60),t(114)),l=t(9),c=t(10),m=t(12),u=t(11),f=t(13),d=t(3),p=t(116),v=t(32),b=t.n(v),N=t(33),_=t.n(N),h=t(21),P=t.n(h),E=[{to:"/",label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",exact:!0},{to:"/catalog/",label:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433",exact:!1},{to:"/constructor/",label:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",exact:!1}],g=function(e){var a=e.user;return o.a.createElement("ul",{className:P.a.MainNav},a&&E.map(function(e,a){var t=a+e;return o.a.createElement("li",{key:t,className:P.a.MainNavItem},o.a.createElement(p.a,{to:e.to,exact:e.exact,className:P.a.MainNavItemLink,activeClassName:P.a.MainNavItemLinkActive},e.label))}))};g.defaultProps={user:null};var I=g,k=t(22),C=t.n(k),w=function(e){var a=e.user,t=e.onLogIn,n=e.onLogOut;return o.a.createElement("div",{className:C.a.UserNav},a?o.a.createElement("div",{className:C.a.UserNavPicWrapper,title:a.displayName},o.a.createElement("img",{className:C.a.UserNavPic,src:a.photoURL,alt:a.displayName})):null,o.a.createElement("button",{className:C.a.UserNavBtn,type:"button",onClick:a?n:t},a?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438"))};w.defaultProps={user:null};var O=w,y=function(e){var a=e.user,t=e.onLogIn,n=e.onLogOut;return o.a.createElement("nav",{className:_.a.Navigation},o.a.createElement("div",{className:_.a.NavigationWrapper},o.a.createElement(I,{user:a}),o.a.createElement(O,{user:a,onLogIn:t,onLogOut:n})))};y.defaultProps={user:null};var L=y,j=function(e){var a=e.user,t=e.onLogIn,n=e.onLogOut;return o.a.createElement("header",{className:b.a.Header},o.a.createElement(p.a,{className:b.a.HeaderLogo,to:"/"},"\u0418\u043d\u0441\u0430\u0439\u0434\u0438\u044f"),o.a.createElement(L,{user:a,onLogIn:t,onLogOut:n}))};j.defaultProps={user:null};var A=j,M=t(118),x=t(67),S=t(115),F=t(117),T=t(34),B=t.n(T),q=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props;return o.a.createElement("div",{className:B.a.Layout},o.a.createElement("main",{className:B.a.LayoutMain},e.children))}}]),a}(n.Component),R=t(45),D=t.n(R),U=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:D.a.Main},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")}}]),a}(n.Component),W=t(19),V=t(35),J=t.n(V),H=t(23),Z=t.n(H),K=[{to:"/catalog/companies",label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",exact:!1},{to:"/catalog/professions",label:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438",exact:!1},{to:"/catalog/producers",label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0442\u0435\u0441\u0442\u043e\u0432",exact:!1}],z=function(){return o.a.createElement("nav",{className:Z.a.Navigation},K.map(function(e,a){var t=a+e;return o.a.createElement("li",{key:t,className:Z.a.NavigationItem},o.a.createElement(p.a,{to:e.to,exact:e.exact,className:Z.a.NavigationItemLink,activeClassName:Z.a.NavigationItemLinkActive},e.label))}))},G=t(46),Q=t.n(G),X=function(){return o.a.createElement("div",{className:Q.a.Companies},"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438")},Y=t(47),$=t.n(Y),ee=t(7),ae=t.n(ee),te=function(e){var a=e.img,t=e.name,n=e.title,i=e.description,r=e.dribble,s=e.behance,l=e.twitter;return o.a.createElement("div",{className:ae.a.Profession},o.a.createElement("div",{className:ae.a.ProfessionWrapper},o.a.createElement("div",{className:ae.a.ProfessionTopIcons},o.a.createElement("i",{className:"fas fa-long-arrow-alt-left"}),o.a.createElement("i",{className:"fas fa-ellipsis-v"}),o.a.createElement("i",{className:"far fa-heart"})),o.a.createElement("div",{className:ae.a.ProfessionProfile},o.a.createElement("img",{src:a,className:ae.a.ProfessionThumbail,alt:""}),o.a.createElement("div",{className:ae.a.ProfessionProfileCheck},o.a.createElement("i",{className:"fas fa-check"})),o.a.createElement("h3",{className:ae.a.ProfessionProfileName},t),o.a.createElement("p",{className:ae.a.ProfessionProfileTitle},n),o.a.createElement("p",{className:ae.a.ProfessionProfileDescription},i),o.a.createElement("button",{className:ae.a.ProfessionProfileBtn,type:"button"},"Hire Me")),o.a.createElement("div",{className:ae.a.ProfessionSocialIcons},o.a.createElement("div",{className:ae.a.ProfessionSocialIcon},o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fab fa-dribbble"})),o.a.createElement("h4",null,r),o.a.createElement("p",null,"Followers")),o.a.createElement("div",{className:ae.a.ProfessionSocialIcon},o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fab fa-behance"})),o.a.createElement("h4",null,s),o.a.createElement("p",null,"Followers")),o.a.createElement("div",{className:ae.a.ProfessionSocialIcon},o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fab fa-twitter"})),o.a.createElement("h4",null,l),o.a.createElement("p",null,"Followers")))))},ne="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",oe="Beverly Little",ie="JAVASCRIPT DEVELOPER",re="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",se={dribble:"12.8k",behance:"12.8k",twitter:"12.8k"},le=function(){return o.a.createElement("div",{className:$.a.Professions},new Array(10).fill(null).map(function(e,a){var t=a;return o.a.createElement(te,{key:t,dribble:se.dribble,behance:se.behance,img:ne,name:"".concat(a+1,". ").concat(oe),title:ie,description:re,twitter:se.twitter})}))},ce=t(48),me=t.n(ce),ue=function(){return o.a.createElement("div",{className:me.a.Producers},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0442\u0435\u0441\u0442\u043e\u0432")},fe=(t(85),Object(F.a)(function(e){var a=e.location;return o.a.createElement(W.TransitionGroup,{className:"transition-group"},o.a.createElement(W.CSSTransition,{key:a.key,timeout:300,classNames:"fade"},o.a.createElement("section",{className:"route-section"},o.a.createElement("div",{className:J.a.CatalogContent},o.a.createElement(M.a,{location:a},o.a.createElement(x.a,{path:"".concat("/insideland","/catalog/companies"),component:X}),o.a.createElement(x.a,{path:"".concat("/insideland","/catalog/professions"),component:le}),o.a.createElement(x.a,{path:"".concat("/insideland","/catalog/producers"),component:ue}))))))})),de=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:J.a.Catalog},o.a.createElement(z,null),o.a.createElement(fe,null))}}]),a}(n.Component),pe=t(36),ve=t.n(pe),be=t(24),Ne=t.n(be),_e=[{to:"/constructor/companies",label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",exact:!1},{to:"/constructor/professions",label:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438",exact:!1},{to:"/constructor/producers",label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0442\u0435\u0441\u0442\u043e\u0432",exact:!1}],he=function(){return o.a.createElement("nav",{className:Ne.a.Navigation},_e.map(function(e,a){var t=a+e;return o.a.createElement("li",{key:t,className:Ne.a.NavigationItem},o.a.createElement(p.a,{to:e.to,exact:e.exact,className:Ne.a.NavigationItemLink,activeClassName:Ne.a.NavigationItemLinkActive},e.label))}))},Pe=t(50),Ee=t.n(Pe),ge=function(){return o.a.createElement("div",{className:Ee.a.Companies},"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438")},Ie=t(51),ke=t(17),Ce=t(37),we=t.n(Ce),Oe=t(14),ye=t.n(Oe),Le=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={name:"",title:"",description:""},t.onChange=t.onChange.bind(Object(d.a)(Object(d.a)(t))),t.onSubmit=t.onSubmit.bind(Object(d.a)(Object(d.a)(t))),t.onReset=t.onReset.bind(Object(d.a)(Object(d.a)(t))),t}return Object(f.a)(a,e),Object(c.a)(a,[{key:"onChange",value:function(e){var a=e.target;this.setState(Object(ke.a)({},a.name,a.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var a=this.state;this.props.onSubmit(a),this.reset()}},{key:"onReset",value:function(){this.reset()}},{key:"reset",value:function(){this.setState({name:"",title:"",description:""})}},{key:"render",value:function(){var e=this.state;return o.a.createElement("section",{className:ye.a.AddNewItem},o.a.createElement("form",{className:ye.a.AddNewItemForm,onSubmit:this.onSubmit},o.a.createElement("label",{className:ye.a.AddNewItemLabel,htmlFor:"name"},o.a.createElement("input",{className:ye.a.AddNewItemInput,type:"text",id:"name",name:"name",value:e.name,onChange:this.onChange,placeholder:"Name",required:!0})),o.a.createElement("label",{className:ye.a.AddNewItemLabel,htmlFor:"title"},o.a.createElement("input",{className:ye.a.AddNewItemInput,type:"text",id:"title",name:"title",value:e.title,onChange:this.onChange,placeholder:"Title",required:!0})),o.a.createElement("label",{className:ye.a.AddNewItemLabel,htmlFor:"description"},o.a.createElement("input",{className:ye.a.AddNewItemInput,type:"text",id:"description",name:"description",value:e.description,onChange:this.onChange,placeholder:"Description",required:!0})),o.a.createElement("div",{className:ye.a.AddNewItemActions},o.a.createElement("button",{className:ye.a.AddNewItemActionBtn,type:"submit"},"Submit"),o.a.createElement("button",{className:ye.a.AddNewItemActionBtn,type:"button",onClick:this.onReset},"Reset"))))}}]),a}(n.Component),je=t(8),Ae=t.n(je),Me=function(e){var a=e.id,t=e.img,n=e.name,i=e.title,r=e.description,s=e.dribble,l=e.behance,c=e.twitter,m=e.isEditable,u=e.onRemoveBtnClick,f=e.isFavorite,d=e.onFavoriteBtnClick;return o.a.createElement("div",{className:Ae.a.Profession},o.a.createElement("div",{className:Ae.a.ProfessionWrapper},o.a.createElement("div",{className:Ae.a.ProfessionTopIcons},m&&o.a.createElement("button",{onClick:function(){return u(a)},type:"button"},o.a.createElement("i",{className:"fas fa-times"})),o.a.createElement("button",{type:"button",onClick:function(){return d(a)}},o.a.createElement("i",{className:f?"fa fa-heart":"far fa-heart"})),o.a.createElement("i",{className:"fas fa-ellipsis-v"})),o.a.createElement("div",{className:Ae.a.ProfessionProfile},o.a.createElement("img",{src:t,className:Ae.a.ProfessionThumbail,alt:""}),o.a.createElement("div",{className:Ae.a.ProfessionProfileCheck},o.a.createElement("i",{className:"fas fa-check"})),o.a.createElement("h3",{className:Ae.a.ProfessionProfileName},n),o.a.createElement("p",{className:Ae.a.ProfessionProfileTitle},i),o.a.createElement("p",{className:Ae.a.ProfessionProfileDescription},r),o.a.createElement("button",{className:Ae.a.ProfessionProfileBtn,type:"button"},"Hire Me")),o.a.createElement("div",{className:Ae.a.ProfessionSocialIcons},o.a.createElement("div",{className:Ae.a.ProfessionSocialIcon},o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fab fa-dribbble"})),o.a.createElement("h4",null,s),o.a.createElement("p",null,"Followers")),o.a.createElement("div",{className:Ae.a.ProfessionSocialIcon},o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fab fa-behance"})),o.a.createElement("h4",null,l),o.a.createElement("p",null,"Followers")),o.a.createElement("div",{className:Ae.a.ProfessionSocialIcon},o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fab fa-twitter"})),o.a.createElement("h4",null,c),o.a.createElement("p",null,"Followers")))))};Me.defaultProps={img:"",title:"",dribble:"",behance:"",twitter:"",isEditable:!1};var xe=Me,Se=t(31),Fe=t.n(Se),Te=function(e){var a=e.onCancel,t=e.children;return o.a.createElement("section",{className:Fe.a.BackDrop},o.a.createElement("div",{className:Fe.a.Modal},t,o.a.createElement("button",{className:Fe.a.ModalCloseBtn,type:"button",onClick:a})))},Be=t(25),qe=t.n(Be);qe.a.initializeApp({apiKey:"AIzaSyC5aoy2IrFSdXyYJOI5z9hTQVjQArOwGaI",authDomain:"insideland-a1eae.firebaseapp.com",databaseURL:"https://insideland-a1eae.firebaseio.com",projectId:"insideland-a1eae",storageBucket:"insideland-a1eae.appspot.com",messagingSenderId:"110475419154"});var Re=new qe.a.auth.GoogleAuthProvider,De=qe.a.auth(),Ue=qe.a,We=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={modal:{id:null,isOpen:!1},items:[]},t.removeCard=t.removeCard.bind(Object(d.a)(Object(d.a)(t))),t.showModal=t.showModal.bind(Object(d.a)(Object(d.a)(t))),t.hideModal=t.hideModal.bind(Object(d.a)(Object(d.a)(t))),t.handleChange=t.handleChange.bind(Object(d.a)(Object(d.a)(t))),t.addToFavorite=t.addToFavorite.bind(Object(d.a)(Object(d.a)(t))),t}return Object(f.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.itemsRef=Ue.database().ref("professions"),this.itemsRef.on("value",function(a){var t=a.val(),n=[];Object.keys(t||{}).forEach(function(e){n.push({id:e,name:t[e].name,title:t[e].title,description:t[e].description,isFavorite:t[e].isFavorite})}),e.setState({items:n})})}},{key:"componentWillUnmount",value:function(){this.itemsRef.off()}},{key:"addItem",value:function(e){var a=Ue.database().ref("professions"),t={name:e.name,title:e.title,description:e.description,isFavorite:!1};a.push(t),this.hideModal()}},{key:"showModal",value:function(e){this.setState({modal:{id:e,isOpen:!0}})}},{key:"hideModal",value:function(){this.setState({modal:{id:null,isOpen:!1}})}},{key:"removeCard",value:function(e){e.preventDefault();var a=this.state.modal;Ue.database().ref("/professions/".concat(a.id)).remove(),this.hideModal()}},{key:"handleChange",value:function(e){var a=this.state.newItem,t=Object(ke.a)({},e.target.name,e.target.value);this.setState({newItem:Object(Ie.a)({},a,t)}),this.hideModal()}},{key:"addToFavorite",value:function(e){var a=this.state.items.filter(function(a){return a.id===e})[0];Ue.database().ref("/professions/".concat(e)).update({isFavorite:!a.isFavorite})}},{key:"render",value:function(){var e=this,a=this.state,t=a.items,n=a.modal;return o.a.createElement("div",{className:we.a.Professions},o.a.createElement("button",{className:we.a.NewProfessionBtn,onClick:function(){return e.showModal()},type:"button"}),t.map(function(a){return o.a.createElement(xe,{key:a.id,id:a.id,isFavorite:a.isFavorite,img:a.img,name:a.name,title:a.title,description:a.description,isEditable:!0,onRemoveBtnClick:e.showModal,onFavoriteBtnClick:e.addToFavorite})}),n.isOpen&&n.id&&o.a.createElement(Te,{onCancel:this.hideModal},o.a.createElement("button",{style:{marginBottom:15},className:"btn",onClick:this.removeCard,type:"button"},"Delete"),o.a.createElement("button",{className:"btn",onClick:this.hideModal,type:"button"},"Cancel")),n.isOpen&&!n.id&&o.a.createElement(Te,{onCancel:this.hideModal},o.a.createElement(Le,{onSubmit:function(a){return e.addItem(a)}})))}}],[{key:"getModalContent",value:function(){return o.a.createElement("div",null,"test")}}]),a}(n.Component),Ve=t(52),Je=t.n(Ve),He=function(){return o.a.createElement("div",{className:Je.a.Producers},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0442\u0435\u0441\u0442\u043e\u0432")},Ze=(t(109),[{id:1,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}},{id:2,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}},{id:3,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}},{id:4,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}},{id:5,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}}]),Ke=Object(F.a)(function(e){var a=e.location;return o.a.createElement(W.TransitionGroup,{className:"transition-group"},o.a.createElement(W.CSSTransition,{key:a.key,timeout:300,classNames:"fade"},o.a.createElement("section",{className:"route-section"},o.a.createElement("div",{className:ve.a.ConstructorContent},o.a.createElement(M.a,{location:a},o.a.createElement(x.a,{path:"/constructor/companies",component:ge}),o.a.createElement(x.a,{path:"/constructor/professions",render:function(){return o.a.createElement(We,{data:Ze})}}),o.a.createElement(x.a,{path:"/constructor/producers",component:He}))))))}),ze=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:ve.a.Constructor},o.a.createElement(he,null),o.a.createElement(Ke,null))}}]),a}(n.Component),Ge=function(e){var a=e.user;return o.a.createElement(q,null,a?o.a.createElement(M.a,null,o.a.createElement(x.a,{path:"/",exact:!0,component:U}),o.a.createElement(S.a,{from:"/catalog",exact:!0,to:"/catalog/companies"}),o.a.createElement(x.a,{path:"/catalog/",component:de}),o.a.createElement(S.a,{from:"/constructor",exact:!0,to:"/constructor/companies"}),o.a.createElement(x.a,{path:"/constructor",component:ze})):null)};Ge.defaultProps={user:null};var Qe=Object(F.a)(Ge),Xe=t(26),Ye=t.n(Xe),$e=function(){return o.a.createElement("footer",{className:Ye.a.Footer},o.a.createElement("div",{className:Ye.a.FooterWrapper},o.a.createElement(p.a,{className:Ye.a.FooterLogo,to:"/"},"\u0418\u043d\u0441\u0430\u0439\u0434\u0438\u044f, 2018"),o.a.createElement("div",null,"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c:",o.a.createElement("a",{className:Ye.a.FooterContactEmail,href:"mailto:info@insideland.ru"},"info@insideland.ru"))))},ea=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={user:null},t.login=t.login.bind(Object(d.a)(Object(d.a)(t))),t.logout=t.logout.bind(Object(d.a)(Object(d.a)(t))),t}return Object(f.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;De.onAuthStateChanged(function(a){a&&e.setState({user:a})})}},{key:"login",value:function(){var e=this;De.signInWithPopup(Re).then(function(a){var t=a.user;e.setState({user:t})})}},{key:"logout",value:function(){var e=this;De.signOut().then(function(){e.setState({user:null})})}},{key:"render",value:function(){var e=this.state;return o.a.createElement("div",{className:"app"},o.a.createElement(A,{user:e.user,onLogIn:this.login,onLogOut:this.logout}),o.a.createElement(Qe,{user:e.user}),o.a.createElement($e,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var aa=o.a.createElement(s.a,null,o.a.createElement(ea,null));r.a.render(aa,document.querySelector(".root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},14:function(e,a,t){e.exports={AddNewItemLabel:"AddNewItem_AddNewItemLabel__i61ul",AddNewItemInputFile:"AddNewItem_AddNewItemInputFile__2v3xv",AddNewItemInput:"AddNewItem_AddNewItemInput__SpXzt",AddNewItemActions:"AddNewItem_AddNewItemActions__1OuK1",AddNewItemActionBtn:"AddNewItem_AddNewItemActionBtn___rxJi"}},21:function(e,a,t){e.exports={MainNav:"MainNav_MainNav__2UaTd",MainNavItem:"MainNav_MainNavItem__EFN9i",MainNavItemLink:"MainNav_MainNavItemLink__c9igf",MainNavItemLinkActive:"MainNav_MainNavItemLinkActive__1rG58"}},22:function(e,a,t){e.exports={UserNav:"UserNav_UserNav__3Wgsg",UserNavPicWrapper:"UserNav_UserNavPicWrapper__1IdPZ",UserNavPic:"UserNav_UserNavPic__29CX0",UserNavBtn:"UserNav_UserNavBtn__h0JY0"}},23:function(e,a,t){e.exports={Navigation:"Navigation_Navigation__HKpH2",NavigationItem:"Navigation_NavigationItem__CKtU4",NavigationItemLink:"Navigation_NavigationItemLink__3Qx-Z",NavigationItemLinkActive:"Navigation_NavigationItemLinkActive__1k69l"}},24:function(e,a,t){e.exports={Navigation:"Navigation_Navigation__1M8As",NavigationItem:"Navigation_NavigationItem__39-xc",NavigationItemLink:"Navigation_NavigationItemLink__1IWnU",NavigationItemLinkActive:"Navigation_NavigationItemLinkActive__2Iv8b"}},26:function(e,a,t){e.exports={Footer:"Footer_Footer__-uVQA",FooterWrapper:"Footer_FooterWrapper__8-bR1",FooterLogo:"Footer_FooterLogo__2T9R0",FooterContactEmail:"Footer_FooterContactEmail__3BE8B"}},31:function(e,a,t){e.exports={BackDrop:"Modal_BackDrop__cJVTJ",Modal:"Modal_Modal__KZTbW",ModalBtn:"Modal_ModalBtn__3YnbX",ModalCloseBtn:"Modal_ModalCloseBtn__35Jbp"}},32:function(e,a,t){e.exports={Header:"Header_Header__1Uxlg",HeaderLogo:"Header_HeaderLogo__2tc90"}},33:function(e,a,t){e.exports={Navigation:"Navigation_Navigation__1NNH1",NavigationWrapper:"Navigation_NavigationWrapper__bi3Kc"}},34:function(e,a,t){e.exports={Layout:"Layout_Layout__TneR8",LayoutMain:"Layout_LayoutMain__tEONl"}},35:function(e,a,t){e.exports={Catalog:"Catalog_Catalog__3fkJa",CatalogContent:"Catalog_CatalogContent__120rt"}},36:function(e,a,t){e.exports={Constructor:"Constructor_Constructor__39fST",ConstructorContent:"Constructor_ConstructorContent__1S6sX"}},37:function(e,a,t){e.exports={Professions:"Professions_Professions__1llpC",NewProfessionBtn:"Professions_NewProfessionBtn__2hZ8D"}},45:function(e,a,t){e.exports={Main:"Main_Main__UccHe"}},46:function(e,a,t){e.exports={Companies:"Companies_Companies__2Z4Vp"}},47:function(e,a,t){e.exports={Professions:"Professions_Professions__NTVgr"}},48:function(e,a,t){e.exports={Producers:"Producers_Producers__1AWwU"}},50:function(e,a,t){e.exports={Companies:"Companies_Companies__Cz6av"}},52:function(e,a,t){e.exports={Producers:"Producers_Producers__3tpW9"}},53:function(e,a,t){e.exports=t(112)},60:function(e,a,t){},7:function(e,a,t){e.exports={Profession:"Profession_Profession__23mgc",ProfessionWrapper:"Profession_ProfessionWrapper__1BBae",ProfessionTopIcons:"Profession_ProfessionTopIcons__1ZZlV",ProfessionProfile:"Profession_ProfessionProfile__1FjGq",ProfessionProfileCheck:"Profession_ProfessionProfileCheck__2a8DT",ProfessionThumbail:"Profession_ProfessionThumbail__D4iZC",ProfessionProfileName:"Profession_ProfessionProfileName__1pIE4",ProfessionProfileTitle:"Profession_ProfessionProfileTitle__48JuH",ProfessionProfileDescription:"Profession_ProfessionProfileDescription__154KA",ProfessionProfileBtn:"Profession_ProfessionProfileBtn__3Mz9T",ProfessionSocialIcons:"Profession_ProfessionSocialIcons__1qpbl",ProfessionSocialIcon:"Profession_ProfessionSocialIcon__2jV9l"}},8:function(e,a,t){e.exports={Profession:"Profession_Profession__2r4Tv",ProfessionWrapper:"Profession_ProfessionWrapper__ZyVwx",ProfessionTopIcons:"Profession_ProfessionTopIcons__127-H",ProfessionProfile:"Profession_ProfessionProfile__2nI3t",ProfessionProfileCheck:"Profession_ProfessionProfileCheck__1_QJt",ProfessionThumbail:"Profession_ProfessionThumbail__3wh9O",ProfessionProfileName:"Profession_ProfessionProfileName__3_k8f",ProfessionProfileTitle:"Profession_ProfessionProfileTitle__3P4iu",ProfessionProfileDescription:"Profession_ProfessionProfileDescription__2gbSy",ProfessionProfileBtn:"Profession_ProfessionProfileBtn__1MhPh",ProfessionSocialIcons:"Profession_ProfessionSocialIcons__3wbJ0",ProfessionSocialIcon:"Profession_ProfessionSocialIcon__34QzK"}},85:function(e,a,t){}},[[53,2,1]]]);
//# sourceMappingURL=main.15bb8b4e.chunk.js.map