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
  actions: {
    // 不能使用箭头函数
    changeState(){
      this.msg = "hello I‘m changed pinia";
      this.count++;
    }
  }
})