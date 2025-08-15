import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from '@/components/menu/Navbar.jsx'
import { Body } from '@/components/Body.jsx'
import { Footer } from '@/components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gradient-to-b from-primary to-secondary h-screen px-[50px] py-[37px]">
      <div className='grid grid-cols-1 md:grid-cols-[400px_auto] h-full bg-gradient-to-b from-bg-primary-dash to-bg-secondary-dash rounded-[25px] shadow-lg p-[40px]'>
        <Navbar />
        <Body />
      </div>
    </div>

  )
}

export default App
