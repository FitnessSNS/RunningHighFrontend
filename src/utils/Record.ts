export const Record = () => {
  const width = 375;
  let height = 0;
  let streaming = false;

  let video: HTMLVideoElement;
  let canvas: HTMLCanvasElement;
  let photo: HTMLElement;
  let btnPhoto: HTMLElement;
  let afterPhoto: HTMLElement;

  const startRecord = () => {
    video = document.getElementById("video") as HTMLVideoElement;
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    photo = document.getElementById("photo") as HTMLElement;
    btnPhoto = document.getElementById("btnPhoto") as HTMLElement;

    afterPhoto = document.querySelector(".afterPhoto") as HTMLElement;
    afterPhoto.style.display = "none";

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video?.play();
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

          video.setAttribute("width", width.toString());
          video.setAttribute("height", height.toString());
          canvas.setAttribute("width", width.toString());
          canvas.setAttribute("height", height.toString());
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
  };

  const clearphoto = () => {
    const context = canvas.getContext("2d");
    if (context) {
      context.fillStyle = "transparent";
    }
    context?.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  };

  const takepicture = () => {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context?.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);

      btnPhoto.style.display = "none";
      afterPhoto.style.display = "flex";
    } else {
      clearphoto();
    }
  };

  window.addEventListener("load", startRecord, false);

  const endRecord = () => {
    video.src = "";
    video.pause();
    window.removeEventListener("load", startRecord);
  };

  const btnGetReward = document.getElementById("btnGetReward");
  btnGetReward?.addEventListener("click", endRecord);
};
