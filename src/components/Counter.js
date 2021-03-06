import React, { useState, useReducer } from "react";
import cn from "classnames";

//리듀서 생성
const reducer = (state, action) => {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      //아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
};

//useReducer는 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook입니다.

const Counter = () => {
  //const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div className={cn("Counter")}>
      <p>
        현재 카운터 값은 <b> {state.value} </b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+ 1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>- 1</button>
    </div>
  );
};

//onClick={() => dispatch({type: ...})}
// 따로 증가 감소 함수를 만들지않고 자신을 호출하는 화살표 함수를 만들어서 dispatch 실행

export default Counter;
