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
        {/* <h1 className="text-black font-bold text-xl mb-2">
          {post.frontmatter.title}
        </h1>
        <div
          className="text-grey-darker text-base"
          dangerouslySetInnerHTML={{ __html: post.html }}
        /> */}
        <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="text-black font-bold text-xl mb-2">
            {post.frontmatter.title}
          </div>
          <div
            className="text-grey-darker text-base"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
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
