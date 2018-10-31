/* 把code写到#code和style标签里 */
function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1

    // 以css的语法高亮html中的内容
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css')

    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight // 让 scroll 能拉多长拉多长
    if (n >= code.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 5)
}
function writeMarkdown(markdown, fn) {
  let domPaper = document.querySelector('#paper > .content')
  let n = 0
  let id = setInterval(() => {
    n += 1

    // 以css的语法高亮html中的内容
    domPaper.innerHTML = (markdown.substring(0, n))

    domPaper.scrollTop = domPaper.scrollHeight // 让 scroll 能拉多长拉多长
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 5)
}


var result = `/*
 * 面试官您好，我是董董董
 * 我将以动画的形式来介绍我自己
 * 只用文字介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

  * {
    transition: all 1s;
  }
  body {
    background: rgb(222, 222, 222);
    font-size: 16px;
  }
  #code {
    border: 1px solid red;
    padding: 16px;
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

  /* 加点 3D 效果 */
  #code {
    transform: rotate(360deg);
  }

  /* 不玩了，我来介绍一下我自己吧 */
  /* 我需要一张白纸 */
  #code {
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
  }
  #paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #000;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #paper > .content {
    background: #fff;
    width: 100%;
    height: 100%;
  }
`

var result2 = `
  #paper {
  }
`
/* 接下来把 Markdown 变成 HTML */

/* 接下来给 HTML 加样式 */

/*
 * 这就是我的会动的简历了
 * 谢谢观看
 */

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

writeCode('', result, () => {
  createPaper(() => {
    writeCode(result, result2, () => {
      writeMarkdown(md)
    })
  })
})

function createPaper(fn) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}


