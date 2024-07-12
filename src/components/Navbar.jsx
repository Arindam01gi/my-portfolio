import React from 'react'

const navlist = [
    {
        label:"/",
        to:"/"
    },
    {
        label:"WORK",
        to:"/portfolio"
    },
    {
        label:"ABOUT",
        to:"/about"
    },
    {
        label:"CONTACT",
        to:"/contact"
    },
   
]

const Navbar = () => {
  return (
    <div  className='p-10 shadow-lg bg-transparent'>
        <nav className='navbar flex justify-between '>
           <div className='font-bold text-body-purple text-3xl font-mono'> ARINDAM MAITI</div>
           <div>
            <ul className='flex'>
                {navlist.map((nav,index)=>{
                   return(
                    <li className='m-2 font-bold text-body-purple text-3xl font-mono' key={index}>{nav.label}</li>
                   )
                })}
            </ul>

           </div>
        </nav>

    </div>
  )
}

export default Navbar