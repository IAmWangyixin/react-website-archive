# 合成事件与原生事件混用
合成事件与原生事件混用时，事件触发顺序：原生事件 -> 合成事件
## React 合成事件系统的委托机制
React在合成事件内部仅仅对最外层的容器进行了绑定，并且依赖事件的冒泡机制完成了委派。以`event-mixing-exploration`为例，事件并没有直接绑定到`div.qr-content`元素上，所以在这里使用`e.stopPropagation()`并没有用。点击二维码图片区域图片依旧会隐藏。
## React合成事件的本质
React 的合成事件系统只是原生 DOM 事件系统的一个子集。它仅仅实现了 DOM Level 3 的事件接口，并且统一了浏览器间的兼容问题。有些事件 React 并没有实现，或者受某些限制没办法去实现，比如 window 的 resize 事件。

## 避免方法
- 不要将原生事件与合成事件混用
- 通过`e.target`避免