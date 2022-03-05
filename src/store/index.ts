import { defineStore } from 'pinia'
// 为 store state 声明类型
export interface bgImgState {
  bgImg: string[]
}
const state: bgImgState = {
  bgImg: [
    'https://bayunbuzi-1307803943.cos.ap-shanghai.myqcloud.com/%5B16273%5D.png',
    'https://bayunbuzi-1307803943.cos.ap-shanghai.myqcloud.com/%5B16178%5D.png',
    'https://bayunbuzi-1307803943.cos.ap-shanghai.myqcloud.com/%5B16498%5D.jpg',
  ],
}
export const useBgStore = defineStore('bgStore', {
  state: () => state,
  actions: {
    cos(state: number) {
      console.log(this.bgImg[0] + state)
    },
  },
  getters: {
    tests: (state: bgImgState) => state.bgImg[2] + '1',
  },
})
