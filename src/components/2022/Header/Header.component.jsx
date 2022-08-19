import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SideDrawer from '../SideDrawer/SideDrawer.component';
import Backdrop from '../Backdrop/Backdrop.component';

import logo from '../../../assets/2022/logo/TEDxBVCOE12.png';

import './Header.styles.scss';

class Header extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  scrollToTop = () => {
    const { location, history } = this.props;
    const { sideDrawerOpen } = this.state;
    sideDrawerOpen && this.closeSideDrawer();
    location.pathname === '/' ? scroll.scrollToTop() : history.push('/');
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
    return location.pathname === '/' ? (
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
        onClick={() => history.push(`/${option}`)}
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
      <ScrollLink activeClass='active' spy={true} smooth={true} duration={500} to='speakers' className={`${className} hover`}>
        Speakers
      </ScrollLink>
      <Link to='/tickets' className={`${className} hover`}>
        Tickets
      </Link>
      <Link to='/merch' className={`${className} hover`}>
        Merch
      </Link>
      {this.headerOption('sponsors')}
      {this.headerOption('faq')}
      {this.headerOption('team')}
      {this.headerOption('contact')}
      <div className="dropdown">
        <button className="dropbtn">TEDxBVCOE'22&nbsp;
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="/2021">TEDxBVCOE'21</a>
          <a className='active' href="/">TEDxBVCOE'22</a>
        </div>
      </div> 
    </>
  );

  render() {
    const { sideDrawerOpen } = this.state;

    return (
      <nav className='header'>
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
