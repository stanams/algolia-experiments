import React from 'react'
import logo from '../../logo2.png'

export const Header = () => {
  return (
    <div>
      <img src={logo} alt='movilia-logo/'/>
      <div className='tagline'>Search movies at the speed of light</div>
    </div>
  )   
}