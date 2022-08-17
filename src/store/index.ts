import { defineStore } from 'pinia'


export const mainStore = defineStore('main',{
  state: () => {
    return {
      msg: 'hello pinia',
      count: 345
    }
  },
  getters: {

  },
  actions: {}
})