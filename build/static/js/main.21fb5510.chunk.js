(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),i=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))}),o=(n(13),n(4)),h=n(5),l=n(7),b=n(6),u=n(0),d=function(e){var t=e.id,n=e.name,c=e.email;return Object(u.jsxs)("div",{className:"tc sans-serif bg-light-blue dib grow br3 pa3 ma2 bw2 shadow-5",children:[Object(u.jsx)("img",{className:"br-100 bw2",src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"test"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"courier f3",children:n}),Object(u.jsx)("p",{className:"times f5",children:c})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){var t=e.searchchange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"w-25 tc outline-0 pointer grow pa3 ba b--light-blue bw3 bg-light-green br-pill",type:"search",placeholder:"Search Robots",onChange:t})})},m=(n(15),function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",height:"400px"},children:e.children})}),g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"Robo Friends"}),Object(u.jsx)(f,{searchchange:this.onSearchChange}),Object(u.jsx)(m,{children:Object(u.jsx)(j,{robots:t})})]})}}]),n}(c.Component);a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.21fb5510.chunk.js.map