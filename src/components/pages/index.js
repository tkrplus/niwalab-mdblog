import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '~/src/components/organisms/Bio'
import PostTile from '~/src/components/organisms/PostTile'
import CategoryList from '~/src/components/organisms/CategoryList'
import Layout from '~/src/components/templates/Layout'

class BlogIndex extends React.Component {
  render () {
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
        <ListWrapper>
          {posts.map(({ node }, index) =>
            <PostTile key={`${index}`} post={node} />
          )}
        </ListWrapper>
        <hr />
        <Bio />
      </Layout>
    )
  }
}

const ListWrapper = styled.div`
  padding: 0 15px;
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
            tags
            category
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
