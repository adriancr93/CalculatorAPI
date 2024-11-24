exports.formatResponse = (error, data = null) => {
    return {
        error: error ? error : null,
        data: data,
        timestamp: new Date().toISOString(),
    };
};