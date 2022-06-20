import React from 'react'
import Helmet from '../components/Helmet'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Breadcrumb from '../components/Breadcrumb'

const Thankyou = () => {
  return (
    <Helmet title='Thank you'>
        <Breadcrumb title="Thank you" link="Thank you" slug="/thankyou" />
        <div className="thankyou">
            <div className="thankyou__content">
                <div className="thankyou__content__icon">
                    <i class='bx bx-check-circle'></i>
                </div>
                <div className="thankyou__content__des">
                    Thank you for ordering in our store. You will receive a confirmation email shortly.
                </div>
                <Link to="/catalog">
                    <Button>
                        Continue Shopping
                    </Button>
                </Link>
                <div className="thankyou__content__contact">

                </div>
            </div>
        </div>
    </Helmet>
  )
}

export default Thankyou