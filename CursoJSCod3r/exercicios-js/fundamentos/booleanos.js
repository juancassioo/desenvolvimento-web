let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1 // deixou de ser boolean
// aqui é confuso ! -> negação e !! negou duas vezes e retornou true
console.log(!!isAtivo);

console.log("os verdadeiros");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = Infinity));

console.log("os falsos");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("pra finalizar");
console.log(!!('' || null || 0 || ' ')); // ou -> um desses deve ser true

// muito importante para verificar se uma variável (campo) está vazia por exemplo
let nome = ''
console.log(!!nome);
console.log(nome || 'Desconhecido'); // caso o nome não esteja válido (false), retorne o segundo atributo

