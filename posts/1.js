// require.js

function requireData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url == 'afe1') {
                resolve('afe1')
            } else {
                reject('error')
            }
        }, 1000)
    })
}

// main.js

const promise = requireData('afe1')
promise.then(
    (res) => {
        'res', res
    },
    (err) => {
        'err', err
    }
)

promise.catch(() => {})



