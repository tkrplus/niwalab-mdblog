import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import Const from '~/src/const'
const {
  Size,
  Color
} = Const

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <PostWrapper>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostMeta>
            <PostDate>
              {post.frontmatter.date}
            </PostDate>
          </PostMeta>
          <PostSnipet dangerouslySetInnerHTML={{ __html: post.html }} />
        </PostWrapper>
        <hr />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <OtherPostLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </OtherPostLink>
            }
          </li>
          <li>
            {
              next &&
              <OtherPostLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </OtherPostLink>
            }
          </li>
        </ul>
      </Layout>
    )
  }
}


const PostWrapper = styled.div`
  display: block;
  margin: 60px 15px 30px;
`

const PostTitle = styled.h3`
  font-size: ${Size.FONT.X_BASE}px;
  font-weight: 700;
  line-height: 1.5em;
  text-decoration: none;
  margin: 0;
  color: ${Color.MEDIUM_BLACK};
`

const PostMeta = styled.div`
  margin: 10px 0 0;
  color: ${Color.VERY_LIGHT_GRAY};
  font-size: ${Size.FONT.SMALL}px;
  font-weight: 400;
`

const PostDate = styled.span`
  display: inline-block;
  margin: 0;
`

const PostSnipet = styled.p`
  display: block;
  margin: 7px 0 0;
  font-size: ${Size.FONT.SMALL}px;
  font-weight: 400px;
  color: ${Color.BASE_FONT};
`

const OtherPostLink = styled(Link)`
  display: inline-block;
  background-color: ${Color.NAVY};
  color: ${Color.WHITE};
  height: 28px;
  font-size: ${Size.FONT.SMALL}px;
  font-weight: 400;
  line-height: 28px;
  padding: 0 15px;
  margin: 12px 0 0;
  border-radius: 2px;
  trasition: .2s ease;
  &:hober {
    background-color: ${Color.BLACK};
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
