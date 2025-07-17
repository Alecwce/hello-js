// 1. Array: lista de notas
const notas = [7, 9, 6];
notas.push(10);
console.log('Notas:', notas);

// 2. Object: perfil
const perfil = { nombre: 'Luis', edad: 22 };
perfil.edad += 1;
console.log('Perfil:', perfil);

// 3. Map: claves mixtas
const mapa = new Map();
mapa.set('curso', 'JS');
mapa.set(1, 'módulo 1');
console.log('Mapa clave 1:', mapa.get(1));

// 4. Set: tags únicos
const tags = new Set(['js', 'es6']);
tags.add('js'); // duplicado
tags.add('node');
console.log('Tags únicos:', tags.size);
