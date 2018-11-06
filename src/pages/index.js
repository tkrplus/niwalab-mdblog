import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import CategoryList from '../components/CategoryList'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import Const from '~/src/const'
const {
  Size,
  Color
} = Const

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const categories = get(this, 'props.data.allMarkdownRemark.categories')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <PostWrapper key={node.fields.slug}>
              <Link to={node.fields.slug}>
                <PostTitle>
                    {title}
                </PostTitle>
              </Link>
              <PostMeta>
                <PostDate>{node.frontmatter.date}</PostDate>
              </PostMeta>
              <PostSnipet dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <ReadMore to={node.fields.slug}>
                Read more
              </ReadMore>
            </PostWrapper>
          )
        })}
      </Layout>
    )
  }
}

const PostWrapper = styled.div`
  display: block;
  margin: 0 15px 30px;
`

const PostTitle = styled.h3`
  font-size: ${Size.FONT.X_BASE}px;
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

const ReadMore = styled(Link)`
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
  transition: .3s ease;
  &:hover {
    background-color: ${Color.BLACK};
  }
`

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
      categories: group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
