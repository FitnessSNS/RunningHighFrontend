import axios from "axios";

type positionType = {
  longitude: number;
  latitude: number;
};

type photoType = {
  image: File;
  exerciseId: number;
};

export const runStart = async (position: positionType) => {
  try {
    const respone = await axios.post("/reward/running/start", position, {
      headers: {
        withCredentials: true,
        crossDomain: true,
        credentials: "include",
        contentType: "application/json",
      },
    });

    const accessToken = await respone.data;

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken.token}`;

    document.cookie = `rst=${accessToken.token}`;
  } catch (err) {
    console.error(err);
  }
};

export const runCheck = async (position: positionType) => {
  try {
    const response = await axios.post("/reward/running/chek", position);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const runStop = async (position: positionType) => {
  try {
    const response = await axios.post("/reward/running/stop", position);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const runEnd = async (position: positionType) => {
  try {
    const response = await axios.post("/reward/running/end", position);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const uploadPhoto = async (photo: photoType) => {
  try {
    const response = await axios.post("/reward/running/proofImage", photo);
    return response;
  } catch (err) {
    console.error(err);
  }
};
