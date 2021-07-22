export const mutations = {
  UPDATE_SHAREDATA (state, data) {
    let target = {}
    state.shareData = target
    /**
     * 一次页面加载，连续多次调用分享，微信会取第一个
     * 所以，自定义了非默认的 分享内容，100ms后再触发
     */
    let reset = target.title
    if (reset) {
    } else {
    }
  },

  UPDATE_SHARED (state, data) {
    state.shared = data
  }
}
