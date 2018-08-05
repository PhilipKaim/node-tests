module.exports.add = (a, b) => a + b;

module.exports.square = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    var splitFullName = fullName.split(' ');
    user.firstName = splitFullName[0];
    user.lastName = splitFullName[1];
    return user;
};