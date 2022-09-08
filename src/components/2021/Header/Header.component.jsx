import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SideDrawer from '../SideDrawer/SideDrawer.component';
import Backdrop from '../Backdrop/Backdrop.component';

import logo from '../../../assets/2021/logo/tedxbvcoe-header-logo.png';

import './Header2021.styles.scss';

class Header extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  scrollToTop = () => {
    const { location, history } = this.props;
    const { sideDrawerOpen } = this.state;
    sideDrawerOpen && this.closeSideDrawer();
    location.pathname === '/2021' ? scroll.scrollToTop() : history.push('/2021');
  };

  openSideDrawer = () => {
    this.setState((prevState) => ({
      sideDrawerOpen: !prevState.sideDrawerOpen
    }));
  };

  closeSideDrawer = () => this.setState({ sideDrawerOpen: false });

  backdropClickHandler = () => {
    document.getElementById('dlcont').style.display = "none";
    this.closeSideDrawer();
  };

  headerOption = (option) => {
    const { location, history } = this.props;
    return location.pathname === '/2021' ? (
      <ScrollLink
        activeClass='active'
        to={option}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={`option hover ${option}`}
      >
        {option}
      </ScrollLink>
    ) : (
      <span
        className={`option hover ${option}`}
        onClick={() => history.push(`/2021/${option}`)}
      >
        {option}
      </span>
    );
  };

  headerOptions = (className) => (
    <>
      <span className={`${className} hover`} onClick={() => this.scrollToTop()}>
        Home
      </span>
      <Link to='/2021/speakers' className={`${className} hover`}>
        Speakers
      </Link>
      <Link to='/2021/tickets' className={`${className} hover`}>
        Tickets
      </Link>
      <Link to='/2021/merch' className={`${className} hover`}>
        Merch
      </Link>
      {this.headerOption('partners')}
      {this.headerOption('faq')}
      {this.headerOption('team')}
      {this.headerOption('contact')}
      <div className="dropdown">
        <button className="dropbtn">TEDxBVCOE'21&nbsp;
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a className='active' href="/2021">TEDxBVCOE'21</a>
          <a href="/">TEDxBVCOE'22</a>
        </div>
      </div> 
    </>
  );

  render() {
    const { sideDrawerOpen } = this.state;

    return (
      <nav className='header2021'>
        <div className='logo-container'>
          <img
            src={logo}
            alt='logo'
            className='logo'
            width='66'
            height='55'
            onClick={this.scrollToTop}
          />
        </div>

        <div className='options'>{this.headerOptions('option')}</div>

        <div className='sidedrawer-btn'>
          <span className='toggle' onClick={this.openSideDrawer}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>

        <SideDrawer
          show={sideDrawerOpen}
          closeSideDrawer={this.closeSideDrawer}
          scrollToTop={this.scrollToTop}
        />
        {sideDrawerOpen && <Backdrop click={this.backdropClickHandler} />}
      </nav>
    );
  }
}

export default withRouter(Header);
