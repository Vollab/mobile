import Text from './index'

import { render } from '@testing-library/react-native'
import React from 'react'

describe('Text', () => {
  it('Text have children content', async () => {
    const { findByText } = render(<Text>Test</Text>)

    await findByText('Test')
  })
})
