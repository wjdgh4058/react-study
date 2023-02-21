import React from "react";
function Counter(props) {
  // React Hook
  // 상태 관리 React.useState()

  const [count, setCount] = React.useState(props.count);
  // console.log(count, setCount);

  // 함수 안에 이벤트 청취 함수를 작성합니다.
  const handleIncrement = () => {
    // console.log("카운트 값 증가");
    setCount(count + props.step);
  };
  const handleDecrement = () => {
    // console.log("카운트 값 감소");
    setCount(count - props.step);
  };
  return (
    <div className="Counter">
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <output>{count}</output>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

Counter.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 3,
};

export default Counter;
