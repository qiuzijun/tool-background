const TOOL_TOKEN = "tool_token";

export const getToken = () => {
  return localStorage.getItem(TOOL_TOKEN);
};
export const setToken = (data) => {
  localStorage.setItem(TOOL_TOKEN, data);
};
export const removeToken = () => {
  localStorage.removeItem(TOOL_TOKEN);
};
