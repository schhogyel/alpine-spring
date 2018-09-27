import React from 'react'
// import { css } from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'

// import { rhythm } from '../utils/typography'

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
        <Header title={data.site.siteMetadata.title} />
        <div className="container mx-auto py-8">{children}</div>
      </div>
    )}
  />
)
