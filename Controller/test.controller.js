exports.read = async (req, res, next) => {
    res.json('GET Method');
}
exports.create = async (req, res, next) => {
    res.json('POST Method');
}
exports.update = async (req, res, next) => {
    res.json('PUT Method');
}
exports.patch = async (req, res, next) => {
    res.json('PATCH Method');
}
exports.delete = async (req, res, next) => {
    res.json('DELETE Method');
}