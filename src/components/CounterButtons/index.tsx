import { ReactElement, useEffect, useState } from "react";
import { Minus, Plus } from "phosphor-react";

import {
  MAXIMUM_AMOUNT_OF_COFFEES,
  MINIMUM_AMOUNT_OF_COFFEES,
} from "constants";

import { Container } from "components/CounterButtons/styles";

type CounterButtonsProps = {
  amount: number;
  onChange: (amount: number) => void;
};

export const CounterButtons = ({
  amount,
  onChange,
}: CounterButtonsProps): ReactElement => {
  const [count, setCount] = useState(amount);

  const handleButtonClick = (type: "minus" | "plus"): void => {
    if (
      (count <= MINIMUM_AMOUNT_OF_COFFEES && type === "minus") ||
      (count >= MAXIMUM_AMOUNT_OF_COFFEES && type === "plus")
    ) {
      return;
    }

    setCount((prevState) => (type === "minus" ? prevState - 1 : prevState + 1));
  };

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  return (
    <Container>
      <button
        type="button"
        onClick={() => handleButtonClick("minus")}
        disabled={count <= MINIMUM_AMOUNT_OF_COFFEES}
      >
        <Minus weight="bold" />
      </button>
      <span>{count}</span>
      <button
        type="button"
        onClick={() => handleButtonClick("plus")}
        disabled={count >= MAXIMUM_AMOUNT_OF_COFFEES}
      >
        <Plus weight="bold" />
      </button>
    </Container>
  );
};
