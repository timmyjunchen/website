import React from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import {
  SiJava, SiPython, SiCplusplus, SiTypescript,
  SiHtml5, SiCss3, SiReact, SiNodedotjs,
  SiFlask, SiGit, SiLinux, SiDocker,
  SiGooglecloud, SiAmazonaws, SiVisualstudiocode,
  SiFirebase, SiPytorch, SiScikitlearn,
  SiPandas, SiNumpy,
} from 'react-icons/si';

const AboutSection = () => {
  // Prepare icons for marquee
  const skillIcons = [
    { name: 'Java', icon: <SiJava size={36} /> },
    { name: 'Python', icon: <SiPython size={36} /> },
    { name: 'C++', icon: <SiCplusplus size={36} /> },
    { name: 'TypeScript', icon: <SiTypescript size={36} /> },
    { name: 'HTML5', icon: <SiHtml5 size={36} /> },
    { name: 'CSS3', icon: <SiCss3 size={36} /> },
    { name: 'React', icon: <SiReact size={36} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={36} /> },
    { name: 'Flask', icon: <SiFlask size={36} /> },
    { name: 'Git', icon: <SiGit size={36} /> },
    { name: 'Linux', icon: <SiLinux size={36} /> },
    { name: 'Docker', icon: <SiDocker size={36} /> },
    { name: 'GCP', icon: <SiGooglecloud size={36} /> },
    { name: 'AWS', icon: <SiAmazonaws size={36} /> },
    { name: 'VS Code', icon: <SiVisualstudiocode size={36} /> },
    { name: 'Firebase', icon: <SiFirebase size={36} /> },
    { name: 'PyTorch', icon: <SiPytorch size={36} /> },
    { name: 'Scikit-Learn', icon: <SiScikitlearn size={36} /> },
    { name: 'Pandas', icon: <SiPandas size={36} /> },
    { name: 'NumPy', icon: <SiNumpy size={36} /> },
  ];
  const slidingIcons = [...skillIcons, ...skillIcons];

  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      {/* Top row: bio + button and avatar */}
      <div className="mt-6 flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Bio and download button */}
        <div className="flex-1">
          <p className="text-justify">
            I am a senior studying Computer Science at Cornell University passionate
            about building large scale software solutions and generally solving complex problems.
            My expertise lies in full-stack engineering, machine learning, and cloud infrastructure development,
            with experience in React, Java, and Python. I have hands-on experience with full-stack
            and machine learning through working for GradeWiz (YC W23),
            and cloud infrastructure with Amazon Web Services, specifically Cloudformation.
            As an engineer, I love to learn new technologies and collaborate with knowledgeable teammates on novel problems.
            Feel free to explore my portfolio, latest projects, or reach out for collaborations and opportunities!
          </p>
          <a
            href="/Timmy_Resume.pdf"
            download="Timmy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4">Download CV</Button>
          </a>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="overflow-hidden rounded-full w-52 h-52 mr-16 ml-16">
            <Image
              src="/images/avatar/me.png"
              width={176}
              height={176}
              alt="avatar"
            />
          </div>
        </div>
      </div>

      {/* Marquee below rows, centered, 2/3 width */}
      <div className="mt-8 overflow-hidden w-2/3 mx-auto">
        <div className="flex space-x-6 animate-marquee" style={{ width: 'max-content' }}>
          {slidingIcons.map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="flex flex-col items-center">
              {item.icon}
              <span className="sr-only">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Local styles for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default AboutSection;