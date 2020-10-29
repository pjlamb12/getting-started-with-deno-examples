const [personName] = Deno.args;

console.log('Hello ', personName);
sayHello(personName);

function sayHello(name) {
	console.log(`Hello ${name}!`);
}
