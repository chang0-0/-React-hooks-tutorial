import React, { useState, useEffect, useReducer } from "react";
import cn from "classnames";

const log = console.log;

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  //기존에는 input이 여러개여서 useState를 여러 번 사용햇는데, useReducer를 사용하면 기존에 클래스형 컴포넌트에서 input 태그에 name 값을 할당하고
  //e.target.name을 참조하여 setState를 해준 것과 유사한 방식으로 작업을 처리할 수 있습니다.

  /*⭐ 기존 코드 onChangeName, onChangeNickname으로 2개였던 상태값 변환 함수를 하나로 통합 시켰음
  set함수 사용X dispatch 사용 Reducer를 적용했음  */

  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  //   const [name, setName] = useState("");
  //   const [nickname, setNickname] = useState("");

  //useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다.
  //클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태입니다.

  //   useEffect(() => {
  //     log("effect");
  //     log(name);

  //     return () => {
  //       log("cleanup");
  //       log(name);
  //     };
  //   }, [name]);

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickname = (e) => {
  //     setNickname(e.target.value);
  //   };

  return (
    <div className={cn("Info")}>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
