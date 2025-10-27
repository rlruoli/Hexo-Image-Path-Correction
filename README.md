# Hexo-Image-Path-Correction

Hexo本地图像路径修正插件

官方给出的解决方案post_asset_folder配置项虽然好用，但是当你用Typora之类的编辑器进行编辑的时候就会发现，官方设计还是过于生草，在编辑器中引用图像只能使用文件名，但是文件却在子目录中，根本没法显示，但如果你要使用相对路径引用图片，Hexo在渲染出来的网页中又会找不到文件，~~这就一根筋变两头堵了~~

于是一怒之下就有了这玩意

本插件可以实现在渲染md文件前将md文件中引用的图像路径处理到只剩最后的文件名，算是给post_asset_folder配置项打了个兼容编辑器的补丁

# 使用方法：

## npm包管理器

```bash
npm install hexo-image-path-correction --save
```



## 手动安装

1. 从 [releases](https://github.com/rlruoli/Hexo-Image-Path-Correction/releases/latest) 中或直接下载zip包
2. 解压到 `node_modules` 文件夹

