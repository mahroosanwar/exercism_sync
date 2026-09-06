//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase()
  return [...'abcdefghijklmnopqrstuvwxyz'].every(letter => sentence.includes(letter))
};
