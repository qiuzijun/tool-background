import { defineStore } from "pinia";
import { setToken } from "@/utils/tool";
export const useUser = defineStore("user", {
  state: () => ({
    userInfo: {},
    token: "",
  }),
  actions: {
    login({ account, password }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.token = "FNRUEGHV5UTJNBRYTRU";
          setToken("FNRUEGHV5UTJNBRYTRU");
          resolve();
        }, 500);
      });
    },
  },
});
