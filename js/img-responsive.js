var imgResponsive = (function () {
  var imgContainerResize = function () {
    var img = document.querySelectorAll('.overlay div[class$=-img] img')
    window.addEventListener('resize', function () {
      console.log('resizing')
      var timer = null
      if (timer) {
        this.clearTimeout(timer)
      }
      timer = setTimeout(function () {
        for (var i = 0; i < img.length; i++) {
          var imgContainer = img[i].parentElement.parentElement.parentElement
          imgContainer.style.height = window.getComputedStyle(img[i]).height
        }
      }, 100)
    })
  }

  return imgContainerResize
}())