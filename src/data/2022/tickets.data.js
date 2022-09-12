export const ticketsDetails = [
  // {
  //   key: '1',
  //   open: false,
  //   category: 'Superfan',
  //   price: 'FREE',
  //   // paymentLink: 'https://forms.gle/y6X54FyjX8dN7wrr7',
  //   description: (
  //     <>
  //       <p>
  //         Are you a TEDx superfan, Are interested and excited about the event!
  //         Answer a few questions and let us know what excites you the most about
  //         the event and who is going to be the speaker whose TED Talk you can’t
  //         miss. The best entries will get a chance to get a free ticket.
  //       </p>
  //     </>
  //   )
  // },
  // {
  //   key: '2',
  //   open: false,
  //   category: 'Standard',
  //   price: '₹99',
  //   // buttonId: 'standard-access-btn',
  //   // razorpayPaymentId: 'pl_HxIEHE0ogNcy1Z',
  //   // paymentLink: 'https://razorpay.com',
  //   description: (
  //     <>
  //       <ul>
  //         <li>Get an exclusive Two-Day Event Pass for the event</li>
  //         <li>
  //           Get access to the best 10 curated ideas from our astounding speakers
  //         </li>
  //         <li>
  //           Earn a chance to get exciting insights on ideas across diverse
  //           disciplines from the world’s leading speakers and professionals
  //         </li>
  //         <li>
  //           Earn a chance to catch one of the most talented artists LIVE at the
  //           event
  //         </li>
  //       </ul>
  //     </>
  //   )
  // },
  {
    key: '1',
    open: true,
    category: 'Standard',
    price: '₹249',
    buttonId: 'standard-access-btn',
    razorpayPaymentId: 'pl_KF8j1Z97nGPhh2',
    // paymentLink: 'https://razorpay.com',
    description: (
      <>
        <ul>
          <li>Get an exclusive Event Pass for the event</li>
          <li>
          Get access to the best 9 curated ideas from
          our astounding speakers
          </li>
          <li>
          Earn a chance to get exciting insights on ideas
          across diverse disciplined from the world’s
          leading speakers and professionals
          </li>
          <li>
          Earn a chance to catch one of the most
          talented artists LIVE at the event
          </li>
        </ul>
      </>
    )
  },
  {
    key: '2',
    open: true,
    category: 'Premium',
    price: '₹599',
    buttonId: 'premium-access-btn',
    razorpayPaymentId: 'pl_KF8b6GcMp8YjLm',
    // paymentLink: 'https://razorpay.com',
    description: (
      <>
        <ul>
          <li>All <strong>STANDARD</strong> Access Ticket Benefits</li>
          <li>T-Shirt worth Rs. 599</li>
          <li>Cap worth Rs 299</li>
          <li>Bottle worth Rs 399</li>
          <li>+ other amazing goodies!</li>
          <li>
            <em>The overall total value rounds up to Rs 1700</em>
          </li>
        </ul>
      </>
    )
  },
  {
    key: '3',
    open: true,
    category: 'Platinum',
    price: '₹1199',
    buttonId: 'platinum-access-btn',
    razorpayPaymentId: 'pl_KF8lCo2VFI2Dc4',
    // paymentLink: 'https://razorpay.com',
    description: (
      <>
        <ul>
          <li>All <strong>PREMIUM</strong> Access Ticket Benefits</li>
          <li>
            The overall total merchandise value rounds up to Rs 1700
          </li>
          <li>
            Get a chance to have lunch and interact with
            your favourite speaker(s) from our versatile
            panel
          </li>
          <li>
            Get exclusive access to the Pre-TEDx events
          </li>
        </ul>
      </>
    )
  }
];
