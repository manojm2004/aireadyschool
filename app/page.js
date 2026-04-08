import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import SocialProof from '../components/SocialProof';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Products />
        <WhyUs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
