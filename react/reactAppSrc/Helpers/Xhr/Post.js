'use strict'

/**
 *  Xhr POST Helpers.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import { errMsg, restListener } from './Shared'

export const asyncDataPost = (url, data, token) => {
    return new Promise((res, rej) => {
        const what = 'asyncDataPost'
        try {
            let r = restListener(res, rej, what, 'success', 'fail')
            r.open('POST', url, true)
            r.setRequestHeader('Content-type', 'application/json')
            //r.setRequestHeader('Access-Control-Allow-Headers', '*')
            //r.setRequestHeader('Allow-Control-Allow-Origin', '*')
            r.withCredentials = false
            if (!token) r.setRequestHeader('Authorization', 'bearer ' + token)
            r.send(data)
        } catch (ex) {
            console.log(errMsg(what, ex))
        }
    })
}