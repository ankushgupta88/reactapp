import React from 'react';
import { InlineWidget  } from 'react-calendly';

const Contact = () => {
    return(
      <div className='main_Content vh-100'>
          <section className='contact_sec'>
            <div className="inline-widget">
              <InlineWidget url="https://calendly.com/mikemancuso?hide_gdpr_banner=1" />
            </div>

          {/* <div className="popup-widget">
            <PopupWidget
              url="https://calendly.com/mikemancuso?hide_gdpr_banner=1"
              rootElement={document.getElementById('root')}
              text="Schedule Time with me"
              textColor="#ffffff"
              color="#319795"
            />
          </div> */}
          </section>
      </div>
    )
  };
  
  export default Contact;