import React, { useCallback, useMemo, useState } from 'react';

const getAverage = (numbers) => {
  //평균값 함수로 빼기
  console.log('평귬값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  //reduce = sum
  return sum / numbers.length;
  // => 평균값 내기
};
//-> 아래 컴포넌트 내부에서만 씀.

const AverageCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback((e) => {
    //useCallback : 함수 (최적화할때 쓰임)
    console.log('입력중입니다.');
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      //concat : 새로운 배열
      setList(nextList);
      setNumber('');
    },
    [list, number]
  );

  const avg = useMemo(() => getAverage(list), [list]);
  // useMemo = 값을 최적화한다.(최적화 필요할때만.)
  // 칠때마다 계산중... 안됨. -> 자원낭비되는것을 BAN

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}> 등록 </button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default AverageCallback;
