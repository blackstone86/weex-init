

const DemoPlugin = {
  show() {
      alert("module DemoPlugin is created sucessfully ")
  }
};


var meta = {
   DemoPlugin: [{
    name: 'show',
    args: []
  }]
};



if(window.Vue) {
  weex.registerModule('DemoPlugin', DemoPlugin);
}

function init(weex) {
  weex.registerApiModule('DemoPlugin', DemoPlugin, meta);
}
module.exports = {
  init:init
};
