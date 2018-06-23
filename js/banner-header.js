var bannerHeader = (function () {
  // category pannel function
  // mouseIn: boolean type
  function categoryHover (cate, mouseIn) {
    if (mouseIn) {
      cate.style.visibility = 'visible'
      cate.style.opacity = 1
      cate.style.transform = 'translateY(-0.28rem)'
    } else {
      cate.style.visibility = 'hidden'
      cate.style.opacity = 0
      cate.style.transform = 'translateY(0)'
    }
  }
  
  // click burger icon, show sidebar
  var burgerIconClick = function () {
    var burgerContainer = document.querySelector('.burger-icon')
    var sideBar = document.querySelector('.sidebar .sidebar-menu')
    burgerContainer.onclick = function () {
      var burgerIcon = burgerContainer.querySelector('i')
      if (burgerIcon.classList.contains('fa-bars')) {
        burgerIcon.style.transform = 'rotate(-180deg)'
        burgerIcon.classList.remove('fa-bars')
        burgerIcon.classList.add('fa-times')
        burgerIcon.style.transform = 'rotate(180deg)'
        sideBar.style.transform = 'translateX(100%)'
        sideBar.style.visibility = 'visible'
        sideBar.style.opacity = 1
      } else {
        burgerIcon.style.transform = 'rotate(180deg)'
        burgerIcon.classList.remove('fa-times')
        burgerIcon.classList.add('fa-bars')
        burgerIcon.style.transform = 'rotate(-180deg)'
        sideBar.style.transform = 'translateX(-100%)'
        sideBar.style.visibility = 'hidden'
        sideBar.style.opacity = 0
      }
    }
  }

  // click search button, show input
  var searchIconClick = function () {
    var searchContainer = document.querySelector('.search-icon')
    var searchBar = document.querySelector('.searchbar')
    var timer = null
    searchContainer.onclick = function () {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(function () {
        var searchIcon = searchContainer.querySelector('i')
        if (searchIcon.classList.contains('fa-search')) {
          searchBar.style.visibility = 'visible'
          searchBar.style.opacity = 1
          searchIcon.classList.remove('fa-search')
          searchIcon.classList.add('fa-times')
        } else {
          searchBar.style.visibility = 'hidden'
          searchBar.style.opacity = 0
          searchIcon.classList.remove('fa-times')
          searchIcon.classList.add('fa-search')
        }
      }, 100)
    }
  }

  // page scroll down, the banner header stick at top
  var scrollHeader = function () {
    var bannerHeader = document.querySelector('.banner-header')
    var sideBar = document.querySelector('.sidebar')
    var category = document.querySelector('.category')
    var timer = null
    if (timer) {
      clearTimeout(timer)
    }
    
    timer = setTimeout(function () {
      window.onscroll = function () {
        if (window.pageYOffset > 70) {
          if (!bannerHeader.classList.contains('scroll')) {
            bannerHeader.classList.add('scroll')
            sideBar.classList.add('scroll')
            category.classList.add('scroll')
          }
        } else {
          if (bannerHeader.classList.contains('scroll')) {
            bannerHeader.classList.remove('scroll')
            sideBar.classList.remove('scroll')
            category.classList.remove('scroll')
          }
        }
      }
    }, 100)
  }

  // hover on first item and last item in sidebar, show category and other info
  var hoverSidebarItem = function () {
    var sidebarChildren = document.querySelector('.sidebar .sidebar-menu').children
    var firstItem_Sidebar = sidebarChildren[0]
    var lastItem_Sidebar = sidebarChildren[sidebarChildren.length - 1]
    var category = document.querySelector('.category')
    firstItem_Sidebar.onmouseover = function () {
      categoryHover(category, true)
      category.onmouseover()
    }
    category.onmouseover = function () {
      categoryHover(this, true)
      firstItem_Sidebar.classList.add('onhover')
    }
    firstItem_Sidebar.onmouseleave = function () {
      categoryHover(category, false)
      if (category.style.visibility === 'hidden') {
        category.onmouseleave()
      } else {
        category.onmouseover()
      }
    }
    category.onmouseleave = function () {
      categoryHover(this, false)
      firstItem_Sidebar.classList.remove('onhover')
    }
  }
  var init = function () {
    burgerIconClick()
    searchIconClick()
    scrollHeader()
    hoverSidebarItem()
  }


  return init
}())