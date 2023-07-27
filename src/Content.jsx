import React, { useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);
  return (
    <main>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          item is {count}
        </button>
        <p>Edit no. of list items.</p>
      </div>
    </main>
  );
};

export default Content;
