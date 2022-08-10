import { ReactElement } from "react";
import { ShoppingCart } from "phosphor-react";

import { CounterButtons } from "components";
import { formatPrice } from "utils/formatPrice";
import { Coffee } from "types";

import {
  CartButton,
  Container,
  Footer,
  Label,
  LabelsContainer,
  Price,
  FooterButtons,
} from "pages/LandingPage/components/CoffeeCard/styles";

type CoffeeCardProps = {
  coffee: Coffee;
};

export const CoffeeCard = ({ coffee }: CoffeeCardProps): ReactElement => {
  return (
    <Container>
      <img src={coffee.image} alt={coffee.name} />

      <LabelsContainer>
        {coffee.labels.map((label) => (
          <Label key={label}>{label}</Label>
        ))}
      </LabelsContainer>

      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>

      <Footer>
        <Price>
          <span>$</span>
          <span>{formatPrice(coffee.price)}</span>
        </Price>

        <FooterButtons>
          <CounterButtons />
          <CartButton type="button">
            <ShoppingCart size={24} weight="fill" />
          </CartButton>
        </FooterButtons>
      </Footer>
    </Container>
  );
};
