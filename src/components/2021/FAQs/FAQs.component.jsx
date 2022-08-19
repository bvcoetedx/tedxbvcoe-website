import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { FAQData } from '../../../data/2021/faq.data';

import FAQ from './FAQ.component';

import { ReactComponent as Illustration } from '../../../assets/2021/illustrations/faq.svg';

import './FAQs.styles.scss';

const FAQs = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const [faqs, setFaqs] = useState(FAQData);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <section id='faq' className='section section-faq2021'>
        <Fade bottom>
          <h1 className='section-heading'>FAQs</h1>
          <div className='section-content'>
            <div className='faqs'>
              {faqs.map((faq, i) => (
                <FAQ key={i} index={i} faq={faq} toggleFAQ={toggleFAQ} />
              ))}
            </div>
            <div className='image-container'>
              <div className='illustration'>
                <Illustration />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default FAQs;
