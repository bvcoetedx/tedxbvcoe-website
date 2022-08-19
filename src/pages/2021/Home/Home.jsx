import { useEffect } from 'react';
import ReactGA from 'react-ga';

import Header from '../../../components/2021/Header/Header.component';
import Footer from '../../../components/2021/Footer/Footer.component';
import Hero from '../../../components/2021/Hero/Hero.component';
import About from '../../../components/2021/About/About.component';
import Speakers from '../../../components/2021/Speakers/Speakers.component';
import Sponsors from '../../../components/2021/Sponsors/Sponsors.component';
// import SpeakerForm from '../../components/SpeakerForm/SpeakerForm.component';
import SponsorUs from '../../../components/2021/SponsorUs/SponsorUs.component';
import Tickets from '../../../components/2021/Tickets/Tickets.component';
import FAQs from '../../../components/2021/FAQs/FAQs.component';
import Team from '../../../components/2021/Team/Team.component';
import Contact from '../../../components/2021/Contact/Contact.component';

import './Home.styles.scss';

// TODO: unhide sections & swap <Team /> & <FAQs /> components if bg-color is not ideal

const Home = () => {
  useEffect(() => {
    document.title = "TEDxBVCOE'21"
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Header />
      <div className='App'>
        <Hero />
        <About />
        {/* <SpeakerForm /> */}
        <Speakers />
        <Tickets />
        <Sponsors />
        <SponsorUs />
        <FAQs />
        <Team />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
