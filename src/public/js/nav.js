const iconNav = document.querySelector('.nav__items-icons')

iconNav.addEventListener('click', () => {
    document.querySelector('.container-links').classList.toggle('container-links-active')
})