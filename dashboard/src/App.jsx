import { Outlet } from 'react-router-dom'
import './App.css'
import { SideBar } from './components/SideBar'
import { TopBar } from './components/TopBar'
import { Footer } from './components/Footer'

function App() {

  return (
    <div id="wrapper">
    <SideBar />

    <div id="content-wrapper">
      <div id="content">
        <TopBar />
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>

          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  </div>
  )
}

export default App
