import ContactForm from './components/ContactForm';
import FaqAccordion from './components/FaqItems';
import Footer from './components/Footer';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import SliderMode from './components/Slider';
import WhyChooseUsSection from './components/WhyChooseUsSection';


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection/>
      <ServicesSection/>
      <WhyChooseUsSection/>
      <SliderMode/>
      <FaqAccordion/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
