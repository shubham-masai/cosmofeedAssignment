import React from 'react'
import AllRoutes from './components/AllRoutes'
import Provider from './components/Provider'

const App = () => {
  return (
    <div>
      <Provider>
        <AllRoutes />
      </Provider>
    </div>
  )
}

export default App