import Image from "next/image";
import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaLinux,
  FaGit,
} from "react-icons/fa";
import { FaJava, FaPython } from "react-icons/fa6";
import {
  SiCplusplus,
  SiBlender,
  SiAmazonwebservices,
  SiRaylib,
  SiJavascript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen background">
      <div className="items-center justify-center profile">
        <div className="flex justify-center p-6">
          <Image
            src="/me.png"
            alt="Hello! This is an image of me!"
            width={500}
            height={500}
            className="justify-center rounded-xl"
          />
        </div>
        <div className="flex justify-center">
          <h1 className="font-bold text-white text-4xl mb-6">Mahanvali</h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-white text-xl mb-6 justify-center">
            Programmer & Developer
          </h1>
        </div>

        <footer className="w-full flex justify-center pb-8">
          <a href="https://github.com/Mahanvali" className="mx-4 text-white">
            <FaGithub size={30} />
          </a>
          <a
            href="https://youtube.com/@Mahanvalied"
            className="mx-4 text-white"
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahan-mohammadvali-1683362a6/"
            className="mx-4 text-white"
          >
            <FaLinkedin size={30} />
          </a>
        </footer>
      </div>
    </div>
    
  );
}

const IconGrid = () => {
  return (
    <div className="bg-neutral-900 flex items-center justify-center mt-36 mr-24">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center transition transform hover:scale-110">
          <FaJava size={40} className="text-sky-500" />
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center transition transform hover:scale-110">
          <SiCplusplus size={40} className="text-sky-500" />
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center transition transform hover:scale-110">
          <FaPython size={40} className="text-sky-500" />
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center transition transform hover:scale-110">
          <SiBlender size={40} className="text-sky-500" />
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center transition transform hover:scale-110">
          <SiAmazonwebservices size={40} className="text-sky-500" />
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center transition transform hover:scale-110">
          <FaLinux size={40} className="text-sky-500" />
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center transition transform hover:scale-110">
          <VscVscode size={40} className="text-sky-500" />
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center transition transform hover:scale-110">
          <FaGit size={40} className="text-sky-500" />
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 flex items-center justify-center transition transform hover:scale-110">
          <SiRaylib size={40} className="text-sky-500" />
        </div>
      </div>
    </div>
  );
};

const LanguageProgressBars = () => {
  const languages = [
    {
      icon: <FaJava size={30} className="text-sky-500" />,
      name: "Java",
      progress: 80,
    },
    {
      icon: <SiCplusplus size={30} className="text-sky-500" />,
      name: "C++",
      progress: 50,
    },
    {
      icon: <FaPython size={30} className="text-sky-500" />,
      name: "Python",
      progress: 20,
    },
    {
      icon: <SiJavascript size={30} className="text-sky-500" />,
      name: "Javascript",
      progress: 5,
    },
  ];

  return (
    <div className="bg-neutral-900 p-6 rounded-lg ml-[-24px]">
      {languages.map((language, index) => (
        <div
          key={index}
          className="bg-neutral-800 p-4 rounded-lg mb-4 transition transform hover:scale-110"
        >
          <div className="flex items-center mb-2">
            {language.icon}
            <span className="ml-2 text-white">{language.name}</span>
          </div>
          <div className="w-full bg-neutral-700 rounded-full h-4">
            <div
              className="bg-sky-500 h-4 rounded-full"
              style={{ width: `${language.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
