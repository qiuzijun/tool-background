import {
  defineStore
} from "pinia";
export const useStack = defineStore("stack", {
  state: () => ({
    stack: [{
      name: "home",
      icon: false,
      meta: {
        title: "首页",
      },
    }, ]
  }),
  actions: {
    // 添加路由栈
    addStack(item) {
      let isStack = this.stack.every((data) => {
        return data.name !== item.name;
      })
      if (isStack && item.name !== 'Login') {
        this.stack.push({
          ...item,
          icon: true
        });
      }
    },
    // 删除路由栈
    removeStack(name) {
      this.stack = this.stack.filter((data) => {
        return data.name !== name;
      })
    }
  },
});