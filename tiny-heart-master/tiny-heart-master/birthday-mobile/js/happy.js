// $(function () {
//     setTimeout(function () {
//         $('.name').animate({
//             opacity:"1",
//             top:"15%"
//         },2000);

//     },6000);
//     setTimeout(function () {
//         $('.happy').animate({
//             opacity:"1",
//             top:"-5%"
//         },2000);

//     },6000);
//     setTimeout(function () {
//         $('.button-style1').animate({
//             opacity:"1",
//             top:"70%"
//         },1500);
//         $('.button-style2').animate({
//             opacity:"1",
//             top:"85%"
//         },2000);
//     },9000);

//   // const audio = document.getElementById("bgMusic");

//   // // Khi người dùng chạm màn hình lần đầu
//   // document.addEventListener("click", function () {
//   //   audio.muted = false;
//   //   audio.play();
//   // }, { once: true });

//   const btn = document.getElementById("albumBtn");

//   let isLocked = true;

//   // Sau 5 giây mở khóa
//   setTimeout(() => {
//   isLocked = false;
//   }, 5000);

// const startBtn = document.getElementById("startBtn");
// const overlay = document.getElementById("birthdayOverlay");
// const mainContent = document.getElementById("mainContent");
// const audio = document.getElementById("bgMusic");

// startBtn.addEventListener("click", function(){

//     // phát nhạc
//     audio.muted = false;
//     audio.play();

//     // hiện nội dung
//     mainContent.style.opacity = "1";
//     mainContent.style.pointerEvents = "auto";

//     // ẩn overlay
//     overlay.style.opacity = "0";
//     overlay.style.transition = "0.8s";

//     setTimeout(()=>{
//         overlay.style.display = "none";
//     },800);
// });

//     // Chặn click khi còn bị khóa
//     btn.addEventListener("click", function(e) {
//     if (isLocked) {
//         e.preventDefault(); // chặn chuyển trang
//     }
//     });
// 	// $(window).click(function(){
// 	// 	$('audio')[0].play();
// 	// });
// 	// window.audio=$('audio')[0].play();
// })


$(function () {

  const btn = document.getElementById("albumBtn");
  const startBtn = document.getElementById("startBtn");
  const overlay = document.getElementById("birthdayOverlay");
  const mainContent = document.getElementById("mainContent");
  const audio = document.getElementById("bgMusic");

  let isLocked = true;

  // Sau 5 giây mở khóa
  setTimeout(() => {
    isLocked = false;
  }, 5000);

  // 👉 TẠO FUNCTION CHẠY ANIMATION
  function startAnimation(){

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
  }

  // 👉 CLICK START
  startBtn.addEventListener("click", function(){

      // phát nhạc
      audio.muted = false;
      audio.play();

      // hiện nội dung
      mainContent.style.opacity = "1";
      mainContent.style.pointerEvents = "auto";

      // ẩn overlay
      overlay.style.opacity = "0";
      overlay.style.transition = "0.8s";

      setTimeout(()=>{
          overlay.style.display = "none";
      },800);

      // 👉 BẮT ĐẦU CAKE ANIMATION
      document.getElementById("bizcocho_1").beginElement();

      document.getElementById("crema").addEventListener("endEvent", function() {
        document.querySelector(".velas").classList.add("show");
      });

      // 👉 CHẠY ANIMATION SAU KHI CLICK
      startAnimation();
  });

  // chặn click album 5s
  btn.addEventListener("click", function(e) {
      if (isLocked) {
          e.preventDefault();
      }
  });

});