//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-z]/g, '')
  const unique_letters = new Set(sentence)
  return unique_letters.size === 26
};
