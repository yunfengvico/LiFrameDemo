var baseProxy = require("baseProxy")
var proxyName = require("proxyName")
var gateDefine = require("gateDefine")
var App = require("App")

let gateProxy = cc.Class({
    extends:baseProxy,

    ctor: function () {
        this._proxyName = proxyName.PROXY_GATE;
    },

    onAdd: function () {
        this._super();
        this.callBack.set(gateDefine.netFunc.loginServerAck, this.gateLoginServerAck)
        
    },

    onRemove: function () {
        this._super();
    },
    
    gateLoginServerReq: function(obj){
        this.sendProto(gateDefine.netFunc.loginServerReq, obj)
    },

    gateLoginServerAck: function(obj){
        //console.log("gateLoginServerAck:",obj)
        App.eventMgr.emit(gateDefine.event.event_loginServer, obj)
    },

});


module.exports = gateProxy