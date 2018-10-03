import React from 'react'
import { css } from 'react-emotion'
import { Link, graphql } from 'gatsby'
// import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import '../styles/styles.css'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="max-w-md w-full lg:flex">
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="text-black font-bold text-3xl mb-2">
                  {node.frontmatter.title}
                </div>
                <p className="text-grey-darker text-base">
                  <span className="text-grey-dark">
                    {node.frontmatter.date} —{' '}
                  </span>
                  {node.excerpt}
                </p>
              </div>
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
          excerpt(pruneLength: 500)
        }
      }
    }
  }
`
