import { defineStore } from "pinia";
import { setToken } from "@/utils/tool";
import AES from "@/utils/crypto";
import { Login } from "@/api/user";
export const useUser = defineStore("user", {
  state: () => ({
    userInfo: {},
  }),
  actions: {
    login({ account, password }) {
      let uid = AES.generatekey(16);
      return new Promise((resolve, reject) => {
        Login({ account, password, uid })
          .then((data) => {
            this.userInfo = data.data;
            setToken(data.data.token);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
