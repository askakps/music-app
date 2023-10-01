import React from 'react';

function withLoader(Component) {
  return function WithLoader(props) {
    const { isLoading, ...rest } = props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <Component {...rest} />;
  };
}

export default withLoader;
