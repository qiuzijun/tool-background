import request from "@/utils/request";
import AES from "@/utils/crypto";
/**
 * 登录
 * @param { String } account
 * @param { String } password
 *
 * @returns { Object } { status:200,token:'' }
 */
export const Login = ({
  account, //用户名
  password, //密码
  uid,
}) => {
  return request({
    url: "/users/login",
    method: "post",
    data: {
      account: AES.encrypt(account, uid),
      password: AES.encrypt(password, uid),
      uid,
    },
  });
};
/**
 * 注册
 * @param { String } account
 * @param { String } password
 * @param { String } confirm
 * @param { String } mobile
 *
 * @returns { Object }
 */
export const Register = ({
  account, //用户名
  password, //密码
  confirm, //再次输入密码
  mobile, //手机号
  uid,
}) => {
  return request({
    url: "/users/register",
    method: "post",
    data: {
      account: AES.encrypt(account, uid),
      password: AES.encrypt(password, uid),
      confirm: AES.encrypt(confirm, uid),
      mobile: AES.encrypt(mobile, uid),
      uid,
    },
  });
};
