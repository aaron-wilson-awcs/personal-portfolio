import './App.css'

function Header() {
  return (
    <>
      <div className='grid grid-cols-12'>
        <img className='col-span-2 w-20 h-20' src="/src/assets/react.svg"></img>
        <h1 className='col-span-8'>AW Code Solutions Ltd.</h1>
      </div>
      <img src="/src/assets/mountain-snowboarding.jpeg" alt="cover-image" className="w-full absolute left-0 z-0 h-2/5"></img>
      <div>
        <div className="flex items-center justify-center relative z-10 mb-2.5">
          <img src="/src/assets/les-deux-penguin.jpeg" alt="avatar-image" className="absolute top-80 w-80 border-4 border-solid border-white rounded-full object-cover"></img>
        </div>
      </div>
    </>
  )
}

export default Header
