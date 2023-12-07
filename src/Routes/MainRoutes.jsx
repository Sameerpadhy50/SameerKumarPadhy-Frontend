import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/'>HomePage</Route>
            <Route path='/login'>Login</Route>
        </Routes>
    </div>
  )
}
