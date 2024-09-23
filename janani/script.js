function isAppleDevice() {
    const userAgent =
      navigator.userAgent || navigator.vendor || window.opera;
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return true;
    }
  
    if (/Macintosh|Mac OS X/.test(userAgent)) {
      return true;
    }
  
    return false;
  }

alert("here's is the details about janani")
  const isApple = isAppleDevice();
  // document.addEventListener("DOMContentLoaded", function () {
  //   if (isApple) {
  //     document.getElementById("playButton").style.display = "block";
  //   }
  // });
  
//   AFRAME.registerComponent("mytarget", {
//     init: function () {
//       const showInfo = () => {
//         const websiteBtn = document.querySelector("#website-button");
//         websiteBtn.addEventListener("click", function (evt) {
//           window.location.href = "https://avrswarnamahal.com/";
//         });
//       };
//       var video = document.querySelector("#video");
//       video.pause();
//       const userInstruction=document.querySelector(".user-instruction");
  
//       this.el.addEventListener("targetFound", (event) => {
//         if (isApple) {
//           document.getElementById("playButton").style.display = "block";
//           userInstruction.style.display = "none";
//         } else {
//           userInstruction.style.display = "none";
//           video.play();
//           setTimeout(() => {
//             showInfo();
//           }, 300);
//         }
//       });
  
//       this.el.addEventListener("targetLost", (event) => {
//         userInstruction.style.display = "block";
  
//         video.pause();
//       });
//     },
//   });
  
//   function playVideo() {
//     var video = document.querySelector("#video");
//     video.muted = false;
//     video.play();
//     const websiteBtn = document.querySelector("#website-button");
//     websiteBtn.addEventListener("click", function (evt) {
//       window.location.href = "https://avrswarnamahal.com/";
//     });
  
//     document.getElementById("playButton").style.display = "none";
//   }
