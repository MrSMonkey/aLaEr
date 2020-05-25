const app = getApp();
const { globalData } = app;
const tempActiveKey = [1,2];
Page({
  data: {
    id: 2,
    img: '../../../../imgs/others/goodThumb2.jpg',
    goodName: '新鲜西红柿',
    merchantName: '油瓶超市',
    count: 5001,
    buyCount: 0,
    unit: '斤',
    inventoryDesc: '5001斤',
    sallingPrice: '2.99',
    originalPrice: '4.99',
    ...globalData,
  },
  clickTabBtnHandler(e) {
    console.log(e.currentTarget.dataset['tabKey'])
    this.setData({
      activeKey: e.currentTarget.dataset['tabKey']
    });
  },
  clickMenuItemHandler(e) {
    const selectedMenuItem = this.data.menuList[e.detail];
    console.log('clickMenuItemHandler', selectedMenuItem);
    this.setData({ selectedMenuItem });
  },
  onAddTap(e) {
    console.log(e.currentTarget.dataset['id'])
  },
  onSubTap(e) {
    console.log(e.currentTarget.dataset['id'])
  },
  clickMerchantItemHandler(merchantInfo){
    console.log('merchantInfo', merchantInfo);
    wx.navigateTo({
      url: '/pages/merchant/index',
    });
  },
})