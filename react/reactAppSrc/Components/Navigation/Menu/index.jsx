'use strict'

/**
 *  Navigation Menu.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { EVENTS_PATH, BASE_PATH, HOME_PATH } from '../../../Constants'

export class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.home = React.createRef()
        this.events = React.createRef()
        this.state = {
            active: BASE_PATH
        }
    }

    render() {
        const { active } = this.state

        return (
            <nav>
                <ul>
                    <li className="home">
                        <Link onClick={() => { this.setState({ active: HOME_PATH }) }}
                            ref={this.home}
                            className={(active === BASE_PATH || active === HOME_PATH) ? 'active' : 'inactive'}
                            to={HOME_PATH}>Home</Link>
                    </li>

                    <li className="events">
                        <Link onClick={() => { this.setState({ active: EVENTS_PATH }) }}
                            ref={this.events}
                            className={(active === EVENTS_PATH) ? 'active' : 'inactive'}
                            to={EVENTS_PATH}>Events</Link>
                    </li>
                </ul>
            </nav>)
    }
}