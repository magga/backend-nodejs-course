var command = process.argv[2];

if (command === "add") {
    console.log("Adding new weather");
} else if (command === "list") {
    console.log("Listing all weather");
} else if (command === "read") {
    console.log("Reading weather");
} else if (command === "remove") {
    console.log("Removing weather");
} else {
    console.log("Command Not Recognized");
} 