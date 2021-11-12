import Cookies from 'js-cookie'
import router from '@/router'
const TokenKey = 'Token'
const UserID = 'uid'

export function getToken() {
  //return Cookies.get(TokenKey)
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  // let millisecond = new Date().getTime();
  //  let expiresTime = new Date(millisecond + 60 * 1000 * 60 * 24); // 小时
  //  // let expiresTime = 1 // 天
  // console.log('expiresTime',new Date(expiresTime))
  // return Cookies.set(TokenKey, token, {
  //   expires: expiresTime,
  // })

  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUID() {
  return Cookies.get(UserID)
}

export function setUID(uid) {
  return Cookies.set(UserID, uid)
}

export function removeUID() {
  return Cookies.remove(UserID)
}

export function setStorage(key, data) {
  data = JSON.stringify(data)
  return localStorage.setItem(key, data)
}
export function getStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
export function removeStorage() {
  return localStorage.clear()
}

export function setSession(key, data) {
  data = JSON.stringify(data)
  return sessionStorage.setItem(key, data)
}
export function getSession(key) {
  // return JSON.parse(sessionStorage.getItem(key))
  if(key == 'user') {
    if (!getToken()) {
      return router.push({ path: "/login" });
    }
  } else if(key == 'address') {
   // return JSON.parse(sessionStorage.getItem(key))
  }
  return sessionStorage.getItem(key)
}
export function clearSession() {
  return sessionStorage.clear()
}
export function removeSession(key) {
  return sessionStorage.removeSession(key)
}

export function getCookie(key) {
  return Cookies.get(key)
}

export function setCookie(key, value) {
  return Cookies.set(key, value)
}

export function removeCookie(key) {
  return Cookies.remove(key)
}
