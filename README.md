# nodebot-module-utility
nodebot-module-utility 是 nodebot 的官方模块。它增加了一个导出字段从而实现了自动生成帮助的功能。

*此模块可以与 nodebot-module-helper 协同工作。*

## 命令
- help: 发送帮助。

## 使用
在其他模块下创建形如下述的 `.md` 文件：
```markdown
# <commandName>
From <moduleName>
## Description
<description>
## Usage
### Param
- <param1>: <desc1>
- <param2>: <desc2>
### Option
- <option1>: <desc1>
- <option2>: <desc2>
## Example
- * <format> *
- <example1>
- <example2>
```
并在模块根目录下创建 `helper.yml`：
```yml
<keyword>: <filename>
```
这样，每当查询对应到 keyword 时，filename 都将被解析为帮助并发送。