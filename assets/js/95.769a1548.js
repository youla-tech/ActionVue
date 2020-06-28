(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{661:function(t,a,e){"use strict";e.r(a);var n=e(1),o=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"button-按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#button-按钮"}},[t._v("#")]),t._v(" Button 按钮 "),e("Common-SourceCodeLink",{attrs:{comp:"button"}})],1),t._v(" "),e("h2",{attrs:{id:"基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:"按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。"}},[e("button-type-demo"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-button type="primary">Primary</a-button>\n    <a-button>Default</a-button>\n    <a-button type="dashed">Dashed</a-button>\n    <a-button type="danger">Danger</a-button>\n  </div>\n</template>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"加载中状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载中状态"}},[t._v("#")]),t._v(" 加载中状态")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("button-loading-demo"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-button :loading="loading" @click="loading = !loading">加载中</a-button>\n  </div>\n</template>\n<script>\nexport default {\n  data () {\n    return {\n      loading: false\n    }\n  }\n};\n<\/script>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"禁用状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#禁用状态"}},[t._v("#")]),t._v(" 禁用状态")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("button-disabled-demo"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-button type="primary">Primary</a-button>\n    <a-button type="primary" disabled>Primary(disabled)</a-button>\n    <br />\n    <a-button>Default</a-button>\n    <a-button disabled>Default(disabled)</a-button>\n    <br />\n    <a-button type="dashed">Dashed</a-button>\n    <a-button type="dashed" disabled>Dashed(disabled)</a-button>\n    <br />\n    <a-button type="danger">Danger</a-button>\n    <a-button type="danger" disabled>Danger(disabled)</a-button>\n  </div>\n</template>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"图标按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图标按钮"}},[t._v("#")]),t._v(" 图标按钮")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("button-icon-demo"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-button type="primary" icon="home">Home</a-button>\n    <a-button icon="setting">Setting</a-button>\n    <a-button icon="download">Download</a-button>\n    <a-button icon="upload">Upload</a-button>\n  </div>\n</template>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"block-按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-按钮"}},[t._v("#")]),t._v(" block 按钮")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:"block属性将使按钮适合其父宽度。"}},[e("button-block-demo"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-button block type="primary">Primary</a-button>\n    <a-button block>Default</a-button>\n    <a-button block type="dashed">Dashed</a-button>\n    <a-button block type="danger">Danger</a-button>\n  </div>\n</template>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"按钮组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按钮组"}},[t._v("#")]),t._v(" 按钮组")]),t._v(" "),e("Common-Democode",{attrs:{title:"",description:""}},[e("button-group-demo"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-button-group>\n      <a-button>Cancel</a-button>\n      <a-button type="primary">OK</a-button>\n    </a-button-group>\n    <a-button-group>\n      <a-button disabled>L</a-button>\n      <a-button disabled>M</a-button>\n      <a-button disabled>R</a-button>\n    </a-button-group>\n    <a-button-group>\n      <a-button type="primary">L</a-button>\n      <a-button>M</a-button>\n      <a-button>M</a-button>\n      <a-button type="dashed">R</a-button>\n    </a-button-group>\n    \n    <h4>With Icon</h4>\n    <a-button-group>\n      <a-button type="primary">\n        <a-icon type="left" />Go back\n      </a-button>\n      <a-button type="primary">\n        Go forward<a-icon type="right" />\n      </a-button>\n    </a-button-group>\n    <a-button-group>\n      <a-button type="primary" icon="home" />\n      <a-button type="primary" icon="setting" />\n    </a-button-group>\n  </div>\n</template>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("type")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置按钮类型，可选值为 "),e("code",[t._v("primary")]),t._v(" "),e("code",[t._v("dashed")]),t._v(" "),e("code",[t._v("danger")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("loading")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置按钮载入状态")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("disabled")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("按钮禁用状态")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("block")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("将按钮宽度调整为其父宽度的选项")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("icon")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置按钮的图标类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("h3",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("click")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("点击按钮时的回调")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("function()")])])])])])],1)}),[],!1,null,null,null);a.default=o.exports}}]);