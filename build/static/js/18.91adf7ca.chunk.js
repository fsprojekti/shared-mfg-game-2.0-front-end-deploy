"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[18,133],{63018:function(e,n,r){r.r(n),r.d(n,{default:function(){return je}});var t=r(15861),s=r(1413),i=r(70885),a=r(87757),o=r.n(a),l=r(72791),c=r(45987),d=r(81694),u=r.n(d),p=r(10162),h=r(43144),x=r(15671),f=r(60136),m=r(29388);l.Component;function g(e,n){var r=e;return"left"===e?r=n?"end":"start":"right"===e&&(r=n?"start":"end"),r}var v=r(80184),j=["bsPrefix","placement","className","style","children","arrowProps","popper","show"],b=l.forwardRef((function(e,n){var r=e.bsPrefix,t=e.placement,a=e.className,o=e.style,l=e.children,d=e.arrowProps,h=(e.popper,e.show,(0,c.Z)(e,j));r=(0,p.vE)(r,"tooltip");var x=(0,p.SC)(),f=(null==t?void 0:t.split("-"))||[],m=(0,i.Z)(f,1)[0],b=g(m,x);return(0,v.jsxs)("div",(0,s.Z)((0,s.Z)({ref:n,style:o,role:"tooltip","x-placement":m,className:u()(a,r,"bs-tooltip-".concat(b))},h),{},{children:[(0,v.jsx)("div",(0,s.Z)({className:"tooltip-arrow"},d)),(0,v.jsx)("div",{className:"".concat(r,"-inner"),children:l})]}))}));b.defaultProps={placement:"right"},b.displayName="Tooltip";var y=b,Z=r(42982),w=r(53189),C=r(55746),k=r(91683),N=Math.pow(2,31)-1;function E(e,n,r){var t=r-Date.now();e.current=t<=N?setTimeout(n,t):setTimeout((function(){return E(e,n,r)}),N)}function S(){var e=(0,C.Z)(),n=(0,l.useRef)();return(0,k.Z)((function(){return clearTimeout(n.current)})),(0,l.useMemo)((function(){var r=function(){return clearTimeout(n.current)};return{set:function(t,s){void 0===s&&(s=0),e()&&(r(),s<=N?n.current=setTimeout(t,s):E(n,t,Date.now()+s))},clear:r}}),[])}r(42391);var R=r(32592),T=r(73201),O=r(54164),P=r(28633),B=r(64403),V=r(44468),F=r(78376),M=r(39007),_=r(76050),A=function(){};var I=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=r.disabled,s=r.clickTrigger,i=n||A;(0,_.Z)(e,i,{disabled:t,clickTrigger:s});var a=(0,M.Z)((function(e){27===e.keyCode&&i(e)}));(0,l.useEffect)((function(){if(!t&&null!=e){var n=(0,F.Z)((0,_.f)(e)),r=(n.defaultView||window).event,s=(0,V.Z)(n,"keyup",(function(e){e!==r?a(e):r=void 0}));return function(){s()}}}),[e,t,a])},H=r(90183),z=r(81012),D=l.forwardRef((function(e,n){var r=e.flip,t=e.offset,s=e.placement,a=e.containerPadding,o=e.popperConfig,c=void 0===o?{}:o,d=e.transition,u=(0,P.Z)(),p=(0,i.Z)(u,2),h=p[0],x=p[1],f=(0,P.Z)(),m=(0,i.Z)(f,2),g=m[0],j=m[1],b=(0,T.Z)(x,n),y=(0,H.Z)(e.container),Z=(0,H.Z)(e.target),w=(0,l.useState)(!e.show),C=(0,i.Z)(w,2),k=C[0],N=C[1],E=(0,B.Z)(Z,h,(0,z.ZP)({placement:s,enableEvents:!!e.show,containerPadding:a||5,flip:r,offset:t,arrowElement:g,popperConfig:c}));e.show?k&&N(!1):e.transition||k||N(!0);var S=e.show||d&&!k;if(I(h,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!S)return null;var R=e.children(Object.assign({},E.attributes.popper,{style:E.styles.popper,ref:b}),{popper:E,placement:s,show:!!e.show,arrowProps:Object.assign({},E.attributes.arrow,{style:E.styles.arrow,ref:j})});if(d){var V=e.onExit,F=e.onExiting,M=e.onEnter,_=e.onEntering,A=e.onEntered;R=(0,v.jsx)(d,{in:e.show,appear:!0,onExit:V,onExiting:F,onExited:function(){N(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:M,onEntering:_,onEntered:A,children:R})}return y?O.createPortal(R,y):null}));D.displayName="Overlay";var Y=D,U=r(6755),K=r(66543),W=(0,K.Z)("popover-header"),$=(0,K.Z)("popover-body"),q=["bsPrefix","placement","className","style","children","body","arrowProps","popper","show"],G=l.forwardRef((function(e,n){var r=e.bsPrefix,t=e.placement,a=e.className,o=e.style,l=e.children,d=e.body,h=e.arrowProps,x=(e.popper,e.show,(0,c.Z)(e,q)),f=(0,p.vE)(r,"popover"),m=(0,p.SC)(),j=(null==t?void 0:t.split("-"))||[],b=(0,i.Z)(j,1)[0],y=g(b,m);return(0,v.jsxs)("div",(0,s.Z)((0,s.Z)({ref:n,role:"tooltip",style:o,"x-placement":b,className:u()(a,f,b&&"bs-popover-".concat(y))},x),{},{children:[(0,v.jsx)("div",(0,s.Z)({className:"popover-arrow"},h)),d?(0,v.jsx)($,{children:l}):l]}))}));G.defaultProps={placement:"right"};var J=Object.assign(G,{Header:W,Body:$,POPPER_OFFSET:[0,8]});var L=r(72709),Q=r(37002),X=["children","transition","popperConfig"],ee={transition:L.Z,rootClose:!1,show:!1,placement:"top"};var ne=l.forwardRef((function(e,n){var r=e.children,t=e.transition,a=e.popperConfig,o=void 0===a?{}:a,d=(0,c.Z)(e,X),h=(0,l.useRef)({}),x=function(e){var n=(0,l.useRef)(null),r=(0,p.vE)(void 0,"popover"),t=(0,l.useMemo)((function(){return{name:"offset",options:{offset:function(){return n.current&&(0,U.Z)(n.current,r)?e||J.POPPER_OFFSET:e||[0,0]}}}}),[e,r]);return[n,[t]]}(d.offset),f=(0,i.Z)(x,2),m=f[0],g=f[1],j=(0,T.Z)(n,m),b=!0===t?L.Z:t||void 0;return(0,v.jsx)(Y,(0,s.Z)((0,s.Z)({},d),{},{ref:j,popperConfig:(0,s.Z)((0,s.Z)({},o),{},{modifiers:g.concat(o.modifiers||[])}),transition:b,children:function(e,n){var i,a,o=n.arrowProps,c=n.popper,d=n.show;!function(e,n){var r=e.ref,t=n.ref;e.ref=r.__wrapped||(r.__wrapped=function(e){return r((0,Q.Z)(e))}),n.ref=t.__wrapped||(t.__wrapped=function(e){return t((0,Q.Z)(e))})}(e,o);var p=null==c?void 0:c.placement,x=Object.assign(h.current,{state:null==c?void 0:c.state,scheduleUpdate:null==c?void 0:c.update,placement:p,outOfBoundaries:(null==c||null==(i=c.state)||null==(a=i.modifiersData.hide)?void 0:a.isReferenceHidden)||!1});return"function"===typeof r?r((0,s.Z)((0,s.Z)((0,s.Z)({},e),{},{placement:p,show:d},!t&&d&&{className:"show"}),{},{popper:x,arrowProps:o})):l.cloneElement(r,(0,s.Z)((0,s.Z)({},e),{},{placement:p,arrowProps:o,popper:x,className:u()(r.props.className,!t&&d&&"show"),style:(0,s.Z)((0,s.Z)({},r.props.style),e.style)}))}}))}));ne.displayName="Overlay",ne.defaultProps=ee;var re=ne,te=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"];function se(e,n,r){var t=(0,i.Z)(n,1)[0],s=t.currentTarget,a=t.relatedTarget||t.nativeEvent[r];a&&a===s||(0,w.Z)(s,a)||e.apply(void 0,(0,Z.Z)(n))}function ie(e){var n=e.trigger,r=e.overlay,t=e.children,a=e.popperConfig,o=void 0===a?{}:a,d=e.show,u=e.defaultShow,p=void 0!==u&&u,h=e.onToggle,x=e.delay,f=e.placement,m=e.flip,g=void 0===m?f&&-1!==f.indexOf("auto"):m,j=(0,c.Z)(e,te),b=(0,l.useRef)(null),y=(0,T.Z)(b,t.ref),Z=S(),w=(0,l.useRef)(""),C=(0,R.$c)(d,p,h),k=(0,i.Z)(C,2),N=k[0],E=k[1],O=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(x),P="function"!==typeof t?l.Children.only(t).props:{},B=P.onFocus,V=P.onBlur,F=P.onClick,M=(0,l.useCallback)((function(){Z.clear(),w.current="show",O.show?Z.set((function(){"show"===w.current&&E(!0)}),O.show):E(!0)}),[O.show,E,Z]),_=(0,l.useCallback)((function(){Z.clear(),w.current="hide",O.hide?Z.set((function(){"hide"===w.current&&E(!1)}),O.hide):E(!1)}),[O.hide,E,Z]),A=(0,l.useCallback)((function(){M(),null==B||B.apply(void 0,arguments)}),[M,B]),I=(0,l.useCallback)((function(){_(),null==V||V.apply(void 0,arguments)}),[_,V]),H=(0,l.useCallback)((function(){E(!N),null==F||F.apply(void 0,arguments)}),[F,E,N]),z=(0,l.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];se(M,n,"fromElement")}),[M]),D=(0,l.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];se(_,n,"toElement")}),[_]),Y=null==n?[]:[].concat(n),U={ref:function(e){y((0,Q.Z)(e))}};return-1!==Y.indexOf("click")&&(U.onClick=H),-1!==Y.indexOf("focus")&&(U.onFocus=A,U.onBlur=I),-1!==Y.indexOf("hover")&&(U.onMouseOver=z,U.onMouseOut=D),(0,v.jsxs)(v.Fragment,{children:["function"===typeof t?t(U):(0,l.cloneElement)(t,U),(0,v.jsx)(re,(0,s.Z)((0,s.Z)({},j),{},{show:N,onHide:_,flip:g,placement:f,popperConfig:o,target:b.current,children:r}))]})}ie.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var ae=ie,oe=r(47022),le=r(89743),ce=r(2677),de=r(2144),ue=r(46167),pe=r(43360),he=r(24849),xe=r(78274),fe=r(3133),me=function(){var e=(0,l.useContext)(xe.Il),n=function(){var n=(0,t.Z)(o().mark((function n(r){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("clicked"),e.setIsCancelVoteModalOpen(!0),e.setCancelVoteModalContent(r);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,l.useEffect)((function(){console.log(e.stealVotes)}),[e.stealVotes]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"d-flex flex-column",style:{padding:"5px"},children:(0,v.jsxs)("div",{className:"d-flex align-items-start",children:[(0,v.jsx)(de.Z,{className:"attack-card-1",style:{width:"60%",margin:"5px",justifyContent:"space-evenly",borderRadius:"8px",boxShadow:"var(--light-shadow)",paddingRight:"5px"},children:(0,v.jsx)(de.Z.Body,{children:(0,v.jsx)(de.Z,{className:"d-flex flex-column",style:{borderRadius:"8px",margin:"10px",padding:"10px"},children:(0,v.jsxs)("table",{className:"table-all-transactions",style:{borderCollapse:"collapse",background:"auto",float:"left",cursor:"pointer"},children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:" Bridge "}),(0,v.jsx)("th",{children:" Status "})]})}),(0,v.jsx)("tbody",{children:e.stealVotes.map((function(r,t){return(0,v.jsx)("tr",{onClick:function(e){return n(r)},children:(0,v.jsxs)("td",{children:[(0,fe.getChainsNamesFromBridgeObject)(r.bridges[0],e.bridges,e.chains)[0]," - ",(0,fe.getChainsNamesFromBridgeObject)(r.bridges[0],e.bridges,e.chains)[1]," "]})},r._id)}))})]})})})}),(0,v.jsx)(de.Z,{className:"attack-card-1",style:{width:"60%",margin:"5px",justifyContent:"space-evenly",borderRadius:"8px",boxShadow:"var(--light-shadow)",paddingRight:"5px"},children:(0,v.jsx)(de.Z.Body,{children:(0,v.jsx)(de.Z,{className:"d-flex flex-column",style:{borderRadius:"8px",margin:"10px",padding:"10px"},children:(0,v.jsxs)("table",{className:"table-all-transactions",style:{borderCollapse:"collapse",background:"auto",float:"left",borderRadius:"8px"},children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:" Player "}),(0,v.jsx)("th",{children:" Status "})]})}),(0,v.jsx)("tbody",{children:e.blockVotes.map((function(e){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:e.votes}),(0,v.jsx)("td",{children:e.percentage}),(0,v.jsx)("td",{children:e.status})]},e.bridge)}))})]})})})})]})})})},ge=r(96209),ve=function(){var e=(0,l.useContext)(xe.Il),n=(0,l.useState)(!1),r=(0,i.Z)(n,2),t=r[0];r[1];return(0,v.jsxs)("div",{children:[e.isCancelVoteModalOpen?(0,v.jsx)("div",{children:(0,v.jsx)("div",{className:"modal-confirm-overlay show-modal-confirm",children:(0,v.jsx)(ge.E.div,{className:"box",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.2,type:"spring",bounce:.5,ease:[0,.71,.2,1.01]},children:(0,v.jsxs)("div",{className:"modal-confirm-container",children:[(0,v.jsx)("h3",{children:"Retract Steal Vote For "}),(0,v.jsxs)("ul",{sty:!0,children:[(0,v.jsxs)("li",{children:[(0,fe.getChainsNamesFromBridgeObject)(e.cancelVoteModalContent.bridges[0],e.bridges,e.chains)[0]," "]}),(0,v.jsx)("li",{children:"\ud83d\udd03"}),(0,v.jsx)("li",{children:(0,fe.getChainsNamesFromBridgeObject)(e.cancelVoteModalContent.bridges[0],e.bridges,e.chains)[1]})]}),(0,v.jsx)("b",{children:"Are you sure you want to continue?"}),(0,v.jsxs)("div",{className:"d-flex justify-content-center",style:{marginBottom:"10px"},children:[(0,v.jsx)(pe.Z,{variant:"success",onClick:console.log("confirm"),style:{margin:"5px"},children:t?(0,v.jsxs)("div",{children:[(0,v.jsx)(he.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),(0,v.jsx)("text",{children:" Retracting "})]}):(0,v.jsx)("text",{children:" Continue  "})}),(0,v.jsx)(pe.Z,{variant:"danger",onClick:function(){return e.setIsCancelVoteModalOpen(!1)},style:{margin:"5px"},children:(0,v.jsx)("text",{children:" Cancel  "})})]})]})})})}):(0,v.jsx)("div",{}),e.isCancelBlockModalOpen?(0,v.jsx)("div",{children:(0,v.jsx)("div",{className:"modal-confirm-overlay show-modal-confirm",children:(0,v.jsx)(ge.E.div,{className:"box",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.2,type:"spring",bounce:.5,ease:[0,.71,.2,1.01]},children:(0,v.jsxs)("div",{className:"modal-confirm-container",children:[(0,v.jsx)("h3",{children:"Retract Block Vote For "}),(0,v.jsx)("ul",{sty:!0,children:(0,v.jsx)("li",{children:" Player name "})}),(0,v.jsx)("b",{children:"Are you sure you want to continue?"}),(0,v.jsxs)("div",{className:"d-flex justify-content-center",style:{marginBottom:"10px"},children:[(0,v.jsx)(pe.Z,{variant:"success",onClick:console.log("confirm"),style:{margin:"5px"},children:t?(0,v.jsxs)("div",{children:[(0,v.jsx)(he.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),(0,v.jsx)("text",{children:" Retracting "})]}):(0,v.jsx)("text",{children:" Continue  "})}),(0,v.jsx)(pe.Z,{variant:"danger",onClick:function(){return e.setIsCancelVoteModalOpen(!1)},style:{margin:"5px"},children:(0,v.jsx)("text",{children:" Cancel  "})})]})]})})})}):(0,v.jsx)("div",{})]})},je=function(){var e=(0,l.useContext)(xe.Il),n=(0,l.useState)(0),r=(0,i.Z)(n,2),a=r[0],c=r[1],d=(0,l.useState)(0),u=(0,i.Z)(d,2),p=u[0],h=u[1],x=(0,l.useState)([]),f=(0,i.Z)(x,2),m=f[0],g=f[1],j=(0,l.useState)(""),b=(0,i.Z)(j,2),Z=b[0],w=b[1];var C=function(n){return e.chains.filter((function(r){return r.id===e.bridges[n].chainSource||r.id===e.bridges[n].chainTarget})).map((function(e){return e.name}))};(0,l.useEffect)((function(){var n=function(){var n=(0,t.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.users.users.filter((function(n){return n._id!==e.user.id}));case 2:r=n.sent,g(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n(),console.log(m)}),[]);var k=function(){var n=(0,t.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w("steal"),console.log(e.bridges[0]),n.next=5,e.apiUserStealVoteON(e.bridges[a]._id);case 5:e.setNote({show:!0,type:"success",msg:"Attack vote casted",heading:"Success! "}),w(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),w(!1),e.setNote({show:!0,type:"danger",msg:n.t0.response.data.message,heading:"Could not vote! "});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"d-flex align-items-start",children:(0,v.jsx)(oe.Z,{children:(0,v.jsxs)(le.Z,{children:[(0,v.jsx)(ce.Z,{children:e.bridges.length>0?(0,v.jsx)(de.Z,{className:"attack-card-1",style:{width:"100%",margin:"5px",justifyContent:"space-evenly",borderRadius:"8px",boxShadow:"var(--light-shadow)",minHeight:"30vh"},children:(0,v.jsxs)(de.Z.Body,{children:[(0,v.jsx)(de.Z,{className:"d-flex flex-column",style:{backgroundColor:"rgba(222, 243, 239, 0.5)",borderColor:"red",borderRadius:"8px",margin:"10px",padding:"10px"},children:(0,v.jsxs)(de.Z.Body,{children:[(0,v.jsx)(de.Z.Title,{style:{padding:"10px"},children:" Vote To Steal From a Bridge "}),(0,v.jsx)(de.Z.Text,{children:(0,v.jsx)("b",{children:" Select the bridge you wish to steal from "})}),(0,v.jsx)(de.Z.Text,{children:(0,v.jsxs)(ue.Z,{className:"d-flex",style:{justifyContent:"center",width:"auto",wordBreak:"break-all"},children:[(0,v.jsx)(ue.Z.Toggle,{className:"d-flex",variant:"outline-secondary",id:"dropdown-basic",children:(0,v.jsxs)("b",{children:[" ",C(a)[0]," \ud83c\udf09 ",C(a)[1]," "]})}),(0,v.jsx)(ue.Z.Menu,{children:e.bridges.map((function(e,n){return(0,v.jsxs)(ue.Z.Item,{onClick:function(e){return c(n),void console.log(a)},children:[" ",C(n)[0]," - ",C(n)[1]," "]})}))})]})})]})}),(0,v.jsx)(pe.Z,{variant:"danger",style:{borderRadius:"8px"},onClick:k,children:"steal"===Z?(0,v.jsxs)("div",{children:[(0,v.jsx)(he.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),(0,v.jsx)("text",{children:" Adding vote "})]}):(0,v.jsx)("text",{children:" Vote to Steal  "})})]})}):(0,v.jsx)(de.Z,{className:"attack-card-1",style:{width:"100%",margin:"5px",justifyContent:"space-evenly",borderRadius:"8px",boxShadow:"var(--light-shadow)",minHeight:"30vh"},children:(0,v.jsx)(de.Z.Body,{children:(0,v.jsx)(de.Z,{className:"d-flex flex-column",style:{backgroundColor:"rgba(222, 243, 239, 0.5)",borderColor:"red",borderRadius:"8px",margin:"10px",padding:"10px"},children:(0,v.jsxs)(de.Z.Body,{children:[(0,v.jsx)(de.Z.Title,{style:{padding:"10px"},children:" Vote To Steal From a Bridge "}),(0,v.jsx)(de.Z.Text,{children:(0,v.jsx)("b",{children:" Create a bridge (chain) first to use this function "})}),(0,v.jsx)(de.Z.Text,{})]})})})})}),(0,v.jsx)(ce.Z,{children:(0,v.jsx)(de.Z,{className:"attack-card-1",style:{width:"100%",margin:"5px",justifyContent:"space-evenly",borderRadius:"8px",boxShadow:"var(--light-shadow)",minHeight:"30vh"},children:(0,v.jsxs)(de.Z.Body,{children:[(0,v.jsx)(de.Z,{className:"d-flex flex-column",style:{backgroundColor:"rgba(222, 243, 239, 0.5)",borderColor:"red",borderRadius:"8px",margin:"10px",padding:"10px"},children:(0,v.jsxs)(de.Z.Body,{children:[(0,v.jsx)(de.Z.Title,{style:{padding:"10px"},children:" Vote To Block a Player "}),(0,v.jsx)(de.Z.Text,{children:(0,v.jsx)("b",{children:" Select the player you wish to block "})}),(0,v.jsx)(de.Z.Text,{children:(0,v.jsxs)(ue.Z,{className:"d-flex",style:{justifyContent:"center"},children:[(0,v.jsx)(ue.Z.Toggle,{className:"d-flex",style:{justifyContent:"center"},variant:"outline-secondary",id:"dropdown-basic",children:(0,v.jsxs)("b",{children:[" ",m.length>0?m[p].name:"player"," "]})}),(0,v.jsx)(ue.Z.Menu,{children:m.map((function(e,n){return(0,v.jsxs)(ue.Z.Item,{onClick:function(){return h(n),void console.log(p)},children:[" ",e.name," "]})}))})]})})]})}),(0,v.jsx)(pe.Z,{variant:"danger",style:{borderRadius:"8px"},onClick:k,children:"block"===Z?(0,v.jsxs)("div",{children:[(0,v.jsx)(he.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),(0,v.jsx)("text",{children:" Adding vote "})]}):(0,v.jsx)("text",{children:" Vote to Block  "})})]})})})]})})}),(0,v.jsxs)("div",{className:"",style:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"var(--light-shadow)",borderRadius:"8px",margin:"5px",textAlign:"center"},children:[(0,v.jsxs)("div",{className:"d-flex",children:[(0,v.jsx)(ae,{placement:"top",delay:{show:0,hide:400},overlay:function(e){return(0,v.jsx)(y,(0,s.Z)((0,s.Z)({id:"button-tooltip"},e),{},{children:"You can remove your vote by clicking on the bridge/player in the table."}))},children:(0,v.jsx)(pe.Z,{variant:"info",size:"sm",className:"d-flex justify-content-start",style:{margin:"5px",position:"absolute",fontWeight:"bold"},children:"i"})}),(0,v.jsx)("h3",{style:{textAlign:"center",width:"100%"},children:"Attack status"})]}),(0,v.jsx)(me,{}),e.stealVotes.length>0?(0,v.jsx)(ve,{}):null]})]})}},3133:function(e,n,r){r.r(n),r.d(n,{checkNumber:function(){return l},getChainsNamesFromBridgeObject:function(){return a},justAnAlert:function(){return o}});var t=r(15861),s=r(87757),i=r.n(s),a=function(e,n,r){var t=n.filter((function(n){return n._id===e}));return r.filter((function(e){return e.id===t[0].chainSource||e.id===t[0].chainTarget})).map((function(e){return e.name}))},o=function(){alert("hello")},l=function(){var e=(0,t.Z)(i().mark((function e(n,r,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Im in"),void 0!==n&&""!==n&&0!=n&&void 0!==r&&""!==r&&0!=r){e.next=5;break}return e.abrupt("return",{state:-1,msg:"You must enter a value"});case 5:if(!(isNaN(n)||n<0||isNaN(r)||r<0)){e.next=9;break}return e.abrupt("return",{state:-1,msg:"You must enter positive numbers"});case 9:if(!(c(n)>0||c(r)>0)){e.next=13;break}return e.abrupt("return",{state:-1,msg:"Input value must be an integer"});case 13:if(!(parseInt(n)+parseInt(r)>t)){e.next=17;break}return e.abrupt("return",{state:-1,msg:"Amount + TxFee is bigger than balance"});case 17:return e.abrupt("return",{state:1,msg:"OK"});case 18:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),c=function(e){return Math.floor(e).toString()===e?0:e.toString().split(".")[1].length||0}}}]);
//# sourceMappingURL=18.91adf7ca.chunk.js.map