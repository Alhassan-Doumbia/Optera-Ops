import React from 'react'
import OverView from './view/OverView'
import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <div className='w-[500px] min-h-[300px]  items-center justify-center'>
      <Navbar></Navbar>
        <section className='w-[500px] min-h-[300px]  h-fit rounded-md'>
            <OverView></OverView>
        </section>
    </div>)
}

export default App