import React from "react";
import Button from "./Button";

interface KeypadProps {
  onDigitClick: (digit: string) => void;
  onOperationClick: (op: string) => void;
  onDecimalClick: () => void;
  onEqualsClick: () => void;
  onClearClick: () => void;
  onToggleSign: () => void;
  onPercentClick: () => void;
}

const Keypad: React.FC<KeypadProps> = ({
  onDigitClick,
  onOperationClick,
  onDecimalClick,
  onEqualsClick,
  onClearClick,
  onToggleSign,
  onPercentClick,
}) => {
  return (
    <div className="grid grid-cols-4 gap-3 p-5 bg-gray-900">
      <Button onClick={onClearClick} color="gray">
        C
      </Button>
      <Button onClick={onToggleSign} color="gray">
        ±
      </Button>
      <Button onClick={onPercentClick} color="gray">
        %
      </Button>
      <Button onClick={() => onOperationClick("÷")} color="orange">
        ÷
      </Button>

      <Button onClick={() => onDigitClick("7")}>7</Button>
      <Button onClick={() => onDigitClick("8")}>8</Button>
      <Button onClick={() => onDigitClick("9")}>9</Button>
      <Button onClick={() => onOperationClick("×")} color="orange">
        ×
      </Button>

      <Button onClick={() => onDigitClick("4")}>4</Button>
      <Button onClick={() => onDigitClick("5")}>5</Button>
      <Button onClick={() => onDigitClick("6")}>6</Button>
      <Button onClick={() => onOperationClick("-")} color="orange">
        -
      </Button>

      <Button onClick={() => onDigitClick("1")}>1</Button>
      <Button onClick={() => onDigitClick("2")}>2</Button>
      <Button onClick={() => onDigitClick("3")}>3</Button>
      <Button onClick={() => onOperationClick("+")} color="orange">
        +
      </Button>

      <Button onClick={() => onDigitClick("0")} size="double">
        0
      </Button>
      <Button onClick={onDecimalClick}>.</Button>
      <Button onClick={onEqualsClick} color="orange">
        =
      </Button>
    </div>
  );
};

export default Keypad;
