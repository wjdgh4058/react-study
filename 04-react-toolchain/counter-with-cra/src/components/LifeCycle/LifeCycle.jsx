// Component's Life Cycle (컴포넌트의 생명주기)
import React from "react";

class LifeCycle extends React.component {
  state = {
    message: "loading....",
  };

  render() {
    return <div className="LifeCycle">컴포넌트의 생명 주기</div>;
  }
}

export default LifeCycle;
