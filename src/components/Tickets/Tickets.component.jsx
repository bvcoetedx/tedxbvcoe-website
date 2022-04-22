import Fade from 'react-reveal/Fade';

import Ticket from './Ticket.component';

import { ticketsDetails } from '../../data/tickets.data';

import './Tickets.styles.scss';

const Tickets = () => {
  return (
    <>
      <section id='tickets' className='section section-tickets'>
        <Fade bottom delay={100}>
          <h1 className='section-heading'>Tickets</h1>
        </Fade>

        <div className='section-content'>
          <div className='tickets-container'>
            <Fade delay={50}>
              {ticketsDetails.map((ticket) => (
                <Ticket key={ticket.key} ticket={ticket} />
              ))}
              {/* <h1 style={{fontSize: '6vw', textAlign: 'center'}}><span style={{color: '#ff4929'}}>Coming</span> Soon <span className="dot dot1">.</span> <span className="dot dot2">.</span> <span className="dot dot3">.</span></h1> */}
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tickets;
