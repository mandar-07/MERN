const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Usage: node app.js <name> <age>");
    process.exit(1);
}

const name = args[0];
const age = Number(args[1]);

console.log(`Hello, ${name}!`);
console.log(`You are ${age} years old.`);
console.log(`Node version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Current directory: ${process.cwd()}`);                     