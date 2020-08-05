function hasNumber(myString) {
  return /^\d+$/.test(myString);
}
console.log(hasNumber("21-4"));
