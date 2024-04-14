//Help Functions

//Turns the first letter of a String to a Capital letter
export const capitalizeFirstLetter = (string: String) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  //Turns a number to a given length of digits
  export const padNumber = (n: number, l: number) => `${n}`.padStart(l, "0");