(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(7),a=n.n(o),c=n(2),i=n(3),r=n(5),s=n(4),l=n(1),m=(n(12),n(0)),d=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={time:new Date},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({time:new Date}),console.log(t.state.time.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.randomName,e=this.state.time;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," ","time is"," ",Object(m.jsx)("span",{className:"Clock__time",children:e.toLocaleTimeString()})]})}}]),n}(l.Component);function u(){var t=Math.random().toString().slice(2,6);return"Clock-".concat(t)}var h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={randomName:u(),hasClock:!0},t.timerId=0,t.hideClock=function(){t.setState({hasClock:!1})},t.showClock=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("contextmenu",this.hideClock),window.addEventListener("click",this.showClock),window.addEventListener("contextmenu",(function(t){t.preventDefault()})),this.timerId=window.setInterval((function(){var e=t.state.randomName;t.setState({randomName:u()}),console.log("Renamed from ".concat(e," to ").concat(t.state.randomName))}),3300)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),window.removeEventListener("contextmenu",this.hideClock),window.removeEventListener("click",this.showClock)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.randomName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),e&&Object(m.jsx)(d,{randomName:n})]})}}]),n}(l.Component);a.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.85319603.chunk.js.map