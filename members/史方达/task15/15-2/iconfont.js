;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M613.388835 0c-63.643185 0-125.35332 10.168985-166.965069 30.474192-41.613797 20.315445-71.633394 56.257053-87.138741 88.568051-15.5033 32.321236-23.24983 71.637489-23.24983 137.240343l0 62.271211-104.317077 0 0 163.236168 104.317077 0 0 542.210035 222.968204 0L559.0034 481.787917l139.060768 0 38.519689-163.236168-177.580457 0L559.0034 259.943912c0-39.637745 7.199789-66.458802 21.615748-80.403785 14.411864-13.955222 43.022629-22.29764 76.212099-22.29764 33.717782 0 60.774327 15.726501 94.817697 35.585304l40.637033-153.556588C729.721942 21.65056 678.657911 0 613.388835 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-linkedin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M260.096 155.648c0 27.307008-9.899008 50.516992-29.696 69.632-19.796992 19.115008-45.396992 28.672-76.8 28.672-30.036992 0-54.612992-9.556992-73.728-28.672-19.115008-19.115008-28.672-42.324992-28.672-69.632 0-28.672 9.556992-52.224 28.672-70.656 19.115008-18.432 44.372992-27.648 75.776-27.648 31.403008 0 56.32 9.216 74.752 27.648 18.432 18.432 28.331008 41.984 29.696 70.656 0 0 0 0 0 0m-202.752 808.96c0 0 0-632.832 0-632.832 0 0 196.608 0 196.608 0 0 0 0 632.832 0 632.832 0 0-196.608 0-196.608 0 0 0 0 0 0 0m313.344-430.08c0-58.708992-1.364992-126.292992-4.096-202.752 0 0 169.984 0 169.984 0 0 0 10.24 88.064 10.24 88.064 0 0 4.096 0 4.096 0 40.96-68.267008 105.812992-102.4 194.56-102.4 68.267008 0 123.220992 22.868992 164.864 68.608 41.643008 45.739008 62.464 113.664 62.464 203.776 0 0 0 374.784 0 374.784 0 0-196.608 0-196.608 0 0 0 0-350.208 0-350.208 0-91.476992-33.451008-137.216-100.352-137.216-47.787008 0-81.236992 24.576-100.352 73.728-4.096 8.192-6.144 24.576-6.144 49.152 0 0 0 364.544 0 364.544 0 0-198.656 0-198.656 0 0 0 0-430.08 0-430.08 0 0 0 0 0 0"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
