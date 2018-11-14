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
      <div>
        <TopBar siteTitle={data.site.siteMetadata.title} />
        <div className="flex w-full max-w-screen-xl mx-auto">
            <div className="w-1/4">
              <Sidebar />
            </div>
            <div className="w-3/4">
              <div className="max-w-md pt-16">{children}</div>
            </div>
          </div>
        </div>
    )}
  />
)
