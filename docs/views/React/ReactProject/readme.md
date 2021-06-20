---
title: "react入门面试题"
date: 2021-06-11 12:43:00
sidebar: "auto"
categories:
  - React
tags:
  - React
  - ReactProject
---

:::tip
前端面试必备经典面试题
:::

<!-- more -->

## 一、 React有什么特点？
React的主要功能如下：

1、它使用虚拟DOM 而不是真正的DOM。
2、它可以进行服务器端渲染。
3、它遵循单向数据流或数据绑定。

## 二、React 中的 Key 值

1.为什么要有key值

相同的key不会重新渲染

key是一个字符串，用来唯一标识同父同层级的兄弟元素。当React作diff时，只要子元素有key属性，便会去原v-dom树中相应位置（当前横向比较的层级）寻找是否有同key元素，比较它们是否完全相同，若是则复用该元素，免去不必要的操作。

但是强烈不推荐用数组index来作为key。如果数据更新仅仅是数组重新排序或在其中间位置插入新元素，那么视图元素都将重新渲染


## 三、diff 算法 
高效的diff算法能够保证进行对实际的DOM进行最小的变动

但是标准的的 Diff 算法复杂度需要 O(n^3)

这显然无法满足性能要求 要达到每次界面都可以整体刷新界面的目的

势必需要对算法进行优化

React里结合 Web 界面的特点做出了两个简单的假设

使得 Diff 算法复杂度直接降低到 O(n)

1. 两个相同组件产生类似的 DOM 结构 不同的组件产生不同的 DOM 结构

2. 对于同一层次的一组子节点 它们可以通过唯一的 id 进行区分

:::tip
不同节点类型的比较
:::
为了在树之间进行比较 我们首先要能够比较两个节点 在 React 中即比较两个虚拟 DOM 节点

当两个节点不同时 应该如何处理 这分为两种情况

1. 节点类型不同

2. 节点类型相同 但是属性不同

节点类型不同 直接删除原节点  插入新节点。

## 四、 虚拟 DOM
虚拟 DOM (VDOM)是真实 DOM 在内存中的表示

UI 的表示形式保存在内存中 并与实际的 DOM 同步

这是一个发生在渲染函数被调用和元素在屏幕上显示之间的步骤 整个过程被称为调和
## 五、react 渲染机制
React整个的渲染机制就是在state/props发生改变的时候 重新渲染所有的节点 构造出新的虚拟Dom 通过Diff算法进行比较 得到需要更新的地方在批量造作在真实的Dom上， 由于这样做就减少了对Dom的频繁操作 从而提升的性能

## 六、vue 和 react 区别
vue 上手简单 react 复杂一些

vue 的逻辑大部分写在 template, react 写在 js

vue是通过 Object.defineProperty() + 观察者模式实现双向绑定

react是通过 diff算法

vue 插件库比较少  , react 丰富的插件库

## 七、调用setState 发生一些什么(异步)
在代码调用setState之后，React会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程。经过调和过程React会构建新的React元素树  然后会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化的渲染。React能够精确地知道哪些位置发生了改变，这就保证了按需更新，而不是重新渲染。

## 八、生命周期

1. **加载阶段**

1.1.constructor()

constructor()中完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
注意：只要使用了constructor()就必须写super(),否则会导致this指向错误。

1.2.componentWillMount()

componentWillMount()一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。

1.3.render()

render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染。

1.4.componentDidMount()

组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染

2.**变更阶段**

2.1. componentWillReceiveProps (nextProps)

在接受父组件改变后的props需要重新渲染组件时用到的比较多
接受一个参数nextProps
通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件

2.2.shouldComponentUpdate(nextProps,nextState)

主要用于性能优化
唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新
因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断

2.3.componentWillUpdate (nextProps,nextState)

组件更新前
shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState。

2.4.render()

render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染。

2.5.componentDidUpdate(prevProps,prevState)

组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state。

3.**卸载阶段**

3.1.componentWillUnmount ()

在此处完成组件的卸载和数据的销毁。
clear你在组建中所有的setTimeout,setInterval
移除所有组建中的监听 removeEventListener