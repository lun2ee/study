import React from 'react';

const MyComponent = ({ name, children }) => {
  //   const { name, children } = props;
  return (
    <div>
      안녕하세요. 제이름은 {name}입니다.
      {/* props */}
      <br />
      children 값은 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '은진',
};

export default MyComponent;
