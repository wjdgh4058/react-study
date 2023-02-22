import React from "react";
import "app/App.css";
import { CounterFunction, CounterClass, Button, LifeCycle } from "components";
import { ReactComponent as ReactLogo } from "assets/logo.svg";

function renderComponents(isVisible) {
  if (isVisible) {
    return (
      <>
        <h2>함수 컴포넌트</h2>
        <CounterFunction count={2} />
        <h2>클래스 컴포넌트</h2>
        <CounterClass step={3} />
        <h2>버튼 컴포넌트</h2>
        <Button />
      </>
    );
  } else {
    return null;
  }
}

function App() {
  // 관심사의 분리
  // 앱의 로딩 상태
  // 로딩 이후, 데이터 관리
  // 로딩이후, 통신 샐페 -> 오류 처리

  // component state = {isLoading, error, data}

  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState("");

  // React 상태 관리 훅(Hook)
  // 상태 변수(state variable)
  const [isVisibleComponents, updateIsVisibleComponents] =
    React.useState(false);

  // 함수 안에 이벤트 핸들러 작성
  const handleToggleVisible = () => {
    updateIsVisibleComponents(!isVisibleComponents);
  };

  return (
    <div className="App">
      <button type="button" onClick={handleToggleVisible}>
        {isVisibleComponents.toString()}
      </button>
      <h2>라이프 사이클</h2>
      <ReactLogo />
      {isVisibleComponents && <LifeCycle />}
      {renderComponents(isVisibleComponents)}
    </div>
  );
}

export default App;
