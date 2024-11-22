import AboutMe from "@/components/aboutMe/AboutMe";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/Hero/Hero";
import MyProjects from "@/components/myProjects/MyProjects";
import MyServices from "@/components/myServices/MyServices";

export default function Home() {
  return (
    <>
      <Hero />
      <MyServices />
      <MyProjects />
      <AboutMe />
      <Footer />
    </>
  );
}
