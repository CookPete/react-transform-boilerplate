import React from 'react'
import { renderIntoDocument } from 'react-addons-test-utils'

import App from '../../src/components/App'

const { describe, it, expect } = window

describe('App', () => {
  it('renders correctly', () => {
    const result = renderIntoDocument(<App />)
    expect(result).to.exist
  })
})
