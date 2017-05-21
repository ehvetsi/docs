webpackJsonp([26],{1194:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("component-view",{attrs:{doc:e.doc}})},staticRenderFns:[]}},655:function(e,t,o){function n(e){o(954)}var s=o(10)(o(818),o(1194),n,null,null);e.exports=s.exports},818:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"alerts-view",data:function(){return{doc:{component:"alerts",edit:"AlertsView",title:"Alert",desc:"The <code>v-alert</code> component is used to convey information to the user. Designed to stand out, the alerts come in four contextual styles, success, info, warning, and error.",examples:[{header:"Contextual",file:"alerts/1",desc:"The <code>v-alert</code> component comes in 4 variations, <strong>success</strong>, <strong>info</strong>, <strong>warning</strong> and <strong>error</strong>. These have default icons assigned which can be changed and represent different actions."},{header:"Closable",file:"alerts/2",desc:'Using <code>v-model</code> you can control the state of the Alert. If you don\'t want to assign a v-model and just display the alert, you can simply do <code>:value="true"</code>.'},{header:"Custom Icon / No Icon",file:"alerts/3",desc:"You can easily assign a custom icon or remove it all together."}],props:{"v-alert":{shared:["contextual"],model:{type:"*"},params:[["dismissible","Boolean","False","Specifies that the Alert can be closed"],["icon","String","-","Designates a specific icon"],["hide-icon","Boolean","False","Hides the alert icon"]]}},slots:{"v-alert":{shared:["default"]}}}}}}},909:function(e,t,o){t=e.exports=o(450)(void 0),t.push([e.i,"#alert-view .alert{margin:1rem 0}",""])},954:function(e,t,o){var n=o(909);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(451)("06278b35",n,!0)}});