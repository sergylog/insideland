(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},112:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(28),s=a.n(o),r=(a(60),a(62),a(117)),l=a(6),c=a(7),m=a(10),d=a(8),u=a(9),f=a(3),p=a(121),v=a(33),b=a.n(v),N=a(34),h=a.n(N),_=a(22),E=a.n(_),P=[{to:"".concat("/insideland","/"),label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",exact:!0},{to:"".concat("/insideland","/catalog/"),label:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433",exact:!1},{to:"".concat("/insideland","/constructor/"),label:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",exact:!1}],g=function(e){var t=e.user;return i.a.createElement("ul",{className:E.a.MainNav},t&&P.map(function(e,t){var a=t+e;return i.a.createElement("li",{key:a,className:E.a.MainNavItem},i.a.createElement(p.a,{to:e.to,exact:e.exact,className:E.a.MainNavItemLink,activeClassName:E.a.MainNavItemLinkActive},e.label))}))};g.defaultProps={user:null};var I=g,w=a(23),k=a.n(w),C=function(e){var t=e.user,a=e.onLogIn,n=e.onLogOut;return i.a.createElement("div",{className:k.a.UserNav},t?i.a.createElement("div",{className:k.a.UserNavPicWrapper,title:t.displayName},i.a.createElement("img",{className:k.a.UserNavPic,src:t.photoURL,alt:t.displayName})):null,i.a.createElement("button",{className:k.a.UserNavBtn,type:"button",onClick:t?n:a},t?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438"))};C.defaultProps={user:null};var A=C,O=function(e){var t=e.user,a=e.onLogIn,n=e.onLogOut;return i.a.createElement("nav",{className:h.a.Navigation},i.a.createElement("div",{className:h.a.NavigationWrapper},i.a.createElement(I,{user:t}),i.a.createElement(A,{user:t,onLogIn:a,onLogOut:n})))};O.defaultProps={user:null};var y=O,j=function(e){var t=e.user,a=e.onLogIn,n=e.onLogOut;return i.a.createElement("header",{className:b.a.Header},i.a.createElement(p.a,{className:b.a.HeaderLogo,to:"/"},"\u0418\u043d\u0441\u0430\u0439\u0434\u0438\u044f"),i.a.createElement(y,{user:t,onLogIn:a,onLogOut:n}))};j.defaultProps={user:null};var L=j,M=a(120),B=a(47),F=a(118),S=a(119),x=a(35),T=a.n(x),R=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props;return i.a.createElement("div",{className:T.a.Layout},i.a.createElement("main",{className:T.a.LayoutMain},e.children))}}]),t}(n.Component),D=a(48),U=a.n(D),W=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:U.a.Main},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")}}]),t}(n.Component),q=a(19),V=a(36),H=a.n(V),J=a(24),Z=a.n(J),z=[{to:"".concat("/insideland","/catalog/companies"),label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",exact:!1},{to:"".concat("/insideland","/catalog/professions"),label:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438",exact:!1},{to:"".concat("/insideland","/catalog/producers"),label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0442\u0435\u0441\u0442\u043e\u0432",exact:!1}],G=function(){return i.a.createElement("nav",{className:Z.a.Navigation},z.map(function(e,t){var a=t+e;return i.a.createElement("li",{key:a,className:Z.a.NavigationItem},i.a.createElement(p.a,{to:e.to,exact:e.exact,className:Z.a.NavigationItemLink,activeClassName:Z.a.NavigationItemLinkActive},e.label))}))},K=a(49),Q=a.n(K),X=function(){return i.a.createElement("div",{className:Q.a.Companies},"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438")},Y=a(37),$=a.n(Y),ee=a(13),te=a.n(ee),ae=function(e){var t=e.id,a=e.image,n=e.name,o=e.title,s=e.description,r=e.dribble,l=e.behance,c=e.twitter,m=e.isEditable,d=e.onRemoveBtnClick,u=e.onEditBtnClick,f=e.isFavorite,p=e.onFavoriteBtnClick;return i.a.createElement("div",{className:te.a.Profession},i.a.createElement("div",{className:te.a.ProfessionWrapper},i.a.createElement("div",{className:te.a.ProfessionTopIcons},m&&i.a.createElement("button",{onClick:function(){return d(t)},type:"button"},i.a.createElement("i",{className:"far fa-times-circle"})),i.a.createElement("button",{type:"button",onClick:function(){return m&&p(t)}},i.a.createElement("i",{className:f?"fa fa-heart":"far fa-heart"})),m&&i.a.createElement("button",{type:"button",onClick:function(){return u(t)}},i.a.createElement("i",{className:"far fa-edit"}))),i.a.createElement("div",{className:te.a.ProfessionProfile},i.a.createElement("img",{src:a||"img/default.png",className:te.a.ProfessionThumbail,alt:""}),i.a.createElement("div",{className:te.a.ProfessionProfileCheck},i.a.createElement("i",{className:"fas fa-check"})),i.a.createElement("h3",{className:te.a.ProfessionProfileName},n),i.a.createElement("p",{className:te.a.ProfessionProfileTitle},o),i.a.createElement("p",{className:te.a.ProfessionProfileDescription},s),i.a.createElement("button",{className:te.a.ProfessionProfileBtn,type:"button"},"Hire Me")),i.a.createElement("div",{className:te.a.ProfessionSocialIcons},i.a.createElement("div",{className:te.a.ProfessionSocialIcon},i.a.createElement("a",{href:"/"},i.a.createElement("i",{className:"fab fa-dribbble"})),i.a.createElement("h4",null,r),i.a.createElement("p",null,"Followers")),i.a.createElement("div",{className:te.a.ProfessionSocialIcon},i.a.createElement("a",{href:"/"},i.a.createElement("i",{className:"fab fa-behance"})),i.a.createElement("h4",null,l),i.a.createElement("p",null,"Followers")),i.a.createElement("div",{className:te.a.ProfessionSocialIcon},i.a.createElement("a",{href:"/"},i.a.createElement("i",{className:"fab fa-twitter"})),i.a.createElement("h4",null,c),i.a.createElement("p",null,"Followers")))))};ae.defaultProps={image:"",title:"",dribble:"",behance:"",twitter:"",isEditable:!1};var ne=ae,ie=a(25),oe=a.n(ie);oe.a.initializeApp({apiKey:"AIzaSyC5aoy2IrFSdXyYJOI5z9hTQVjQArOwGaI",authDomain:"insideland-a1eae.firebaseapp.com",databaseURL:"https://insideland-a1eae.firebaseio.com",projectId:"insideland-a1eae",storageBucket:"insideland-a1eae.appspot.com",messagingSenderId:"110475419154"});var se=new oe.a.auth.GoogleAuthProvider,re=oe.a.auth(),le=oe.a,ce=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={items:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.itemsRef=le.database().ref("professions"),this.itemsRef.on("value",function(t){var a=t.val(),n=[];Object.keys(a||{}).forEach(function(e){n.unshift({image:a[e].image,id:e,name:a[e].name,title:a[e].title,description:a[e].description,isFavorite:a[e].isFavorite})}),e.setState({items:n})})}},{key:"render",value:function(){var e=this,t=this.state.items;return i.a.createElement("div",{className:$.a.Professions},i.a.createElement("button",{className:$.a.NewProfessionBtn,onClick:function(){return e.showModal({},"add")},type:"button"}),t.map(function(t){return i.a.createElement(ne,{key:t.id,id:t.id,isFavorite:t.isFavorite,image:t.image,name:t.name,title:t.title,description:t.description,onRemoveBtnClick:function(){return e.showModal(t,"delete")},onFavoriteBtnClick:e.addToFavorite,onEditBtnClick:function(){return e.showModal(t,"edit")}})}))}}]),t}(n.Component),me=a(50),de=a.n(me),ue=function(){return i.a.createElement("div",{className:de.a.Producers},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0442\u0435\u0441\u0442\u043e\u0432")},fe=(a(100),Object(S.a)(function(e){var t=e.location,a=t.pathname.split("/")[1]||"/";return i.a.createElement(q.TransitionGroup,{className:"transition-group"},i.a.createElement(q.CSSTransition,{key:a,timeout:300,classNames:"fade"},i.a.createElement("section",{className:"route-section"},i.a.createElement("div",{className:H.a.CatalogContent},i.a.createElement(M.a,{location:t},i.a.createElement(B.a,{path:"".concat("/insideland","/catalog/companies"),component:X}),i.a.createElement(B.a,{path:"".concat("/insideland","/catalog/professions"),component:ce}),i.a.createElement(B.a,{path:"".concat("/insideland","/catalog/producers"),component:ue}))))))})),pe=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:H.a.Catalog},i.a.createElement(G,null),i.a.createElement(fe,null))}}]),t}(n.Component),ve=a(38),be=a.n(ve),Ne=a(26),he=a.n(Ne),_e=[{to:"".concat("/insideland","/constructor/companies"),label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",exact:!1},{to:"".concat("/insideland","/constructor/professions"),label:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438",exact:!1},{to:"".concat("/insideland","/constructor/producers"),label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0442\u0435\u0441\u0442\u043e\u0432",exact:!1}],Ee=function(){return i.a.createElement("nav",{className:he.a.Navigation},_e.map(function(e,t){var a=t+e;return i.a.createElement("li",{key:a,className:he.a.NavigationItem},i.a.createElement(p.a,{to:e.to,exact:e.exact,className:he.a.NavigationItemLink,activeClassName:he.a.NavigationItemLinkActive},e.label))}))},Pe=a(52),ge=a.n(Pe),Ie=function(){return i.a.createElement("div",{className:ge.a.Companies},"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438")},we=a(39),ke=a(18),Ce=a(32),Ae=a.n(Ce),Oe=(a(105),a(20)),ye=a.n(Oe),je=a(53),Le=a.n(je),Me=a(4),Be=a.n(Me),Fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={image:"",name:"",title:"",description:""},a.onChange=a.onChange.bind(Object(f.a)(Object(f.a)(a))),a.onSubmit=a.onSubmit.bind(Object(f.a)(Object(f.a)(a))),a.onReset=a.onReset.bind(Object(f.a)(Object(f.a)(a))),a.handleFiles=a.handleFiles.bind(Object(f.a)(Object(f.a)(a))),a.removeImage=a.removeImage.bind(Object(f.a)(Object(f.a)(a))),a.getNameRef=a.getNameRef.bind(Object(f.a)(Object(f.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.data&&setTimeout(function(){e.setState({image:{base64:t.data.image||"img/default.png",fileList:[{}]},name:t.data.name,title:t.data.title,description:t.data.description})})}},{key:"onChange",value:function(e){var t=e.target;this.setState(Object(ke.a)({},t.name,t.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;this.props.onAddItem(a).then(function(){t.reset()})}},{key:"onReset",value:function(){this.reset()}},{key:"getNameRef",value:function(e){this.nameRef=e}},{key:"removeImage",value:function(){this.setState({image:""})}},{key:"reset",value:function(){this.setState({image:"",name:"",title:"",description:""})}},{key:"handleFiles",value:function(e){this.setState({image:e})}},{key:"render",value:function(){var e=this.state,t=e.image?e.image.base64:"img/default.png",a=e.image?e.image.fileList[0].name:"Default image";return i.a.createElement("form",{className:Be.a.AddNewItemForm,onSubmit:this.onSubmit,autoComplete:"off"},i.a.createElement("div",{className:Be.a.AddNewItemPic},i.a.createElement("div",{className:Be.a.AddNewItemImgWrapper},i.a.createElement("img",{src:t,alt:a})),i.a.createElement("div",{className:Be.a.AddNewItemPicBtns},i.a.createElement(Le.a,{handleFiles:this.handleFiles,base64:!0,multipleFiles:!1},i.a.createElement("button",{className:Be.a.AddNewItemBtnAddPic,type:"button"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c")),e.image&&i.a.createElement("button",{className:Be.a.AddNewItemBtnDeletePic,type:"button",onClick:this.removeImage},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))),i.a.createElement("label",{className:Be.a.AddNewItemLabel,htmlFor:"name"},i.a.createElement("input",{ref:this.getNameRef,className:Be.a.AddNewItemInput,type:"text",id:"name",name:"name",value:e.name||"",onChange:this.onChange,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",spellCheck:"false",required:!0}),i.a.createElement("span",{className:Be.a.AddNewItemInputBorder})),i.a.createElement("label",{className:Be.a.AddNewItemLabel,htmlFor:"title"},i.a.createElement("input",{className:Be.a.AddNewItemInput,type:"text",id:"title",name:"title",value:e.title||"",onChange:this.onChange,placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",spellCheck:"false",required:!0}),i.a.createElement("span",{className:Be.a.AddNewItemInputBorder})),i.a.createElement("label",{className:Be.a.AddNewItemLabel,htmlFor:"description"},i.a.createElement("input",{className:Be.a.AddNewItemInput,type:"text",id:"description",name:"description",value:e.description||"",onChange:this.onChange,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",spellCheck:"false",required:!0}),i.a.createElement("span",{className:Be.a.AddNewItemInputBorder})),i.a.createElement("div",{className:Be.a.AddNewItemActions},i.a.createElement("button",{className:Be.a.AddNewItemActionBtn,type:"submit"},"Submit"),i.a.createElement("button",{className:Be.a.AddNewItemActionBtn,type:"button",onClick:this.onReset},"Reset")))}}]),t}(n.Component),Se=a(14),xe=a.n(Se),Te=function(e){var t=e.id,a=e.image,n=e.name,o=e.title,s=e.description,r=e.dribble,l=e.behance,c=e.twitter,m=e.isEditable,d=e.onRemoveBtnClick,u=e.onEditBtnClick,f=e.isFavorite,p=e.onFavoriteBtnClick;return i.a.createElement("div",{className:xe.a.Profession},i.a.createElement("div",{className:xe.a.ProfessionWrapper},i.a.createElement("div",{className:xe.a.ProfessionTopIcons},m&&i.a.createElement("button",{onClick:function(){return d(t)},type:"button"},i.a.createElement("i",{className:"far fa-times-circle"})),i.a.createElement("button",{type:"button",onClick:function(){return p(t)}},i.a.createElement("i",{className:f?"fa fa-heart":"far fa-heart"})),i.a.createElement("button",{type:"button",onClick:function(){return u(t)}},i.a.createElement("i",{className:"far fa-edit"}))),i.a.createElement("div",{className:xe.a.ProfessionProfile},i.a.createElement("img",{src:a||"img/default.png",className:xe.a.ProfessionThumbail,alt:""}),i.a.createElement("div",{className:xe.a.ProfessionProfileCheck},i.a.createElement("i",{className:"fas fa-check"})),i.a.createElement("h3",{className:xe.a.ProfessionProfileName},n),i.a.createElement("p",{className:xe.a.ProfessionProfileTitle},o),i.a.createElement("p",{className:xe.a.ProfessionProfileDescription},s),i.a.createElement("button",{className:xe.a.ProfessionProfileBtn,type:"button"},"Hire Me")),i.a.createElement("div",{className:xe.a.ProfessionSocialIcons},i.a.createElement("div",{className:xe.a.ProfessionSocialIcon},i.a.createElement("a",{href:"/"},i.a.createElement("i",{className:"fab fa-dribbble"})),i.a.createElement("h4",null,r),i.a.createElement("p",null,"Followers")),i.a.createElement("div",{className:xe.a.ProfessionSocialIcon},i.a.createElement("a",{href:"/"},i.a.createElement("i",{className:"fab fa-behance"})),i.a.createElement("h4",null,l),i.a.createElement("p",null,"Followers")),i.a.createElement("div",{className:xe.a.ProfessionSocialIcon},i.a.createElement("a",{href:"/"},i.a.createElement("i",{className:"fab fa-twitter"})),i.a.createElement("h4",null,c),i.a.createElement("p",null,"Followers")))))};Te.defaultProps={image:"",title:"",dribble:"",behance:"",twitter:"",isEditable:!1};var Re=Te,De=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={modal:{isRendered:!1,visible:!1,id:null},items:[]},a.removeCard=a.removeCard.bind(Object(f.a)(Object(f.a)(a))),a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.addToFavorite=a.addToFavorite.bind(Object(f.a)(Object(f.a)(a))),a.editItem=a.editItem.bind(Object(f.a)(Object(f.a)(a))),a.showModal=a.showModal.bind(Object(f.a)(Object(f.a)(a))),a.hideModal=a.hideModal.bind(Object(f.a)(Object(f.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.itemsRef=le.database().ref("professions"),this.itemsRef.on("value",function(t){var a=t.val(),n=[];Object.keys(a||{}).forEach(function(e){n.unshift({image:a[e].image,id:e,name:a[e].name,title:a[e].title,description:a[e].description,isFavorite:a[e].isFavorite})}),e.setState({items:n})})}},{key:"componentWillUnmount",value:function(){this.itemsRef.off()}},{key:"addItem",value:function(e){var t=this;return new Promise(function(a,n){var i=le.database().ref("professions"),o=le.storage().ref("professions"),s={image:e.image?e.image.base64:null,name:e.name,title:e.title,description:e.description,isFavorite:!1};if(i.push(s),e.image){var r=e.image;o.child(r.fileList[0].name).putString(r.base64.split(",")[1],"base64",{contentType:r.fileList[0].type}).then(function(){a(),t.hideModal()},function(){n(),t.hideModal()})}else a(),t.hideModal()})}},{key:"showModal",value:function(e,t){this.setState({modal:{isRendered:!0,visible:!0,id:e.id,action:t,data:e}})}},{key:"hideModal",value:function(){this.setState(function(e){return{modal:{isRendered:e.modal.isRendered,visible:!1,id:null,action:e.modal.action}}})}},{key:"removeCard",value:function(e){e.preventDefault();var t=this.state.modal;le.database().ref("/professions/".concat(t.id)).remove(),this.hideModal()}},{key:"handleChange",value:function(e){var t=this.state.newItem,a=Object(ke.a)({},e.target.name,e.target.value);this.setState({newItem:Object(we.a)({},t,a)}),this.hideModal()}},{key:"addToFavorite",value:function(e){var t=this.state.items.filter(function(t){return t.id===e})[0];le.database().ref("/professions/".concat(e)).update({isFavorite:!t.isFavorite})}},{key:"editItem",value:function(e){var t=this;return new Promise(function(){var a=t.state;le.database().ref("/professions/".concat(a.modal.id)).update(Object(we.a)({},e,{image:e.image?e.image.base64:null})).then(function(){t.hideModal()})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.modal;return i.a.createElement("div",{className:ye.a.Professions},i.a.createElement("button",{className:ye.a.NewProfessionBtn,onClick:function(){return e.showModal({},"add")},type:"button"}),a.map(function(t){return i.a.createElement(Re,{key:t.id,id:t.id,isFavorite:t.isFavorite,image:t.image,name:t.name,title:t.title,description:t.description,isEditable:!0,onRemoveBtnClick:function(){return e.showModal(t,"delete")},onFavoriteBtnClick:e.addToFavorite,onEditBtnClick:function(){return e.showModal(t,"edit")}})}),i.a.createElement(Ae.a,{visible:n.visible&&"delete"===n.action,width:300,height:65,closeOnEsc:!0,onClose:this.hideModal},i.a.createElement("div",{className:ye.a.DeleteModal},i.a.createElement("button",{className:ye.a.DeleteModalBtn,onClick:this.removeCard,type:"button"},"Delete"),i.a.createElement("button",{className:ye.a.DeleteModalBtn,onClick:this.hideModal,type:"button"},"Cancel"))),n.isRendered&&"add"===n.action&&i.a.createElement(Ae.a,{visible:n.visible,width:300,height:350,closeOnEsc:!0,onClose:this.hideModal,onAnimationEnd:function(){return!n.visible&&e.setState({modal:{isRendered:!1}})}},i.a.createElement(Fe,{onAddItem:function(t){return e.addItem(t)}})),n.isRendered&&"edit"===n.action&&i.a.createElement(Ae.a,{visible:n.visible,width:300,height:350,closeOnEsc:!0,onClose:this.hideModal,onAnimationEnd:function(){return!n.visible&&e.setState({modal:{isRendered:!1}})}},i.a.createElement(Fe,{data:n.data,onAddItem:function(t){return e.editItem(t)}})))}}]),t}(n.Component),Ue=a(54),We=a.n(Ue),qe=function(){return i.a.createElement("div",{className:We.a.Producers},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0442\u0435\u0441\u0442\u043e\u0432")},Ve=(a(112),[{id:1,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}},{id:2,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}},{id:3,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}},{id:4,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}},{id:5,img:"https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w",name:"Beverly Little",title:"JAVASCRIPT DEVELOPER",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!",tests:{available:25,passed:5,all:30},social:{dribble:"12.8k",behance:"12.8k",twitter:"12.8k"}}]),He=Object(S.a)(function(e){var t=e.location,a=t.pathname.split("/")[1]||"/";return i.a.createElement(q.TransitionGroup,{className:"transition-group"},i.a.createElement(q.CSSTransition,{key:a,timeout:{enter:300,exit:200},classNames:"fade"},i.a.createElement("section",{className:"route-section"},i.a.createElement("div",{className:be.a.ConstructorContent},i.a.createElement(M.a,{location:t},i.a.createElement(B.a,{path:"".concat("/insideland","/constructor/companies"),component:Ie}),i.a.createElement(B.a,{path:"".concat("/insideland","/constructor/professions"),render:function(){return i.a.createElement(De,{data:Ve})}}),i.a.createElement(B.a,{path:"".concat("/insideland","/constructor/producers"),component:qe}))))))}),Je=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:be.a.Constructor},i.a.createElement(Ee,null),i.a.createElement(He,null))}}]),t}(n.Component),Ze=function(e){var t=e.user;return i.a.createElement(R,null,t?i.a.createElement(M.a,null,i.a.createElement(B.a,{path:"/",exact:!0,component:W}),i.a.createElement(F.a,{from:"/catalog",exact:!0,to:"/catalog/companies"}),i.a.createElement(B.a,{path:"/catalog/",component:pe}),i.a.createElement(F.a,{from:"/constructor",exact:!0,to:"/constructor/companies"}),i.a.createElement(B.a,{path:"/constructor",component:Je})):null)};Ze.defaultProps={user:null};var ze=Object(S.a)(Ze),Ge=a(27),Ke=a.n(Ge),Qe=function(){return i.a.createElement("footer",{className:Ke.a.Footer},i.a.createElement("div",{className:Ke.a.FooterWrapper},i.a.createElement(p.a,{className:Ke.a.FooterLogo,to:"/"},"\u0418\u043d\u0441\u0430\u0439\u0434\u0438\u044f, 2018"),i.a.createElement("div",null,"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c:",i.a.createElement("a",{className:Ke.a.FooterContactEmail,href:"mailto:info@insideland.ru"},"info@insideland.ru"))))},Xe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={user:null},a.login=a.login.bind(Object(f.a)(Object(f.a)(a))),a.logout=a.logout.bind(Object(f.a)(Object(f.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;re.onAuthStateChanged(function(t){t&&e.setState({user:t})})}},{key:"login",value:function(){var e=this;re.signInWithPopup(se).then(function(t){var a=t.user;e.setState({user:a})})}},{key:"logout",value:function(){var e=this;re.signOut().then(function(){e.setState({user:null})})}},{key:"render",value:function(){var e=this.state;return i.a.createElement("div",{className:"app"},i.a.createElement(L,{user:e.user,onLogIn:this.login,onLogOut:this.logout}),i.a.createElement(ze,{user:e.user}),i.a.createElement(Qe,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=i.a.createElement(r.a,null,i.a.createElement(Xe,null));s.a.render(Ye,document.querySelector(".root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},13:function(e,t,a){e.exports={Profession:"Profession_Profession__23mgc",ProfessionWrapper:"Profession_ProfessionWrapper__1BBae",ProfessionTopIcons:"Profession_ProfessionTopIcons__1ZZlV","fa-heart":"Profession_fa-heart__2aRZZ",ProfessionProfile:"Profession_ProfessionProfile__1FjGq",ProfessionProfileCheck:"Profession_ProfessionProfileCheck__2a8DT",ProfessionThumbail:"Profession_ProfessionThumbail__D4iZC",ProfessionProfileName:"Profession_ProfessionProfileName__1pIE4",ProfessionProfileTitle:"Profession_ProfessionProfileTitle__48JuH",ProfessionProfileDescription:"Profession_ProfessionProfileDescription__154KA",ProfessionProfileBtn:"Profession_ProfessionProfileBtn__3Mz9T",ProfessionSocialIcons:"Profession_ProfessionSocialIcons__1qpbl",ProfessionSocialIcon:"Profession_ProfessionSocialIcon__2jV9l"}},14:function(e,t,a){e.exports={Profession:"Profession_Profession__2r4Tv",ProfessionWrapper:"Profession_ProfessionWrapper__ZyVwx",ProfessionTopIcons:"Profession_ProfessionTopIcons__127-H","fa-heart":"Profession_fa-heart__VRF5b",ProfessionProfile:"Profession_ProfessionProfile__2nI3t",ProfessionProfileCheck:"Profession_ProfessionProfileCheck__1_QJt",ProfessionThumbail:"Profession_ProfessionThumbail__3wh9O",ProfessionProfileName:"Profession_ProfessionProfileName__3_k8f",ProfessionProfileTitle:"Profession_ProfessionProfileTitle__3P4iu",ProfessionProfileDescription:"Profession_ProfessionProfileDescription__2gbSy",ProfessionProfileBtn:"Profession_ProfessionProfileBtn__1MhPh",ProfessionSocialIcons:"Profession_ProfessionSocialIcons__3wbJ0",ProfessionSocialIcon:"Profession_ProfessionSocialIcon__34QzK"}},20:function(e,t,a){e.exports={Professions:"Professions_Professions__1llpC",NewProfessionBtn:"Professions_NewProfessionBtn__2hZ8D",DeleteModal:"Professions_DeleteModal__fSgAj",DeleteModalBtn:"Professions_DeleteModalBtn__2UBXA"}},22:function(e,t,a){e.exports={MainNav:"MainNav_MainNav__2UaTd",MainNavItem:"MainNav_MainNavItem__EFN9i",MainNavItemLink:"MainNav_MainNavItemLink__c9igf",MainNavItemLinkActive:"MainNav_MainNavItemLinkActive__1rG58"}},23:function(e,t,a){e.exports={UserNav:"UserNav_UserNav__3Wgsg",UserNavPicWrapper:"UserNav_UserNavPicWrapper__1IdPZ",UserNavPic:"UserNav_UserNavPic__29CX0",UserNavBtn:"UserNav_UserNavBtn__h0JY0"}},24:function(e,t,a){e.exports={Navigation:"Navigation_Navigation__HKpH2",NavigationItem:"Navigation_NavigationItem__CKtU4",NavigationItemLink:"Navigation_NavigationItemLink__3Qx-Z",NavigationItemLinkActive:"Navigation_NavigationItemLinkActive__1k69l"}},26:function(e,t,a){e.exports={Navigation:"Navigation_Navigation__1M8As",NavigationItem:"Navigation_NavigationItem__39-xc",NavigationItemLink:"Navigation_NavigationItemLink__1IWnU",NavigationItemLinkActive:"Navigation_NavigationItemLinkActive__2Iv8b"}},27:function(e,t,a){e.exports={Footer:"Footer_Footer__-uVQA",FooterWrapper:"Footer_FooterWrapper__8-bR1",FooterLogo:"Footer_FooterLogo__2T9R0",FooterContactEmail:"Footer_FooterContactEmail__3BE8B"}},33:function(e,t,a){e.exports={Header:"Header_Header__1Uxlg",HeaderLogo:"Header_HeaderLogo__2tc90"}},34:function(e,t,a){e.exports={Navigation:"Navigation_Navigation__1NNH1",NavigationWrapper:"Navigation_NavigationWrapper__bi3Kc"}},35:function(e,t,a){e.exports={Layout:"Layout_Layout__TneR8",LayoutMain:"Layout_LayoutMain__tEONl"}},36:function(e,t,a){e.exports={Catalog:"Catalog_Catalog__3fkJa",CatalogContent:"Catalog_CatalogContent__120rt"}},37:function(e,t,a){e.exports={Professions:"Professions_Professions__NTVgr"}},38:function(e,t,a){e.exports={Constructor:"Constructor_Constructor__39fST",ConstructorContent:"Constructor_ConstructorContent__1S6sX"}},4:function(e,t,a){e.exports={AddNewItemPic:"AddNewItem_AddNewItemPic__2UHTk",AddNewItemImgWrapper:"AddNewItem_AddNewItemImgWrapper__1TcfI",AddNewItemPicBtns:"AddNewItem_AddNewItemPicBtns__3hGY7",AddNewItemBtnAddPic:"AddNewItem_AddNewItemBtnAddPic__XQZrL",AddNewItemBtnDeletePic:"AddNewItem_AddNewItemBtnDeletePic__19u5t",AddNewItemLabel:"AddNewItem_AddNewItemLabel__i61ul",AddNewItemInputFile:"AddNewItem_AddNewItemInputFile__2v3xv",AddNewItemInput:"AddNewItem_AddNewItemInput__SpXzt",AddNewItemInputBorder:"AddNewItem_AddNewItemInputBorder__2WmbA",AddNewItemInputBorderActive:"AddNewItem_AddNewItemInputBorderActive__NCMo4",AddNewItemActions:"AddNewItem_AddNewItemActions__1OuK1",AddNewItemActionBtn:"AddNewItem_AddNewItemActionBtn___rxJi"}},48:function(e,t,a){e.exports={Main:"Main_Main__UccHe"}},49:function(e,t,a){e.exports={Companies:"Companies_Companies__2Z4Vp"}},50:function(e,t,a){e.exports={Producers:"Producers_Producers__1AWwU"}},52:function(e,t,a){e.exports={Companies:"Companies_Companies__Cz6av"}},54:function(e,t,a){e.exports={Producers:"Producers_Producers__3tpW9"}},55:function(e,t,a){e.exports=a(115)},62:function(e,t,a){}},[[55,2,1]]]);
//# sourceMappingURL=main.c31f0f86.chunk.js.map