'use strict'

/**
 *  RailsPage page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import UnsplashSection from '../../Presentation/UnsplashSection'
import './EventsPage.css'
import { API } from '../../../Constants'
import { asyncGet } from '../../../Helpers/Xhr/Get'
import { ok } from '../../../Helpers/Generic'

export class EventsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            ...this.props
        }
    }

    componentDidMount() {
        try {
            asyncGet(API).then(events => {
                if (ok(events)) {
                    const parsed = JSON.parse(events)
                    this.setState({
                        events: JSON.parse(parsed.data)
                    })
                }
            })

        } catch (ex) {
            console.log(ex)
        }
    }

    render() {
        const { events } = this.state

        return (
            <main className="landingPage">
                <UnsplashSection photo={'1559251606-c623743a6d76'} ixid={'M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} w={'3870'}/>
                
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>_ID</th>
                                <th>Name</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                (events).map(a =>
                                    <tr key={a["_id"]}>
                                        <th>{a["_id"]}</th>
                                        <th>{a["name"]}</th>
                                        <th>{a["msg"]}</th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
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
            </main>
        )
    }
}