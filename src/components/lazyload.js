export default (Vue, Options = {}) => {
  if (!Array.prototype.remove) {
    Array.prototype.remove = function (item) {
      if (!this.length) return
      var index = this.indexOf(item)
      if (index > -1) {
        this.splice(index, 1)
        return this
      }
    }
  }

  var init = {
    lazyLoad: false,
    default: 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png'
  }

  var listeners = [];
  var imageCache = [];

  const onListen = (ele, bind) => {
    if (bind) {
      ele.addEventListener('scroll', render)
    } else {
      init.lazyLoad = false
      ele.removeEventListener('scroll', render)
    }
  }

  const render = () => {
    for (var i=0; i<listeners.length; i++) {
      checkCanShow(listeners[i])
    }
  }

  const setEleSrc = (ele, imgSrc) => {
    ele.src = imgSrc
    ele.style.opacity = 1
    ele.nextElementSibling.style.display = 'block'
    ele.setAttribute('load', 'success')
  }

  const alreadyLoad = (ele, imgSrc) => {
    if (imageCache.indexOf(imgSrc) > -1) {
      setEleSrc(ele, imgSrc)
      return true
    }
    return false
  }

  const checkCanShow = (item) => {
    var ele = item.ele
    var top = ele.getBoundingClientRect().top
    if (top + 10 < window.innerHeight) {
      loadImgAsync(item, (ele, imgSrc) => {
        setEleSrc(ele, imgSrc)
        imageCache.push(imgSrc)
      }, (e) => {
        console.log('image load fail')
      })
      return true 
    }
    return false
  }

  const loadImgAsync = (item, resolve, reject) => {
    var img = new Image()
    img.src = item.imgSrc
    img.onload = () => {
      resolve(item.ele, item.imgSrc)
    }
    img.onerror = (e) => {
      reject(e)
    }
    listeners.remove(item)
  }

  const addListener = (ele, binding) => {
    var imgSrc = binding.value
    ele.nextElementSibling.style.display = 'none'
    ele.setAttribute('load', 'fail')
    if (alreadyLoad(ele, imgSrc)) {
      return false
    }
    var item = {
      ele: ele,
      imgSrc: imgSrc
    }
    ele.src = init.default

    if (checkCanShow(item)) {
      return false
    }
    listeners.push(item)
    if (!init.lazyLoad) {
      init.lazyLoad = true
      onListen(window, true)
    }
  }

  Vue.directive('lazyload', {
    inserted: addListener,
    update: addListener
  })
}