(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,a){t.exports={container:"Statistic_container__1og1P",text:"Statistic_text__3Yy9e",total:"Statistic_total__3yHff Statistic_text__3Yy9e",percentage:"Statistic_percentage__mWEDk Statistic_total__3yHff Statistic_text__3Yy9e"}},,,function(t,e,a){t.exports={feedback:"FeedbackButton_feedback__2EbPo",button:"FeedbackButton_button__2CtXd"}},,,,,function(t,e,a){t.exports={message:"Notification_message__SGOlI"}},function(t,e,a){t.exports={title:"Section_title__1ey5q"}},,,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(5),o=a.n(s),i=(a(17),a(6)),r=a(7),l=a(8),d=a(12),b=a(11),u=a(4),j=a.n(u),h=a(0),x=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(h.jsx)("div",{className:j.a.feedback,children:e.map((function(t){return Object(h.jsx)("button",{className:j.a.button,type:"button",value:t,onClick:a,children:t},t)}))})},_=["good","neutral","bad"],f=a(9),O=a.n(f),g=function(t){var e=t.message;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h3",{className:O.a.message,children:e})})},p=a(1),m=a.n(p),v=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.percentage;return Object(h.jsx)(h.Fragment,{children:c?Object(h.jsxs)("section",{className:m.a.container,children:[Object(h.jsxs)("p",{className:m.a.text,children:["Good: ",e]}),Object(h.jsxs)("p",{className:m.a.text,children:["Neutral: ",a]}),Object(h.jsxs)("p",{className:m.a.text,children:["Bad: ",n]}),Object(h.jsxs)("p",{className:m.a.total,children:["Total: ",c]}),Object(h.jsxs)("p",{className:m.a.percentage,children:["Positive feedback: ",s,"%"]})]}):Object(h.jsx)(g,{message:"No feedback given"})})},k=a(10),S=a.n(k),N=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:S.a.title,children:e}),a]})},F=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleIncrement=function(e){var a=e.target.value;t.setState((function(t){return Object(i.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good,a=t.countTotalFeedback();return Math.round(e/a*100)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(N,{title:"EXPRESSO STATISTICS"}),Object(h.jsx)(N,{title:"Please Leave Feedback",children:Object(h.jsx)(x,{options:_,onLeaveFeedback:this.handleIncrement},_)}),Object(h.jsx)(N,{title:"Statistics",children:Object(h.jsx)(v,{good:e,neutral:a,bad:n,total:c,percentage:s})})]})}}]),a}(n.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.fa5d88d2.chunk.js.map