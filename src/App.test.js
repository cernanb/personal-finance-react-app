import React from 'react'
import ReactDOM from 'react-dom'
import fetchMock from 'fetch-mock'
import App from './App'
import Enzyme from 'enzyme'
import { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })

fetchMock.get(
  `*`,
  JSON.stringify({ Rick: `I turned myself into a pickle, Morty!` })
)

test(`on a React component that loads data into state in componentDidMount`, async () => {
  const wrapper = shallow(<App />)

  await wrapper.instance().componentDidMount()
  // Much less robust, you need to ensure that the sleeping time is greater than the time it takes to resolve the
  // fetch, play with values less than or greater than L18 above to see how the component changes
  // await sleep(DELAY_MS - 1000)
  // await sleep(DELAY_MS + 1000)

  // State can be tested here, but not DOM properties, because setState happens in... the future!
  // This is more of an Enzyme thing, I suspect
  expect(wrapper.state(`data`)).toHaveProperty(
    `Rick`,
    `I turned myself into a pickle, Morty!`
  )
  expect(wrapper.text()).not.toEqual(
    JSON.stringify({ Rick: `I turned myself into a pickle, Morty!` })
  )

  // Force update to sync component with state
  wrapper.update()
  expect(wrapper.text()).toBe(
    `{"Rick":"I turned myself into a pickle, Morty!"}`
  )
})
