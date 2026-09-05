//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const time_ahead = 1000000000
  return new Date(date.getTime() + time_ahead * 1000)
};
