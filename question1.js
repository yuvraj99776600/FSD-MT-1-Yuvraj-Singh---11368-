function nonrepeating(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let a = str[i];
    if (map.has(a)) {
      map.set(a, map.get(a) + 1);
    } else {
      map.set(a, 1);
    }
  }

  for (let i = 0; i < str.length; i++) {
    let a = str[i];
    if (map.get(a) == 1) {
      return a;
    }
  }

  return null;
}


