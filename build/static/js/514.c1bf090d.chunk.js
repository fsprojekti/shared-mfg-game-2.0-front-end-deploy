"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[514],{73514:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(72791),s=t(15861),r=t(87757),i=t.n(r),c=t(78274),o=t(12900),l=t(82493),d=(t(24937),t(80184)),h=function(){var e=(0,a.useContext)(c.Il),n=e.chains,t=e.cookies,r=e.bridges,h=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new l.DataSet(n.map((function(e,n){var a=parseInt(t.activeChain);return{id:e.id,label:e.name,color:{background:"".concat(n==a?"#FBBF0C":"#7DCDF5")},title:"Stake: ".concat(e.stake,", Balance: ").concat(e.balance)}}))),a=new l.DataSet(r.map((function(e){return{from:e.chainSource,to:e.chainTarget,title:"\ud83d\udd01Bridge: ".concat(e.name)}}))),c=function(){var n=(0,s.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.current;case 2:if(n.t0=n.sent,!n.t0){n.next=5;break}n.t0=new o.Network(h.current,{nodes:e,edges:a},{autoResize:!0,interaction:{hover:!0},edges:{color:"#411811",width:2,arrows:"both"},nodes:{shape:"dot"}});case 5:(t=n.t0).on("hoverNode",(function(e){t.canvas.body.container.style.cursor="grab"})),t.on("blurNode",(function(e){t.canvas.body.container.style.cursor="default"})),t.on("blurEdge",(function(e){t.canvas.body.container.style.cursor="default"}));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();c()}),[n.length,t.activeChain]),(0,d.jsx)("div",{className:"chain-network",ref:h})},u=function(){var e=(0,a.useContext)(c.Il),n=e.chains,t=e.cookies,r=e.setCookie,o=(e.setUser,e.apiUserFetch,e.updateActiveChain);e.user,e.setUsersBalances,e.userBalances,e.apiUserFetchBalance,e.game;function l(){return(l=(0,s.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r("activeChain",t),o(t),console.log(n[t]),console.log("ACtive chain:"+n[t].id);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"d-flex justify-content-space-evenly flex-column",style:{boxShadow:"var(--light-shadow)",borderRadius:"8px",width:"100%",margin:"5x"},children:(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Chains"}),(0,d.jsx)("div",{style:{height:"auto",overflow:"auto"},children:(0,d.jsxs)("table",{className:"table-all-rankings",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Chain ID"}),(0,d.jsx)("th",{children:"Chain Name"}),(0,d.jsx)("th",{children:"Block no."}),(0,d.jsx)("th",{children:"Balance"}),(0,d.jsx)("th",{children:"Staked"})]})}),(0,d.jsx)("tbody",{children:n.map((function(e,a){return(0,d.jsxs)("tr",{style:{background:"".concat(e.name===n[t.activeChain].name?"#FBBF0C":""),cursor:"pointer"},onClick:function(e){return function(e){return l.apply(this,arguments)}(a)},children:[(0,d.jsx)("td",{children:(0,d.jsx)("strong",{children:a+1})}),(0,d.jsx)("td",{children:e.name}),(0,d.jsx)("td",{children:e.blockNumber}),(0,d.jsx)("td",{children:e.balance}),(0,d.jsx)("td",{children:e.stake})]},e._id)}))})]})})]})})})},x=t(70885),p=t(2144),f=t(46167),g=t(99410),j=t(74292),m=t(43360),v=t(24849),y=t(96209),b=function(){var e=(0,a.useContext)(c.Il),n=(0,a.useState)(!1),t=(0,x.Z)(n,2),r=t[0],o=t[1],l=(0,a.useState)(!1),h=(0,x.Z)(l,2),u=h[0],b=h[1],w=(0,a.useState)(0),C=(0,x.Z)(w,2),k=C[0],Z=C[1],S=(0,a.useState)(0),N=(0,x.Z)(S,2),B=N[0],F=N[1],I=(0,a.useState)(0),U=(0,x.Z)(I,2),R=(U[0],U[1],function(){var n=(0,s.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),console.log("Chain to create from:"),console.log(e.chains[k].name),console.log(e.chains[k].id),n.next=7,e.apiUserCreateChain(e.chains[k].id,B);case 7:t=n.sent,console.log(t),e.apiUserFetchBalance(e.game.id).then((function(n){console.log(JSON.stringify(n)),e.setUsersBalances(n)})).catch((function(e){return console.log(e)})),e.apiUserFetchStake(e.game.id).then((function(n){console.log("STAKES: "+n),void 0!=n[0]&&e.setUsersStakes(n[0])})).catch((function(e){return console.log(e)})),e.setNote({show:!0,type:"success",msg:t.message,heading:"Success! "}),o(!1),b(!1),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(0),o(!1),e.setNote({show:!0,type:"danger",msg:n.t0.response.data.message,heading:"Chain not created! "});case 20:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}}());return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{style:{textAlign:"center",padding:"4px",zIndex:1},children:u?(0,d.jsx)(y.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.2,type:"spring",bounce:.5,ease:[0,.71,.2,1.01]},children:(0,d.jsx)(p.Z,{style:{width:"100%",height:"100%",backgroundColor:"white",zIndex:1,borderRadius:"8px",boxShadow:"var(--light-shadow)"},children:(0,d.jsxs)(p.Z.Body,{children:[(0,d.jsx)(p.Z.Title,{children:" Create a new chain "}),(0,d.jsxs)(p.Z.Text,{children:[(0,d.jsx)("p",{children:" You are about to create a new sidechain of "}),(0,d.jsxs)(f.Z,{style:{margin:"10px"},children:[(0,d.jsx)(f.Z.Toggle,{variant:"outline-secondary",id:"dropdown-basic",children:(0,d.jsxs)("b",{children:[" ",(0,d.jsxs)("span",{style:{color:"green"},children:[" ",e.chains[k].name," "]}),"  "]})}),(0,d.jsx)(f.Z.Menu,{children:e.chains.map((function(e,n){return(0,d.jsxs)(f.Z.Item,{onClick:function(e){return Z(n)},children:[" ",e.name," "]})}))})]}),(0,d.jsxs)(g.Z,{style:{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"1rem"},children:[(0,d.jsx)(g.Z.Text,{id:"input-user-name",children:"Fee"}),(0,d.jsx)(j.Z,{value:B,onChange:function(e){return F(e.target.value)}})]}),(0,d.jsx)("p",{children:" Are you sure you want to continue? "})]}),(0,d.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,d.jsx)(m.Z,{variant:"success",onClick:R,style:{margin:"5px"},children:r?(0,d.jsxs)("div",{children:[(0,d.jsx)(v.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),(0,d.jsx)("text",{children:" Creating "})]}):(0,d.jsx)("text",{children:" Create  "})}),(0,d.jsx)(m.Z,{variant:"danger",onClick:function(){return b(!1)},style:{margin:"5px"},children:(0,d.jsx)("text",{children:" Cancel  "})})]})]})})}):(0,d.jsx)(m.Z,{variant:"success",onClick:function(){return b(!0)},style:{borderRadius:"8px",boxShadow:"var(--light-shadow)"},children:(0,d.jsx)("text",{children:" Create a new chain  "})})})})},w=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"d-flex flex-column",style:{width:"100%"},children:[(0,d.jsx)("div",{className:"d-flex flex-column",style:{zIndex:2,position:"absolute",borderRadius:"8px",margin:"15px",textAlign:"center",alignSelf:"end"},children:(0,d.jsx)(b,{})}),(0,d.jsx)("div",{className:"d-flex",style:{zIndex:1},children:(0,d.jsx)(h,{})}),(0,d.jsx)("div",{className:"sidechain-info-container",children:(0,d.jsx)(u,{})})]})})}}}]);
//# sourceMappingURL=514.c1bf090d.chunk.js.map