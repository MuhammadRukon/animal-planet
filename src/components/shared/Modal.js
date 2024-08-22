import { createAnimal, createCategories } from "@/api";
import { uploadImage } from "@/api/utils";
import React, { useState } from "react";

const Modal = ({ setIsOpen, info, setRefetch }) => {
  const [categoryId, setCategoryId] = useState("");
  // modal close
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    // name validation
    if (!name) {
      alert("please enter name");
      return;
    }

    if (info.type == "animal") {  // for animal
      const image = e.target.image.files[0];
      // image validation
      if (!image) {
        alert("please upload image");
        return;
      }
      // category validation
      if (!categoryId) {
        alert("please select valid category");
        return;
      }
      // upload image
       const res = await uploadImage(image);
        // create object
        const data = {
          name,
          categoryId,
          imgURL : res.data.data.display_url,
        }
        console.log(data);
      // post api for animal creation
      const response = await createAnimal(data);
      console.log(response);
    } else { // for category
      try {
        const response = await createCategories({ name });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    setRefetch((val) => !val);
    handleCloseModal();
  };
  return (
    <div className="absolute text-lg z-30  flex justify-center items-center top-0 left-0 h-[100vh] w-full bg-black/70 text-black">
      <form
        className="px-6 py-9 relative space-y-5 w-[352px] bg-white rounded-3xl"
        onSubmit={handleSubmit}
      >
        <h3>{info.title}</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            className="bg-[#F2F2F2] w-full px-4 py-2 rounded-lg"
            placeholder={info.placeholderText}
          />
          {info.type == "animal" && (
            <>
              <select
                onChange={(e) => setCategoryId(e.target.value)}
                className="focus:outline-none capitalize px-3 py-2 w-full bg-[#F2F2F2] rounded-lg"
              >
                <option value="">Select Category</option>
                {info.categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <input
                type="file"
                name="image"
                className="bg-[#F2F2F2] w-full px-4 py-2 rounded-lg"
                accept="image/*"
              />
            </>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black py-[14px] rounded-lg text-white"
        >
          {info.buttonText}
        </button>
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-6 font-bold"
          type="button"
        >
          x
        </button>
      </form>
    </div>
  );
};

export default Modal;
