$(function () {
    setTimeout(function () {
        $('.name').animate({
            opacity:"1",
            top:"15%"
        },2000);

    },6000);
    setTimeout(function () {
        $('.happy').animate({
            opacity:"1",
            top:"-5%"
        },2000);

    },6000);
    setTimeout(function () {
        $('.button-style1').animate({
            opacity:"1",
            top:"70%"
        },1500);
        $('.button-style2').animate({
            opacity:"1",
            top:"85%"
        },2000);
    },9000);

  const audio = document.getElementById("bgMusic");

  // Khi người dùng chạm màn hình lần đầu
  document.addEventListener("click", function () {
    audio.muted = false;
    audio.play();
  }, { once: true });

  const btn = document.getElementById("albumBtn");

  let isLocked = true;

  // Sau 5 giây mở khóa
  setTimeout(() => {
  isLocked = false;
  }, 5000);

    // Chặn click khi còn bị khóa
    btn.addEventListener("click", function(e) {
    if (isLocked) {
        e.preventDefault(); // chặn chuyển trang
    }
    });
	// $(window).click(function(){
	// 	$('audio')[0].play();
	// });
	// window.audio=$('audio')[0].play();
})