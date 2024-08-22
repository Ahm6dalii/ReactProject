import React, { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { imageDb } from "../Config";
import { setUser } from "../../../redux/reducers/userAuthSlice";
import toast, { Toaster } from "react-hot-toast";

export default function UploadImg() {
  const { user } = useSelector((state) => state.auth);
  const apiLink = useSelector((state) => state.apiLink.link);
  const { translation } = useSelector((state) => state.lang);

  const dispatch = useDispatch();

  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState([]);

  const upadeUser = async (userU) => {
    console.log(user);

    try {
      const response = await axios.patch(`${apiLink}/users/${userU.id}`, userU);
      console.log(response);

      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleClick = () => {
    if (img !== null) {
      const imgRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgRef, img).then((value) => {
        console.log(value.metadata.name);
        console.log(
          `https://firebasestorage.googleapis.com/v0/b/e-learing-6119b.appspot.com/o/files%2F${value.metadata.name}?alt=media&token=5f589c95-499f-4830-89d0-927bd7b28774`
        );
        const image = `https://firebasestorage.googleapis.com/v0/b/e-learing-6119b.appspot.com/o/files%2F${value.metadata.name}?alt=media&token=5f589c95-499f-4830-89d0-927bd7b28774`;
        toast.success(translation.userUpdated);
        dispatch(setUser({ ...user, image }));
        console.log({ ...user, image });
        upadeUser({ ...user, image });
        setTimeout(() => {
          document.getElementById("upload").close();
        }, 500);
      });
    }
  };

  const [fileName, setFileName] = useState(translation?.noFile&&'No file chosen');

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(translation?.noFile);
    }
  };

  return (
    <>
      <div className="App">
        <input
          type="file"
          name={translation?.fileName}
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <button className="btnSecondary" onClick={handleClick}>
          {translation?.upload}
        </button>
        <br />
        {/* <div className="flex justify-evenly items-center">
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }} // Hide the actual input
        onChange={handleFileChange}
      />
      <button className="border border- p-1 " type="button" onClick={handleButtonClick}>
       {translation?.fileName}
      </button>
      <span style={{ marginLeft: '10px' }}>{fileName}</span>
      <button className="btnSecondary" onClick={handleClick}>
          {translation?.upload}
        </button>
    </div> */}
        <br />


        {imgUrl.map((dataVal) => (
          <div>
            <img src={dataVal} height="200px" width="200px" />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
