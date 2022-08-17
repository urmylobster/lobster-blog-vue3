import { defineStore } from "pinia";

export const allanStore = defineStore('allan', {
  state: () => {
    return {
      movieList: ['绿野仙踪', '肖申克的救赎', '滑雪大冒险']
    }
  },
  getters: {},
  actions: {},
})