function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = greet; // Ensure the function is exported for use in other files

if (require.main === module) {
    console.log(greet('World')); 
}