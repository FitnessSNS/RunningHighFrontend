export const Record = () => {
  const width = 375;
  let height = 0;
  let streaming = false;

  let video = null;
  let canvas = null;
  let photo = null;
  let btnPhoto = null;

  let afterPhoto = null;

  function startRecord() {
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    btnPhoto = document.getElementById("btnPhoto");

    afterPhoto = document.querySelector(".afterPhoto");
    afterPhoto.style.display = "none";

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        alert("브라우저의 카메라를 허용해주세요");
      });

    video.addEventListener(
      "canplay",
      (ev) => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      },
      false
    );

    btnPhoto.addEventListener(
      "click",
      (ev) => {
        takepicture();
        ev.preventDefault();
      },
      false
    );

    clearphoto();
  }

  function clearphoto() {
    const context = canvas.getContext("2d");
    context.fillStyle = "transparent";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }

  function takepicture() {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);
      const frame = document.querySelector(".frame");
      frame.style.background = "transparent";
      btnPhoto.style.display = "none";
      afterPhoto.style.display = "flex";
    } else {
      clearphoto();
    }
  }

  window.addEventListener("load", startRecord, false);

  function endRecord() {
    let process = localStorage.getItem("persist:root");
    process = JSON.parse(process);

    if (process.process !== "photo") {
      video.src = "";
      video.pause();
    }
  }

  const btnGetReward = document.getElementById("btnGetReward");
  btnGetReward.addEventListener("click", endRecord);
};
