import { createCategories, } from "@/api";
import React from "react";

const Modal = ({ setIsOpen, info, setRefetch }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (info.type == "animal") {
      const image = e.target.elements.image.files["0"];
      //animal post business logic
    } else {
      try {
        const response = await createCategories({name});
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    setRefetch(val=>!val);
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
            <input
              type="file"
              name="image"
              className="bg-[#F2F2F2] w-full px-4 py-2 rounded-lg"
              accept="image/*"
            />
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
