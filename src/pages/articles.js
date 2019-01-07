import React from 'react'
import { css } from 'react-emotion'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../styles/styles.css'

const articleTitle = css({
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 'bold',
})

const articleDate = css({
  fontFamily: 'Lato, sans-serif',
  fontSize: '0.9rem',
  color: 'grey',
})

const pageTitle = css({
  fontFamily: 'Lato, sans-serif',
  fontSize: '0.95rem',
  marginTop: '1.25rem',
  textTransform: 'uppercase',
})

const pageSubtitle = css({
  fontFamily: 'Lato, sans-serif',
  fontWeight: 'bold',
  fontSize: '2rem',
  margin: '2rem 0',
})

const pageDescription = css({
  fontFamily: 'Lato, sans-serif',
  fontSize: '1.25rem',
  marginBottom: '3.75rem',
  lineHeight: '1.25',
})

export default ({ data }) => {
  return (
    <Layout>
      <h3 className={pageTitle}>Articles</h3>
      <div className={pageSubtitle}>
        A chroncile of trials and tribulation in a life of a developer
      </div>
      <div className={pageDescription}>
        This here contains articles that may or may not be definitive of facts
        and are often entirely author's musings and experiments with tools &
        technologies.
      </div>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="w-full lg:flex">
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
                width: 100%;
              `}
            >
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r py-4 flex justify-between leading-normal w-full border-grey-lighter border-b">
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
            date(formatString: "MMM YYYY")
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
