
var noop = function(){}
var config = require('config')
var path = require('path');
const logger = require('@log4js-node/log4js-api').getLogger(path.basename(module.id));
const Koa = require('koa');
const app = new Koa();
var router = require(config.get("path.router"))

require("./log")

app
.use(router.routes())
.use(router.allowedMethods())
.listen(config.get("server.port"));