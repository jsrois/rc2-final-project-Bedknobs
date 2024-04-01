import "./Entries.css";
import { Avatar, Button, Divider } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useState } from "react";
import Post from "../Post/Post";

function Entries() {
  const [uploadingImage, setUploadingImage] = useState();
  const [selectedImage, setSelectedImage] = useState("");
  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Es necesario un mensaje"),
  });
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };
  return (
    <main className="bodyContainer">
      <div className="entriesContainer">
        <section className="newEntrieContainer">
          <Avatar
            alt="username"
            src="https://cdn.pixabay.com/photo/2023/09/22/17/59/dog-8269584_640.jpg"
          />
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  className="entrieInput"
                  type="text"
                  name="content"
                  placeholder="¿Qué estás pensando?"
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-400">{formik.errors.content}</span>
                )}
              </div>
              {/* <div>
                <img src="" alt="" />
              </div> */}
              <div className="entrieOptiosContainer">
                <div className="entrieOptions">
                  <label className="imageOption">
                    <ImageIcon className="text-[var(--light-blue)]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <LocationOnIcon className="text-[var(--light-blue)]" />
                  <EmojiEmotionsIcon className="text-[var(--light-blue)]" />
                </div>
                <div className="entrieBtn">
                  <Button type="submit">PUBLICAR</Button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section>
          {[1, 2, 3, 4, 5].map(( index) => (
            <div key={index}>
              <Post />
              {index !==[1, 2, 3, 4, 5].length -1 && 
              <div className="divider">
                <Divider />
                </div> }
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Entries;
