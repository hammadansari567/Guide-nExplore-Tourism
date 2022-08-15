let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
  btn.onclick = () => {
      let src = btn.getAttribute('data-src');
      document.querySelector('.about .video-container .video').src = src;
  }
})


function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "hammadansari567@gmail.com",
    Password : "H100004291578749A",
    To : 'ansarimotors1@gmail.com',
    From : document.getElementById('email').value,
    Subject : "Now contact from gnetourism.com",
    Body : "And this is the body"
  }).then(
  message => alert(message)
);
}