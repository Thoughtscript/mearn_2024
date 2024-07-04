'use strict'

/**
 *  Shared Xhr abstractions.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

const successMsg = (what, onSuccessMsg) => what + ' successful: ' + onSuccessMsg + '!'

const failMsg = (what, onFailMsg) => what + ' failed: ' + onFailMsg + '!'

export const errMsg = (what, ex) => what + ' encountered an exception: ' + ex + '!'

export const restListener = (res, rej, what, onSuccessMsg, onFailMsg) => {
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // console.log(successMsg(what, onSuccessMsg))
                return res(xhr.response)
            } else console.log(failMsg(what, onFailMsg))
        }
    }

    return xhr
}

export const scramble = (n, q, s) => {
    let r = '', tr = ''
    for (let i = 0; i < s.length; i++) {
        r += `|${(s.charCodeAt(i) + n) * q}`
    }

    let z = Math.floor(Math.random() * 100), w = 0
    while (z > 0) {
        w += Math.floor(Math.random() * 100)
        z--
    }

    const R = r.split('|')
    for (let i = 1; i < R.length; i++) {
        tr += `|${parseInt(R[i]) + w}`
    }

    return `${w}${tr}`
}

export const unscramble = (n, q, s) => {
    let x = s.split("|"), r = ''
    const F = parseInt(x[0])

    for (let i = 1; i < x.length; i++) {
        const P = parseInt(x[i])
        r += String.fromCharCode((P - F)  / q - n)
    }

    return r
}