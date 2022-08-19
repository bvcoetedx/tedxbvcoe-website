import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { lazy } from 'react';
import Header2022 from './components/2022/Header/Header.component';
import Footer2022 from './components/2022/Footer/Footer.component';

const Sponsors2022 = lazy(() => import('./components/2022/Sponsors/Sponsors.component'));
// const Sponsor2022 = lazy(() => import('./components/2022/Sponsor/Sponsor.component'));
const SponsorUs2022 = lazy(() =>
  import('./components/2022/SponsorUs/SponsorUs.component')
);
const Tickets2022 = lazy(() => import('./components/2022/Tickets/Tickets.component'));
const Merch2022 = lazy(() => import('./components/2022/Merch/Merch.component'));
const Team2022 = lazy(() => import('./components/2022/Team/Team.component'));
const FAQs2022 = lazy(() => import('./components/2022/FAQs/FAQs.component'));
const Contact2022 = lazy(() => import('./components/2022/Contact/Contact.component'));
const Speakers2022 = lazy(() => import('./components/2022/Speakers/Speakers.component'));

const TicketsWrapper2022 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2022 />
      <Tickets2022 />
      <Merch2022 />
      <Footer2022 />
    </>
  );
};

const MerchWrapper2022 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2022 />
      <Merch2022 />
      <Tickets2022 />
      <Footer2022 />
    </>
  );
};

const SponsorsWrapper2022 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2022 />
      <Sponsors2022 />
      <Footer2022 />
    </>
  );
};

const SponsorUsWrapper2022 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2022 />
      <SponsorUs2022 />
      <Footer2022 />
    </>
  );
};

const FAQWrapper2022 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2022 />
      <FAQs2022 />
      <Footer2022 />
    </>
  );
};

const TeamWrapper2022 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2022 />
      <Team2022 />
      <Footer2022 />
    </>
  );
};

const ContactWrapper2022 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2022 />
      <Contact2022 />
      <Footer2022 />
    </>
  );
};

const SpeakersWrapper2022 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2022 />
      <Speakers2022 />
      <Footer2022 />
    </>
  );
};

  
export {
    TicketsWrapper2022,
    MerchWrapper2022,
    SponsorsWrapper2022,
    SponsorUsWrapper2022,
    FAQWrapper2022,
    TeamWrapper2022,
    ContactWrapper2022,
    SpeakersWrapper2022
}