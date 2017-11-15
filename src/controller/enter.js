
/**
 * 获取某个服务访问的url
 * 
 * ## 参数说明：
 * a: appid
 * av: app_version应用版本，如果没有提供，使用默认版本
 * s: 微服务的名称
 * 
 * 
 * @param {Object} options {a:"",av:"",s:""}
 */
exports.enter = async function(ctx, next){
    ctx.body = {status:0, msg:"成功"};
    return await next();
}