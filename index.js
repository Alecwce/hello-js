// ❌ var (funciona, pero confuso)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var i =', i), 100);
}
// → imprime tres veces “var i = 3”

// ✅ let (scope por bloques)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let j =', j), 100);
}
// → 0, 1, 2

// ✅ const → referencia inmutable
const PI = 3.1416;
// PI = 3;     // ❌ TypeError: Assignment to constant variable

const user = { name: 'Ana' };
user.name = 'Luis'; // ✔ OK: el objeto sigue siendo el mismo
console.log(user); // { name: 'Luis' }
