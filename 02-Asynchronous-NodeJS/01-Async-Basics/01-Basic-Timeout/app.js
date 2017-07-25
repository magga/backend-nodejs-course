console.log("Starting app");

setTimeout(() => {
    console.log("Fired after 2 seconds");
}, 2000);

setTimeout(() => {
    console.log("Fired after 0 seconds");
}, 0);

console.log("Finishing app");