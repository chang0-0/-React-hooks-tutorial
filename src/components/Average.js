import React, { useState, useMemo, useCallback, useRef } from "react";

//평균 계산 함수
const getAverage = (numbers) => {
  console.log("평균 값 계산중");
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((a, b) => a + b);

  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  };

  // const onInsert = useCallback(() => {
  //   const nextList = list.concat(parseInt(number));
  //   setNumber("");
  // }, [number, list]);

  //input으로 새로운 숫자가 추가 되는 렌더링때만  평균값 구하는 함수 호출
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}> 등록</button>
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

export default Average;
