import './Footer.css'

function Footer() {
  return (
    <>
      <div id="footer">
        <div className='grid grid-cols-12 bar-colour-grey'>
          <img className='col-span-2 w-20 h-20' src="/src/assets/react.svg"></img>
          <h1 className='col-span-8'>AW Code Solutions Ltd.</h1>
        </div>
      </div>
    </>
  )
}

export default Footer