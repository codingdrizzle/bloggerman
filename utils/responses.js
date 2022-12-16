exports.onSuccessResponse = function (res, msg) {
    const response = {
        status: 1,
        message: msg,
    }
    return res.status(200).json(response)
}

exports.onSuccessDataResponse = function (res, data, message) {
    const response = {
        status: 1,
        success: true,
        message,
        data: data,
    }
    return res.status(200).json(response)
}

exports.onErrorResponse = function (res, msg) {
    const data = {
        status: 0,
        message: msg,
    }
    return res.status(500).json(data)
}

exports.onBadRequest = function (res, msg) {
    const response = {
        status: 0,
        message: msg,
    }
    return res.status(400).json(response)
}

exports.onNotFoundResponse = function (res, msg) {
    const response = {
        status: 0,
        message: msg,
    }
    return res.status(404).json(response)
}