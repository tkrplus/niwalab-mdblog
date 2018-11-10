import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '~/src/components/organisms/Bio'
import Layout from '~/src/components/templates/Layout'
import ButtonLink from '~/src/components/atoms/ButtonLink'
import Tag from '~/src/components/atoms/Tag'
import Const from '~/src/const'

const {
  Size,
  Color
} = Const

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const {
      title,
      date,
      category,
      tags
    } = post.frontmatter
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${title} | ${siteTitle}`}
        />
        <PostWrapper>
          <PostTitle>{title}</PostTitle>
          <PostMeta>
            <PostDate>
              {date}
            </PostDate>
            {
              tags &&
                <PostTagList>
                  {tags.map(tag =>
                    <Tag
                      key={tag}
                      name={tag}
                      link={tag}
                    />
                  )}
                </PostTagList>
            }
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
            padding: 0
          }}
        >
          <li>
            {
              previous &&
              <ButtonLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </ButtonLink>
            }
          </li>
          <li>
            {
              next &&
              <ButtonLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </ButtonLink>
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
  font-size: ${Size.FONT.LARGE}px;
  font-weight: 700;
  line-height: 1.5em;
  text-decoration: none;
  margin: 0;
  color: ${Color.MEDIUM_BLACK};
  transition: .3s ease;
  &:hover {
    color: ${Color.NAVY};
  }
`

const PostMeta = styled.div`
  margin: 10px 0 0;
  color: ${Color.GRAY};
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

const PostTagList = styled.p`
  margin: 0;
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
        category
        tags
      }
    }
  }
`
