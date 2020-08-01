(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,n){e.exports=n(61)},37:function(e,t,n){},38:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(30),i=n.n(s),o=(n(37),n(1)),l=n(2),c=n(5),u=n(4),h=n(3),m=(n(38),n(6)),d=n(7),p=r.a.createContext(),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.context,t=e.user;e.loginUser,e.logoutUser;return t.getIsUserLoggedIn()?r.a.createElement(d.b,Object.assign({},this.props,{component:this.props.component})):r.a.createElement(d.a,{to:"/login"})}}]),n}(a.Component);f.contextType=p;var b=f,g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.context,t=e.user;e.loginUser,e.logoutUser;return t.getIsAdminLoggedIn()?r.a.createElement(d.b,Object.assign({},this.props,{component:this.props.component})):r.a.createElement(d.a,{to:"/login"})}}]),n}(a.Component);g.contextType=p;var v=g,E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.context,t=e.user;e.loginUser,e.logoutUser;return t.getIsUserLoggedIn()?r.a.createElement(d.a,{to:"/"}):r.a.createElement(d.b,Object.assign({},this.props,{component:this.props.component}))}}]),n}(a.Component);E.contextType=p;var y=E,k=n(14),O=n.n(k),j=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"setupAxiosAuthenticationInterceptors",value:function(e){var t=this.createJwtToken(e);O.a.interceptors.request.use((function(e){return e.headers.authorization=t,e}))}},{key:"setupAxiosInitialInterceptors",value:function(){O.a.interceptors.request.use((function(e){return e.headers["Content-Type"]="application/json",e}))}},{key:"post",value:function(e,t){return O.a.post(e,t)}},{key:"get",value:function(e){return O.a.get(e).then((function(e){return e})).catch((function(e){console.log(e.message)}))}},{key:"put",value:function(e,t){return O.a.put(e,t)}},{key:"createJwtToken",value:function(e){return"Bearer "+e}}]),e}()),w=(new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"initialConfig",value:function(){j.setupAxiosInitialInterceptors()}}]),e}()),function(){function e(t,n,a){Object(o.a)(this,e),this.setUsername(t),this.setIsAdminLoggedIn(a),this.setToken(n)}return Object(l.a)(e,[{key:"login",value:function(e,t,n){this.setUsername(e),this.setToken(t),this.setIsUserLoggedIn(!0),this.setIsAdminLoggedIn(n)}},{key:"getIsUserLoggedIn",value:function(){return this.isUserLoggedIn}},{key:"setIsUserLoggedIn",value:function(e){this.isUserLoggedIn=e}},{key:"getIsAdminLoggedIn",value:function(){return this.isAdminLoggedIn}},{key:"setIsAdminLoggedIn",value:function(e){this.isAdminLoggedIn=e}},{key:"getUsername",value:function(){return this.username}},{key:"setUsername",value:function(e){this.username=e,this.isUserLoggedIn=null!=e}},{key:"getToken",value:function(){return this.token}},{key:"setToken",value:function(e){this.token=e}}]),e}()),C=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"authenticateUser",value:function(e,t){var n={username:e,password:t};return j.post(this.authenticationApiEndpoint,n)}},{key:"loginUser",value:function(e,t,n,a){var r="true"===e.data.enabled,s="true"===e.data.admin,i=e.data.jwt;n.getIsUserLoggedIn()||n.getUsername==t||r&&(a(new w(t,i,s)),j.setupAxiosAuthenticationInterceptors(i))}},{key:"logoutUser",value:function(e){e()}},{key:"isUserLoggedIn",value:function(){return null!=this.state.inMemoryToken}},{key:"isAdminLoggedIn",value:function(){return this.state.isAdmin}},{key:"usernameExists",value:function(e){var t=this.usernameExistsApiEndpoint+e+"/exists";return j.get(t)}},{key:"createUser",value:function(e,t,n,a,r,s){var i={username:e,firstName:t,lastName:n,email:a,password:r,address:{houseNumber:"",street:"default",town:"default",postalCode:"default",province:"Ontario",country:"Canada"}};return j.post(this.registrationApiEndpoint,i)}},{key:"getSuccessMessage",value:function(){return this.state.successMessage}},{key:"getFailMessage",value:function(){return this.state.failMessage}}]),e}();C.authenticationApiEndpoint="/api/authenticate",C.authorizationApiEndpoint="/api/authorities",C.registrationApiEndpoint="/api/users",C.usernameExistsApiEndpoint="/api/users/";var U=C,N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.b,{to:"/logout"},r.a.createElement("li",null,"Logout")),r.a.createElement(m.b,{to:"/account"},r.a.createElement("li",null,"Account")))}}]),n}(a.Component),A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.b,{to:"/register"},r.a.createElement("li",null,"Register")),r.a.createElement(m.b,{to:"/login"},r.a.createElement("li",null,"Login")))}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(m.b,{to:"/admin"},r.a.createElement("li",null,"Admin"))}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.context,t=e.user,n=(e.loginUser,e.logoutUser,t.getIsUserLoggedIn()?r.a.createElement(N,null):r.a.createElement(A,null)),a=t.getIsAdminLoggedIn()?r.a.createElement(S,null):" ";return r.a.createElement("nav",{id:"primary-nav"},r.a.createElement("ul",null,r.a.createElement(m.b,{to:"/"},r.a.createElement("li",null,"Home")),r.a.createElement(m.b,{to:"/about"},r.a.createElement("li",null,"About")),r.a.createElement(m.b,{to:"/availabillity"},r.a.createElement("li",null,"Availabillity")),n,a))}}]),n}(a.Component);I.contextType=p;var L=I,x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Footer")}}]),n}(a.Component),P=function(){function e(t,n,a){Object(o.a)(this,e),this.setMessage(n),this.setAction(t),this.setTTL(a)}return Object(l.a)(e,[{key:"getAcion",value:function(){return this.action}},{key:"setAction",value:function(e){this.action=e,this.isNotification=null!=e}},{key:"getMessage",value:function(){return this.message}},{key:"setMessage",value:function(e){this.message=e}},{key:"getTTL",value:function(){return this.ttl}},{key:"setTTL",value:function(e){this.ttl=e}},{key:"getIsNotification",value:function(){return this.isNotification}}]),e}(),T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).createNotification=a.createNotification.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"createNotification",value:function(){if(this.props.notification.getIsNotification())this.props.removeNotification();else{var e=this.props.user;this.props.sendNotification(new P("SUCCESS","MADE A NOTI...WITH "+e,2))}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.createNotification},"Create Notification"))}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"About Page")}}]),n}(a.Component),R=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,null,[{key:"createNotification",value:function(e,t,n){return new P(e,t,n)}},{key:"getSuccessfulLoginNotification",value:function(e){var t=this.successAction,n="Welcome "+e+"!";return this.createNotification(t,n,1)}},{key:"getFailedLoginNotification",value:function(){var e=this.failedAction;return this.createNotification(e,"Incorrect login information.  Please try again.",1)}},{key:"getLogoutNotification",value:function(e){var t=this.successAction,n="See you next time "+e+"!";return this.createNotification(t,n,1)}},{key:"getSuccessfulRegistrationNotification",value:function(e){var t=this.successAction,n="Account successfully created for "+e+"!";return this.createNotification(t,n,2)}},{key:"getFailedRegistrationNotification",value:function(){var e=this.failedAction;return this.createNotification(e,"Incorrect registration information provided.  Please correct and try again.",1)}}]),n}(a.Component);R.successAction="SUCCESS",R.failedAction="FAILED";var D=R,V=n(13),B=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"getErrors",value:function(e,t){switch(e.toLowerCase()){case"username":return this.validateUsername(t);case"firstname":return this.validateFirstName(t);case"lastname":return this.validateLastName(t);case"email":return this.validateEmail(t);case"password":return this.validatePassword(t);case"confirmpassword":return"";case"housenumber":return this.validateHouseNumber(t);case"street":return this.validateStreet(t);case"town":return this.validateTown(t);case"postalcode":return this.validatePostalCode(t);case"province":return this.validateProvince(t);case"country":return this.validateCountry(t)}}},{key:"validateUsername",value:function(e){var t="";return e.length<3&&(t+=" username must be greater then 2 characters"),t}},{key:"validateFirstName",value:function(e){var t="";return e.length<2&&(t+=" first name must be greater then 1 character"),t}},{key:"validateLastName",value:function(e){var t="";return e.length<3&&(t+=" last name must be greater then 2 characters"),t}},{key:"validateEmail",value:function(e){var t="";return(e.length<11||!e.includes("@")||!e.includes("."))&&(t+=" please provide a valid email."),t}},{key:"validatePassword",value:function(e){var t="";return e.length<7&&(t+=" password must be greater then 7 characters"),t}},{key:"validatePasswordMatch",value:function(e,t){var n="";return e!=t&&(n+="your passwords do not match."),n}},{key:"validateHouseNumber",value:function(e){return""}},{key:"validateStreet",value:function(e){var t="";return e.length<4&&(t+=" street must be greater then 3 characters"),t}},{key:"validateTown",value:function(e){var t="";return e.length<3&&(t+=" town must be greater then 2 characters"),t}},{key:"validatePostalCode",value:function(e){var t="";return 6!=e.length&&(t+=" please enter a valid postal code."),t}},{key:"validateProvince",value:function(e){return""}},{key:"validateCountry",value:function(e){return""}},{key:"isValid",value:function(e,t){return e.length>1&&t.length<1}}]),e}(),F=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:"",firstName:"",lastName:"",email:"",password:"",confirmPassword:"",usernameErrors:"",firstNameErrors:"",lastNameErrors:"",emailErrors:"",passwordErrors:"",confirmPasswordErrors:""},a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.registerClicked=a.registerClicked.bind(Object(c.a)(a)),a.disableButton=a.disableButton.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(V.a)({},t,e.target.value));var n=B.getErrors(e.target.name,e.target.value);"confirmPassword"==t&&(n+=B.validatePasswordMatch(this.state.password,e.target.value));var a=t+"Errors";this.setState(Object(V.a)({},a,n))}},{key:"registerClicked",value:function(){console.log("disabledButton says..."+this.disableButton()),this.disableButton()?console.log("click denied"):(console.log("clicking!"),this.props.registerClicked(this.state.username,this.state.firstName,this.state.lastName,this.state.email,this.state.password,this.state.confirmPassword))}},{key:"disableButton",value:function(){return!(B.isValid(this.state.username,this.state.usernameErrors)&&B.isValid(this.state.email,this.state.emailErrors)&&B.isValid(this.state.password,this.state.passwordErrors)&&B.isValid(this.state.confirmPasswordErrors,this.state.confirmPasswordErrors))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register Page"),r.a.createElement("br",null),this.props.generalErrors,r.a.createElement("br",null),this.state.usernameErrors,r.a.createElement("br",null),"Username: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.firstNameErrors,r.a.createElement("br",null),"First Name: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"firstName",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.lastNameErrors,r.a.createElement("br",null),"Last Name:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"lastName",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.emailErrors,r.a.createElement("br",null),"Email: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.passwordErrors,r.a.createElement("br",null),"Password: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.confirmPasswordErrors,r.a.createElement("br",null),"Confirm Password: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"confirmPassword",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.registerClicked},"Register"))}}]),n}(a.Component),G=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={showRedirect:!1,generalErrors:""},a.registerClicked=a.registerClicked.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"registerClicked",value:function(e,t,n,a,r,s){var i=this;U.usernameExists(e).then((function(o){console.log("response data is "+o.data),0==o.data||"false"==o.data?U.createUser(e,t,n,a,r,s).then((function(t){var n=D.getSuccessfulRegistrationNotification(e);i.props.sendNotification(n),i.setState({showRedirect:!0})})).catch((function(){var e=D.getFailedRegistrationNotification();i.props.sendNotification(e)})):i.setState({generalErrors:"Username is already in use. Please choose another."})})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){var e=this.state.showRedirect?r.a.createElement(d.a,{to:"/login"}):"";return r.a.createElement("div",null,e,r.a.createElement(F,{registerClicked:this.registerClicked,generalErrors:this.state.generalErrors}))}}]),n}(a.Component),H=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:null,password:null,errors:{username:"",password:""}},a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.loginClicked=a.loginClicked.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(V.a)({},e.target.name,e.target.value))}},{key:"loginClicked",value:function(){this.props.loginClicked(this.state.username,this.state.password)}},{key:"render",value:function(){var e=this.state.errors.username,t=this.state.errors.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login Page"),this.props.generalErrors,e,r.a.createElement("br",null),r.a.createElement("br",null),"Username:",r.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange}),r.a.createElement("br",null),t,"Password:",r.a.createElement("input",{type:"text",name:"password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.loginClicked},"Login"))}}]),n}(a.Component),_=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={showRedirect:!1,generalErrors:""},a.loginClicked=a.loginClicked.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"loginClicked",value:function(e,t){var n=this;U.authenticateUser(e,t).then((function(t){var a=n.context,r=a.user,s=a.loginUser;a.logoutUser;U.loginUser(t,e,r,s);var i=D.getSuccessfulLoginNotification(e);n.props.sendNotification(i),n.setState({showRedirect:!0})})).catch((function(){n.setState({generalErrors:"username or password is incorrect.  Please check the inputs and try again."});var e=D.getFailedLoginNotification();n.props.sendNotification(e)}))}},{key:"render",value:function(){var e=this.state.showRedirect?r.a.createElement(d.a,{to:"/"}):" ";return r.a.createElement("div",null,e,r.a.createElement(H,{loginClicked:this.loginClicked,generalErrors:this.state.generalErrors}))}}]),n}(a.Component);_.contextType=p;var J=_,W=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.context,t=e.user,n=(e.loginUser,e.logoutUser);U.logoutUser(n);var a=D.getLogoutNotification(t.getUsername());return this.props.sendNotification(a),r.a.createElement(d.a,{to:"/"})}}]),n}(a.Component);W.contextType=p;var q=W,z=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a,r;return Object(o.a)(this,n),(r=t.call(this,e)).state=(a={firstName:"",lastName:"",email:"",houseNumber:"",street:"",town:"",postalCode:"",province:"",country:"",firstNameErrors:"",lastNameErrors:"",emailErrors:"",houseNumberErrors:"",streetErrors:"",townErrors:"",postalCodeErrors:""},Object(V.a)(a,"townErrors",""),Object(V.a)(a,"provinceErrrors",""),Object(V.a)(a,"countryErrors",""),a),r.handleChange=r.handleChange.bind(Object(c.a)(r)),r}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(V.a)({},t,e.target.value));var n=B.getErrors(e.target.name,e.target.value);console.log("errors are..."+n);var a=t+"Errors";this.setState(Object(V.a)({},a,n))}},{key:"saveClicked",value:function(){console.log("save clicked")}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.emailErrors,r.a.createElement("br",null),"Email:",r.a.createElement("input",{type:"text",name:"email",onChange:this.handleChange,defaultValue:this.props.user.email}),r.a.createElement("br",null),this.state.houseNumberErrors,r.a.createElement("br",null),"House Number:",r.a.createElement("input",{type:"text",name:"houseNumber",onChange:this.handleChange,defaultValue:this.props.user.address.houseNumber}),r.a.createElement("br",null),this.state.street,r.a.createElement("br",null),"Street Name:",r.a.createElement("input",{type:"text",name:"street",onChange:this.handleChange,defaultValue:this.props.user.address.street}),r.a.createElement("br",null),this.state.town,r.a.createElement("br",null),"Town / City:",r.a.createElement("input",{type:"text",name:"town",onChange:this.handleChange,defaultValue:this.props.user.address.town}),r.a.createElement("br",null),this.state.postalCode,r.a.createElement("br",null),"Postal Code:",r.a.createElement("input",{type:"text",name:"postalCodde",onChange:this.handleChange,defaultValue:this.props.user.address.postalCode}),r.a.createElement("br",null),this.state.province,r.a.createElement("br",null),"Province:",r.a.createElement("input",{type:"text",name:"province",onChange:this.handleChange,defaultValue:this.props.user.address.province}),r.a.createElement("br",null),this.state.country,r.a.createElement("br",null),"Country:",r.a.createElement("input",{type:"text",name:"country",onChange:this.handleChange,defaultValue:this.props.user.address.country}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.saveClicked},"Save"))}}]),n}(a.Component),$=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",null,this.props.user.username,"'s Settings"),r.a.createElement(z,{user:this.props.user}))}}]),n}(a.Component),K=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"User Getaways Page")}}]),n}(a.Component),Q=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getAllUsers",value:function(){return j.get(this.usersApiEndpoint)}}],[{key:"getUserByUsername",value:function(e){var t=this.usersApiEndpoint+"/"+e;return j.get(t)}}]),e}();Q.usersApiEndpoint="/api/users";var X=Q,Y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={user:null,showUserSettings:!1,showUserGetaways:!1},a.showUserSettings=a.showUserSettings.bind(Object(c.a)(a)),a.showUserGetaways=a.showUserGetaways.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.context.user;X.getUserByUsername(t.getUsername()).then((function(t){e.setState({user:t.data}),console.log(t.data)})).catch()}},{key:"showUserSettings",value:function(){var e=this.state.showUserSettings;this.setState({showUserSettings:!e}),this.setState({showUserGetaways:!1})}},{key:"showUserGetaways",value:function(){var e=this.state.showUserGetaways;this.setState({showUserGetaways:!e}),this.setState({showUserSettings:!1})}},{key:"render",value:function(){var e=this.context.user,t=this.state.showUserSettings?r.a.createElement($,{user:this.state.user}):"",n=this.state.showUserGetaways?r.a.createElement(K,null):"";return r.a.createElement("div",null,r.a.createElement("h1",null,e.getUsername(),"'s' Account Page"),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.showUserSettings},"User Settings"),r.a.createElement("button",{onClick:this.showUserGetaways},"User Getaways")),t,n)}}]),n}(a.Component);Y.contextType=p;var Z=Y,ee=new(function(){function e(){Object(o.a)(this,e),this.roleApiEndpoint="/api/authorities/",this.usersApiEndpoint="/api/users",this.username="",this.userRole="",this.userEnabled=""}return Object(l.a)(e,[{key:"getAllUsers",value:function(){return j.get(this.usersApiEndpoint)}},{key:"getUserAuthority",value:function(e){var t=this.getEditRoleApiEndpoint(e);return console.log(t),j.get(t)}},{key:"getEditRoleApiEndpoint",value:function(e){return this.roleApiEndpoint+e}},{key:"makeUserAdmin",value:function(e,t,n){if(console.log("making admin..."),"ROLE_ADMIN"!=t){var a={username:e,role:"ROLE_ADMIN",enabled:n};return j.put(this.getEditRoleApiEndpoint(e),a)}}},{key:"makeUserUser",value:function(e,t,n){if(console.log("making user..."),"ROLE_USER"!=t){var a={username:e,role:"ROLE_USER",enabled:n};return j.put(this.getEditRoleApiEndpoint(e),a)}}},{key:"disableUser",value:function(e,t,n){if("true"==n){var a={username:e,role:t,enabled:"false"};return j.put(this.getEditRoleApiEndpoint(e),a)}}},{key:"enableUser",value:function(e,t,n){if("false"==n){var a={username:e,role:t,enabled:"true"};return j.put(this.getEditRoleApiEndpoint(e),a)}}}]),e}()),te=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={username:"",firstName:"",lastName:"",email:"",role:"",enabled:"",showSuccessMessage:!1,successMessage:"Change Made Successfully!"},a.makeUserAdmin=a.makeUserAdmin.bind(Object(c.a)(a)),a.makeUserUser=a.makeUserUser.bind(Object(c.a)(a)),a.disableUser=a.disableUser.bind(Object(c.a)(a)),a.enableUser=a.enableUser.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"makeUserAdmin",value:function(){var e=this;ee.makeUserAdmin(this.props.user.username,this.props.role,this.props.enabled).then((function(t){e.props.updateAuthorityState(t.data.role,t.data.enabled),e.setState({showSuccessMessage:!0})})).catch((function(e){console.log(e.message)}))}},{key:"makeUserUser",value:function(){var e=this;ee.makeUserUser(this.props.user.username,this.props.role,this.props.enabled).then((function(t){e.props.updateAuthorityState(t.data.role,t.data.enabled),e.setState({showSuccessMessage:!0})})).catch()}},{key:"disableUser",value:function(){var e=this;ee.disableUser(this.props.user.username,this.props.role,this.props.enabled).then((function(t){e.props.updateAuthorityState(t.data.role,t.data.enabled),e.setState({showSuccessMessage:!0})})).catch()}},{key:"enableUser",value:function(){var e=this;ee.enableUser(this.props.user.username,this.props.role,this.props.enabled).then((function(t){e.props.updateAuthorityState(t.data.role,t.data.enabled),e.setState({showSuccessMessage:!0})})).catch()}},{key:"render",value:function(){var e=this.state.showSuccessMessage?r.a.createElement("tr",null,r.a.createElement("td",null,this.state.successMessage)):"";return r.a.createElement("div",null,e,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{onClick:this.makeUserAdmin},"Make Admin")),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.makeUserUser},"Make User")),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.disableUser},"Disable")),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.enableUser},"Enable"))))}}]),n}(a.Component),ne=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={role:[],enabled:"false",showEditUser:!1,showEditUserRole:!1,availableAction:"Edit",display:!1},a.showEditUser=a.showEditUser.bind(Object(c.a)(a)),a.updateAuthorityState=a.updateAuthorityState.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;ee.getUserAuthority(this.props.user.username).then((function(t){e.updateAuthorityState(t.data.role,t.data.enabled)})).catch((function(e){console.log("Some Error Occured..."),console.log(e.message)}))}},{key:"showEditUser",value:function(){this.state.showEditUser?this.setState({availableAction:"Edit"}):this.setState({availableAction:"Close"}),this.setState({showEditUser:!this.state.showEditUser})}},{key:"updateAuthorityState",value:function(e,t){if(!0===t)var n="true";else n="false";this.setState({role:e}),this.setState({enabled:n})}},{key:"render",value:function(){var e=this.state.showEditUser?r.a.createElement(te,{user:this.props.user,role:this.state.role,enabled:this.state.enabled,updateAuthorityState:this.updateAuthorityState.bind(this)}):" ";return r.a.createElement("div",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.props.user.username),r.a.createElement("td",null,this.props.user.firstName),r.a.createElement("td",null,this.props.user.lastName),r.a.createElement("td",null,this.props.user.email),r.a.createElement("td",null,this.state.role),r.a.createElement("td",null,this.state.enabled),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.showEditUser},this.state.availableAction))),e)}}]),n}(a.Component),ae=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.users.map((function(e){return r.a.createElement(ne,{user:e})}));return r.a.createElement("table",null,r.a.createElement("body",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Role"),r.a.createElement("th",null,"Enabled"),r.a.createElement("th",null)),e))}}]),n}(a.Component),re=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.member.firstName),r.a.createElement("td",null,this.props.member.lastName),r.a.createElement("td",null,this.props.member.email))}}]),n}(a.Component),se=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={booking:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get(this.props.getaway._links.booking.href).then((function(t){return e.setState({booking:t.data})}))}},{key:"render",value:function(){var e=this.props.getaway.details.members.map((function(e){return r.a.createElement(re,{member:e})}));return r.a.createElement("tr",null,r.a.createElement("td",null,this.state.booking.startDate),r.a.createElement("td",null,this.state.booking.endDate),r.a.createElement("td",null,this.state.booking.bookedDate),r.a.createElement("td",null,this.props.getaway.details.numOfVehicles),r.a.createElement("td",null,this.props.getaway.details.numOfPets),r.a.createElement("td",null,e),r.a.createElement("td",null,this.props.getaway.details.desc))}}]),n}(a.Component),ie=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.getaways.map((function(e){return r.a.createElement(se,{getaway:e})}));return r.a.createElement("table",null,r.a.createElement("body",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Start Date"),r.a.createElement("th",null,"End Date"),r.a.createElement("th",null,"Booked Date"),r.a.createElement("th",null,"numOfVehicles"),r.a.createElement("th",null,"numOfCars"),r.a.createElement("th",null,"Members"),r.a.createElement("th",null,"desc")),e))}}]),n}(a.Component),oe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={users:[],getaways:[],authorities:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;ee.getAllUsers().then((function(t){console.log(t),e.setState({users:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin Page"),r.a.createElement("div",null,r.a.createElement("h3",null,"Active Users Baby"),r.a.createElement(ae,{users:this.state.users})),"// ",r.a.createElement("div",null,"//  ",r.a.createElement("h3",null,"Getaways"),"//  ",r.a.createElement(ie,{getaways:this.state.getaways}),"// "))}}]),n}(a.Component),le=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Availabillity Page")}}]),n}(a.Component),ce=(r.a.createContext(),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isNotification:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.history.listen((function(t,n){e.props.notification.getTTL()<=1?e.props.removeNotification():e.props.notification.setTTL(e.props.notification.getTTL()-1)}))}},{key:"render",value:function(){var e=this.props.notification.getIsNotification()?r.a.createElement("h5",null,this.props.notification.getMessage()):"";return r.a.createElement("div",null,e)}}]),n}(a.Component)),ue=Object(d.g)(ce),he=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("header",null,r.a.createElement(L,null),r.a.createElement(ue,{notification:this.props.notification,removeNotification:this.props.removeNotification})),r.a.createElement("body",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/about"},r.a.createElement(M,null)),r.a.createElement(d.b,{path:"/availabillity"},r.a.createElement(le,null)),r.a.createElement(d.b,{path:"/register"},r.a.createElement(G,{sendNotification:this.props.sendNotification})),r.a.createElement(y,{component:J,path:"/login"},r.a.createElement(J,{sendNotification:this.props.sendNotification})),r.a.createElement(b,{component:q,path:"/logout"},r.a.createElement(q,{sendNotification:this.props.sendNotification})),r.a.createElement(b,{component:Z,path:"/account"},r.a.createElement(Z,null)),r.a.createElement(v,{component:oe,path:"/admin"},r.a.createElement(oe,null)),r.a.createElement(d.b,{path:"/"},r.a.createElement(T,{notification:this.props.notification,removeNotification:this.props.removeNotification,sendNotification:this.props.sendNotification})))),r.a.createElement("footer",null,r.a.createElement(x,null)))}}]),n}(a.Component),me=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={user:new w(null,null,!1),notification:new P(null,null,null)},a.loginUser=a.loginUser.bind(Object(c.a)(a)),a.logoutUser=a.logoutUser.bind(Object(c.a)(a)),a.sendNotification=a.sendNotification.bind(Object(c.a)(a)),a.removeNotification=a.removeNotification.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"loginUser",value:function(e){this.setState({user:e})}},{key:"logoutUser",value:function(){this.setState({user:new w(null,null,!1)})}},{key:"sendNotification",value:function(e){console.log("got notification"),console.log(e),this.setState({notification:e})}},{key:"removeNotification",value:function(){this.setState({notification:new P(null,null,null)})}},{key:"render",value:function(){var e=this.state.user,t=this.loginUser,n=this.logoutUser,a=this.state.notification,s=this.sendNotification,i=this.removeNotification;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Provider,{value:{user:e,loginUser:t,logoutUser:n}},r.a.createElement(he,{notification:a,sendNotification:s,removeNotification:i})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.eae9bf9c.chunk.js.map