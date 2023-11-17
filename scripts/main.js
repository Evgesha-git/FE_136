// @ts-check
/**
 *
 * @param {number} min
 * @param {number} max
 */
function getRandomNum(min = 0, max = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 *
 * @param {number} min
 * @param {number} max
 * @param {number[]} ex
 */
function getRnEx(min, max, ex) {
    let num = getRandomNum(min, max);
    if (ex.includes(num)) return getRnEx(min, max, ex);
    return num;
}

console.log(getRnEx(1, 10, [1, 2, 3, 5, 7, 9]));

/**
 *
 * @param {string} str
 */
function getStr(str) {
    let regExp = /ab+a/g;
    let rez = str.match(regExp);
    return rez;
}

console.log(getStr("aa aba abba abbba abca abea"));

/**
 * trim()
 * trimStart()
 * trimEnd()
 */

let s = "\t\n             sdf sdf sdghfjsdf    \n \t ";
console.log(s);
console.log(s.trim());
console.log(s.trimEnd());
console.log(s.trimStart());

/**
 * @type {string}
 */
let s2 = "translateX(100%)";
s2 = s2.replace(/\D/g, ""); // [^0-9]
// s2 = parseFloat(s2);
console.log(s2);

/**
 *
 * @param {string} mail
 * @returns boolean
 */
const email = (mail) => {
    const regExp =
        /^[a-z]{1}[a-z0-9_\.\-]{1,}@[a-z]{1}[a-z0-9_\.\-]{1,10}\.[a-z]{2,11}$/gi;
    return regExp.test(mail);
};

console.log(email("ящик@почта.бел"));
console.log(email("user_top@mail.com"));
console.log(email("1user1@mail.ru"));
console.log(email("t1@m.r"));
console.log(email("t!-1@mail.gg"));

/**
 * @param {string} url
 */
const adress = (url) => {
    const regExp =
        /(https?:\/\/[a-z][a-z0-9]+(?:\.[a-z0-9]+)*\.[a-z]{2,11})(\/(?:[^#\?\s])+)?(\?[^#]+)?(#\w+)?/gi;
    let group = regExp.exec(url) || [];

    return [...group].filter((item, index) => (index !== 0 ? item : null));
    /**
     * function(item, index) {
     *  if (index !== 0) {
     *      return item;
     *  } else {
     *      return null;
     *  }
     * }
     */
};
