import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Clint Edward</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experinces and quite
              proficient i various programming languages and technologies.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8 ">
            <a
        href="https://drive.google.com/drive/folders/1fshMQ30VgNcO7JISCpxaOR2R8DVvMUwV?usp=sharing" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2 pt-4 pb-4"
        >
          <span>Download CV</span>
          <FiDownload className="text-xl" />
        </Button>
      </a>
              <Social />
              
            </div>
       
          </div>
          <div className="mb-8 xl:mb-0 order-1 xl:order-none">
            <Photo /> 
          </div>
          
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
