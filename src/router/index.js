
const path = require('path');
const logger = require('@log4js-node/log4js-api').getLogger('router');
const Router = require('koa-router');
const router = new Router();
const config = require('config')
const ctrlDir = config.get('path.controller');
const enterCtrl = require('../controller/enter')
const cuid = require('cuid');
const coparser = require('co-body');

// error handling 
router.use(async (ctx,next) => {
    try{
        ctx.traceid = await cuid();
        logger.info("%s, ctx.request: %s",ctx.traceid, JSON.stringify(ctx.request));
        // logger.info("%s, ctx.request.body: %s",ctx.traceid, ctx.req.body);
        await next();
        logger.info("%s, reps: %s",ctx.traceid, JSON.stringify(ctx.body?ctx.body:""));
    }catch(e){
        logger.error("%s, error: %o",ctx.traceid, e);
    }
});

// check sign 
router.use(async (ctx,next) => {
    // check sign here
    logger.debug("%s, check sign", ctx.traceid);
    await next();
});

router.all(config.has('server.root')?config.get('server.root'):'/', enterCtrl.enter);

module.exports = router;