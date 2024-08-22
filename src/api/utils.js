import axios from "axios";

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const IMAGE_UPLOAD_API = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY}`;
  const response = await axios.post(IMAGE_UPLOAD_API, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return response;
};
