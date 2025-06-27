import React from "react";

interface DisplayProps {
  value: string;
  operation: string | null;
  storedValue: number | null;
}

const Display: React.FC<DisplayProps> = ({ value, operation, storedValue }) => {
  return (
    <div className="p-6">
      <div className="text-gray-400 text-right text-lg mb-1 h-6">
        {storedValue !== null && (
          <>
            {storedValue} {operation}
          </>
        )}
      </div>
      <div className="text-white text-right text-4xl font-light mb-4 whitespace-nowrap">
        {value}
      </div>
    </div>
  );
};

export default Display;
