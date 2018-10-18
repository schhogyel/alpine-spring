import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      // <div className="flex md:block md:absolute pin overflow-hidden">
      <div className="">
        <TopBar siteTitle={data.site.siteMetadata.title} />
        <div className="w-full max-w-screen-xl mx-auto px-6">
          <div className="lg:flex -mx-6">
            <div className="justify-center hidden lg:flex absolute z-90 top-16 bg-white w-full border-b -mb-16 lg:-mb-0 lg:static lg:bg-transparent lg:border-b-0 lg:pt-0 lg:w-1/4 lg:border-0 xl:w-1/5">
              <Sidebar />
            </div>
            <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 ">
              <div className="md:w-3/5 pt-16">{children}</div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)
