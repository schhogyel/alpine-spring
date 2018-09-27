import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'

const Header = props => (
  <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
    <div
      className={css`
        width: 740px;
        margin: auto;
      `}
    >
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg
          className="fill-current"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0c-8.711 0-15.796 6.961-15.995 15.624 0.185-7.558 5.932-13.624 12.995-13.624 7.18 0 13 6.268 13 14 0 1.657 1.343 3 3 3s3-1.343 3-3c0-8.837-7.163-16-16-16zM16 32c8.711 0 15.796-6.961 15.995-15.624-0.185 7.558-5.932 13.624-12.995 13.624-7.18 0-13-6.268-13-14 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 8.837 7.163 16 16 16z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          {' '}
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {props.title}
          </Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
)

export default Header
