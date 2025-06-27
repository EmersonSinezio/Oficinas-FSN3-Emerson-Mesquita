import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);

  const handleDigitClick = (digit: string) => {
    if (waitingForOperand) {
      setDisplayValue(digit);
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  };

  const handleDecimalClick = () => {
    if (waitingForOperand) {
      setDisplayValue("0.");
      setWaitingForOperand(false);
    } else if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const handleOperationClick = (op: string) => {
    const inputValue = parseFloat(displayValue);

    if (storedValue === null) {
      setStoredValue(inputValue);
    } else if (operation) {
      const result = performCalculation();
      setStoredValue(result);
      setDisplayValue(String(result));
    }

    setOperation(op);
    setWaitingForOperand(true);
  };

  const performCalculation = (): number => {
    const stored = storedValue ?? 0;
    const input = parseFloat(displayValue);

    switch (operation) {
      case "+":
        return stored + input;
      case "-":
        return stored - input;
      case "×":
        return stored * input;
      case "÷":
        if (input === 0) {
          return NaN;
        }
        return stored / input;
      default:
        return input;
    }
  };

  const handleEqualsClick = () => {
    if (operation === null || storedValue === null) return;

    const result = performCalculation();
    setDisplayValue(String(result));
    setStoredValue(result);
    setOperation(null);
    setWaitingForOperand(true);
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setStoredValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  const handleToggleSign = () => {
    setDisplayValue(
      displayValue.startsWith("-") ? displayValue.slice(1) : "-" + displayValue
    );
  };

  const handlePercentClick = () => {
    const value = parseFloat(displayValue);
    setDisplayValue(String(value / 100));
  };

  return (
    <div className="w-full max-w-sm bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
      <Display
        value={displayValue}
        operation={operation}
        storedValue={storedValue}
      />
      <Keypad
        onDigitClick={handleDigitClick}
        onOperationClick={handleOperationClick}
        onDecimalClick={handleDecimalClick}
        onEqualsClick={handleEqualsClick}
        onClearClick={handleClearClick}
        onToggleSign={handleToggleSign}
        onPercentClick={handlePercentClick}
      />
    </div>
  );
};

export default Calculator;
