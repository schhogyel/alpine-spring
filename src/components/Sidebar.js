import React from 'react'
import { Link } from 'gatsby'
// import { css } from 'emotion'

const Sidebar = props => (
  <div className="flex justify-center fixed pt-16">
    <div className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 ">
      <span className="font-semibold text-xl tracking-tight">
        {' '}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {props.title}
        </Link>
      </span>
    </div>
  </div>
)

export default Sidebar
