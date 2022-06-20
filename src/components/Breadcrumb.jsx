import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Breadcrumb = props => {
  return (
    <div className="breadcrumb">
        <div className="breadcrumb__content">
            <div className="breadcrumb__content__title">
                {props.title}
            </div>
            <div className="breadcrumb__content__link">
                <Link to="/" >
                  <span>Home</span>
                </Link>
                <span>//</span>
                <strong>{props.link}</strong>
            </div>
        </div>
    </div>
  )
}

Breadcrumb.propTypes = {}

export default Breadcrumb