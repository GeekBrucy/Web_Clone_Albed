var aboutFunc = (function () {
  var showDetail = function () {
    var showMore = document.querySelectorAll('.show-more')
    for (var i = 0; i < showMore.length; i++) {
      showMore[i].onclick = function () {
        var icon = this.querySelector('i')
        if(window.getComputedStyle(icon, null).display === 'none') {
          return
        }
        // for (var j = 0; j < showMore.length; j++) {
        //   // showMore[j].nextElementSibling.classList.remove('open')
        //   // showMore[j].children[1].classList.replace('fa-chevron-up', 'fa-chevron-down')
        //   // icon.classList.toggle('fa-chevron-down')
        //   // icon.classList.toggle('fa-chevron-up')
        // }
        // // icon.classList.replace('fa-chevron-down', 'fa-chevron-up')
        icon.classList.toggle('fa-chevron-down')
        icon.classList.toggle('fa-chevron-up')
        this.nextElementSibling.classList.toggle('open')
      }
    }
  }
  return showDetail
}())