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
//props 를 정의
// defaultProps 를 통해 설정된 컴포넌트의 기본 prop 값임. 
// 이는 React element 가 아니라 컴포넌트의 기본 설정값을 나타냄. 

export default MyComponent;
