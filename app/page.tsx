import ImgWomen from "../public/women.jpg"
import Image from "next/image"
export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-cyan-300 to-blue-900 h-screen w-screen items-center justify-center flex">
      <section className="bg-slate-950 h-[60%] w-[50%] rounded-3xl">
        <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center">
          <Image className=" order-1 rounded-full sm:rounded-3xl transition-all ease-in delay-300 md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
          h-[150px] w-[150px] sm:h-[80%] sm:w-[90%] -mt-10 
          lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  
          object-cover lg:object-cover shadow-2xl shadow-black" src={ImgWomen} alt="" />
          <dl className=" order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-2xl text-white font-serif lg:text-left ">Jess Wilson</h1>
            <p className="font-serif text-slate-50 text-opacity-60">UX Engineer</p>
            <p className=" font-serif text-sm text-slate-50 text-opacity-40">Empowering users throug captivating interfaces, turning ideas into pixel-perfect realities.</p>
            <ul className="mt-10 flex lg:justify-start justify-center gap-3  lg:gap-8">
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black hover:bg-indigo-50 duration-300 font-serif text-center border h-12 rounded-3xl w-[40%]  lg:h-10 border-slate-50">Profile</button>
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-slate-950 hover:border duration-300 font-serif text-center text-slate-950 w-[40%] rounded-3xl lg:h-10 bg-slate-50">Follow</button>
            </ul>
          </dl>
        </dl>
      </section>
    </main>
  );
}
