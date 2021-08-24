import React from 'react';
import { Flex, Box } from 'reflexbox';
import './CovidAlert.styles.css';
import Detail from '../../../../components/Detail';
import appreciationImage from './appreciation.png';

const CovidAlert = () => {
  return (
    <section className="CovidAlert">
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
          <Detail label="A note about Covid-19" value={<></>} />

          <h1>
            As safety is our highest priority, we've made it <em>mandatory</em>
            {'  '}
            for all of our guests to be vaccinated.{' '}
          </h1>

          <p style={{ margin: '16px 0' }}>
            We also strongly suggest everyone gets tested a few days before the
            wedding and to please stay home if you test positive.
          </p>

          <p>
            A quick google will show you free places around you to get tested.
            There are also relatively cheap at home testing kits now available
            from{' '}
            <a
              target="_blank"
              href="https://www.cvs.com/shop/home-health-care/home-tests/home-covid-test"
            >
              CVS
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              href="https://www.walgreens.com/store/c/binaxnow-binaxnow-covid-19-antigen-self-test-at-home-kit/ID=300414527-product
"
            >
              Walgreens
            </a>
            .
          </p>
          <h4 style={{ marginTop: 16 }}>Stay safe everyone!!</h4>
        </Box>
        <Flex
          width={[1, 1, 1, 1 / 2]}
          justifyContent={['center', 'center', 'center', 'center']}
          marginBottom={[4, 4, 4, 0]}
        >
          <img
            src={appreciationImage}
            style={{ width: '100%', objectFit: 'contain' }}
          />
        </Flex>
      </Flex>
    </section>
  );
};

export default CovidAlert;
