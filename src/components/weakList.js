import React, { useState } from "react";
import cn from "classnames";
import UserList from "./UserList";

//날짜 출력을 위한 한개의 컴포넌트 생성
const Weak = ({ weak }) => {
  return (
    <div className={cn("weaks")}>
      <b>{weak.day}</b>
      <span>({weak.weak})</span>
    </div>
  );
};

const WeakList = () => {
  const array = ["a", "b", "c", "d"];

  //날짜 정렬을 위한 객체 배열 생성.
  const Weaks = [
    {
      day: 1,
      weak: "Sun",
    },
    {
      day: 2,
      weak: "Mon",
    },
    {
      day: 3,
      weak: "Tue",
    },
    {
      day: 4,
      weak: "Wed",
    },
    {
      day: 5,
      weak: "Thu",
    },
    {
      day: 6,
      weak: "Fri",
    },
    {
      day: 7,
      weak: "Sat",
    },
  ];

  return (
    <div classsName={cn("WeakList")}>
      {Weaks.map((weak) => (
        <Weak weak={weak} />
      ))}
    </div>
  );
};

export default WeakList;
