$().ready(function () {
  const btnMobileToggle = document.querySelector('.page-header .btn-mobile-toggle')
  const btnToggle = document.querySelector('.page-header .btn-toggle')

  btnMobileToggle.addEventListener('click', event => {
    event.preventDefault()

    btnMobileToggle.closest('.page-wrapper').classList.remove('sidebar-hidden')
    btnMobileToggle.closest('.page-wrapper').classList.toggle('sidebar-mobile-show')
  })

  btnToggle.addEventListener('click', event => {
    event.preventDefault()

    btnToggle.closest('.page-wrapper').classList.remove('sidebar-mobile-show')
    btnToggle.closest('.page-wrapper').classList.toggle('sidebar-hidden')
  })
})