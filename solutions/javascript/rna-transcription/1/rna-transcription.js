//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  if (dna.length === 0) {
    return ''
  }
  let result = ''

  for (const ele of dna) {
    switch (ele) {
        case 'G':
          result += 'C'
          break
      case 'C':
        result += 'G'
        break;
      case 'T':
        result += 'A'
        break
      case 'A':
        result += 'U'
        break;
    }
  }

  return result
  
};
