export const formatPrice = (price: number, showCurrency: boolean = true) => {
  return !showCurrency
    ? `${price.toFixed(2)}`
    : new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
};
