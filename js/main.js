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
    display: flex;
    justify-content: space-around;
  }
  .code-wrapper {
    width: 50%;
    height: 100vh;
    border: 1px solid #aaa;
    padding-left: 64px;
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
  .code-wrapper {
    perspective: 500;
    -webkit-perspective: 500; /* Safari 和 Chrome */  
  }
  #code {
     transform:rotateY(10deg);
  }

  /* 不玩了，我来介绍一下我自己吧 */
  /* 我需要一张白纸 */
  .code-wrapper {
    position: fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #code {
    width: 98%;
    height: 80%;
    border: 1px solid red;
    padding-left: 64px;
  }
  #paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #444;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 800;
    -webkit-perspective: 800; /* Safari 和 Chrome */
  }
  #paper > .content {
    background: #fff;
    width: 80%;
    height: 100%;
    overflow: auto;
    padding: 16px;
    transform:rotateY(-10deg);
  }
`
var result2 = `
  /* 用Markdown打个草稿先 */  
`
var result3 = `
  /* 现在把 Markdown 变成 HTML */
`


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
      writeMarkdown(md, () => {
        writeCode(result + result2, result3, () => {
          markdownToHtml(md)
        })
      })
    })
  })
})

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
  }, 10)
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
  }, 10)
}

function markdownToHtml(markdown, fn) {
  let domPaper = document.querySelector('#paper > .content')
  // 将 markdown 转为 HTML
  domPaper.innerHTML = marked(markdown)
}

function createPaper(fn) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  content.scrollTop = content.scrollHeight // 让 scroll 能拉多长拉多长
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}


