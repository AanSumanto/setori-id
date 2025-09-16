import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import HowItWorks from "../components/sections/HowItWorks";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import BenefitsSection from "../components/sections/BenefitsSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <BenefitsSection />
      <HowItWorks />
      <TestimonialsSection />
    </Layout>
  );
};

export default Home;
