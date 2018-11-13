import React from 'react'
import { css } from 'react-emotion'
import { Link, graphql } from 'gatsby'
// import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import '../styles/styles.css'

const articleTitle = css({
  fontFamily: 'KoHo, sans-serif',
  fontWeight: 'bold'
})

const articleDate = css({
  fontFamily: 'Lato, sans-serif',
  fontSize: '0.9rem',
  color: 'grey'
})

export default ({ data }) => {
  return (
    <Layout>
      <div>Hi</div>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="max-w-md w-full lg:flex">
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
                width: 100%
              `}
            >
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r py-2 flex justify-between leading-normal w-full">
                <div className={articleTitle}>{node.frontmatter.title}</div>
                <p className={articleDate}>{node.frontmatter.date}</p>
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
