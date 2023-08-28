function setCookie(cname, cvalue) {
  const cookieValue = encodeCookie(cvalue);
  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookieWrapper(cname) {
  const cookie = getCookie(cname);
  return decodeCookie(cookie);
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function encodeCookie(cookieValue) {
  return encodeURIComponent(cookieValue);
}

function decodeCookie(cookieValue) {
  return decodeURIComponent(cookieValue);
}

function setCookieWrapper(cname, cvlaue) {
  setCookie(cname, JSON.stringify(cvlaue));
}

function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

module.exports = {
  setCookie: setCookieWrapper,
  getCookie: getCookieWrapper,
  deleteCookie: deleteCookie,
};
