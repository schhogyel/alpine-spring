import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import Footer from './Footer'

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
      <>
        <TopBar siteTitle={data.site.siteMetadata.title} />
        <main className="flex w-full max-w-screen-xl mx-auto pb-12 p-4">
          <div className="w-1/4 hidden lg:block">
            <Sidebar />
          </div>
          <div className="lg:w-3/4 w-full">
            <div className="lg:max-w-md pt-16">{children}</div>
          </div>
        </main>
        <Footer />
      </>
    )}
  />
)
