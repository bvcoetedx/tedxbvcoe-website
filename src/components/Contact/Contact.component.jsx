import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { ReactComponent as Image } from '../../assets/illustrations/contact.svg';

import './Contact.styles.scss';

const Contact = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <section id='contact' className='section section-contact'>
        <Fade bottom>
          <h1 className='section-heading'>Contact</h1>
        </Fade>

        <div className='section-content'>
          <div className='info-container'>
            <div className='info'>
              <Fade bottom delay={300}>
                <p className='text mb-25px'>For any query, contact: </p>
              </Fade>

              <Fade bottom delay={400}>
                <p className='text text-2'>
                  <span>Akshat Sharma</span>
                  <br />
                  <span className='position'>Organizer</span>
                  <br />
                  <span>
                    <a href='tel:+917011798420'>+91-7011798420</a>
                  </span>
                </p>

                <Fade bottom delay={500}>
                  <div className='separator' />
                </Fade>

                <p className='text text-2'>
                  <span>Shourya Veer Dua</span>
                  <br />
                  <span className='position'>Co Organizer</span>
                  <br />
                  <span>
                    <a href='tel:+919811046036'>+91-9811046036</a>
                  </span>
                </p>

                <Fade bottom delay={500}>
                  <div className='separator' />
                </Fade>

                <p className='text text-2'>
                  <span>Chehak Joneja</span>
                  <br />
                  <span className='position'>Curator</span>
                  <br />
                  <span>
                    <a href='tel:+919810058273'>+91-9810058273</a>
                  </span>
                </p>
              </Fade>

              <Fade bottom delay={500}>
                <div className='mail-btn'>
                  <a href='mailto:bvcoetedx@gmail.com'>Write To Us</a>
                </div>
              </Fade>
            </div>
          </div>

          <Fade delay={100}>
            <div className='image-container'>
              <div className='illustration'>
                <Image />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Contact;
