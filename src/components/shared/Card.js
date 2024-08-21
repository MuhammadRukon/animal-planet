import image from "@/assets/group.png";
const Card = ({ card }) => {
  return (
    <div className="w-fit">
      <div className="py-[50px] px-[18px] rounded-lg bg-[#050505] border border-[#141414]">
      <img className="h-[75px]" src={card?.img || image.src} alt="card-image" /> 
      </div>
      <p className="text-center text-lg mt-[14px]">{card?.name || 'Macao'}</p>
    </div>
  );
};

export default Card;
