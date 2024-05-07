import React, { useState } from 'react';
import EffectInfo from './EffectInfo';

const EffectVisible = () => {
  const [visible, setVisible] = useState(false);
  console.log('부모컴포넌트도 렌더링이 되나요?');

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <EffectInfo />}
      {/* visible이 true면 <EffectIn /> 이 실행 */}
    </div>
  );
};

export default EffectVisible;
