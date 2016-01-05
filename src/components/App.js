import React, { Component } from 'react'

import 'normalize.css/normalize.css'
import classNames from './App.scss'

export default class App extends Component {
  componentDidMount() {
    console.log('callback in 1 sec')
    setTimeout(this.props.callback, 1000)
  }
  render () {
    console.log('App render')
    return (
      <div className={classNames.app}>
        Hello, world.
      </div>
    )
  }
}
