import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { lazy } from 'react';
import Header2021 from './components/2021/Header/Header.component';
import Footer2021 from './components/2021/Footer/Footer.component';

const Sponsors2021 = lazy(() => import('./components/2021/Sponsors/Sponsors.component'));
// const Sponsor2021 = lazy(() => import('./components/2021/Sponsor/Sponsor.component'));
const SponsorUs2021 = lazy(() =>
  import('./components/2021/SponsorUs/SponsorUs.component')
);
const Tickets2021 = lazy(() => import('./components/2021/Tickets/Tickets.component'));
const Merch2021 = lazy(() => import('./components/2021/Merch/Merch.component'));
const Team2021 = lazy(() => import('./components/2021/Team/Team.component'));
const FAQs2021 = lazy(() => import('./components/2021/FAQs/FAQs.component'));
const Contact2021 = lazy(() => import('./components/2021/Contact/Contact.component'));

const TicketsWrapper2021 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2021 />
      <Tickets2021 />
      <Merch2021 />
      <Footer2021 />
    </>
  );
};

const MerchWrapper2021 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2021 />
      <Merch2021 />
      <Tickets2021 />
      <Footer2021 />
    </>
  );
};

const SponsorsWrapper2021 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2021 />
      <Sponsors2021 />
      <Footer2021 />
    </>
  );
};

const SponsorUsWrapper2021 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2021 />
      <SponsorUs2021 />
      <Footer2021 />
    </>
  );
};

const FAQWrapper2021 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2021 />
      <FAQs2021 />
      <Footer2021 />
    </>
  );
};

const TeamWrapper2021 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2021 />
      <Team2021 />
      <Footer2021 />
    </>
  );
};

const ContactWrapper2021 = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Header2021 />
      <Contact2021 />
      <Footer2021 />
    </>
  );
};
  
export {
    TicketsWrapper2021,
    MerchWrapper2021,
    SponsorsWrapper2021,
    SponsorUsWrapper2021,
    FAQWrapper2021,
    TeamWrapper2021,
    ContactWrapper2021,
}