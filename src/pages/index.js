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
  color: #fff;

  ${mq.medium(css`
    margin-bottom: 2rem;
  `)};
`

const tagLine = css`
  color: #fff;
  font-family: Raleway, sans-serif;
  font-size: 1.8rem;
  line-height: 1.25;
  margin: 1.5rem 0;

  ${mq.medium(css`
    margin: 2rem 0;
    font-size: 2.5rem;
    line-height: 1.5;
  `)};
`

const textBlurp = css`
  font-family: Lato, sans-serif;
  margin-top: 1.5rem;
  line-height: 1.5;
  color: #fff;

  ${mq.medium(css`
    margin-top: 2.5rem;
  `)};
`
const menuButton = css`
  background: transparent;
  font-family: Lato, sans-serif;
  font-size: 0.8rem;
  font-weight: 200;
  color: #fff;
  padding: 0.5rem;
  margin-right: 0.75rem;
  position: relative;

  ${mq.medium(css`
    padding: 0.5rem 0.75rem;
    font-weight: bold;
    margin-right: 1rem;
    font-size: 1rem;
  `)};

  button {
    color: #fff;
  }

  &:hover {
    border-bottom: 1px solid #f6993f;
  }

  &:not(:last-child):after {
    content: '.';
    position: absolute;
    right: -10px;
    top: 5px;
  }
`
const background = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #374859;
  background: linear-gradient(to top, #6d8093 0%, #374859 100%);
`

export default ({ data }) => {
  return (
    <div className={background}>
      <div className="container lg:w-1/2 py-4 px-8 lg:p-2 mt-8">
        <div className={introText}>Hello! My name is Dash_.</div>
        <h3 className={tagLine}>
          I help clients and companies achieve their digital goals.
        </h3>
        <div className={textBlurp}>
          I’m a developer with wide range of skills and expertise. I build user
          interfaces, web services and applications. My current toolbelt
          contains React, GraphQl, Node and Express.
        </div>
      </div>
      <div className="lg:w-1/2 mt-auto flex justify-center flex-col">
        <div className="flex my-2 lg:mt-16 justify-center">
          <Link to="articles" className={menuButton}>
            <button>Articles</button>
          </Link>{' '}
          <Link to="articles" className={menuButton}>
            <button>Projects</button>
          </Link>{' '}
          <Link to="articles" className={menuButton}>
            <button>Tools</button>
          </Link>{' '}
          <Link to="articles" className={menuButton}>
            <button>Clients</button>
          </Link>
        </div>
        <SocialIcons />
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
