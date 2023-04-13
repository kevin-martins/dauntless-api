export const capitalize = (str: string): string => {
  //   const lowercase = str.toLocaleLowerCase();
  //   return (
  //     lowercase[0].toUpperCase() +
  //     lowercase.split("").splice(1, str.length).join("")
  //   );
  return str.split("").reduce((acc, curr, i) => {
    if (i === 0) {
      acc += curr.toUpperCase();
    } else {
      acc += curr.toLowerCase();
    }
    return acc;
  }, "");
};
