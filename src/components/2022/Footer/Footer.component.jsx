import ReactGA from 'react-ga';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

import './Footer.styles.scss';

const Footer = () => {
  const onClickHandler = () => {
    ReactGA.event({
      category: "'External Link' Clicks",
      action: "Lakshay's website opened",
      label: 'Website opened from footer credits link'
    });
    window.open('https://github.com/lakshayman', '_blank');
  };

  return (
    <section id='footer' className='footer'>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Fade bottom delay={350}>
          <div className='btn-container'>
            <span className='btn-link' onClick={() => window.open("https://merchant.razorpay.com/policy/KK8FqHsE22B4Uc/terms", '_blank')}>
              Terms and Conditions
            </span>
          </div>
        </Fade>
        <Fade bottom delay={350}>
          <div className='btn-container'>
            <span className='btn-link' onClick={() => window.open("https://merchant.razorpay.com/policy/KK8FqHsE22B4Uc/refund", '_blank')}>
              Cancellation and Refund Policy
            </span>
          </div>
        </Fade>
        <Fade bottom delay={350}>
          <div className='btn-container'>
            <span className='btn-link' onClick={() => window.open("https://merchant.razorpay.com/policy/KK8FqHsE22B4Uc/privacy", '_blank')}>
              Privacy Policy
            </span>
          </div>
        </Fade>
        <Fade bottom delay={350}>
          <div className='btn-container'>
            <span className='btn-link' onClick={() => window.open("https://merchant.razorpay.com/policy/KK8FqHsE22B4Uc/shipping", '_blank')}>
              Shipping and Delivery Policy
            </span>
          </div>
        </Fade>
      </div>
      <div className='social-icons'>
        <a
          href='https://twitter.com/tedxbvcoe'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Twitter'
        >
          <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
        </a>
        <a
          href='https://www.instagram.com/tedx.bvcoe'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <FontAwesomeIcon icon={faInstagram} className='icon instagram' />
        </a>
        <a
          href='https://www.facebook.com/tedx.bvcoend'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Facebook'
        >
          <FontAwesomeIcon icon={faFacebook} className='icon facebook' />
        </a>
      </div>

      <div className='arrow-container' onClick={() => scroll.scrollToTop()}>
        <FontAwesomeIcon icon={faArrowUp} className='arrow' />
      </div>

      <h1 className='heading'>COPYRIGHT © 2022</h1>
      <p className='sub-heading'>
        <a href='https://bit.ly/TEDxBVCOE' style={{ textTransform: 'none' }}>
          TEDxBVCOE
        </a>
        . All rights reserved.
      </p>

      <p className='sub-heading tedx'>
        This independent TEDx event is operated under license from TED.
      </p>

      <span className='sub-heading credit' onClick={onClickHandler}>
        Revamped by <strong><i>Lakshay Manchanda</i></strong>
      </span>
    </section>
  );
};

export default Footer;
