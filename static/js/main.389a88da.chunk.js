(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,n,t){e.exports=t(87)},64:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(16),l=t.n(o),c=t(18),i=t(19),s=t(24),m=t(20),u=t(23),d=t(13),g=t(21),p=t(92),f=t(94),h=t(11),b=t(30),E=t(22);function v(){var e=Object(g.a)(["\n  background-color: #f1f1f1;\n\n  .welcomeImg {\n    display: block;\n    margin: auto;\n  }\n\n  p {\n    margin: 2rem 1rem 1rem 1rem;\n  }\n\n  form {\n    background-color: #ffffff;\n    margin: 2rem 1rem 1rem 1rem;\n    padding: 1rem;\n    box-shadow: 7px 8px 7px rgba(3, 3, 3, 0.4);\n\n    input {\n      border-left: none;\n      border-right: none;\n      border-top: none;\n      border-bottom-width: 1px;\n      border-color: rgba(3, 3, 3, 0.4);\n\n      ::placeholder {\n        color: rgba(3, 3, 3, 0.4);\n      }\n    }\n\n    h1 {\n      background-color: #ffffff;\n      font-style: bold;\n      color: #707070;\n    }\n\n    .form-group {\n      background-color: #ffffff;\n      text-align: center;\n    }\n  }\n\n  .ingresar {\n    border: none;\n    float: right;\n    color: white;\n    font-size: 2rem;\n    background-color: #f72525;\n    padding: 20px;\n    text-align: center;\n    border-radius: 3rem;\n  }\n\n  .visita {\n    margin-top: 8rem;\n  }\n\n.registro {\n  border: none;\n  font-size: 1.2rem;\n  color: white;\n  background-color: #F72525;\n  padding: 20px;\n  text-align: center;\n  display: block;\n  margin: auto;\n  border-radius: 3rem;\n}\n"]);return v=function(){return e},e}var k=E.a.div(v()),y=function(e){var n=Object(a.useState)(""),t=Object(d.a)(n,2),o=t[0],l=t[1],c=Object(a.useState)(""),i=Object(d.a)(c,2),s=i[0],m=i[1],u=function(e){"email"===e.target.name&&l(e.target.value),"password"===e.target.name&&m(e.target.value),console.log(o),console.log(s)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,r.a.createElement("img",{src:"https://i.imgur.com/NtRT2Fy.jpg",alt:"Captura tus ideas y convi\xe9rtelas en metas. Weeber te ayuda a volverlas realidad",className:"welcomeImg"}),r.a.createElement("p",null,"\xbfYa tienes una cuenta?"),r.a.createElement(p.a,null,r.a.createElement("h1",null,"Inicia sesi\xf3n"),r.a.createElement(p.a.Group,{controlId:"formBasicEmail"},r.a.createElement(p.a.Control,{onChange:u,type:"email",name:"email",placeholder:"E-mail"})),r.a.createElement(p.a.Group,{controlId:"formBasicPassword"},r.a.createElement(p.a.Control,{onChange:u,type:"password",name:"password",placeholder:"Contrase\xf1a"})),r.a.createElement(h.b,{to:"/Home"},r.a.createElement(f.a,{onClick:function(){fetch("/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:s})}).then(function(e){return e.json()}).then(function(e){console.log("sesion activa"),localStorage.setItem("token",JSON.stringify(e)),localStorage.setItem("uid",JSON.stringify(e.uid))})},variant:"primary",className:"ingresar"},r.a.createElement(b.a,null)))),r.a.createElement("p",{className:"visita"},"\xbfPrimera vez que nos visitas?"),r.a.createElement(f.a,{className:"registro"},r.a.createElement(h.b,{to:"/Register"},"Crea una cuenta"))))};function j(){var e=Object(g.a)(["\nbackground-color: #f1f1f1;\n\n.welcomeImg{\n  display: block;\n  margin: auto;\n}\n\np {\n  margin: 2rem 1rem 1rem 1rem;\n}\n\nform {\n  background-color: #FFFFFF;\n  margin: 2rem 1rem 1rem 1rem;\n  padding: 1rem;\n  box-shadow: 7px 8px 7px rgba(3, 3, 3, 0.4);\n\n  input {\n    border-left: none;\n    border-right: none;\n    border-top: none;\n    border-bottom-width: 1px;\n    border-color: rgba(3, 3, 3, 0.4);\n\n    ::placeholder{\n      color: rgba(3, 3, 3, 0.4)\n    }\n  }\n\n  h1 {\n    background-color: #FFFFFF;\n    font-style: bold;\n    color: #707070;\n  }\n\n  .form-group {\n    background-color: #FFFFFF;\n    text-align: center;\n  }\n}\n\n.registro {\n  border: none;\n  float: right;\n  color: white;\n  font-size: 2rem;\n  background-color: #F72525;\n  padding: 20px;\n  text-align: center;\n  border-radius: 3rem;\n}\n\n.space{\n  margin: 5rem 1rem 1rem 1rem;\n  color: #f1f1f1;\n}\n\n.login {\n  border: none;\n  font-size: 1.2rem;\n  color: white;\n  background-color: #F72525;\n  padding: 20px;\n  text-align: center;\n  display: block;\n  margin: auto;\n  border-radius: 3rem;\n\n  a {\n    background-color: none;\n  }\n}\n\n"]);return j=function(){return e},e}var O=E.a.div(j()),w=function(e){var n=Object(a.useState)(""),t=Object(d.a)(n,2),o=t[0],l=t[1],c=Object(a.useState)(""),i=Object(d.a)(c,2),s=i[0],m=i[1],u=function(e){"email"===e.target.name&&l(e.target.value),"password"===e.target.name&&m(e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement("img",{src:"https://i.imgur.com/NtRT2Fy.jpg",alt:"Captura tus ideas y convi\xe9rtelas en metas. Weeber te ayuda a volverlas realidad",className:"welcomeImg"}),r.a.createElement(p.a,null,r.a.createElement("h1",null,"\xa1Reg\xedstrate!"),r.a.createElement(p.a.Group,{controlId:"formBasicEmail"},r.a.createElement(p.a.Control,{onChange:u,type:"email",name:"email",placeholder:"E-mail"})),r.a.createElement(p.a.Group,{controlId:"formBasicPassword"},r.a.createElement(p.a.Control,{onChange:u,type:"password",name:"password",placeholder:"Contrase\xf1a"})),r.a.createElement(h.b,null,r.a.createElement(f.a,{onClick:function(){fetch("/api/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:s})}).then(function(e){return e.json()}).then(function(e){console.log("sesion activa"),localStorage.setItem("token",JSON.stringify(e))})},variant:"primary",className:"registro"},r.a.createElement(b.a,null)))),r.a.createElement("p",{className:"space"},"."),r.a.createElement(f.a,{className:"login"},r.a.createElement(h.b,{to:"/"},"\xbfYa tienes una cuenta?"))))},C=t(14),x=(t(64),t(49)),T=t(12),S=t(93),F=t(26),N=(t(65),t(89)),I=t(90),B=t(51),G=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(m.a)(n).call(this))).state={percent:0,color:"#A0D85B"},e.increase=e.increase.bind(Object(T.a)(e)),e}return Object(u.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){this.increase()}},{key:"increase",value:function(){var e=this.state.percent+25;125!=e&&this.setState({percent:e,color:["#A0D85B","#F72525"][parseInt(1*Math.random(),10)]})}},{key:"render",value:function(){var e=this.state,n=e.percent,t=e.color;return r.a.createElement("div",{style:{margin:10,width:200}},r.a.createElement("h3",null,"Porcentaje de la Meta ",n,"%"),r.a.createElement(B.a,{strokeWidth:"6",percent:n,strokeColor:t}),r.a.createElement("button",{type:"button",onClick:this.increase},"Tarea Cumplida"))}}]),n}(a.Component),_=function(e){var n=e.id;console.log("en el goal",e.id);var t=Object(a.useState)([]),o=Object(d.a)(t,2),l=(o[0],o[1]),c=Object(a.useState)([]),i=Object(d.a)(c,2),s=i[0],m=i[1];Object(a.useEffect)(function(){u()},[]);var u=function(){fetch("/api/goals").then(function(e){return e.json()}).then(function(e){l(e);var t=e.find(function(e){return e._id===n});m(t)})};return s.motive?r.a.createElement(N.a,null,r.a.createElement(I.a,null,r.a.createElement("p",null,s.motive)),r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement(G,null))),r.a.createElement("div",null,"Tareas")):r.a.createElement("div",null,"hola")};function A(){var e=Object(g.a)(["\n  form {\n  background-color: #ffffff;\n  box-shadow: 7px 8px 7px rgba(3, 3, 3, 0.4);\n  margin: 2rem 1rem 1rem 1rem;\n  padding: 1rem;\n  display:none;\n\n  input {\n    border-left: none;\n    border-right: none;\n    border-top: none;\n    border-bottom-width: 1px;\n    border-color: rgba(3, 3, 3, 0.4);\n\n    ::placeholder {\n      color: rgba(3, 3, 3, 0.4);\n    }\n  }\n\n  .motiveTextArea {\n    margin-bottom: 3rem;\n  }\n\n  .addGoalBtn {\n    display: block;\n    margin: auto;\n    padding: 1rem;\n    font-size: larger;\n    background-color: #083d77;\n    color: white;\n    border-radius: 3rem;\n    border: none;\n    width: 60%;\n  }\n\n  .goalsContainer {\n    display: block;\n    margin: auto;\n  }\n\n}\n\n\n.cardq{\n  display:flex;\n  margin:1rem;\n\n\n}\n\n.ingresarCard {\n  border: none;\n  margin-left:65%;\n  font-size: 1rem;\n  color: white;\n  background-color: #A0D85B;\n  padding: 10px;\n  text-align: center;\n  border-radius: 2rem;\n}\n.vermas {\n  border: none;\n  color: #A0D85B;\n  font-size: 2rem;\n  background-color:  white;\n  padding: 10px;\n  text-align: center;\n  border-radius: 2rem;\n}\n"]);return A=function(){return e},e}var J=E.a.div(A()),z=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(m.a)(n).call(this))).showGoal=function(n){e.setState({showingGoal:!e.state.showingGoal,id:n})},e.state={title:"",motive:"",date:"",_id:"",tasks:[]},e.handleChange=e.handleChange.bind(Object(T.a)(e)),e.addTask=e.addTask.bind(Object(T.a)(e)),e.deleteTask=e.deleteTask.bind(Object(T.a)(e)),e.editTask=e.editTask.bind(Object(T.a)(e)),e.fetchTasks=e.fetchTasks.bind(Object(T.a)(e)),e}return Object(u.a)(n,e),Object(i.a)(n,[{key:"handleChange",value:function(e){var n=e.target,t=n.name,a=n.value;this.setState(Object(x.a)({},t,a))}},{key:"addTask",value:function(e){var n=this;e.preventDefault(),this.state._id?fetch("/api/goals/".concat(this.state._id),{method:"PUT",body:JSON.stringify({title:this.state.title,motive:this.state.motive}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log("addTask",e),n.setState({_id:"",title:"",motive:""}),n.fetchTasks()}):fetch("/api/goals",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e),n.setState({title:"",motive:""}),n.fetchTasks()}).catch(function(e){return console.error(e)})}},{key:"deleteTask",value:function(e){var n=this;console.log(e),fetch("/api/goals/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e),n.fetchTasks()})}},{key:"editTask",value:function(e){var n=this;fetch("/api/goals/".concat(e)).then(function(e){return e.json()}).then(function(e){console.log(e),n.setState({title:e.title,motive:e.motive,_id:e._id})})}},{key:"componentDidMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var e=this;fetch("/api/goals").then(function(e){return e.json()}).then(function(n){e.setState({tasks:n}),console.log(e.state.tasks)})}},{key:"render",value:function(){var e=this;return console.log("estado de showing",this.state.id),this.state.showingGoal?r.a.createElement(_,{id:this.state.id}):r.a.createElement(J,null,r.a.createElement("div",{className:"cardq"},this.state.tasks.map(function(n){return r.a.createElement(S.a,{key:n._id},r.a.createElement(S.a.Img,{variant:"top",src:"https://i.imgur.com/5OpceQ1.jpg"}),r.a.createElement(S.a.Body,null,r.a.createElement(S.a.Title,null,n.title),r.a.createElement(S.a.Text,null,n.motive),r.a.createElement(f.a,{className:"vermas",onClick:function(){return e.showGoal(n._id)}},r.a.createElement(F.a,null)),r.a.createElement(f.a,{className:"vermas",onClick:function(){return e.deleteTask(n._id)}},r.a.createElement(F.d,null)),r.a.createElement(f.a,{className:"vermas",onClick:function(){return e.editTask(n._id)}},r.a.createElement(F.c,null))))})),r.a.createElement(f.a,{className:"ingresarCard",variant:"primary",type:"submit",onClick:function(){document.querySelector(".form").style.display="block"}},r.a.createElement(F.b,null)),r.a.createElement(p.a,{className:"form",onSubmit:this.addTask},r.a.createElement(p.a.Group,{controlId:"formBasicEmail"},r.a.createElement(p.a.Label,null,"Nombre de la meta"),r.a.createElement(p.a.Control,{name:"title",placeholder:"Ingresa tu meta",onChange:this.handleChange,type:"text",value:this.state.title})),r.a.createElement(p.a.Group,{controlId:"formBasicEmail"},r.a.createElement(p.a.Label,null,"Motivo de la meta"),r.a.createElement(p.a.Control,{name:"motive",onChange:this.handleChange,value:this.state.motive,type:"text",placeholder:"Ingresa el motivo de tu meta"})),r.a.createElement(f.a,{variant:"primary",type:"submit"},"Agregar meta")))}}]),n}(a.Component),D=t(91),P=function(){return r.a.createElement(D.a,{bg:"light",expand:"lg"},r.a.createElement(D.a.Brand,null,"Weeber"),r.a.createElement(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.b,{to:"/"},r.a.createElement(f.a,{onClick:function(){localStorage.clear(),console.log("sesion cerrada")}},"Cerrar sesi\xf3n")))},W=function(e){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(z,null))},L=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(m.a)(n).call(this))).authListener=function(n){console.log(n),n?(e.setState({user:!0}),console.log("user",n)):e.setState({user:!1})},e.state={user:!1},e}return Object(u.a)(n,e),Object(i.a)(n,[{key:"componentWillUpdate",value:function(){var e=localStorage.getItem("token");this.authListener(e)}},{key:"render",value:function(){return console.log(this.state.user),r.a.createElement(h.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(C.a,{exact:!0,path:"/Register",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(C.a,{exact:!0,path:"/Home",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(C.a,{exact:!0,path:"/Goal",render:function(){return r.a.createElement(_,null)}}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.389a88da.chunk.js.map