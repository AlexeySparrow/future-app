(this["webpackJsonpfuture-app"]=this["webpackJsonpfuture-app"]||[]).push([[0],{11:function(e,t,r){e.exports={container:"WriteText_container__1PM-K",box:"WriteText_box__6y68L",input:"WriteText_input__34jmO"}},25:function(e,t,r){e.exports={container:"DownloadRing_container__22g2t",roller:"DownloadRing_roller__3NaIO","lds-roller":"DownloadRing_lds-roller__2h0Oc"}},26:function(e,t,r){e.exports={numbers:"Numbers_numbers__1Nd_9",numberAction:"Numbers_numberAction__1QALv"}},27:function(e,t,r){e.exports={button:"ButtonNext_button__143e8",next:"ButtonNext_next__3UHjC"}},28:function(e,t,r){e.exports={addBtn:"AddUserButton_addBtn__2j2Qv",addBtnClose:"AddUserButton_addBtnClose__3wtDB"}},29:function(e,t,r){e.exports={container:"SelectData_container__YFrkp",title:"SelectData_title__2TtWo"}},41:function(e,t,r){e.exports={wrapper:"app_wrapper__eA6sn"}},42:function(e,t,r){e.exports={container:"Table_container__oo58s"}},45:function(e,t,r){e.exports={contactsTable:"ContactsTable_contactsTable__2yaxb"}},47:function(e,t,r){e.exports={upPanel:"UpPanel_upPanel__3CtQk"}},48:function(e,t,r){e.exports={search:"Search_search__y-OdR"}},49:function(e,t,r){e.exports={button:"ButtonAddUser_button__1LROI"}},50:function(e,t,r){e.exports={button:"ButtonSearch_button__3ejdV"}},51:function(e,t,r){e.exports={pagination:"Pagination_pagination__1aaZ5"}},52:function(e,t,r){e.exports={button:"ButtonPrev_button__2Fn2Q"}},53:function(e,t,r){e.exports={titleTable:"TitleTable_titleTable__1248Q"}},54:function(e,t,r){e.exports={container:"UserList_container__2zt5R"}},55:function(e,t,r){e.exports={container:"AddUser_container__2CsF8"}},56:function(e,t,r){e.exports={selectBtn:"SelectDataBtn_selectBtn__22Ct9"}},62:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),s=r.n(a),c=r(21),o=r.n(c),i=(r(62),r(41)),u=r.n(i),l=r(42),d=r.n(l),b=r(2),j=r(14),x=r(15),O=r(18),p=r(17),h=r(3),f=r(45),g=r.n(f),m=function(e){var t=e.setDetailUser;return t=function(t){e.setRowUser(t)},Object(n.jsx)("tbody",{children:e.currentBlockRows.map((function(e,r){return Object(n.jsxs)("tr",{className:g.a.contactsTable,onClick:function(){t(e)},children:[Object(n.jsx)("td",{children:e.id}),Object(n.jsx)("td",{children:e.firstName}),Object(n.jsx)("td",{children:e.lastName}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.phone})]},r)}))})},w=r(12),_="UPDATE_REQUEST_SEARCH",P="ON_SEARCH",U="UPDATE_TEXT_PAGE_ADD_USER_ID",A="UPDATE_TEXT_PAGE_ADD_USER_FIRST_NAME",v="UPDATE_TEXT_PAGE_ADD_USER_LAST_NAME",S="UPDATE_TEXT_PAGE_ADD_USER_EMAIL",N="UPDATE_TEXT_PAGE_ADD_USER_PHONE",T="SEND_NEW_USER_IN_TABLE",B="TOGGLE_IS_FETCHING",D="SET_USERS",R="DIRECTION_SORT",E="DIRECTION_SORT_FIELD_ARROW",C="DETAILS_USER_INFO",y="ROW_USER_INFO",L="OPEN_ADD_USER_PANEL",F="BIG_SERVER_DATA",I="SMALL_SERVER_DATA",k="CURRENT_BUTTON",q="CURRENT_BLOCK_ROWS",G={users:[],newRequestSearch:"",onSearch:"",newTextPageAddUserId:"",newTextPageAddUserFirstName:"",newTextPageAddUserLastName:"",newTextPageAddUserEmail:"",newTextPageAddUserPhone:"",isFetching:!1,directionSort:!0,fieldArrow:"",detailUser:"",rowUser:"",openPanelAddUser:!1,bigServerData:!1,smallServerData:!1,currentButton:1,maxUsersOnPage:17,currentBlockRows:[],dotsRight:"...",dotsLeft:"..."},M=function(e){return{type:D,users:e}},W=function(e){return{type:k,currentButton:e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(b.a)(Object(b.a)({},e),{},{newRequestSearch:t.newRequestSearch});case P:return Object(b.a)(Object(b.a)({},e),{},{onSearch:t.onSearch});case U:return Object(b.a)(Object(b.a)({},e),{},{newTextPageAddUserId:t.newUser});case A:return Object(b.a)(Object(b.a)({},e),{},{newTextPageAddUserFirstName:t.newUser});case v:return Object(b.a)(Object(b.a)({},e),{},{newTextPageAddUserLastName:t.newUser});case S:return Object(b.a)(Object(b.a)({},e),{},{newTextPageAddUserEmail:t.newUser});case N:return Object(b.a)(Object(b.a)({},e),{},{newTextPageAddUserPhone:t.newUser});case T:var r={id:e.newTextPageAddUserId,firstName:e.newTextPageAddUserFirstName,lastName:e.newTextPageAddUserLastName,email:e.newTextPageAddUserEmail,phone:e.newTextPageAddUserPhone};return Object(b.a)(Object(b.a)({},e),{},{newTextPageAddUserId:"",newTextPageAddUserFirstName:"",newTextPageAddUserLastName:"",newTextPageAddUserEmail:"",newTextPageAddUserPhone:"",users:[r].concat(Object(w.a)(e.users))});case D:return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case B:return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case R:return Object(b.a)(Object(b.a)({},e),{},{directionSort:t.directionSort});case E:return Object(b.a)(Object(b.a)({},e),{},{fieldArrow:t.fieldArrow});case C:return Object(b.a)(Object(b.a)({},e),{},{detailUser:t.detailUser});case y:return Object(b.a)(Object(b.a)({},e),{},{rowUser:t.rowUser});case L:return Object(b.a)(Object(b.a)({},e),{},{openPanelAddUser:t.openPanelAddUser});case F:return Object(b.a)(Object(b.a)({},e),{},{bigServerData:t.bigServerData});case I:return Object(b.a)(Object(b.a)({},e),{},{smallServerData:t.smallServerData});case k:return Object(b.a)(Object(b.a)({},e),{},{currentButton:t.currentButton});case q:return Object(b.a)(Object(b.a)({},e),{},{currentBlockRows:t.currentBlockRows});default:return e}},H=r(46),X=r(25),V=r.n(X),z=function(){return Object(n.jsx)("div",{className:V.a.container,children:Object(n.jsxs)("div",{className:V.a.roller,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})},J=function(e){Object(O.a)(r,e);var t=Object(p.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(x.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0);var t=function(t){H.get(t).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data)}))};this.props.bigServerData?t("https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"):this.props.smallServerData&&t("https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.isFetching?Object(n.jsx)("tbody",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("td",{children:Object(n.jsx)(z,{})})})}):null,Object(n.jsx)(m,Object(b.a)({},this.props))]})}}]),r}(s.a.Component),K=Object(h.b)((function(e){return{tablePage:e.tablePage,isFetching:e.tablePage.isFetching,bigServerData:e.tablePage.bigServerData,smallServerData:e.tablePage.smallServerData,currentBlockRows:e.tablePage.currentBlockRows}}),{setUsers:M,toggleIsFetching:function(e){return{type:B,isFetching:e}},setDetailUser:function(e){return{type:C,detailUser:e}},setRowUser:function(e){return{type:y,rowUser:e}}})(J),Y=r(47),Z=r.n(Y),$=r(48),ee=r.n($),te=function(e){return Object(n.jsx)("div",{className:ee.a.search,children:Object(n.jsx)("input",{value:e.newRequestSearch,onChange:function(t){return e.updateTextRequestSearch(t.target.value)},type:"text",placeholder:"search"})})},re=Object(h.b)((function(e){return{newRequestSearch:e.tablePage.newRequestSearch,users:e.tablePage.users}}),{updateTextRequestSearch:function(e){return{type:_,newRequestSearch:e}}})(te),ne=r(49),ae=r.n(ne),se=r.p+"static/media/plus.6ae41f57.svg",ce=function(e){return Object(n.jsx)("button",{className:ae.a.button,onClick:function(){e.setOpenPanelAddUser(!e.openPanelAddUser)},children:Object(n.jsx)("img",{src:se,alt:"search"})})},oe=Object(h.b)((function(e){return{openPanelAddUser:e.tablePage.openPanelAddUser}}),{setOpenPanelAddUser:function(e){return{type:L,openPanelAddUser:e}}})(ce),ie=r(50),ue=r.n(ie),le=r.p+"static/media/search.85c7305c.svg",de=function(e){return Object(n.jsx)("button",{className:ue.a.button,onClick:function(){e.updateOnSearch(e.newRequestSearch)},children:Object(n.jsx)("img",{src:le,alt:"search"})})},be=Object(h.b)((function(e){return{newRequestSearch:e.tablePage.newRequestSearch}}),{updateOnSearch:function(e){return{type:P,onSearch:e}}})(de),je=function(){return Object(n.jsxs)("div",{className:Z.a.upPanel,children:[Object(n.jsx)(oe,{}),Object(n.jsx)(re,{}),Object(n.jsx)(be,{})]})},xe=r(51),Oe=r.n(xe),pe=r(26),he=r.n(pe),fe=r(27),ge=r.n(fe),me=r.p+"static/media/arrow.cab3b3c1.svg",we=function(e){return Object(n.jsx)("button",{className:ge.a.button,onClick:function(){return e.setCurrentButton(e.currentButton===e.arrayNumbers.length?e.currentButton:e.currentButton+1)},children:Object(n.jsx)("img",{src:me,alt:"next",className:ge.a.next})})},_e=Object(h.b)((function(e){return{currentButton:e.tablePage.currentButton}}),{setCurrentButton:W})(we),Pe=r(52),Ue=r.n(Pe),Ae=function(e){return Object(n.jsx)("button",{className:Ue.a.button,onClick:function(){return e.setCurrentButton(1===e.currentButton?e.currentButton:e.currentButton-1)},children:Object(n.jsx)("img",{src:me,alt:"prev"})})},ve=Object(h.b)((function(e){return{currentButton:e.tablePage.currentButton}}),{setCurrentButton:W})(Ae),Se=function(e){for(var t=e.filteredData(),r=Math.ceil(t.length/e.maxUsersOnPage),a=[],s=1;s<=r;s++)a.push(s);var c=[].concat(a);if(a.length>6)if(e.currentButton>=1&&e.currentButton<=3)c=[1,2,3,4,e.dotsRight,a.length];else if(4===e.currentButton){var o=a.slice(0,5);c=[].concat(Object(w.a)(o),[e.dotsRight,a.length])}else if(e.currentButton>4&&e.currentButton<a.length-2){var i=a.slice(e.currentButton-2,e.currentButton),u=a.slice(e.currentButton,e.currentButton+1);c=[1,e.dotsLeft].concat(Object(w.a)(i),Object(w.a)(u),[e.dotsRight,a.length])}else if(e.currentButton>a.length-3){var l=a.slice(a.length-4);c=[1,e.dotsLeft].concat(Object(w.a)(l))}else e.currentButton!==e.dotsRight&&e.currentButton!==e.dotsLeft||Math.ceil(e.setCurrentButton(a.length/2));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ve,{}),Object(n.jsx)("div",{className:he.a.numbers,children:c.map((function(t,r){return Object(n.jsx)("span",{className:t===e.currentButton?he.a.numberAction:void 0,onClick:function(){e.setCurrentButton(t)},children:t},r)}))}),Object(n.jsx)(_e,{arrayNumbers:a})]})},Ne=function(e){Object(O.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).filteredData=function(){return e.props.onSearch?e.props.users.filter((function(t){return t.firstName.toLowerCase().includes(e.props.onSearch.toLowerCase())||t.lastName.toLowerCase().includes(e.props.onSearch.toLowerCase())||t.email.toLowerCase().includes(e.props.onSearch.toLowerCase())||t.phone.includes(e.props.onSearch)})):e.props.users},e}return Object(x.a)(r,[{key:"componentDidUpdate",value:function(){var e=this.props.currentButton*this.props.maxUsersOnPage,t=e-this.props.maxUsersOnPage;this.props.setCurrentBlockRows(this.filteredData().slice(t,e))}},{key:"render",value:function(){return Object(n.jsx)(Se,Object(b.a)(Object(b.a)({},this.props),{},{filteredData:this.filteredData}))}}]),r}(s.a.Component),Te=Object(h.b)((function(e){return{currentButton:e.tablePage.currentButton,arrayNumbers:e.tablePage.arrayNumbers,users:e.tablePage.users,maxUsersOnPage:e.tablePage.maxUsersOnPage,newRequestSearch:e.tablePage.newRequestSearch,dotsRight:e.tablePage.dotsRight,dotsLeft:e.tablePage.dotsLeft,onSearch:e.tablePage.onSearch}}),{setCurrentButton:W,setCurrentBlockRows:function(e){return{type:q,currentBlockRows:e}}})(Ne),Be=function(){return Object(n.jsx)("div",{className:Oe.a.pagination,children:Object(n.jsx)(Te,{})})},De=r(53),Re=r.n(De),Ee=function(e){return e.directionSort?Object(n.jsx)("span",{children:"\u25b2"}):Object(n.jsx)("span",{children:"\u25bc"})},Ce=Object(h.b)((function(e){return{directionSort:e.tablePage.directionSort}}),{})(Ee),ye=function(e){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:Re.a.titleTable,children:[Object(n.jsxs)("th",{onClick:function(){e.fieldSortArrow("id")},children:["id"===e.fieldArrow?Object(n.jsx)(Ce,{}):null,"Id"]}),Object(n.jsxs)("th",{onClick:function(){e.fieldSortArrow("firstName")},children:["firstName"===e.fieldArrow?Object(n.jsx)(Ce,{}):null,"First Name"]}),Object(n.jsxs)("th",{onClick:function(){e.fieldSortArrow("lastName")},children:["lastName"===e.fieldArrow?Object(n.jsx)(Ce,{}):null,"Last Name"]}),Object(n.jsxs)("th",{onClick:function(){e.fieldSortArrow("email")},children:["email"===e.fieldArrow?Object(n.jsx)(Ce,{}):null,"Email"]}),Object(n.jsxs)("th",{onClick:function(){e.fieldSortArrow("phone")},children:["phone"===e.fieldArrow?Object(n.jsx)(Ce,{}):null,"Phone"]})]})})},Le=function(e){Object(O.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).sortData=function(t){var r,n=e.props.tablePage.users.concat();e.props.directionSort&&n.sort((function(e,r){return e[t]>r[t]?1:-1})),r=n.reverse((function(e,r){return e[t]>r[t]?1:-1})),e.props.setUsers(r),e.props.setDirectionSort(!e.props.directionSort)},e.fieldSortArrow=function(t){e.sortData(t),e.props.setFieldArrow(t)},e}return Object(x.a)(r,[{key:"render",value:function(){return Object(n.jsx)(ye,Object(b.a)(Object(b.a)({},this.props),{},{fieldSortArrow:this.fieldSortArrow}))}}]),r}(s.a.Component),Fe=Object(h.b)((function(e){return{tablePage:e.tablePage,directionSort:e.tablePage.directionSort,fieldArrow:e.tablePage.fieldArrow}}),{setUsers:M,setDirectionSort:function(e){return{type:R,directionSort:e}},setFieldArrow:function(e){return{type:E,fieldArrow:e}}})(Le),Ie=r(54),ke=r.n(Ie),qe=function(e){var t=e.rowUser&&e.rowUser.address?e.rowUser.address.city:null,r=e.rowUser&&e.rowUser.address?e.rowUser.address.streetAddress:null,a=e.rowUser&&e.rowUser.address?e.rowUser.address.state:null,s=e.rowUser&&e.rowUser.address?e.rowUser.address.zip:null;return Object(n.jsxs)("div",{className:ke.a.container,children:[Object(n.jsxs)("div",{children:["User: ",Object(n.jsxs)("span",{children:[" ",e.rowUser.firstName," ",e.rowUser.lastName," "]})]}),Object(n.jsxs)("div",{children:["Description: ",Object(n.jsxs)("span",{children:[" ",e.rowUser.description," "]})]}),Object(n.jsxs)("div",{children:["Address: ",Object(n.jsxs)("span",{children:[" ",r," "]})]}),Object(n.jsxs)("div",{children:["City: ",Object(n.jsxs)("span",{children:[" ",t," "]})]}),Object(n.jsxs)("div",{children:["State: ",Object(n.jsxs)("span",{children:[" ",a," "]})]}),Object(n.jsxs)("div",{children:["Index: ",Object(n.jsxs)("span",{children:[" ",s," "]})]})]})},Ge=Object(h.b)((function(e){return{rowUser:e.tablePage.rowUser}}),{})(qe),Me=r(55),We=r.n(Me),Qe=r(11),He=r.n(Qe),Xe=function(e){return Object(n.jsxs)("div",{className:He.a.container,children:[Object(n.jsxs)("div",{className:He.a.box,children:[Object(n.jsx)("label",{children:" Id "}),Object(n.jsx)("input",{className:He.a.input,type:"number",placeholder:"write in...",value:e.tablePage.newTextPageAddUserId,onChange:function(t){var r=t.target.value;e.updateTextPageAddUserId(r)}})]}),Object(n.jsxs)("div",{className:He.a.box,children:[Object(n.jsx)("label",{children:" First Name "}),Object(n.jsx)("input",{className:He.a.input,type:"text",placeholder:"write in...",value:e.tablePage.newTextPageAddUserFirstName,onChange:function(t){var r=t.target.value;e.updateTextPageAddUserFirstName(r)}})]}),Object(n.jsxs)("div",{className:He.a.box,children:[Object(n.jsx)("label",{children:" Last Name "}),Object(n.jsx)("input",{className:He.a.input,type:"text",placeholder:"write in...",value:e.tablePage.newTextPageAddUserLastName,onChange:function(t){var r=t.target.value;e.updateTextPageAddUserLastName(r)}})]}),Object(n.jsxs)("div",{className:He.a.box,children:[Object(n.jsx)("label",{children:" Email "}),Object(n.jsx)("input",{className:He.a.input,type:"email",placeholder:"write in...",value:e.tablePage.newTextPageAddUserEmail,onChange:function(t){var r=t.target.value;e.updateTextPageAddUserEmail(r)}})]}),Object(n.jsxs)("div",{className:He.a.box,children:[Object(n.jsx)("label",{children:" Phone "}),Object(n.jsx)("input",{className:He.a.input,type:"tel",placeholder:"write in...",value:e.tablePage.newTextPageAddUserPhone,onChange:function(t){var r=t.target.value;e.updateTextPageAddUserPhone(r)}})]})]})},Ve=Object(h.b)((function(e){return{tablePage:e.tablePage}}),{updateTextPageAddUserId:function(e){return{type:U,newUser:e}},updateTextPageAddUserFirstName:function(e){return{type:A,newUser:e}},updateTextPageAddUserLastName:function(e){return{type:v,newUser:e}},updateTextPageAddUserEmail:function(e){return{type:S,newUser:e}},updateTextPageAddUserPhone:function(e){return{type:N,newUser:e}}})(Xe),ze=r(28),Je=r.n(ze),Ke=function(e){return e.tablePage.newTextPageAddUserId,e.tablePage.newTextPageAddUserFirstName,e.tablePage.newTextPageAddUserLastName,e.tablePage.newTextPageAddUserEmail,e.tablePage.newTextPageAddUserPhone?Object(n.jsx)("button",{className:Je.a.addBtn,onClick:function(){e.setSendNewUser()},children:"Add"}):Object(n.jsx)("button",{className:Je.a.addBtnClose,children:"Add"})},Ye=Object(h.b)((function(e){return{tablePage:e.tablePage}}),{setSendNewUser:function(){return{type:T}}})(Ke),Ze=function(e){return e.openPanelAddUser?Object(n.jsxs)("div",{className:We.a.container,children:[Object(n.jsx)(Ve,{}),Object(n.jsx)(Ye,{})]}):Object(n.jsx)("div",{})},$e=Object(h.b)((function(e){return{openPanelAddUser:e.tablePage.openPanelAddUser}}),{})(Ze),et=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(je,{}),Object(n.jsx)($e,{}),Object(n.jsxs)("table",{className:d.a.container,children:[Object(n.jsx)(Fe,{}),Object(n.jsx)(K,{})]}),Object(n.jsx)(Be,{}),Object(n.jsx)(Ge,{})]})},tt=r(29),rt=r.n(tt),nt=r(56),at=r.n(nt),st=r(16),ct=function(e){return Object(n.jsxs)("div",{className:at.a.selectBtn,children:[Object(n.jsx)(st.b,{to:"/table",onClick:function(){e.setSmallServerData(!e.smallServerData)},children:"SMALL"}),Object(n.jsx)(st.b,{to:"/table",onClick:function(){e.setBigServerData(!e.bigServerData)},children:"BIG"})]})},ot=Object(h.b)((function(e){return{bigServerData:e.tablePage.bigServerData,smallServerData:e.tablePage.smallServerData}}),{setBigServerData:function(e){return{type:F,bigServerData:e}},setSmallServerData:function(e){return{type:I,smallServerData:e}}})(ct),it=function(){return Object(n.jsxs)("div",{className:rt.a.container,children:[Object(n.jsx)("h1",{className:rt.a.title,children:"select dataset:"}),Object(n.jsx)(ot,{})]})},ut=r(5),lt=function(){return Object(n.jsxs)("div",{className:u.a.wrapper,children:[Object(n.jsx)(ut.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(it,{})}}),Object(n.jsx)(ut.a,{path:"/table",render:function(){return Object(n.jsx)(et,{})}})]})},dt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,91)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))},bt=r(20),jt=Object(bt.b)({tablePage:Q}),xt=Object(bt.c)(jt);o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(st.a,{basename:"/future-app",children:Object(n.jsx)(h.a,{store:xt,children:Object(n.jsx)(lt,{})})})}),document.getElementById("root")),dt()}},[[90,1,2]]]);
//# sourceMappingURL=main.b50e1554.chunk.js.map