import React from "react";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <Calculator />
    </div>
  );
};

export default App;
