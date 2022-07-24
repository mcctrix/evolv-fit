export const NumberFormatIntoK = (num: number) => {
  let numStringVersion = num.toString();

  if (numStringVersion[1] === "0") {
    return `${numStringVersion[0]}k`;
  }
  return `${numStringVersion[0]}.${numStringVersion[1]}k`;
};
export default NumberFormatIntoK;
