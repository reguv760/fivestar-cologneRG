import React from 'react';

const Error = ({ errorMsg }) => {
  return <p>{errorMsg.message}</p>;
};

export default Error;
