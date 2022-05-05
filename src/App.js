import React from "react";
// import UseHook from './components/UseHook';
// import OwnHook from './components/OwnHook';
import Parent from "./components/Parent";
import CallParent from "./components/CallParent";
function App() {
  return (
    <div className="App">
      {/* <h2>Hooks</h2>
      <UseHook />
      <OwnHook /> */}
      <Parent />
      <CallParent />
    </div>
  );
}

export default App;
