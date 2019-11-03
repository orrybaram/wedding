import React from 'react';
import { Box, Flex } from 'reflexbox';
import Detail from '../../../../components/Detail';
import './Story.styles.css';
import highlifeImg from './highlife.png';

const Story = () => {
  return (
    <section className="Story">
      <Flex
        className="container"
        margin="0 auto"
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems="center"
        py={6}
      >
        <Flex
          width={[1, 1, 1, 1 / 2]}
          justifyContent={['center', 'center', 'center', 'center']}
          marginBottom={[4, 4, 4, 0]}
        >
          <img src={highlifeImg} className="highlife" />
        </Flex>
        <Box
          width={[1, 1, 1, 1 / 2]}
          justifyContent={['center', 'center', 'center', 'flex-start']}
          marginBottom={[4, 4, 4, 0]}
        >
          <Detail label="Our Story" />
          <p>
            Hanna and Orry met a little over 6 years ago at Cake Shop, a bar in
            the Lower East Side. On December 30th, 2018 Orry returned to their
            apartment after picking up outstanding items for their New Year’s
            Eve party. Pulling each item out one by one, the final piece from
            this show and tell was the ring. He got down on one knee and she
            said yes.
          </p>
          <Box mt={4}>
            <p>
              They were married on June 29th, 2019 in a small ceremony in their
              backyard. And now, we party!
            </p>
          </Box>
        </Box>
      </Flex>
    </section>
  );
};

export default Story;
