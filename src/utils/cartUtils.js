export const formatOptions = (options) => {
  const parts = [`size: ${options.size}`];

  if (options.extras && options.extras.length > 0) {
    parts.push(`extras: ${options.extras.join(", ")}`);
  }

  return parts.join(" ● ");
};

export const calculateTotalPrice = (basePrice, size, extras, quantity) => {
  const sizeMultiplier = size === "M" ? 1.2 : size === "L" ? 1.5 : 1;
  const extrasPrice = extras.length * 0.5;
  const totalPrice = (basePrice * sizeMultiplier + extrasPrice) * quantity;
  return totalPrice;
};
