import React from 'react';
import { Box } from 'reflexbox';
import Detail from '../../../../components/Detail';
import './Story.styles.css';

const Story = () => {
  return (
    <section className="Story">
      <Box className="container" margin="0 auto" py={5}>
        <Detail label="Our Story" />
        <p>
          Hanna and Orry met a little over 6 years ago at Cake Shop, a bar in
          the Lower East Side. On December 30th, 2018 Orry returned to their
          apartment after picking up outstanding items for their New Year’s Eve
          party. Pulling each item out one by one, the final piece from this
          show and tell was the ring. He got down on one knee and she said yes.
        </p>

        <p>
          Hanna and Orry were married on June 29th, 2019 in a small ceremony in
          their backyard. And now, we party!
        </p>
      </Box>
    </section>
  );
};

export default Story;
