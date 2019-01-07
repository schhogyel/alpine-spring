import React from 'react'
import SocialIcons from './SocialIcons'
const Footer = () => {
  return (
    <footer className="flex justify-center lg:justify-end py-4">
      <div className="lg:w-3/4 py-4">
        <SocialIcons fill="#000" />
      </div>
    </footer>
  )
}

export default Footer
