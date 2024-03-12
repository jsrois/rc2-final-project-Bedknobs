import { Avatar, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useState } from "react";

function Entries() {
  const [uploadingImage, setUploadingImage] = useState();
  const [selectedImage, setSelectedImage] = useState("");
  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Un mensaje es requerido"),
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
    <>
      <section>
        <div>
          <Avatar
            alt="username"
            src="https://cdn.pixabay.com/photo/2023/09/22/17/59/dog-8269584_640.jpg"
          />
          <div>
            <form>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="¿Qué estás pensando?"
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              {/* <div>
                <img src="" alt="" />
              </div> */}
              <div>
                <div>
                  <label>
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
                <div>
                  <Button>
                    PUBLICAR
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Entries;
