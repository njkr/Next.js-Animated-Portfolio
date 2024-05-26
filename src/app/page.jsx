import { PageWrapper } from "@/components/util";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex h-full flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image cont  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        {/* text cont */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-black">
          {/* title  */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* desc  */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and
            creativityconverge. With a keen eye for aesthetics and a mastery of
            code, my portfolio showcases a diverse cot lection of projects that
            reflect my commitment to excellence.
          </p>
          {/* button  */}
          <div className=" lg:w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
