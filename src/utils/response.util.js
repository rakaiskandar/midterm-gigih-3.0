const api_response = (status, req, res, body) => {
    return res.status(status).json(body);
}

module.exports = {
    api_response
};