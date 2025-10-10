import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './modules/Header/Header.tsx'
import SideBar from './modules/SideBar/SideBar.tsx'
import Content from './modules/Content/Content.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div id="header" className='section'>
      <Header />
    </div>
    <div id="content" className='section'>
      <SideBar />
      <Content />
    </div>
    <div id="footer" className='section'>
      {/* <Footer /> */}
    </div>
  </StrictMode>,
)
