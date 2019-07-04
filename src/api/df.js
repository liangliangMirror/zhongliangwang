function df({ status = 1, data = [], msg = 'succes' } = {}) {
    if (status === 0) msg = 'fail';
    return {
        status,
        data,
        msg
    }
}

exports.df = df;