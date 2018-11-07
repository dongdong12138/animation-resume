// var text = `html {color: red;}`
// var html = Prism.highlight(text, Prism.languages.css)

var css1 = `
  /* 
   * 面试官你好，我是XXX
   * 只用文字作做我介绍太单调了
   * 我就用代码来介绍吧
   */

  /* 首先来准备一些样式 */
  html {
    background: rgb(222, 222, 222);
    font-size: 16px;
  }
  body {
    width: 100vw;   
    height: 100vh;
    display: flex;
  }

  /* 我需要一点代码高亮 */
  .token.selector {
    color: #690;
  }
  .token.property {
     color: #905;
  }
  .token.function {
    color: #DD4A68;
  }
  .token.punctuation {
    color: #999;
  }

  /* 来弄个呼吸灯的效果 */
  .code {
    animation: breath 0.5s infinite alternate-reverse;
  }

  /* 我还需要一张白纸 */
  .codeWrapper {
    width: 50%;
  }
  .paperWrapper {
      width: 50%;
      height: 100%;
      background: #444;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .paper {
      width: 96%;
      height: 96%;
      background: #fff;    
      padding: 16px;
  }
`
var css2 = `
  /* 接下来以 MarkDown 的形式来写一下简历 */
`
var css3 = `
  /* emmmm，MarkDown 格式似乎并不友好 */
  /* 那就把 MarkDown 格式变成 HTML 格式吧 */
`
var md = `
  # 自我介绍
  我叫 XXX
  1990 年 1 月出生
  XXX 学校毕业
  自学前端半年
  希望应聘前端开发岗位
  # 技能介绍
  熟悉 JavaScript CSS
  # 项目介绍
  1. XXX 轮播
  2. XXX 简历
  3. XXX 画板
  # 联系方式
  - QQ xxxxxxxx
  - Email xxxxxxxx
  - 手机 xxxxxxx
  # 联系方式
  - QQ xxxxxxxx
  - Email xxxxxxxx
  - 手机 xxxxxxx
  # 联系方式
  - QQ xxxxxxxx
  - Email xxxxxxxx
  - 手机 xxxxxxx
  # 联系方式
  - QQ xxxxxxxx
  - Email xxxxxxxx
  - 手机 xxxxxxx
  # 联系方式
  - QQ xxxxxxxx
  - Email xxxxxxxx
  - 手机 xxxxxxx
  # 联系方式
  - QQ xxxxxxxx
  - Email xxxxxxxx
  - 手机 xxxxxxx
  # 联系方式
  - QQ xxxxxxxx
  - Email xxxxxxxx
  - 手机 xxxxxxx
  # 联系方式
  - QQ xxxxxxxx
  - Email xxxxxxxx
  - 手机 xxxxxxx
`

var n = 0
var id = setInterval(() => {
  n += 1
  code.innerHTML = css1.substring(0, n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
  styleTag.innerHTML = css1.substring(0, n)

  code.scrollTop = code.scrollHeight
  if (n >= css1.length) {
    window.clearInterval(id)
    fn2()
    fn3(css1)
  }
}, 10)

function fn2() {
  // <div class="paperWrapper">
  //       <pre id="paper" class="paper"></pre>
  //   </div>

  var paperWrapper = document.createElement('div')
  paperWrapper.className = 'paperWrapper'
  var paper = document.createElement('pre')
  paper.id = 'paper'
  paper.className = 'paper'
  paperWrapper.appendChild(paper)
  document.body.appendChild(paperWrapper)
}

function fn3(preResult) {
  var n = 0
  var id = setInterval(() => {
    n += 1
    code.innerHTML = preResult + css2.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = preResult + css2.substring(0, n)

    code.scrollTop = code.scrollHeight
    if (n >= css2.length) {
      window.clearInterval(id)
      writeMarkdown()
    }
  }, 10)
}

function writeMarkdown() {
  var n = 0
  var id = setInterval(() => {
    n += 1
    paper.innerHTML = md.substring(0, n)
    paper.scrollTop = paper.scrollHeight
    if (n >= md.length) {
      window.clearInterval(id)
      fn4(css1+css2)
    }
  }, 10)
}

function fn4(preResult) {
  var n = 0
  var id = setInterval(() => {
    n += 1
    code.innerHTML = preResult + css3.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = preResult + css3.substring(0, n)

    code.scrollTop = code.scrollHeight
    if (n >= css3.length) {
      window.clearInterval(id)
      markdownToHtml()
    }
  }, 10)
}

function markdownToHtml() {
  paper.innerHTML = marked(md)
}