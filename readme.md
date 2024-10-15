# Mie

VS Code 里触手可及的小工具：

+ 颜色格式转换
+ 时间格式、时区转换

## Contribution
### 需求、建议、意见、批评

### 贡献代码
#### Apps
``` bash
npm run apps --workspace=apps
```

#### 打包
> 为彻底避免“热更新”带来的疑惑（也就是问题：“究竟哪些操作支持热更新？而哪些不支持”），
> 此插件的打包过程应避免使用 watch mode。

##### 开发模式
``` bash
npm run build-dev --workspace=apps --workspace=main
npm run package
```

##### 生产模式
``` bash
npm run build-pro --workspace=apps --workspace=main
npm run package
```

#### 相关链接
+ [VS Code 插件开发极简教程](https://zhuanlan.zhihu.com/p/532031362)
+ [VS Code 插件开发文档](https://code.visualstudio.com/api/get-started/your-first-extension)
+ [VS Code 插件案例](https://github.com/microsoft/vscode-extension-samples/tree/main)
+ [esbuild](https://esbuild.github.io/)
+ [hyperapp](https://github.com/jorgebucaran/hyperapp)
+ [npm workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces?v=true)
+ [触手可及](https://baike.baidu.com/item/%E8%A7%A6%E6%89%8B%E5%8F%AF%E5%8F%8A/3809599)
