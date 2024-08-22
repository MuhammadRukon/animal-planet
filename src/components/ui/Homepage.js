"use client";
import { useEffect, useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import Modal from "../shared/Modal";
import { infoAnimal, infoCategory } from "@/assets/info";
import { getCategories } from "@/api";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [categories, setCategories] = useState([]);
  const [refetch, setRefetch] = useState(false)

  const handleModalOpen = (type) => {
    type == "animal" ? setInfo(infoAnimal) : setInfo(infoCategory);
    setIsOpen(true);
  };

  useEffect(() => {
    (async function () {
      const response = await getCategories();
      setCategories(response.data.response)
    })();
  }, [refetch]);
  return (
    <>
      <div
        className={`bg-black duration-200 transition-all h-[100vh] p-10 lg:p-32 text-white ${
          isOpen ? "blur-md" : ""
        }`}
      >
        {/* buttons section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* right section */}
          <div className="w-full md:w-2/3 flex flex-wrap gap-4">
            {categories?.length > 0 && categories.map(category=><Button btnName={category.name} type={"category"}/>)}
          </div>
          {/* left section */}
          <div className="w-full md:w-1/3 flex flex-wrap justify-end gap-4">
            <Button
              btnName={"Add Animal"}
              handleClick={() => handleModalOpen("animal")}
            />
            <Button
              btnName={"Add Category"}
              handleClick={() => handleModalOpen("category")}
            />
          </div>
        </div>

        {/* cards section */}
        <div className="mt-10 md:mt-16">
          <Card />
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} info={info} setRefetch={setRefetch}/>}
    </>
  );
};

export default Homepage;
