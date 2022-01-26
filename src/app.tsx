import { runApp, IAppConfig } from 'ice';

// 应用配置
const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
};

/**
 * 框架通过调用 runApp 创建渲染整个应用
 * appConfig: 应用的全局配置
*/
runApp(appConfig);
