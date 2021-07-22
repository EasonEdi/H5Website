let routes = [
  {
    path: '/',
    name: 'index',
    component (resolve) {
      require.ensure(['@/components/index'], () => {
        resolve(require('@/components/index'))
      }, 'index')
    }
  }, {
    path: '/join',
    name: 'join',
    component (resolve) {
      require.ensure(['@/components/join'], () => {
        resolve(require('@/components/join'))
      }, 'join')
    }
  }, {
    path: '/detail',
    name: 'detail',
    component (resolve) {
      require.ensure(['@/components/detail'], () => {
        resolve(require('@/components/detail'))
      }, 'detail')
    }
  }, {
    path: '/employ',
    name: 'employ',
    component (resolve) {
      require.ensure(['@/components/employ'], () => {
        resolve(require('@/components/employ'))
      }, 'employ')
    }
  }, {
    path: '/eDetail',
    name: 'eDetail',
    component (resolve) {
      require.ensure(['@/components/employDetail'], () => {
        resolve(require('@/components/employDetail'))
      }, 'eDetail')
    }
  }
]

export default routes
