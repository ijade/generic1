import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => (
    <div>
    <p>pepega</p>
    </div>
)
const App = () => (
  <div>
    <p>Hello world</p>
    <Hello />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

