module.exports = (res, errObj, statusCode = 400) => {
    let error = new Error();
    error.code = errObj.code;
    error.message = errObj.message;
    error.status = statusCode
    return res.status(statusCode).json({ error })
}