import React, { Component } from 'react'
import load from 'load-script'

import 'normalize.css/normalize.css'
import classNames from './App.scss'

export default class App extends Component {
  componentDidMount() {
    // console.log('callback in 1 sec')
    // setTimeout(this.props.callback, 1000)

    load('https://www.youtube.com/iframe_api')
    window.onYouTubeIframeAPIReady = () => {
      console.log('new YT.player')
      new window.YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: { 'autoplay': 1, 'controls': 0 },
        events: {
          onReady: () => { console.log('onReady'); this.props.callback() },
          onStateChange: event => console.log('onStateChange', event.data)
        }
      });
    }

  }
  render () {
    console.log('App render')
    return (
      <div className={classNames.app}>
        Hello, world.
        <div id='player' />
      </div>
    )
  }
}
