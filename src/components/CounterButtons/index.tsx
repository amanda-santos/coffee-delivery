import { ReactElement, useState } from "react";
import { Minus, Plus } from "phosphor-react";

import {
  MAXIMUM_AMOUNT_OF_COFFEES,
  MINIMUM_AMOUNT_OF_COFFEES,
} from "constants";

import { Container } from "components/CounterButtons/styles";

export const CounterButtons = (): ReactElement => {
  const [count, setCount] = useState(0);

  const handleButtonClick = (type: "minus" | "plus"): void => {
    if (
      (count <= MINIMUM_AMOUNT_OF_COFFEES && type === "minus") ||
      (count >= MAXIMUM_AMOUNT_OF_COFFEES && type === "plus")
    ) {
      return;
    }

    setCount((prevState) => (type === "minus" ? prevState - 1 : prevState + 1));
  };

  return (
    <Container>
      <button type="button" onClick={() => handleButtonClick("minus")}>
        <Minus weight="bold" />
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => handleButtonClick("plus")}>
        <Plus weight="bold" />
      </button>
    </Container>
  );
};
