import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'

const menuButton = css`
  background: transparent;
  color: #eff6fc;
  font-family: Lato, sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
`

const Header = props => (
  <header className="flex bg-white border-b border-grey-lighter fixed pin-t pin-x z-100 h-16 items-center justify-end bg-home">
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
