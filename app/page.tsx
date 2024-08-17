import Image from "next/image";
import { FaGithub, FaYoutube, FaLinkedin, FaLinux, FaGit } from 'react-icons/fa';
import { FaJava, FaPython } from "react-icons/fa6";
import { SiCplusplus, SiBlender, SiAmazonwebservices, SiRaylib, SiJavascript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-row items-start">
      <div className="ml-12">
          <p className="font-mono text-xl mb-2 text-white max-w-md mb-24 mt-8">
            Inspired By <a href="https://loom4k.me" className="font-bold text-green-500">loom4k.me</a>
          </p>
        <h1 className="text-5xl font-mono mb-2 text-white max-w-md">
          Mahan Mohammadvali
        </h1>

        <p className="text-2xl mb-12 text-white font-mono">
          aka <span className="font-bold text-sky-500">Mahanvali</span>
        </p>

        <p className="text-white max-w-md font-mono">
          Hi! I&apos;m a 14 year old self taught software developer based in Iran 🇮🇷. I&apos;ve been programming 
          since 2020 and I&apos;m currently working
          with <span className="font-bold text-blue-500 text-lg">C++</span> and <span className="font-bold text-orange-500 text-lg">Java </span>
          I love making and contributing to open source projects, check out my <a href="https://github.com/Mahanvali" className="font-bold text-sky-500"> GitHub</a>! I love math and
          I also enjoy making <a href="https://youtube.com/@Mahanvalied" className="font-bold text-sky-500"> Youtube</a> videos related to programming!
        </p>

        <div className="mt-48 mb-36 font-mono">
          <LanguageProgressBars/>
        </div>

        <h2 className="font-mono text-6xl text-white max-w-lg mb-16">
          Not coding<span className="text-sky-500">?</span> 
        </h2>
        
        <p className="font-mono text-white max-w-md mb-4">
          If I&apos;m not coding, I&apos;m most likely <span className="text-sky-500 text-lg">biking</span> 🚴 to take care of myself,
          playing <span className="text-sky-500 text-lg">balatro</span> 🃏 or <span className="text-sky-500 text-lg">chess</span> ♟️,
          watching a <span className="text-sky-500 text-lg">youtube</span> 📺 video for entertainment or information,
          3d modelling using <span className="text-sky-500 text-lg">blender</span> 🧊,
          or <span className="text-sky-500 text-lg">studying</span> 📖 for an exam.
        </p>

        <p className="text-white max-w-md font-mono">
        Coding can be distracing and stressful at times, and it&apos;s always
        important to take care of your physical and mental health.
        </p>

        <footer className="w-full bg-neutral-900 ml-96 flex justify-center mt-64 mb-6">
        <a href="https://github.com/Mahanvali" className="mx-4 text-white">
          <FaGithub size={30} />
        </a>
        <a href="https://youtube.com/@Mahanvalied" className="mx-4 text-white">
          <FaYoutube size={30} />
        </a>
        <a href="https://www.linkedin.com/in/mahan-mohammadvali-1683362a6/" className="mx-4 text-white">
          <FaLinkedin size={30} />
        </a>
      </footer>
        

      </div>
      

      <div className="ml-24 mt-20">
        <Image
          src="/IMG_6388.JPG"
          alt="Hello! This is an image of me!"
          width={600}
          height={600}
          className="ml-auto rounded-xl transition transform hover:scale-110"
        />
        <div className="mt-36 ml-20 mb-64">

        <h2 className="font-mono text-6xl text-white mt-44 max-w-lg mb-12">
          How did I get here<span className="text-sky-500">?</span> 
        </h2>

        <p className="font-mono text-white max-w-md">
          I was lucky enough to have grown up using computers 
          and during 2020, when the pandemic had started, 
          I got extremely bored and decided to start watching programming tutorials on YouTube. 
          I started off by using <span className="font-bold text-yellow-500 text-lg">Javascript</span> to make <span className="font-bold text-sky-500 text-lg">Discord Bots</span> in my free time.
          Later, when I started using <span className="font-bold text-sky-500 text-lg">Linux</span>, I discovered a deep interest in software development
          and eventually math in high school! I&apos;m extremely passionate about learning and studying, and have been dedicating all my efforts to
          getting into an amazing college.
          </p>

          {/* <h2 className="font-mono text-6xl ml-8 text-white mt-32 max-w-lg">
            Tech Stack
          </h2> */}

          <IconGrid />

        </div>
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
          <SiRaylib size={40} className="text-sky-500"/>
        </div>
      </div>
    </div>
  );
};

const LanguageProgressBars = () => {
  const languages = [
    { icon: <FaJava size={30} className="text-sky-500" />, name: 'Java', progress: 80 },
    { icon: <SiCplusplus size={30} className="text-sky-500" />, name: 'C++', progress: 50 },
    { icon: <FaPython size={30} className="text-sky-500" />, name: 'Python', progress: 20 },
    { icon: <SiJavascript size={30} className="text-sky-500" />, name: 'Javascript', progress: 5 },
  ];

  return (
    <div className="bg-neutral-900 p-6 rounded-lg ml-[-24px]">
      {languages.map((language, index) => (
        <div key={index} className="bg-neutral-800 p-4 rounded-lg mb-4 transition transform hover:scale-110">
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


