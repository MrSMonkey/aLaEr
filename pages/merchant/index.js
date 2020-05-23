// pages/merchant/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    merchantName: '红旗连锁超市金岳西路店',
    merchantImg: '../../imgs/banner/b_img.jpg',
    merchantAddress: '重庆',
    merchantTel: '13588992888',
    isshowTip: false,
    menuList: [
      {id: 1, title: '推荐'},
      {id: 2, title: '蔬菜'},
      {id: 3, title: '水果'},
      {id: 4, title: '副食'},
      {id: 5, title: '没想好'},
    ],
  },
  clickSendIntroduceHandler(){
    this.setData({
      isshowTip: true,
    });
  },
  clickMenuItemHandler(e) {
    const selectedItem = this.data.menuList[e.detail];
    console.log('clickMenuItemHandler', selectedItem);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})