const app = getApp();
const { globalData } = app;
const tempActiveKey = [1,2];
Page({
  data: {
    activeKeyArr: tempActiveKey,
    activeKey: tempActiveKey[0],
    selectedMenuItem: null,
    menuList: [
      {id: 1, title: '推荐'},
      {id: 2, title: '蔬菜'},
      {id: 3, title: '水果'},
      {id: 4, title: '副食'},
      {id: 5, title: '没想好'},
    ],
    goodsList: [
      {
        id: 1,
        img: '../../../../imgs/others/goodThumb1.jpg',
        goodName: '新鲜西芹',
        merchantName: '油瓶超市',
        count: 5001,
        buyCount: 0,
        unit: '斤',
        inventoryDesc: '5001斤',
        sallingPrice: '2.99',
        originalPrice: '4.99',
      }, {
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
      }, {
        id: 3,
        img: '../../../../imgs/others/goodThumb2.jpg',
        goodName: '新鲜西红柿',
        merchantName: '油瓶超市',
        count: 5001,
        buyCount: 1,
        unit: '斤',
        inventoryDesc: '5001斤',
        sallingPrice: '2.99',
        originalPrice: '4.99',
      }
    ],
    merchantList: [
      {
        id: 3,
        img: '../../imgs/others/merchant_logo.png',
        merchantName: '红旗连锁超市金岳西路店',
        distance: 500,
        unit: '米'
      }, {
        id: 6,
        img: '../../imgs/others/merchant_logo.png',
        merchantName: '红旗连锁超市金岳西路店',
        distance: 500,
        unit: '米'
      }
    ],
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
  clickGoodItemHandler(goodInfo){
    console.log('goodInfo', goodInfo);
    wx.navigateTo({
      url: '/pages/goodDetail/index',
    });
  },
  clickMerchantItemHandler(merchantInfo){
    console.log('merchantInfo', merchantInfo);
    wx.navigateTo({
      url: '/pages/merchant/index',
    });
  },
})