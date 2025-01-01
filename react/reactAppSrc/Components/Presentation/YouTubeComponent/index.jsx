'use strict'

/**
 *  Video Component.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import './YouTubeComponent.css'

/*
    There appears to be an exception thrown when accessing Youtube.

    Appears within many webapps throughout the internet.
    For example: https://youtubeembedcode.com/en/
    
    The culprit: www-embed-player.js

    The exception is internal to that library.

    CORS-related but doesn't seem to impact anything.
 */
export default ({className, url}) =>
    <div className={`${className} youtube`}>
        <iframe width="100%" height="100%" src={url} referrerPolicy={"origin-when-cross-origin"} credentialless="true" allow="autoplay; encrypted-media" allowFullScreen/>
    </div>