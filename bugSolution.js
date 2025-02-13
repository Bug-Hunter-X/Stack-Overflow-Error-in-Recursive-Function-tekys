function foo(a, b) {
  while (a > 0) {
    b += a;
    a -= 1;
  }
  return b;
}