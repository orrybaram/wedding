import React, { useEffect } from 'react';
import { Box } from 'reflexbox';
import './ZolaRegistry.styles.css';

type Props = {
  url: string;
  registryKey: string;
};

const ZolaRegistry = (props: Props) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://widget.zola.com/js/widget.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <Box py={6} className="ZolaRegistry">
      <a
        className="zola-registry-embed"
        href={props.url}
        data-registry-key={props.registryKey}
      >
        Our Zola Wedding Registry
      </a>
    </Box>
  );
};

export default ZolaRegistry;
