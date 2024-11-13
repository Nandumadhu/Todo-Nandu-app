import {BrowserRouter, Route, Routes} from 'react-router-dom'

import SimpleTodos from './components/SimpleTodos'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" component={LoginForm} />

      <Route path="/" component={SimpleTodos} />
    </Routes>
  </BrowserRouter>
)

export default App
