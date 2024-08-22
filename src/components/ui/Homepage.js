"use client";
import { useEffect, useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import Modal from "../shared/Modal";
import { infoAnimal, infoCategory } from "@/assets/info";
import { getAnimals, getCategories } from "@/api";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [categories, setCategories] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [refetch, setRefetch] = useState(false)
  const [filterId, setFilterId] = useState('')
  const [filteredAnimals, setFilteredAnimals]  = useState(animals);

// modal access
  const handleModalOpen = (type) => {
    type == "animal" ? setInfo({...infoAnimal, categories}) : setInfo(infoCategory);
    setIsOpen(true);
  };
// fetch categories
  useEffect(() => {
    (async function () {
      const responseCategory = await getCategories();
      const responseAnimal = await getAnimals();
      setCategories(responseCategory.data.response)
      setAnimals(responseAnimal.data.response)
    })();
  }, [refetch]);

// filtering according to category
  useEffect(()=>{
    if(filterId){
      const filtered = animals.filter(animal => animal.categoryId === filterId);
      setFilteredAnimals(filtered)
    }else{
      setFilteredAnimals(animals)
    }
    
  },[filterId, animals])

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
            {categories?.length > 0 && categories.map(category=><Button key={category._id} handleClick={()=>setFilterId(category._id)} btnName={category.name} type={"category"}/>)}
         {categories?.length > 0 && <Button handleClick={()=>setFilterId("")} btnName={"All Animals"} type={"category"}/>}
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
        <div className="mt-10 md:mt-16 flex flex-wrap gap-x-[21px] gap-y-4">
          {filteredAnimals.length ? filteredAnimals.map(animal=><Card  info={animal}/>) : <h2>No animals.</h2>}
        </div>

      </div>
      {/* modal */}
      {isOpen && <Modal setIsOpen={setIsOpen} info={info} setRefetch={setRefetch}/>}
    </>
  );
};

export default Homepage;
