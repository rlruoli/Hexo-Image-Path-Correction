hexo.extend.filter.register('before_post_render', function(data) {
  // 只匹配.md文件
  if (data.source.endsWith('.md')) {
    if (!data.content) return data;
    // 正则表达式匹配Markdown图像语法
    const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
    // 替换处理函数
    const replaceImagePath = (match, altText, imgPath) => {
      // 跳过网络图片、"//"、"/"
      if (/(?:https?:)?\/\//.test(imgPath) || /^\//.test(imgPath)) {
        return match;
      }
      // 提取文件名（带扩展名）
      const fileName = extractFilename(imgPath);
      hexo.log.info(imgPath + " ==》 " + fileName)
      // 返回新的图像路径
      return `{% asset_img ${fileName} ${altText} %}`;
    };
    // 执行替换
    data.content = data.content.replace(imageRegex, replaceImagePath);
  }
  return data;
});
hexo.extend.filter.register('after_init', () => {
  console.log('✅ 插件已成功加载！');
});
function extractFilename(filePath) {
// 处理Windows路径分隔符（\）和Unix路径分隔符（/）
const normalizedPath = filePath.replace(/\\/g, '/');
// 获取最后一个斜杠后的内容
const lastSlashIndex = normalizedPath.lastIndexOf('/');
// 如果找到斜杠，返回斜杠后的内容；否则返回原路径
return lastSlashIndex !== -1
  ? normalizedPath.substring(lastSlashIndex + 1)
  : normalizedPath;
}