import React from 'react'
import { render } from 'react-dom'

import App from '../../src/components/App'

const { describe, it, expect } = window
const div = document.createElement('div')
document.body.appendChild(div)

describe('App', () => {
  it('renders correctly', function(done) {
    this.timeout(10000)
    render(<App callback={done} />, div)
  })
})
