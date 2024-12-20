import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NotFound } from './pages/404'
import MainPage from './pages/MainPage'
import Header from './modules/Header'
import FillingPage from './pages/FillingPage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/preenchimentos" element={<FillingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
