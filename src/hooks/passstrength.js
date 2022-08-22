// 密码强度
export const userPassStrong = (str) => {
  if (/^[a-zA-Z0-9]{8,12}$/.test(str)) {
    /* 走到这说明长度够 */
    if (/[A-Z]/.test(str) && /[a-z]/.test(str) && /\d/.test(str)) {
      return 3;
    } else if (/^[A-Z]+$/.test(str) || /^[a-z]+$/.test(str) || /^\d+$/.test(str)) {
      /* 中等 */
      return 2;
    } else {
      return 1;
    }
  } else {
    return 1;
  }
}