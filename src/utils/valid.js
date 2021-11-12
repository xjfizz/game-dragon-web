/* 是否邮箱*/
 function isEmail( value) {
   // const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
   const reg1 = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
   const reg2 = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+\.[a-z]+$/;
    if (value == '' || value == undefined || value == null) {
     return false
    } else {
      if (!reg1.test(value) && !reg2.test(value)) {
        return false
      } else {
        return true
      }
    }
  }



  export  {
    isEmail
  }