// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import { Link } from 'react-router-dom'

export class AppTab extends Component {
  render () {
    return (
      <div className="hero-foot" key="tab">
        <nav className="tabs is-toggle is-fullwidth">
          <ul>
            <li className={this.props.location === '/chat' ? 'is-active' : ''}>
              <Link to={'/chat'}>
                <span>{T.translate('chat.title')}</span>
              </Link>
            </li>

            <li className={this.props.location === '/settings' ? 'is-active' : ''}>
              <Link to={'/settings'}>
                <span>
                  {T.translate('settings.title')}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
