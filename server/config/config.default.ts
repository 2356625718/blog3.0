import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612184429882_333';

  // add your egg config in here
  config.middleware = ["crypto"];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.cors = {
    origin: '*',//匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  //关闭csrf
  config.security = {
    csrf: {
      enable: false,
    }
 }

 //数据库配置文件
 config.mysql = {
   host: 'localhost',
   user: 'root',
   password: '235662',
   database: 'blog'
 }





  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
