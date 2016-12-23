# vue2.0与express构建[淘票票](https://h5.m.taobao.com/app/movie/pages/index/index.html?from=def&spm=a1z2r.7661912.h5-movie-list.121&sqm=a1z2r.7661912.1.1&bottomtab=show)页面
## 描述
写这个项目的目的一是为了学习vue2.0相关的知识点，二是为了给他想要了解vue2.0的童鞋提供一个学习demo。所以为了使这个项目更加完整，项目中加入一个server服务，为前端提供数据来源，模拟服务器环境，当用`npm run deploy`命令运行前端环境时，就可以直接部署到server服务里。因此本项目有两个环境，一个是前端开发环境(端口是8080)，一个是server服务环境(端口是9090)。

主要技术栈：<br/>
- vue2.0
- vue-router
- vuex
- mint-ui
- nodejs
- express
	
## 如何运行
下载项目
```
 git clone https://github.com/canfoo/vue2.0-taopiaopiao.git
```
 分别进入到vue2.0-taopiaopiao目录和server服务安装依赖包
```
 npm install
```
启动server服务（得先启动后台服务，否则前端页面没有数据），在server目录下执行以下命令，成功执行会终端会提示服务端口号为9090
```
 npm run start
```
启动前端开发服务，在vue2.0-taopiaopiao目录里执行以下命令，成功执行后，会自动打开浏览器访问前端开发环境，浏览地址是`http://localhost:8080`
```
 npm run dev
```
前端资源部署到server里，开发完成后，在vue2.0-taopiaopiao目录里执行以下命令，成功执行后，可以通过访问server提供的路径访问到页面了，访问路径为`http://localhost:9090/app`
```
 npm run deploy
```

备注：因为本项目有提供后台服务，所以当前端部署到服务器后，只要后台服务启动，就可以直接通过`http://localhost:9090/app`路径访问到前端页面，无须再启动前端的开发服务。

## 项目截图
![Mou icon](./Screenshots/1.png) ------
![Mou icon](./Screenshots/2.png) 


![Mou icon](./Screenshots/3.png)
## 主要目录结构
> --build  
> --config
> --src  //前端主要开发目录
>  --assets  //存放前端静态资源
>  --components  //存放组件
>  --store  //vuex数据流管理
>  --views  //页面试图，由vue-router引入
>  App.vue 
>  main.js  //前端入口文件
>--server  //后台服务
>  --bin  //启动后台服务配置
>  --database  //存放页面所需要的json数据
>  --public  //前端部署时存放在后台服务的位置
>  --routes  //路由于请求接口管理
>  --views  //前端模板存放位置
>  app.js  //后台服务入口