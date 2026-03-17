function abcd(naam, ...remaining) {
  console.log("Hello dear,", naam);
  console.log("IT WILL BECOMES IN ARRAY FORMAT", remaining);
  console.log(remaining[0]);
  console.log(remaining[1]);
  console.log(remaining[2]);
  console.log(remaining.length);
}
abcd("OM", "Krish", "Khushi", "Bhagyesh");
