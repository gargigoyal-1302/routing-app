import React from "react";


const Home = () => {
  const loginHandler=()=>{
    localStorage.setItem("isLogin",true);
  }
    

  return (
    <>
      
      <h1>Here is your home page</h1>
      <button onClick={loginHandler}>Login </button>
    </>
  );
};

export default Home;