import React from 'react';
import './Details.styles.css';
import Detail from '../../../../components/Detail';

const Details = () => {
  const googleCalendarLink = [
    'https://calendar.google.com/calendar/r/eventedit?',
    'text=Hanna%2BOrry+Wedding&',
    'details=Website:+hannaandorry.wedding',
    '&location=64+Dobbin+St.,+Brooklyn,+NY',
    '&ctz=America/New_York',
    '&dates=20200328T170000/20200328T220000',
  ].join('');

  return (
    <section className="container Details">
      <Detail
        label="When"
        value={
          <>
            March 28th, <span className="u--font-thin">2020</span>
          </>
        }
        details={
          <a target="_blank" href={googleCalendarLink}>
            Party from 5:30pm - 10pm
          </a>
        }
      />

      <div className="Detail__Divider" />

      <Detail
        label="Where"
        value={
          <>
            Dobbin St <span className="u--font-thin">Brooklyn, NY</span>
          </>
        }
        details={
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Dobbin+St/@40.724239,-73.953704,15z/data=!4m5!3m4!1s0x0:0x625dcb2a0afaf0b0!8m2!3d40.724239!4d-73.953704"
          >
            64 Dobbin St, Brooklyn, NY 11222
          </a>
        }
      />
    </section>
  );
};

export default Details;
