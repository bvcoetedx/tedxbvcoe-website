import Fade from 'react-reveal/Fade';

import Ticket from './Ticket.component';

import { ticketsDetails } from '../../../data/2021/tickets.data';

import './Tickets.styles.scss';

const Tickets = () => {
  return (
    <>
      <section id='tickets' className='section section-tickets2021'>
        <Fade bottom delay={100}>
          <h1 className='section-heading'>Tickets</h1>
        </Fade>

        <div className='section-content'>
          <div className='tickets-container'>
            <Fade delay={50}>
              {ticketsDetails.map((ticket) => (
                <Ticket key={ticket.key} ticket={ticket} />
              ))}
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tickets;
