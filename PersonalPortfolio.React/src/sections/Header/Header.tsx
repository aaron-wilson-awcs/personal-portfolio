import './Header.css'

function Header() {
  return (
    <>
      <div className='bar-colour-grey h-16'>
        <h1 className='text-center'>Personal Portfolio</h1>
      </div>

      <div className=''>
        <div id='cover-image'>
          <img src="/src/assets/mountain-snowboarding.jpeg" alt="cover-image" className="absolute top-bottom-border w-full overflow-x-hidden left-0 h-2/5 mb-52"></img>
        </div>
        <div className='w-full'>
          <div className="flex items-center justify-center relative z-10 mb-2.5">
            <img src="/src/assets/les-deux-penguin.jpeg" alt="avatar-image" className="absolute top-80 w-96 border-4 border-solid border-white rounded-full object-fit"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
