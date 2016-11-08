;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-Facebook" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M721.3363 62.2121v144.75673600000002c0 0-106.708-10.6342-133.4241 30.2684-14.6125 22.3375-5.9402 87.7865-7.2305 134.782h141.517824c-11.9521 54.9386-20.5261 92.2051-29.3222 139.7627H579.88608v449.733632H383.826944c0.041-138.6506-0.0276-300.3945 0-447.9775h-83.424256V372.01919999999996H382.9073920000001c4.226-103.4711 5.8317-205.9796 57.217-258.176C497.8903 55.1731 552.9805 62.2121 721.3363 62.2121"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-suo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M779.776 387.264l-57.92 0L721.856 274.56c0-115.712-94.208-209.792-209.792-209.792-115.584 0-209.664 94.08-209.664 209.792l0 112.704L244.352 387.264c-28.288 0-51.264 22.976-51.264 51.2l0 469.632c0 28.224 22.912 51.136 51.264 51.136l535.36 0c28.224 0 51.136-22.848 51.136-51.136L830.848 438.464C830.848 410.24 808 387.264 779.776 387.264zM355.904 274.56c0-86.08 70.016-156.096 156.096-156.096s156.16 70.016 156.16 156.096l0 112.704-312.32 0L355.84 274.56z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tubiao15" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M913.6 434.688l-324.48 0L589.12 110.336c0-42.688-34.496-46.4-77.248-46.4-42.56 0-77.184 3.584-77.184 46.4l0 324.352L110.336 434.688C67.584 434.688 64 469.312 64 511.936c0 42.624 3.584 77.312 46.336 77.312l324.352 0 0 324.352c0 42.688 34.624 46.464 77.184 46.464 42.752 0 77.248-3.776 77.248-46.464L589.12 589.248l324.48 0C956.288 589.248 960 554.56 960 511.936 960 469.312 956.288 434.688 913.6 434.688z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M582.838372 830.884724c0 61.73504 50.052976 111.788016 111.788016 111.788016s111.788016-50.052976 111.788016-111.788016-50.052976-111.788016-111.788016-111.788016S582.838372 769.149685 582.838372 830.884724zM694.627411 774.990716c30.867008 0 55.894008 25.027 55.894008 55.894008 0 30.868031-25.027 55.894008-55.894008 55.894008-30.868031 0-55.894008-25.025976-55.894008-55.894008C638.732379 800.017716 663.759379 774.990716 694.627411 774.990716zM303.368332 663.202701c-30.868031 0-55.894008-25.025976-55.894008-55.894008l642.782625-55.894008c0 0 83.841523-338.858638 83.841523-363.311563 0-15.445784-12.500709-27.947516-27.947516-27.947516L247.473301 160.155606l0-55.894008 27.947516 0c15.445784 0 27.947516-12.500709 27.947516-27.947516 0-15.421224-12.500709-27.947516-27.947516-27.947516L107.738793 48.366567c-15.446807 0-27.947516 12.526291-27.947516 27.947516 0 15.446807 12.500709 27.947516 27.947516 27.947516l83.841523 0 0 503.047094c0 61.73504 50.052976 111.788016 111.788016 111.788016l55.894008 0 335.36507 0 251.523547 0c0.873903 0 0-27.700899 0-55.894008L303.368332 663.202701 303.368332 663.202701zM247.473301 216.049614 918.203442 216.049614l-71.450309 285.856493-599.279832 49.507554L247.473301 216.049614 247.473301 216.049614zM247.473301 830.884724c0 61.73504 50.052976 111.788016 111.788016 111.788016S471.049333 892.619764 471.049333 830.884724s-50.052976-111.788016-111.788016-111.788016C297.5273 719.096708 247.473301 769.149685 247.473301 830.884724zM359.26234 774.990716c30.867008 0 55.894008 25.027 55.894008 55.894008 0 30.868031-25.027 55.894008-55.894008 55.894008-30.868031 0-55.894008-25.025976-55.894008-55.894008C303.368332 800.017716 328.394309 774.990716 359.26234 774.990716z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M996.640885 111.833041c0 0-30.101575 13.741979-50.898227 21.444405-20.796652 7.695263-48.712445 15.397688-48.712445 15.397688S786.898931 13.132088 626.856911 93.523023 518.596232 355.190605 518.596232 355.190605s-136.582725 4.730745-298.194496-77.236082S19.565615 121.923864 19.565615 121.923864s-25.101701 44.138266-14.121626 126.106116c10.987239 81.96785 88.177272 187.42774 88.177272 187.42774l-92.882434-37.679158c0 0 4.705162 52.016701 40.794102 105.610316S204.715475 624.762203 204.715475 624.762203l-120.818693 1.576915c0 0 10.981099 25.219381 54.915727 67.780733 43.934628 42.561351 166.317956 80.390935 166.317956 80.390935s-86.071308 60.556191-145.920394 83.544765c-59.85011 22.988574-153.766083 28.374234-153.766083 28.374234s139.860375 87.425142 354.602204 66.203818c214.747969-21.215184 362.572736-122.041544 476.991672-290.034653 114.411773-167.999249 103.555517-386.195759 103.555517-386.195759s12.525268-14.468526 42.920532-42.469254c30.389124-28.000728 39.747259-41.756009 39.747259-41.756009l-75.940576 8.088212L996.640885 111.833041z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-bijibendiannaolaptop107" viewBox="0 0 1502 1024">'+
      ''+
      '<path d="M0 955.733333c0 68.266667 66.286933 68.266667 66.286933 68.266667l1367.108267 0c0 0 68.471467 0 68.471467-68.266667s-68.471467-68.266667-68.471467-68.266667L66.286933 887.466667C66.286933 887.466667 0 887.466667 0 955.733333zM580.266667 921.6l273.066667 0c0 0 34.133333 0 34.133333 34.133333s-34.133333 34.133333-34.133333 34.133333l-273.066667 0c0 0-34.133333 0-34.133333-34.133333S580.266667 921.6 580.266667 921.6z"  ></path>'+
      ''+
      '<path d="M1433.6 819.2 1433.6 136.533333c0-136.533333-136.533333-136.533333-136.533333-136.533333L204.8 0c0 0-136.533333 0-136.533333 136.533333l0 682.666667 68.266667 0 6.212267 0L136.533333 136.328533C136.533333 74.478933 210.261333 68.266667 210.261333 68.266667l1079.978667 0C1290.171733 68.266667 1365.333333 74.478933 1365.333333 136.328533L1365.333333 819.2 1433.6 819.2z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfontwancheng" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.502985 1023.998751C230.17522 1023.998751 0 793.823532 0 512.50201 0 231.174244 230.17522 0.999024 511.502985 0.999024 792.824507 0.999024 1022.999727 231.174244 1022.999727 512.50201 1022.999727 793.823532 792.824507 1023.998751 511.502985 1023.998751L511.502985 1023.998751ZM511.502985 64.935337C262.146498 64.935337 63.936312 263.145522 63.936312 512.50201 63.936312 761.857249 262.146498 960.062439 511.502985 960.062439 760.858224 960.062439 959.063415 761.857249 959.063415 512.50201 959.063415 263.145522 760.858224 64.935337 511.502985 64.935337L511.502985 64.935337Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-in" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M351.3 830.566l-136.533 0 0-455.1 136.533 0 0 455.1zM851.899 830.566l-136.533 0 0-243.132c0-63.351-22.562-94.891-67.311-94.891-35.465 0-57.924 17.647-69.222 53.009 0 57.446 0 284.979 0 284.979l-136.533 0c0 0 1.809-409.6 0-455.1l107.759 0 8.329 91.034 2.833 0c27.989-45.5 72.738-76.356 134.076-76.356 46.66 0 84.378 12.971 113.186 45.568 28.979 32.631 43.418 76.425 43.418 137.899l0 256.99zM353.553 261.7c0 37.717-31.573 68.267-70.554 68.267s-70.554-30.549-70.554-68.267c0-37.717 31.573-68.267 70.554-68.267 38.946 0 70.554 30.549 70.554 68.267z"  ></path>'+
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
