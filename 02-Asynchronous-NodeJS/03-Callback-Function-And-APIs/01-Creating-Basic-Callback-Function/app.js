var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "magga"
    };

    callback(user);
};

getUser(24, (userObject) => {
    console.log(userObject);
});