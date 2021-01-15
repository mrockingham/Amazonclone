import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img
                className='home_image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=''
                />    
            
            
                <div className='home_row'>
                    <Product title='the lean startup: How Constant Innovation Creates '
                         price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
                        rating={3} />
                    <Product
                        id ='49538094'
                        title=' Kenwood KMix Stand Mixer for a Backing, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                        price={293.00}
                        image="https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        rating={4}
                        />
            
                </div> 
                <div className='home_row'>
                    <Product
                        id='4903850'
                        title='Samsung LC65416416161 49" Curved LED Gaming Monitor'
                        price={199.99}
                        rating={3}
                        image='https://images.unsplash.com/photo-1585362028211-dee1aba5fdd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                    />
                    <Product
                        id='23445930'
                        title='Amazon Echo (3rd heneration) | Smart speaker with Alexa, Charcoal Fabric'
                        price={98.99}
                        rating={5}
                        image='https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                        />
                    <Product
                        id='32543584345'
                        title='New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                        price={598.99}
                        rating={4}
                        image='https://images.unsplash.com/photo-1546868871-0f936769675e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
                    />
            
                </div> 
                <div className='home_row'>
                    <Product
                        id='4903850'
                        title='Samsung LC65416416161 49" Curved LED Gaming Monitor'
                        price={199.99}
                        rating={3}
                        image='https://images.unsplash.com/photo-1585362028211-dee1aba5fdd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' 
                    />
            
                </div> 

            </div> 
        </div>
    )
}

export default Home
