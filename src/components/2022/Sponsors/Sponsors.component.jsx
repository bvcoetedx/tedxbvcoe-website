import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

// import { sponsors } from '../../../data/2022/sponsors.data';

import './Sponsors.styles.scss';

const Sponsors = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  // const onClickHandler = (website) => {
  //   // history.push(`/partner/${route}`);
  //   window.open(website, '_blank');
  // };

  return (
    <section id='partners' className='section section-sponsors'>
      <Fade bottom>
        <h1 className='section-heading'>Partners</h1>
      </Fade>
      <Fade>
        <h3 style={{textAlign: 'center', marginBlockStart: '0'}}>To Be Announced...</h3>
      </Fade>
      {/* <div className='section-content'> */}
        {/* <div className='sponsors-container'>
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
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Sponsors;
