import React from 'react'
import { css } from 'react-emotion'
import { Link, graphql } from 'gatsby'
import '../styles/styles.css'
import SocialIcons from '../components/SocialIcons'

const introText = css({
  fontFamily: 'Allerta Stencil',
  fontSize: '1.125rem',
  marginBottom: '2rem',
})

const tagLine = css({
  color: '#5661B3',
  fontFamily: 'KoHo',
  fontSize: '2.25rem',
  lineHeight: '2.725rem',
  margin: '2rem 0',
})

const textBlurp = css({
  fontFamily: 'Lato, sans-serif',
  marginTop: '2.5rem',
  lineHeight: '1.5',
})

const hoverEffect = css({
  color: '#7886D7',
})

const MenuButton = css({
  background: 'transparent',
  fontFamily: 'KoHo, sans-serif',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#5661B3',
  borderBottom: '1px solid #F6993F',
  padding: '0.5rem 0.75rem',
  marginRight: '1rem',
  ':hover': hoverEffect,
})

export default ({ data }) => {
  return (
    <div className="flex h-screen flex-col justify-center items-center bg-white">
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
      <SocialIcons />
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
