import React from 'react'
// import { Link } from 'gatsby'
// import { css } from 'emotion'

const Header = props => (
  <div className="flex bg-white border-b border-grey-lighter fixed pin-t pin-x z-100 h-16 items-center">
    <div className="w-full max-w-screen-xl relative mx-auto px-6">
      <div className="flex items-center -mx-6">
        <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8" />
        <nav class="flex flex-grow items-center lg:w-3/4 xl:w-4/5">
          <div class="w-full lg:px-6 lg:w-3/4">
            <span class="font-semibold text-xl tracking-tight">
              Notes and Scripts
            </span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-blue hover:text-blue-lighter mr-4"
              >
                Github
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-blue hover:text-blue-lighter mr-4"
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                href="#"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
              >
                Download
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
