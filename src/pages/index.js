import React from 'react'
import { css } from 'react-emotion'
import { Link, graphql } from 'gatsby'
import '../styles/styles.css'
import SocialIcons from '../components/SocialIcons'

const breakpoints = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  // String values will be used as is
  tallPhone: '(max-width: 360px) and (min-height: 740px)',
}

const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

const introText = css`
  font-family: Allerta Stencil;
  font-size: 1.125rem;
  margin-bottom: 1rem;

  ${mq.medium(css`
    margin-bottom: 2rem;
  `)};
`

const tagLine = css`
  color: #5661b3;
  font-family: KoHo, sans-serif;
  font-size: 1.5rem;
  line-height: 1.25;
  margin: 1rem 0;
  
  ${mq.medium(css`
    margin: 2rem 0;
    font-size: 2.25rem;
    line-height: 1.5;
  `)};
`

const textBlurp = css`
  font-family: Lato, sans-serif;
  margin-top: 1.5rem;
  line-height: 1.5;

  ${mq.medium(css`
    margin-top: 2.5rem;
  `)};
`

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
      <div className="lg:w-1/2 py-4 px-8 lg:p-2">
        <div className={introText}>Hi I am Dash_.</div>
        <h3 className={tagLine}>
          I help companies deliver delightful digital experiences.
        </h3>
        <p className={textBlurp}>
          I’m a product designer and front-end developer with a broad range of
          skills and expertise in all user experience design related fields.
        </p>
      </div>
      <div className="flex mt-2 lg:mt-16 justify-start lg:w-1/2">
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
