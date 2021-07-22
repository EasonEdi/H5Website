export function json2url(json) {
  let url = ''
  let arr = []
  for (let i in json) {
    arr.push(i + '=' + json[i])
  }
  url = arr.join('&')
  return url
}

export function url2json(url) {
  // const oSearch = decodeURI(url.search).substring(1)
  const oSearch = decodeURI(url).substring(1)
  const json = {}
  oSearch.split('&').forEach((m, i) => {
    json[m.split('=')[0]] = m.split('=')[1]
  })
  return json
}

export function getUrlParam(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg) // 匹配目标参数
  if (r != null) return unescape(r[2])
  return null // 返回参数值
}

export function parseUrlParam(url, name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  let r = url.match(reg) // 匹配目标参数
  if (r != null) return unescape(r[2])
  return null // 返回参数值
}

export function buildContentFunc(content) {
  if (content) {
    let text = content.replace(
      /<div class=["|']quizPutTag["|'] contenteditable=["|']true["|'](([\s\S])*?)<\/div>/g,
      "_____"
    );
    text = text.replace(
      /<bdo class=["|']mathjye-underline["|'](([\s\S])*?)<\/bdo>/g,
      "_____"
    );
    return text;
  }
}

export function NoToChineseFunc(num) {
  if (!/^d*(.d*)?$/.test(num)) {
    return "Number is wrong!";
  }
  const AA = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const BB = ["", "十", "百", "千", "万", "亿", "点", ""];
  const a = ("" + num).replace(/(^0*)/g, "").split(".");
  let k = 0;
  let re = "";
  for (let i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (
          !new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0])
        ) {
          re = BB[4] + re;
        }
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (
      k % 4 === 2 &&
      a[0].charAt(i + 2) !== "0" &&
      a[0].charAt(i + 1) === "0"
    ) {
      re = AA[0] + re;
    }
    if (a[0].charAt(i) !== "0") {
      re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    }
    k++;
  }
  if (a.length > 1) {
    //加上小数部分(如果有小数部分)
    re += BB[6];
    for (let i = 0; i < a[1].length; i++) {
      re += AA[a[1].charAt(i)];
    }
  }
  if (num >= 10 && num < 20) {
    return re.slice(1);
  }
  return re;
}
