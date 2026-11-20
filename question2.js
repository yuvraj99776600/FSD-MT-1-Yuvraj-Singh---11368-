function checkAnagram(a, b) {
  if (a.length != b.length) {
    return false;
  }

  let c = {};

  for (let i = 0; i < a.length; i++) {
    let x = a[i];
    if (c[x]) {
      c[x]++;
    } else {
      c[x] = 1;
    }
  }

  for (let j = 0; j < b.length; j++) {
    let y = b[j];
    if (!c[y]) {
      return false;
    }
    c[y]--;
  }

  return true;
}
