import React from 'react';
import './Detail.styles.css';

type Props = {
  label: React.ReactNode;
  value?: React.ReactNode;
  details?: React.ReactNode;
};

const Detail = (props: Props) => {
  return (
    <div className="Detail">
      <h4 className="Detail__label">{props.label}</h4>
      <h2 className="Detail__value">{props.value}</h2>
      <p className="Detail__details">{props.details}</p>
    </div>
  );
};

export default Detail;
