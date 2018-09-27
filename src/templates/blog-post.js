import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { css } from 'emotion'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        className={css`
          width: 740px;
          margin: auto;
        `}
      >
        <h1 className="text-black font-bold text-xl mb-2">
          {post.frontmatter.title}
        </h1>
        <div
          className="text-grey-darker text-base"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
