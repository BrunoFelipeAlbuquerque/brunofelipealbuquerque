// @flow strict

import { userData } from "@/data/user-data";
import GlowCard from "../helper/glow-card";
import Image from "next/image";
import Link from "next/link";
import { BsStackOverflow, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

function HeroSection({ profile }) {

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="flex flex-col items-start justify-center rounded-lg p-3 lg:py-5 lg:px-12 bg-primary-bg h-full">
          <div className="flex w-full justify-center">
            <Image
              src={profile.avatar_url}
              width={128}
              height={128}
              alt={profile.name}
              className="rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>
          <p className="text-gray-300 text-sm lg:text-base my-4 lg:my-6 text-center">
            {profile.bio}
          </p>

          <div className="w-full flex justify-center items-center gap-5">
            <Link
              href={userData.github}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href={userData.linkedIn}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href={userData.leetcode}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={24} />
            </Link>
            <Link
              href={userData.twitter}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={24} />
            </Link>
            <Link
              href={userData.stackOverflow}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsStackOverflow size={24} />
            </Link>
          </div>

          <div className="w-full justify-center flex items-center gap-3 mt-6">
            <Link target="_blank" href={userData.resume} className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Get Resume</span>
                <MdDownload size={16} />
              </button>
            </Link>
          </div>

        </div>
        <GlowCard identifier="profile-skills">
          <div className="px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-400">const</span>
                <span className="mr-2 text-violet-400">coder</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400">{profile.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">company:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400">{profile.company}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">location:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400">{profile.location}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">followers:</span>
                <span className="text-orange-400">{profile.followers}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">following:</span>
                <span className="text-orange-400">{profile.following}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">repositories:</span>
                <span className="text-orange-400">{profile.public_repos}</span>
                <span className="text-gray-400">,</span>
              </div>

              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">languages:</span>
                <span className="text-gray-400">{`['`}</span>
                {
                  userData.languages.map((language, i) => (
                    <>
                      <span className="text-cyan-400">{language}</span>
                      {
                        i !== userData.languages.length - 1 &&
                        <span className="text-gray-400">{"', '"}</span>
                      }
                    </>
                  ))
                }
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">frameworks:</span>
                <span className="text-gray-400">{`['`}</span>
                {
                  userData.frameworks.map((framework, i) => (
                    <>
                      <span className="text-cyan-400">{framework}</span>
                      {
                        i !== userData.frameworks.length - 1 &&
                        <span className="text-gray-400">{"', '"}</span>
                      }
                    </>
                  ))
                }
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">databases:</span>
                <span className="text-gray-400">{`['`}</span>
                {
                  userData.databases.map((database, i) => (
                    <>
                      <span className="text-cyan-400">{database}</span>
                      {
                        i !== userData.databases.length - 1 &&
                        <span className="text-gray-400">{"', '"}</span>
                      }
                    </>
                  ))
                }
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">containerization:</span>
                <span className="text-gray-400">{`['`}</span>
                {
                  userData.containerization.map((container, i) => (
                    <>
                      <span className="text-cyan-400">{container}</span>
                      {
                        i !== userData.containerization.length - 1 &&
                        <span className="text-gray-400">{"', '"}</span>
                      }
                    </>
                  ))
                }
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">clouds:</span>
                <span className="text-gray-400">{`['`}</span>
                {
                  userData.clouds.map((cloud, i) => (
                    <>
                      <span className="text-cyan-400">{cloud}</span>
                      {
                        i !== userData.clouds.length - 1 &&
                        <span className="text-gray-400">{"', '"}</span>
                      }
                    </>
                  ))
                }
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">others:</span>
                <span className="text-gray-400">{`['`}</span>
                {
                  userData.others.map((other, i) => (
                    <>
                      <span className="text-cyan-400">{other}</span>
                      {
                        i !== userData.others.length - 1 &&
                        <span className="text-gray-400">{"', '"}</span>
                      }
                    </>
                  ))
                }
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hireable:</span>
                <span className="text-orange-400"> {profile?.hireable ? profile.hireable.toString() : "false"}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </GlowCard>
        </div>
    </section>
  );
};

export default HeroSection;