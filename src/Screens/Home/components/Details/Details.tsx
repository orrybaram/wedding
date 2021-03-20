import React from 'react';
import { Flex, Box } from 'reflexbox';
import './Details.styles.css';
import Detail from '../../../../components/Detail';

const Details = () => {
  const googleCalendarLink = [
    'https://calendar.google.com/calendar/r/eventedit?',
    'text=Hanna%2BOrry+Wedding&',
    'details=Website:+hannaandorry.wedding',
    '&location=64+Dobbin+St.,+Brooklyn,+NY',
    '&ctz=America/New_York',
    '&dates=20211112T173000/20211112T223000',
  ].join('');

  return (
    <section className="Details">
      <Flex
        className="container"
        margin="0 auto"
        flexDirection={['column', 'column', 'column', 'row']}
        py={6}
      >
        <Box
          width={[1, 1, 1, 1 / 2]}
          justifyContent={['center', 'center', 'center', 'flex-start']}
          marginBottom={[4, 4, 4, 0]}
        >
          <Detail
            label="When"
            value={
              <>
                November 12th, <span className="u--font-thin">2021</span>
              </>
            }
            details={
              <a target="_blank" href={googleCalendarLink}>
                Party from 5:30pm - 10:30pm
              </a>
            }
          />

          <div className="Detail__Divider" />
        </Box>
        <Box width={[1, 1, 1, 1 / 2]}>
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
        </Box>
      </Flex>
    </section>
  );
};

export default Details;
