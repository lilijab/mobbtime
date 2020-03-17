(this.webpackJsonpmobbtimer=this.webpackJsonpmobbtimer||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(3),o=n.n(r),i=(n(17),n(2)),l=n(5),u=n(6),c=n(10),m=n(7),h=n(11),d=(n(18),n(19),n(1)),p=n(8),k=n.n(p),b=n(9),g=n.n(b),f=function(e){var t=e.children,n=e.selected,a=e.remove;return s.a.createElement("div",{style:{width:"100%",backgroundColor:n?"#5c9ff1":"#f1f1f1",color:n?"white":"black",textAlign:"center",padding:"8px 0",marginBottom:8,borderRadius:"10px",cursor:"pointer"},onClick:a},t)},v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={currentPerson:"",selectedPerson:-1,people:[],cycleTime:1,breakTime:2,breakRotations:3,rotateTime:3,timer:60,status:"begin",rotations:0},n.audioTick=new Audio(k.a),n.audioDing=new Audio(g.a),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){if("begin"!==e.state.status&&"pause"!==e.state.status){"rotate"===e.state.status&&0===e.state.timer&&e.run(),"running"===e.state.status&&0===e.state.timer&&e.nextPerson(),"break"===e.state.status&&0===e.state.timer&&e.nextPerson(),("running"===e.state.status||"break"===e.state.status)&&e.state.timer>1&&e.state.timer<=4&&e.audioTick.play(),"running"!==e.state.status&&"break"!==e.state.status||1!==e.state.timer||e.audioDing.play();var t=e.state.timer-1;t<=0&&(t=0),e.setState({timer:t})}}),1e3)}},{key:"startPressed",value:function(){if("begin"===this.state.status){if(0===this.state.people.length)return;this.setState({status:"running",timer:this.getCycleTime(),selectedPerson:0})}"running"===this.state.status&&this.setState({status:"pause"}),"rotate"===this.state.status&&this.run(),"pause"===this.state.status&&this.setState({status:"running"}),"break"===this.state.status&&this.nextPerson()}},{key:"skipPressed",value:function(){this.nextPerson()}},{key:"resetPressed",value:function(){this.setState({status:"begin",timer:this.getCycleTime(),selectedPerson:-1,rotations:0})}},{key:"addPerson",value:function(){""!==this.state.currentPerson&&this.setState({people:[].concat(Object(i.a)(this.state.people),[this.state.currentPerson]),currentPerson:""})}},{key:"nextPerson",value:function(){0!==this.state.people.length&&(this.state.rotations+1===0||(this.state.rotations+1)%this.getBreakRotations()!==0?this.setState({status:"rotate",timer:this.getRotateTime(),selectedPerson:this.nextSelectedPerson(),rotations:this.state.rotations+1}):this.break())}},{key:"break",value:function(){this.setState({status:"break",timer:this.getBreakTime(),rotations:-1})}},{key:"run",value:function(){this.setState({status:"running",timer:this.getCycleTime()})}},{key:"nextSelectedPerson",value:function(){var e=this.state.selectedPerson+1;return e===this.state.people.length?0:e}},{key:"getCycleTime",value:function(){return isNaN(this.state.cycleTime)?8:60*this.state.cycleTime}},{key:"getRotateTime",value:function(){return isNaN(this.state.rotateTime)?0:this.state.rotateTime}},{key:"getBreakRotations",value:function(){return isNaN(this.state.breakRotations)?0:this.state.breakRotations}},{key:"getBreakTime",value:function(){return isNaN(this.state.breakTime)?0:60*this.state.breakTime}},{key:"removePerson",value:function(e){e!==this.state.selectedPerson&&(this.state.selectedPerson,this.setState({people:[].concat(Object(i.a)(this.state.people.slice(0,e)),Object(i.a)(this.state.people.slice(e+1))),selectedPerson:e<this.state.selectedPerson?this.state.selectedPerson-1:this.state.selectedPerson}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentPerson,a=t.timer,r=t.status,o=t.people,i=t.selectedPerson,l=t.cycleTime,u=t.rotateTime,c=t.breakRotations,m=t.breakTime,h=Math.floor(a/60),p=a-60*h;return s.a.createElement("div",{className:"App"},s.a.createElement(d.Section,null,s.a.createElement(d.Container,null,s.a.createElement(d.Columns,null,s.a.createElement(d.Columns.Column,null,o.map((function(t,n){return s.a.createElement(f,{selected:n===i,remove:function(){e.removePerson(n)}},t)})),s.a.createElement(d.Form.Field,null,s.a.createElement(d.Form.Label,null,"Participants"),s.a.createElement(d.Form.Control,null,s.a.createElement(d.Form.Input,{value:n,onChange:function(t){e.setState({currentPerson:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&e.addPerson()},placeholder:"Add someone"}))),s.a.createElement(d.Form.Field,null,s.a.createElement(d.Form.Control,null,s.a.createElement(d.Button,{fullwidth:!0,color:"success",onClick:this.addPerson.bind(this)},"Add"))),s.a.createElement(d.Form.Field,null,s.a.createElement(d.Form.Label,null,"Cycle Time"),s.a.createElement(d.Form.Control,null,s.a.createElement(d.Form.Input,{type:"number",value:l,onChange:function(t){e.setState({cycleTime:t.target.value})},placeholder:"Durations in Minutes"}))),s.a.createElement(d.Form.Field,null,s.a.createElement(d.Form.Label,null,"Rotation Time (Seconds)"),s.a.createElement(d.Form.Control,null,s.a.createElement(d.Form.Input,{type:"number",value:u,onChange:function(t){e.setState({rotateTime:t.target.value})},placeholder:"Durations in Seconds"}))),s.a.createElement(d.Columns,null,s.a.createElement(d.Columns.Column,null,s.a.createElement(d.Form.Field,null,s.a.createElement(d.Form.Label,null,"Break after rotations"),s.a.createElement(d.Form.Control,null,s.a.createElement(d.Form.Input,{type:"number",value:c,onChange:function(t){e.setState({breakRotations:t.target.value})},placeholder:"Amount of rotations"})))),s.a.createElement(d.Columns.Column,null,s.a.createElement(d.Form.Field,null,s.a.createElement(d.Form.Label,null,"Break duration"),s.a.createElement(d.Form.Control,null,s.a.createElement(d.Form.Input,{type:"number",value:m,onChange:function(t){e.setState({breakTime:t.target.value})},placeholder:"Duration in Minutes"})))))),s.a.createElement(d.Columns.Column,{style:{textAlign:"center"}},s.a.createElement(d.Heading,{style:{fontSize:"100px"},size:1},h<10?"0"+h:h,":",("0"+p).slice(-2)),s.a.createElement("div",{style:{fontSize:"36px"}},"begin"===r&&"Press Start to Begin","running"===r&&o[i]+", you're up!","pause"===r&&"Timer is paused","rotate"===r&&o[i]+", grab the keyboard!","break"===r&&"Brews n Loos!"))))),s.a.createElement(d.Section,null,s.a.createElement(d.Container,null,s.a.createElement(d.Button.Group,null,s.a.createElement(d.Button,{color:"success",onClick:this.startPressed.bind(this)},"begin"===r&&"Start","running"===r&&"Pause","pause"===r&&"Resume","rotate"===r&&"I'm Ready","break"===r&&"I'm Ready"),s.a.createElement(d.Button,{color:"primary",onClick:this.skipPressed.bind(this)},"Skip"),s.a.createElement(d.Button,{color:"danger",onClick:this.resetPressed.bind(this)},"Reset")))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n.p+"static/media/tick.cf7231be.wav"},9:function(e,t,n){e.exports=n.p+"static/media/ding.6f819a8c.mp3"}},[[12,1,2]]]);
//# sourceMappingURL=main.7e377a5f.chunk.js.map