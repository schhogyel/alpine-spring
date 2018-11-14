import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { css } from 'emotion'

const textContent = css({
  fontFamily: 'Lato, sans-serif',
  fontSize: '1rem',
  lineHeight: '1.75rem',
})

const articleTitle = css({
  fontFamily: 'KoHo, sans-serif',
  fontSize: '1.75rem',
  fontWeight: 'bold',
  marginBottom: '1.75rem',
  paddingTop: '1rem'
})
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r py-4 flex flex-col justify-between leading-normal">
        <div className={articleTitle}>{post.frontmatter.title}</div>
        <div
          className={textContent}
          dangerouslySetInnerHTML={{
            __html: `<span class="text-grey">
                    ${post.frontmatter.date}
                  </span>${post.html}`,
          }}
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
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`
