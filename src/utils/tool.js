// token
const TOOL_TOKEN = "tool_token";
// 记住密码
const TOOL_PASS = "tool_pass";
export const getToken = () => {
  return localStorage.getItem(TOOL_TOKEN);
};
export const setToken = (data) => {
  localStorage.setItem(TOOL_TOKEN, data);
};
export const removeToken = () => {
  localStorage.removeItem(TOOL_TOKEN);
};
export const getPass = () => {
  return (
    JSON.parse(localStorage.getItem(TOOL_PASS)) || {
      account: "",
      password: "",
      checked: false,
    }
  );
};
export const setPass = (data) => {
  localStorage.setItem(TOOL_PASS, JSON.stringify(data));
};
export const removePass = () => {
  localStorage.removeItem(TOOL_PASS);
};
