var now = new Date();

module.exports = {
    NOW: new Date(),
    TIMESTAMP: now.getFullYear() + '-' + (("0" + (now.getMonth() + 1)).slice(-2)) + '-' + ("0" + now.getDate()).slice(-2),
};
