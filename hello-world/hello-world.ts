const [personName] = Deno.args;

console.log('Hello ', personName);
sayHello(personName);

function sayHello(name: string) {
	console.log(`Hello ${name}!`);
}
