import { defineStore } from 'pinia'
import { allanStore } from './allan'


export const mainStore = defineStore('main',{
  state: () => {
    return {
      msg: 'hello pinia',
      count: 345
    }
  },
  getters: {
    getCountBuff(state){
      console.log("getter被调用")
      return `${state.msg}##${state.count}`
    },
    getMsgWithThis(): string{
      return `${this.msg}**${this.count}`
    },
    getAllanStoreList(): string[] {
      return allanStore().movieList
    }
  },
  actions: {
    // 不能使用箭头函数
    changeState(){
      this.msg = "hello I‘m changed pinia";
      this.count++;
    }
  }
})