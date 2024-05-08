import { userData } from "@/data/user-data";
import Contributions from "./components/contributions";
import HeroSection from "./components/hero-section";
import GitLanguage from "./components/language";
import Projects from "./components/projects";
import Rank from "./components/rank";
import GitStats from "./components/stats";

async function getGitProfile() {
  const res = await fetch(`https://api.github.com/users/${userData.githubUser}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

async function getGitProjects() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=10&type=Repositories`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

async function getStackOverflowProfile() {
  const res = await fetch(`https://api.stackexchange.com/2.3/users/${userData.stackOverflowUser}?order=desc&sort=reputation&site=stackoverflow`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json(); 
};

export default async function Home() {
  const profile = await getGitProfile();
  const projects = await getGitProjects();
  const stackOverflowProfile = await getStackOverflowProfile();

  return (
    <>
      <HeroSection profile={profile} />
      <GitStats />
      <Projects
        projects={projects.items}
        profile={profile}
      />
      <GitLanguage />
      <Rank />
      <Contributions />
    </>
  )
};