import React from 'react'
import { css } from 'react-emotion'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../styles/styles.css'

const introText = css({
  fontFamily: 'Allerta Stencil',
  fontSize: '1.125rem',
  marginBottom: '2rem',
})

const tagLine = css({
  fontFamily: 'KoHo',
  fontSize: '2.25rem',
  margin: '2rem 0',
})

const textBlurp = css({
  fontFamily: 'Lato, sans-serif',
  marginTop: '2.5rem',
  lineHeight: '1.5',
})

const hoverEffect = css({
  color: '#2490dc',
})

const MenuButton = css({
  background: 'transparent',
  fontFamily: 'KoHo, sans-serif',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#fff',
  borderBottom: '1px solid #fff',
  padding: '0.5rem 0.75rem',
  marginRight: '1rem',
  ':hover': hoverEffect,
})

export default ({ data }) => {
  return (
    <div className="flex h-screen flex-col justify-center items-center bg-teal">
      <div className="w-1/2">
        <div className={introText}>Hi I am Dash_.</div>
        <h3 className={tagLine}>
          I help companies deliver delightful digital experiences.
        </h3>
        <p className={textBlurp}>
          I’m a product designer and front-end developer with a broad range of
          skills and expertise in all user experience design related fields.
        </p>
      </div>
      <div className="flex mt-16 justify-start w-1/2">
        <Link to="articles">
          <button className={MenuButton}>Articles</button>
        </Link>

        <button className={MenuButton}>Contact</button>
      </div>
    </div>
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
