export const calculateDiscountedPrice = (
  price: number,
  discountPercentage?: number,
): string => {
  if (!discountPercentage || discountPercentage <= 0) {
    return price.toFixed(2);
  }

  return (price - price * (discountPercentage / 100)).toFixed(2);
};
