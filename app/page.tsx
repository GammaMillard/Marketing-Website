import Image from "next/image";
import BtnLink from "./components/BtnLink";

export default function Home() {
  return (
    <main className="">

      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-4 text-white">
          <p className="text-3xl">Taste in every healthy sip</p>
          <p className="text-lg">For a natural energy drink, a stewburry smoothie, juicer then your </p>
        </div>
        <img className="relative" width={600} height={800} alt="Orange Juice Image" src={'/orange.png'} />
      </div>
      <div className="absolute flex z-20 left-0 bottom-0 gap-12 px-24 py-4 bg-red-soft rounded-tr-3xl">
        <BtnLink name={'Instagram'} url={''}/>
        <BtnLink name={'Facebook'} url={''}/>
        <BtnLink name={'Linkedin'} url={''}/>
       
      </div>
    </main>
  )
}
