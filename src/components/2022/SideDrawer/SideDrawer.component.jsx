import React from 'react';
// import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import './SideDrawer.styles.scss';

class SideDrawer extends React.Component {
  render() {
    const { show, scrollToTop } = this.props;

    const onClickHandler = (route) => {
      const { history, closeSideDrawer } = this.props;
      closeSideDrawer();
      history.push(`/${route}`);
    };

    // const handleIconClick = () => {
    //   ReactGA.event({
    //     category: "'External Link' Clicks",
    //     action: "Daksh's website opened",
    //     label: "Website opened from sidedrawer's icon at bottom"
    //   });
    //   window.open('https://dakshkhetan.now.sh', '_blank');
    // };

    const toggleyear = ()=>{
      const leftDrawer = document.getElementById("dlcont");
      if(leftDrawer.style.display === "block") {
        leftDrawer.style.display = "none";
      } else {
        leftDrawer.style.display = "block";
      }
    }

    return (
      <nav className={`${show ? `sidedrawer open` : `sidedrawer`}`}>
        <div className='options-container'>
          <span className='option' onClick={() => scrollToTop()}>
            Home
          </span>
          <span className='option' onClick={() => onClickHandler('speakers')}>
            Speakers
          </span>
          <span className='option' onClick={() => onClickHandler('tickets')}>
            Tickets
          </span>
          <span className='option' onClick={() => onClickHandler('merch')}>
            Merch
          </span>
          <span className='option' onClick={() => onClickHandler('partners')}>
            Partners
          </span>
          <span className='option' onClick={() => onClickHandler('faq')}>
            FAQ
          </span>
          <span className='option' onClick={() => onClickHandler('team')}>
            Team
          </span>
          <span className='option' onClick={() => onClickHandler('contact')}>
            Contact
          </span>
          <div className="dropleft">
            <button className="dropbtn" onClick={toggleyear}>TEDxBVCOE'22&nbsp;
              <i className="fa fa-caret-left"></i>
            </button>
            <div className="dropleft-content" id="dlcont">
              <a href="/2021">TEDxBVCOE'21</a>
              <a className='active' href="/">TEDxBVCOE'22</a>
            </div>
          </div> 
        </div>

        {/* <FontAwesomeIcon
          icon={faExternalLinkAlt}
          className='icon'
          onClick={handleIconClick}
        /> */}
      </nav>
    );
  }
}

export default withRouter(SideDrawer);
