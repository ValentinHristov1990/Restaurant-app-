export const formatOptions = (extras = [], size = "S") => {
  const parts = [`size: ${size}`];

  if (extras.length > 0) {
    parts.push(`extras: ${extras.join(", ")}`);
  }

  return parts.join(" ● ");
};

export const calculateUnitPrice = (basePrice, size, extras = []) => {
  const sizeMultiplier = size === "M" ? 1.2 : size === "L" ? 1.5 : 1;
  const extrasPrice = extras.length * 0.5;
  return basePrice * sizeMultiplier + extrasPrice;
};

export const calculatePrice = calculateUnitPrice;

export const calculateTotalPrice = (basePrice, size, extras, quantity) => {
  return calculateUnitPrice(basePrice, size, extras) * quantity;
};

export const AVAILABLE_EXTRAS = [
  "Extra Cheese",
  "Spicy sauce",
  "Bacon",
  "Avocado",
  "Jalapenos",
];
