import React from 'react';

export const Timer = props => {
  return (
    <span>
      Seconds passed:<span style={{ color: 'red', fontWeight: 'bold' }}> {props.seconds}</span>
    </span>
  );
};
