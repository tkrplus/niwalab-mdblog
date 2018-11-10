import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import ButtonLink from '~/src/components/atoms/ButtonLink'
import Tag from '~/src/components/atoms/Tag'
import Const from '~/src/const'
const {
  Size,
  Color
} = Const

const PostTile = ({ post }) => {
  const slug = post.fields.slug
  const {
    title,
    date,
    category,
    tags
  } = post.frontmatter
  const {
    excerpt
  } = post

  return (
    <PostWrapper>
      <Link to={slug}>
        <PostTitle>
          {title}
        </PostTitle>
      </Link>
      <PostMeta>
        <PostDate>{date}</PostDate>
      </PostMeta>
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
      <PostSnipet dangerouslySetInnerHTML={{ __html: excerpt }} />
      <ButtonWrapper>
        <ButtonLink to={slug}>
          Read more
        </ButtonLink>
      </ButtonWrapper>
    </PostWrapper>
  )
}

const PostWrapper = styled.div`
  display: block;
  margin: 0 0 30px;
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

const PostTagList = styled.p`
  margin: 0;
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

const ButtonWrapper = styled.div`
  text-align: right;
  margin-top: 15px;
`

export default PostTile
