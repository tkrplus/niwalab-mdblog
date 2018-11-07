import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

export default class CategoryList extends React.Component {
  render () {
    const {
      categories
    } = this.props
    const sortedCateogories = _.sortBy(categories, 'fieldValue')

    return (
      <div>
        <h4>Categories</h4>
        <ul>
          {sortedCateogories.map((category) => {
            return (
              <li key={`key-${category.fieldValue}`}>
                <Link to={`/category/${category.fieldValue}`}>
                  {`${category.fieldValue} (${category.totalCount})`}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
