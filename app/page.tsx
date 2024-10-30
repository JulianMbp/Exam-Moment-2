import ImgWomen from "../public/women.jpg"
import Image from "next/image"
export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-cyan-300 to-blue-900 h-screen w-screen items-center justify-center flex">
      <section className="bg-slate-950 lg:h-[60%] lg:w-[50%] rounded-3xl ">
        <dl className="rounded-3xl flex gap-10 sm:flex-col lg:flex-row">
          <Image className=" order-1 rounded-full sm:rounded-3xl lg:rounded-3xl
          h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] sm:justify-center lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  object-cover lg:object-cover shadow-2xl shadow-black" src={ImgWomen} alt="" />
          <dl className=" order-2 lg:w-[70%] text-left flex flex-col justify-center">
            <h1 className="text-2xl text-white font-serif lg:text-left ">Jess Wilson</h1>
            <p className="font-serif text-slate-50 text-opacity-60">UX Engineer</p>
            <p className=" font-serif text-sm text-slate-50 text-opacity-40">Empowering users throug captivating interfaces, turning ideas into pixel-perfect realities.</p>
            <ul className="mt-10 flex justify-left gap-12">
              <button className="font-serif text-center border rounded-3xl w-[30%] h-[130%] border-slate-50">Profile</button>
              <button className="font-serif text-center text-slate-950 border rounded-3xl w-[30%] h-[130%] bg-slate-50">Follow</button>
            </ul>
          </dl>
        </dl>
      </section>
    </main>
  );
}
