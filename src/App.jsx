import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'

import route from './router'
import store from './store'

const App = memo(() => {
  return (
    <div className='app'>
      <div className="header">header</div>
      <div className="page">
        {useRoutes(route)}
      </div>
      <div className="footer">footer</div>
    </div>
  )
})

export default App