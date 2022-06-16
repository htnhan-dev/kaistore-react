import React from 'react'
import bg from '../assets/images/fashion-bg.webp'
import Button from './Button'

const Banner = () => {
  return (
    <div className="banner">
        <div className="banner__content">
            <h2>KaiStore - Smart Fashion</h2>
            <h1>With Smart Devies</h1>
            <Button>
                <span>Shop All Devices</span>
            </Button>
        </div>
    </div>
  )
}

export default Banner