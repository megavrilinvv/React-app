import React from "react";

const Events = () => {
  return (
    <>
      <h1>Введи PIN</h1>
      <input onChange={(event) => console.log(event.target.value)} />
    </>
  );
};

export default Events;
