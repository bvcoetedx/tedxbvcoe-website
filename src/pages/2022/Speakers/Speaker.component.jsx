import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import DisplayImagePlaceholder from '../../../assets/2022/team/placeholder.png';
// import { ReactComponent as Divider } from '../../assets/illustrations/section-divider.svg';

function truncate(str) {
  if (str.length <= 460) {
    return str;
  }
  return str.slice(0, 460) + '...';
}

const Speaker = ({ speaker, triggerModal }) => {
  const { id, name, profession, socials, shortBio, image } = speaker;

  return (
    <>
      <div id={id} className={`speaker-container ${id}`}>
        <Fade delay={100}>
          <div className='display-pic'>
            {image ? (
              <img src={image} alt='speaker profile pic' />
            ) : (
              <img src={DisplayImagePlaceholder} alt='speaker profile pic' />
            )}
          </div>
        </Fade>

        <Fade delay={200}>
          <span className='name'>{name}</span>{' '}
        </Fade>

        <Fade delay={250}>
          <span className='profession'>{profession}</span>{' '}
        </Fade>

        <Fade delay={300}>
          {socials && (
            <div className='social-icons'>
              {socials.linkedInURL && (
                <a
                  href={socials.linkedInURL}
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className='icon linkedin'
                  />
                </a>
              )}
              {socials.instagramURL && (
                <a
                  href={socials.instagramURL}
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='icon instagram'
                  />
                </a>
              )}
              {socials.twitterURL && (
                <a
                  href={socials.twitterURL}
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
                </a>
              )}
            </div>
          )}
        </Fade>

        <Fade delay={300}>
          <div className='bio'>{truncate(shortBio)}</div>
        </Fade>

        <Fade delay={300}>
          <button
            className='read-more-btn'
            onClick={() => triggerModal(speaker)}
          >
            Read more
          </button>
        </Fade>
      </div>

      {/* <Fade delay={150}>
        <div className='divider-container'>
          <Divider className='divider' />
        </div>
      </Fade> */}
    </>
  );
};

export default Speaker;
