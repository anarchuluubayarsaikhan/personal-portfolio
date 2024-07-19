
import { Aboutjob} from "./components/Aboutjob";
import { Aboutme } from "./components/Aboutme";
import Allexperiences from "./components/Allexperience";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Skills } from "./components/Skillss";
import { Subfooter } from "./components/subfooter";
import { Works } from "./components/works";


export default function Home() {
  return (
    <main className="p-4">
      <Header/>
      <Aboutjob/>
      <Aboutme/>
      <Skills/>
      <Allexperiences/>
      <Works/>
      <Footer/>
      <Subfooter/>
    </main>
  );
}