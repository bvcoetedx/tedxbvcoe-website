import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { sponsors } from '../../data/sponsors.data';

import './Sponsors.styles.scss';

const Sponsors = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const onClickHandler = (website) => {
    // history.push(`/partner/${route}`);
    window.open(website, '_blank');
  };

  return (
    <section id='sponsors' className='section section-sponsors'>
      <Fade bottom>
        <h1 className='section-heading'>Sponsors</h1>
      </Fade>
      <div className='section-content'>
        <div className='sponsors-container'>
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.key}
              className='sponsor-image'
              onClick={() => onClickHandler(sponsor.website)}
            >
              <Fade bottom delay={200}>
                <img src={sponsor.image} alt='sponsor' />
              </Fade>
            </div>
          ))}
          {/* <h1 style={{fontSize: '6vw', textAlign: 'center'}}><span style={{color: '#ff4929'}}>Partnering</span> Soon <span className="dot dot1">.</span> <span className="dot dot2">.</span> <span className="dot dot3">.</span></h1> */}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
