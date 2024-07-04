'use strict'

/**
 *  Generic Helpers.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

export const mapToArr = mp => {
    let result = []

    const K = Object.keys(mp)

    for (let i = 0; i < K.length; i++) {
        let temp = [K[i], mp[K[i]]]
        result.push(temp)
    }

    return result
}

export const ok = (val) => JSON.parse(val).status === 200