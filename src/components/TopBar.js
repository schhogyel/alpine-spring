import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'

const hoverEffect = css({
  color: '#7886D7',
})

const menuButton = css({
  background: 'transparent',
  fontFamily: 'KoHo, sans-serif',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: '#5661B3',
  padding: '0.5rem 0.75rem',
  textDecoration: 'none',
  ':hover': hoverEffect,
})

const Header = props => (
  <header className="flex bg-white border-b border-grey-lighter fixed pin-t pin-x z-100 h-16 items-center justify-end">
    <nav className="flex items-center justify-start w-3/4">
      <div className="flex text-sm max-w-md justify-end flex-grow">
        <Link to="/" className={menuButton}>
          Home
        </Link>
        <Link to="/articles" className={menuButton}>
          Articles
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
