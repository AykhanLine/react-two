import React from 'react'
import CardItem from './CardItem'
import developerImg from '../../assets/image/1.jpg'

const Card = () => {
    return (
        <section className='all-cards'>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <CardItem image={developerImg} title="Card-1"/>
                    <CardItem title="Card-2" image="https://www.computersciencedegreehub.com/wp-content/uploads/2020/06/Is-Computer-Science-the-Same-as-Programming-1024x683.jpg"  />
                    <CardItem title="Card-3" image="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/12/07171008/computer-programmers.jpg"/>
                </div>
            </div>

        </section>
    )
}

export default Card