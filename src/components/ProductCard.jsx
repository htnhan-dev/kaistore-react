import React, { useState} from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

import img from '../assets/images/products/01.jpg'

const ProductCard = props => {

    // const dispatch = useDispatch()
    console.log(img);
    const number = props.price * 1.5;
    const [isActive, setIsActive] = useState(false)
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
        setIsActive("true")
    }

   

    return (
        
        <div className="product-card">
            <div className="product-card__banner">
                <span>{props.banner}</span>
            </div>
            <div className="product-card__image">
                <img src={props.img01} alt="" />
                {/* <img src={search} /> */}
                <button className="product-card__image__btn">
                    <Button
                        size="sm"    
                        icon="bx bx-search-alt"
                        animate={true}
                    >
                        Xem ngay
                    </Button>
                </button>
                <div className="product-card__image__heart">
                    <i className={isActive ? 'bx bxs-heart' : 'bx bx-heart'} onClick={increment}></i>
                    <span>{count}</span>
                </div>
            </div>
            <Link to={`/catalog/${props.slug}`}>
            <h3 className="product-card__name">{props.name}</h3>
            </Link>
            <div className="product-card__price">
                {numberWithCommas(props.price)}
                <span className="product-card__price__old">
                    <del>{numberWithCommas(number)}</del>
                </span>
            </div>
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__btn">
                    <Button
                        size="sm"    
                        icon="bx bx-cart"
                        animate={true}
                    >
                        chọn mua
                    </Button>
                </div>
            </Link>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard