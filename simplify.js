function simplifyNumber(number) {
  if (number < 0) {
    return 0;
  } else if (number > 10) {
    return "sok";
  } else {
    return Math.floor(number);
  }
}