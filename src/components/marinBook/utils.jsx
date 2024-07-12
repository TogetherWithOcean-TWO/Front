export const getMarinImageSource = (itemName) => {
  switch (itemName) {
    case "vaquita":
      return require("../../assets/images/marinBook/vaquita.png");
    default:
      return null;
  }
};
