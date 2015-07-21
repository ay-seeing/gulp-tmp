### 使用方法

```bash
npm install
```
安装好gulp插件后，直接运行如下代码

```bash
gulp fileinclude
```

会生成一个 asset 文件夹，gulp 生成的文件都在这里面。



###options
- prefix(前缀): string , default @@
- suffix(后缀): string, default ''
- basepath(基本路径): string, default @file(引用的文件), it could be @root(运行gulp的目录), @file, your-basepath(自定义目录)
- filters(过滤文件): object, filters of include content
- context: object, 对象的属性值用于后面的if判断
- indent(缩进): boolean, default false
