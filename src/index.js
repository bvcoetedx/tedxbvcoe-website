import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Spinner from './components/Spinner/Spinner.component';
import { 
  TicketsWrapper2021, 
  SponsorsWrapper2021, 
  SponsorUsWrapper2021,
  MerchWrapper2021,
  FAQWrapper2021,
  TeamWrapper2021,
  ContactWrapper2021,
 } from './2021.js';
 import { 
  TicketsWrapper2022, 
  SponsorsWrapper2022, 
  SponsorUsWrapper2022,
  MerchWrapper2022,
  FAQWrapper2022,
  TeamWrapper2022,
  ContactWrapper2022,
  SpeakersWrapper2022
 } from './2022.js';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const Home2021 = lazy(() => import('./pages/2021/Home/Home'));
const Speakers2021 = lazy(() => import('./pages/2021/Speakers/Speakers'));
const Home2022 = lazy(() => import('./pages/2022/Home/Home'));

ReactGA.initialize('UA-202539038-1');

const Root = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path='/' component={Home2022} />
        <Route path='/speakers' component={SpeakersWrapper2022} />
        <Route path='/sponsors' component={SponsorsWrapper2022} />
        <Route path='/sponsorship' component={SponsorUsWrapper2022} />
        <Route path='/tickets' component={TicketsWrapper2022} />
        <Route path='/merch' component={MerchWrapper2022} />
        <Route path='/faq' component={FAQWrapper2022} />
        <Route path='/team' component={TeamWrapper2022} />
        <Route path='/contact' component={ContactWrapper2022} />
        <Route exact path='/2021' component={Home2021} />
        <Route path='/2021/speakers' component={Speakers2021} />
        <Route path='/2021/sponsors' component={SponsorsWrapper2021} />
        <Route path='/2021/sponsorship' component={SponsorUsWrapper2021} />
        <Route path='/2021/tickets' component={TicketsWrapper2021} />
        <Route path='/2021/merch' component={MerchWrapper2021} />
        <Route path='/2021/faq' component={FAQWrapper2021} />
        <Route path='/2021/team' component={TeamWrapper2021} />
        <Route path='/2021/contact' component={ContactWrapper2021} />
        {/* <Route path='/2021/sponsor/:sponsorName' component={SponsorWrapper2021} /> */}
        <Redirect to='/' />
      </Switch>
    </Suspense>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
