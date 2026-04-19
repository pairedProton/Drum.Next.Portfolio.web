import { IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";


export default  function LetsCard({card,index}) {
return (
    <div className={`letSecCard letSecCard${index+1}  w-full h-full absolute flex justify-between items-center p-10 rounded-3xl bg-white`}>
  <div className="w-120 h-full  flex flex-col justify-center items-start text-primary-green  gap-6 ">
    <h3 className="text-4xl font-bold">{card.title}</h3>

    <p className="w-[80%]">
     {card.description[0]}
    </p>
    <p className="w-[80%]">
      {card.description[1]}
    </p>
    <h5 className="flex justify-center items-center gap-2 font-bold mt-10">
      <span>Read the full Post</span>
      <span>
        <IoArrowForwardOutline />
      </span>
    </h5>
  </div>
  <div className="w-110 h-full">
    <Image
      src={card.image}
      alt="Lets Understand Image"
      width={1920}
      height={1080}
      className="w-full h-full object-cover object-center rounded-2xl"
    />
  </div>
</div>
)
}
