import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

// 学习笔记---

/**
 * Q1.map里面的 requireContext 是干嘛的？
 *  (requireContext) => {
	requireContext.keys() // 得到了所有导入的模块名数组
				  .map(function(moduleName){
				  			autorequire(moduleName) // webpack 自动导入 
				  			})
				  				}
   map里面的方法是自动执行的，req也是一个方法，所以就自动执行了
 * 
 * map里面有function就自动执行 -例子
    var list = ['a', 'b', 'c']
    var fun = item => {
    console.log(item)
    }
    list.map(fun)
    证明自动引入的是module 
    const requireAll1 = requireContext =>
    requireContext.keys().map(it => {
        console.log(requireContext(it)) // 打印出来的是module
    }) // 原文代码
    requireAll1(req)

 * Q2.如何不自动引入，手动引入

    手动引入的代码

    const cache = {}
    function importAll(r) {
    r.keys().forEach(key => (cache[key] = r(key)))
    }

    importAll(req)
    console.log(cache) // key-文件名  value：module对象

 */
