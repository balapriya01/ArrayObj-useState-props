import { useState } from "react";

export const BoxItem = ({ bgcolor, children }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {" "}
      <div className={show ? "" : "hidden"}>
        <div className={`box ${bgcolor}`}>
          {children}
          <button className="toggle hide" onClick={() => setShow(!show)}>
            Hide
          </button>
        </div>
      </div>
    </>
  );
};
