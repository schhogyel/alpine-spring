import React from 'react'
import { css } from 'react-emotion'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../styles/styles.css'

const articleTitle = css({
  fontFamily: 'KoHo, sans-serif',
  fontWeight: 'bold',
})

const articleDate = css({
  fontFamily: 'Lato, sans-serif',
  fontSize: '0.9rem',
  color: 'grey',
})

const pageTitle = css({
  fontFamily: "Lato, sans-serif",
  fontSize: '0.95rem',
  marginTop: '1.25rem',
  textTransform: 'uppercase'
  
})

const pageSubtitle = css({
  fontFamily: 'Lato, sans-serif',
  fontWeight: 'bold',
  fontSize: '2rem',
  margin: '2rem 0'
})

const pageDescription = css({
  fontFamily: 'Lato, sans-serif',
  fontSize: '1.25rem',
  marginBottom: '3.75rem'
})

export default ({ data }) => {
  return (
    <Layout>
      <h3 className={pageTitle}>Articles</h3>
      <div className={pageSubtitle}>On design and development</div>
      <div className={pageDescription}>
        I don't write as often as I wish, but when I do , I publish my pieces on
        this very page.
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
