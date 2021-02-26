(this["webpackJsonpaccounts-app"]=this["webpackJsonpaccounts-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(25),a(18)),i=a(19),s=a(2),u=a(3),d=a(5),m=a(4),h=a(6),p=a(7),f=a.n(p),b=Object({NODE_ENV:"production",PUBLIC_URL:"/accounts-app"}).REACT_APP_RECORDS_API_URL||"http://5dcd5c99d795470014e4d032.mockapi.io",v=function(e){return f.a.post("".concat(b,"/api/v1/records"),e)},E=function(e,t){return f.a.put("".concat(b,"/api/v1/records/").concat(e),t)},g=function(e){return f.a.delete("".concat(b,"/api/v1/records/").concat(e))},y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleToggle=function(){a.setState({edit:!a.state.edit})},a.handleEdit=function(e){e.preventDefault();var t={date:a.refs.date.value,title:a.refs.title.value,amount:a.refs.amount.value};E(a.props.record.id,t).then((function(e){a.setState({edit:!1}),a.props.handleUpdateRecord(a.props.record,e.data)})).catch((function(e){return console.log(e.message)}))},a.handleDelte=function(){g(a.props.record.id).then((function(e){return a.props.handleDeleteRecord(a.props.record)})).catch((function(e){return console.log(e.message)}))},a.state={edit:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderForm",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.record.date,ref:"date"})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.record.title,ref:"title"})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.record.amount,ref:"amount"})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-info mr-1",onClick:this.handleEdit},"Update"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.handleToggle},"Cancel")))}},{key:"renderRow",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.record.date),r.a.createElement("td",null,this.props.record.title),r.a.createElement("td",null,this.props.record.amount),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-info mr-1",onClick:this.handleToggle},"Edit"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.handleDelte},"Delete")))}},{key:"render",value:function(){return this.state.edit?this.renderForm():this.renderRow()}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t,n,r={};t=e.target.name+"",n=e.target.value,r[t]=n,a.setState(r)},a.handleSubmit=function(e){e.preventDefault();var t={date:a.state.date,title:a.state.title,amount:Number.parseInt(a.state.amount)};v(t).then((function(e){a.props.handleNewRecord(e.data),a.setState({date:"",title:"",amount:""})})).catch((function(e){return console.log(e.message)}))},a.state={date:"",title:"",amount:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"valid",value:function(){return this.state.date&&this.state.title&&this.state.amount}},{key:"render",value:function(){return r.a.createElement("form",{className:"form-inline mb-3",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group mr-1"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Date",name:"date",onChange:this.handleChange,value:this.state.date})),r.a.createElement("div",{className:"form-group mr-1"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",onChange:this.handleChange,value:this.state.title})),r.a.createElement("div",{className:"form-group mr-1"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Amount",name:"amount",onChange:this.handleChange,value:this.state.amount})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!this.valid()},"Create Record"))}}]),t}(n.Component),j=function(e){var t=e.text,a=e.type,n=e.amount;return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header bg-".concat(a," text-white")},t),r.a.createElement("div",{className:"card-body"},n)))};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={error:null,isLoaded:!1,records:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat(b,"/api/v1/records")).then((function(t){return e.setState({records:t.data,isLoaded:!0})})).catch((function(t){return e.setState({isLoaded:!0,error:t})}))}},{key:"addRecord",value:function(e){this.setState({records:[].concat(Object(i.a)(this.state.records),[e])})}},{key:"updateRecord",value:function(e,t){var a=this.state.records.indexOf(e),n=this.state.records.map((function(e,n){return n!==a?e:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t)}));this.setState({records:n})}},{key:"delteRecord",value:function(e){var t=this.state.records.indexOf(e),a=this.state.records.filter((function(e,a){return a!==t}));this.setState({records:a})}},{key:"credits",value:function(){var e=this.state.records.filter((function(e){return e.amount>=0}));return e.reduce((function(e,t){return e+parseInt(t.amount)}),0)}},{key:"debits",value:function(){var e=this.state.records.filter((function(e){return e.amount<0}));return e.reduce((function(e,t){return e+parseInt(t.amount)}),0)}},{key:"balance",value:function(){return this.credits()+this.debits()}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,c=t.records,o=null;return o=a?r.a.createElement("div",null,"Error:",a.message):n?r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,c.map((function(t){return r.a.createElement(y,{key:t.id,record:t,handleUpdateRecord:e.updateRecord.bind(e),handleDeleteRecord:e.delteRecord.bind(e)})})))):r.a.createElement("div",null,"Loading..."),r.a.createElement("div",null,r.a.createElement("h2",null,"Records"),r.a.createElement("div",{className:"row mb-3"},r.a.createElement(j,{text:"Credit",type:"success",amount:this.credits()}),r.a.createElement(j,{text:"Debit",type:"danger",amount:this.debits()}),r.a.createElement(j,{text:"Balance",type:"info",amount:this.balance()})),r.a.createElement(O,{handleNewRecord:this.addRecord.bind(this)}),o)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.260820e9.chunk.js.map