import { useState } from "react";

// imn : import no module
// import './Counter.style.css';

// imd : import destrucring
// imp : import
import styles from "./Counter.module.css";

function Counter({ min = 1, count: initialCount = 1, max = 10, step = 1 }) {
  let [count, setCount] = useState(initialCount);
  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);

  return (
    <div className={styles.container}>
      <button
        type="button"
        aria-label="카운트 1 증가"
        onClick={handleIncrement}
      >
        +
      </button>
      <output>{count}</output>
      <button
        type="button"
        aria-label="카운트 1 감소"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
