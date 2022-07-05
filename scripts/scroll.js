


function scrl(element) {
     document.getElementById(element).scrollIntoView({
         behavior: 'smooth'
     });
}

function Scrolling() {
    console.log('123')
    let socials = document.getElementById('socials')

    socials.style.transform = 'translateY(-20px)'
}


window.addEventListener('scroll',()=>{
    let socials = document.getElementById('socials')
    socials.style.transform = `translateY(${this.scrollY}px)`
})