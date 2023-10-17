//set Heigth banner
const bannerImg = document.getElementById('banner-img');
if (bannerImg) {
  let widthBanner = bannerImg.offsetWidth;
  bannerImg.style.height = widthBanner + 'px';
  window.addEventListener('resize', () => {
    const widthBanner = bannerImg.offsetWidth;
    bannerImg.style.height = widthBanner + 'px';
  })
}

//hidden
const searchInput = document.getElementById('input-search')
searchInput.addEventListener('focus', () => {
  document.getElementsByClassName('span-search').style.display = 'none'
})

//click-menu
const menu = document.querySelectorAll('.menu-custom')
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', () => {
    const check = menu[i].querySelector('.d-none');
    if (check) {
      menu[i].querySelector('.sub-menu-custom').classList.remove('d-none')
    }
    else {
      menu[i].querySelector('.sub-menu-custom').classList.add('d-none')
    }

  })
}
