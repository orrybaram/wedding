import React from 'react';
import { Flex, Box } from 'reflexbox';
import './AdditionalInfo.styles.css';
import Detail from '../../../../components/Detail';

const AdditionalInfo = () => {
  const airbnbLink =
    'https://www.airbnb.com/s/Brooklyn--NY--United-States/homes?refinement_paths%5B%5D=%2Fhomes&current_tab_id=home_tab&selected_tab_id=home_tab&screen_size=large&hide_dates_and_guests_filters=false&ne_lat=40.72082722558004&ne_lng=-73.94714540490725&sw_lat=40.70345638471319&sw_lng=-73.9652556801758&zoom=15&search_by_map=true&search_type=filter_change&place_id=ChIJCSF8lBZEwokRhngABHRcdoI';
  const hotelMapLink =
    'https://drive.google.com/open?id=1T0JnbkA7Mk7hpzPWWCdib6R7E_i4DPy5&usp=sharing';

  return (
    <section className="AdditionalInfo">
      <Flex
        className="container"
        margin="0 auto"
        flexDirection={['column', 'column', 'column', 'row']}
        py={6}
      >
        <Box
          width={[1, 1, 1, 1 / 2]}
          marginBottom={[4, 4, 4, 0]}
          justifyContent={['center', 'center', 'center', 'flex-start']}
          pr={5}
        >
          <Detail
            label="Accomodations"
            details="Some places to stay in the neighborhood"
          />
          <Box mb={2} mt={4}>
            <h4>The Hoxton Hotel</h4>
          </Box>
          <Box mb={3}>
            <p>
              We organized a discount at{' '}
              <a
                target="_blank"
                href="https://thehoxton.com/new-york/williamsburg/hotels"
              >
                The Hoxton Hotel
              </a>
              . Use the code <span className="Tag">HITCHED320</span> to get 10%
              off.
            </p>
          </Box>
          <Box mb={2}>
            <h4>Other options</h4>
          </Box>
          <p>
            Brooklyn has a ton of other hotels to choose from as well. For your
            convenience{' '}
            <a href={hotelMapLink} target="_blank">
              we've put together a map
            </a>{' '}
            of a few hotels in the neighborhood. Not the hotel type?{' '}
            <a href={airbnbLink} target="_blank">
              Airbnb
            </a>{' '}
            might have some good options too.
          </p>
        </Box>
        <Box width={[1, 1, 1, 1 / 2]}>
          <Detail
            label="Details"
            details="Some other things you should probably know"
          />

          <Box mb={2} mt={4}>
            <h4>Dress Code</h4>
          </Box>
          <Box mb={3}>
            <p>
              Cocktail attire. We want everyone looking good, but comfort is
              key. We recommend suits or slacks/jacket combo and dresses.
            </p>
          </Box>

          <Box mb={2}>
            <h4>Transportation</h4>
          </Box>
          <p>
            Since there are so many places to stay in NYC, we will not be
            providing any transportation to or from the venue. Fortunately, NYC
            has great public transit, tons of cabs, and a number of on-demand
            car services. Feel free to reach out to us with any questions.
          </p>
        </Box>
      </Flex>
    </section>
  );
};

export default AdditionalInfo;
