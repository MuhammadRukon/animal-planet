import Image from "next/image";

const Card = ({ info }) => {
  console.log(info);
  return (
    <div className="w-[131px] text-center">
      <div className="py-[50px] px-[18px] rounded-lg bg-[#050505] border border-[#141414]">
        <Image 
          src={info?.imgURL} 
          alt="card-image" 
          height={100}
          width={75}
          className="bg-contain h-[75px] mx-auto" 
        />
      </div>
      <p className="text-center text-lg mt-[14px]">{info?.name}</p>
    </div>
  );
};

export default Card;
