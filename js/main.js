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

writeCode('', css1, () => {
  createPaper(() => {
    writeCode(css1, css2, () => {
      writeMarkdown(() => {
        writeCode(css1 + css2, css3, () => {
          markdownToHtml()
        })
      })
    })
  })
})


function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('.code')
  var n = 0
  var id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
    styleTag.innerHTML = prefix + code.substring(0, n)

    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 50)
}

function createPaper(fn) {
  var paperWrapper = document.createElement('div')
  paperWrapper.className = 'paperWrapper'
  var paper = document.createElement('pre')
  paper.id = 'paper'
  paper.className = 'paper'
  paperWrapper.appendChild(paper)
  document.body.appendChild(paperWrapper)
  fn.call()
}

function writeMarkdown(fn) {
  var n = 0
  var id = setInterval(() => {
    n += 1
    paper.innerHTML = md.substring(0, n)
    paper.scrollTop = paper.scrollHeight
    if (n >= md.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 50)
}

function markdownToHtml() {
  paper.innerHTML = marked(md)
}