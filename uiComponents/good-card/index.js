/*
 * @Author: Lichunlin
 * @Date: 2020-04-12 13:21:15
 * @Email: 504234675@qq.com
 * @LastEditors  : Lichunlin
 * @LastEditTime : 2020-05-24 16:33:20
 * @Description: 商品卡片
 */

const app = getApp();
Component({

  behaviors: [],

  properties: {
    dataSource: {
      type: Object,
      value: {}
    },
    // myProperty: { // 属性名
    //   type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    //   value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
    //   observer: function (newVal, oldVal) { } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    // },
    // myProperty2: String // 简化的定义方式
  },
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
  }, // 私有数据，可用于模版渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    ready: function () {
      // console.log(data);
    },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function() { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {},
  },

  methods: {
    onAddTap(){
      console.log('onAddTap');
      this.triggerEvent('onAddTap');
    },
    onSubTap(){
      console.log('onSubTap');
      this.triggerEvent('onSubTap');
    },
    clickCardHandler(){
      console.log('clickCardHandler');
      this.triggerEvent('clickCardHandler');
    },
    // onMyButtonTap: function () {
    //   this.setData({
    //     // 更新属性和数据的方法与更新页面数据的方法类似
    //     myProperty: 'Test'
    //   })
    // },
    // _myPrivateMethod: function () {
    //   // 内部方法建议以下划线开头
    //   this.replaceDataOnPath(['A', 0, 'B'], 'myPrivateData') // 这里将 data.A[0].B 设为 'myPrivateData'
    //   this.applyDataUpdates()
    // },
    // _propertyChange: function (newVal, oldVal) {

    // }
  }

})