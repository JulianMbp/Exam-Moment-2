import ImgWomen from "../public/women.jpg"
import Image from "next/image"
import ThemeSwitch from "./components/ThemeSwitch";
export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-blue-300 to-color-blue-600 dark:bg-gradient-to-tr dark:from-cyan-300 dark:to-blue-900 h-screen w-screen items-center justify-center flex">
      {/* card  */}
      <section className="dark:bg-slate-950 bg-slate-50 h-[60%] w-[50%] rounded-3xl">
        <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center">
          <Image className=" order-1 rounded-full sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
          md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
          h-[150px] w-[150px] sm:h-[80%] sm:w-[90%] -mt-10 
          lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  
          object-cover lg:object-cover shadow-2xl shadow-black" src={ImgWomen} alt="" />
          <dl className=" order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center">
            <section className="transition ease-in-out delay-150 lg:ml-36 hover:text-slate-50">
                <ThemeSwitch />
              </section>
            <h1 className="text-4xl text-slate-950 dark:text-white font-[family-name:var(--font-rebik-regular)] lg:text-left ">Jess Wilson</h1>
            <p className="font-[family-name:var(--font-rebik-regular)] text-slate-950 dark:text-slate-50 text-opacity-60">UX Engineer</p>
            <p className=" font-[family-name:var(--font-rebik-regular)] text-sm  text-slate-950 dark:text-slate-50 text-opacity-40">Empowering users throug captivating interfaces, turning ideas into pixel-perfect realities.</p>
            <ul className="mt-10 flex lg:justify-start justify-center gap-3  lg:gap-8">
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-950 hover:text-slate-950 hover:bg-slate-50 hover:border hover:border-slate-950 dark:hover:text-black dark:hover:bg-indigo-50 duration-300 font-serif text-center border h-12 rounded-3xl w-[40%]  lg:h-10 dark:border-slate-50">Profile</button>
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-950 hover:text-slate-950 hover:bg-slate-50 hover:border hover:border-slate-950 dark:hover:text-white dark:hover:bg-slate-950 dark:hover:border duration-300 font-serif text-center dark:text-slate-950 w-[40%] rounded-3xl lg:h-10 dark:bg-slate-50">Follow</button>
            </ul>
          </dl>
        </dl>
      </section>
    </main>
  );
}
