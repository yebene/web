let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove("open-menu")
    menu.classList.remove("move");
}

//Reviews Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
//Email js 
function validata() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".massage");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener('click',(e) => {
    e.preventDefault();
    if (name.velue == "" || email.value == "" || msg.velue == ""){
      emptyerror();
    } else{
      sendmail (name.velue, email.value, msg.value);
      success();
    }
  })
}
validata();

function sendmail(name,email,msg){
  emailjs.send("service_9m80ndb","template_46828mp",{
    from_name: name,
    to_name: email,
    message: msg,
    });
}

function emptyerror() {
  swal({
    title: "Oh No...",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Email sent successfull",
    text: "We try reply in 24 hours",
    icon: "Success",
  });
}

// Header Background Change On Scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
  header.classList.toggle('header-active', window.scrollY > 0)
})
// scroll top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('scroll-active', window.scrollY >= 400)
})


