import React from 'react'
import { css } from 'react-emotion'
import { Link, graphql } from 'gatsby'
// import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import '../styles/styles.css'

export default ({ data }) => {
  return (
    <Layout>
      <div
        className={css`
          width: 740px;
          margin: auto;
        `}
      >
        <h1 className="text-black font-bold text-xl mb-2">Articles</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3 className="text-black font-bold text-xl my-2">
                {node.frontmatter.title}{' '}
                <span
                  className={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p className="text-grey-darker text-base">{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
