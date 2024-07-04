'use strict'

/**
 *  LandingPage page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import UnsplashSection from '../UnsplashSection'
import './LandingPage.css'
import YouTubeComponent from "../YouTubeComponent";

export default () =>
    <main className="landingPage">
        <UnsplashSection photo={'1559251606-c623743a6d76'} ixid={'M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} w={'3870'}/>

        <div className="content">
            <div className="text">
                Lorem Ipsum
            </div>
        </div>
        <div className="content">
            <div className="text">
                Lorem Ipsum
            </div>
        </div>
        <div className="content">
            <div className="text">
                Lorem Ipsum
            </div>
        </div>
        
        <YouTubeComponent className="more" url={"https://www.youtube.com/embed/LXNYWb3reeg"}/>
    </main>
