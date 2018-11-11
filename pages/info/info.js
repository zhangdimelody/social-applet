// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: '',
    birthdate: '',
    sexes: [{ value: '1', checked: true, name: '男' }, { name: '0', checked: false, value: '女'}],
    sex: 1,
  },
  bindKeyInput: function (e) {
    this.setData({
      nickname: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      birthdate: e.detail.value
    })
  },
  radioChange: function(e){
    this.setData({
      sex: e.detail.data?1:0
    })
  },
  commitForm: function(){
    console.log({
      "nickname":this.data.nickname,
      "birthdate": this.data.birthdate,
      "sex": this.data.sex
    })
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

  }
})