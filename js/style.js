$('.owl-carousel').owlCarousel({
    margin:30,
    loop:true,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:2000,
    items:6,
   responsive:{
        0:{
            items:1,
            
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false
        }
    }
})
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})