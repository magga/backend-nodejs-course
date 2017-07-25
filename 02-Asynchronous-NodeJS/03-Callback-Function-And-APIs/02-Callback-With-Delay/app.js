var getUser = (id, callback) => {
    setTimeout(() => {
        var user = {
            id: id,
            name: "magga"
        };
        
        callback(user);
    }, 3000);
};

getUser(24, (userObject) => {
    console.log(userObject);
});