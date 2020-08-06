export default function (maybeNumber) {
  const string = maybeNumber.toString();
  return `+${string[0]} (${string.slice(1, 4)}) ${string.slice(
    4,
    7
  )}-${string.slice(7, 9)}-${string.slice(9, 11)}`;
}
