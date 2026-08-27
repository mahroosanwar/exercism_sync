//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (bands) => {
  const [firstBand, secondBand] = bands
  return Number(`${COLOR.indexOf(firstBand)}${COLOR.indexOf(secondBand)}`)
};

export const COLOR = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
