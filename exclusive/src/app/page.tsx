"use client";


import MusicBanner from './Landing-component/Music';
import Header from './shared-components/Header/index';
import SidebarVoucher from './shared-components/SideBar';
import Timer from './Landing-component/Timer';
import SubTitle from './Landing-component/Sub-title';
import Title from './Landing-component/Title';
import ProductCard from './Landing-component/Products';
import Category from './Landing-component/Browsing';


export default function Home() {
    const date = '2025-12-31T23:59:59';
    const exampleProducts = [
        {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image: '/pics/gamepad.jpg',
        },
        {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 5,
            reviews: 75,
            image: '/pics/gamepad.jpg',
        },
        {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image: '/pics/gamepad.jpg',
        },
        {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 5,
            reviews: 75,
            image: '/pics/gamepad.jpg',
        },
        {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image: '/pics/gamepad.jpg',
        },
        {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 5,
            reviews: 75,
            image: '/pics/gamepad.jpg',
        },
        {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image: '/images/image1.png',
        },
        {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 5,
            reviews: 75,
            image: '/pics/gamepad.jpg',
        },
    ];
    const handleButtonClick = () => {
        alert('!');
    };

    return (
        <>
            <Header />
            <SidebarVoucher />
            <div>
                <SubTitle label="Today's" />
                <div className=' flex items-center w-3/4 mx-auto '>
                    <Title title="Flash Sales" />
                    <Timer date="2025-12-31T23:59:59" />
                </div>
            </div>



            <ProductCard products={exampleProducts} />
            <div>
                <SubTitle label="Categories" />
                <div className=' flex items-center mb-10'>
                    <Title title="Browse By Category" />
                </div>
            </div>
            <Category />
           
               <div>
                <SubTitle label="This Month" />
                <div className=' flex items-center mb-10'>
                    <Title title="Best Selling Products" />
                </div>
            </div>

              <ProductCard products={exampleProducts} />

             <MusicBanner />
              <div>
                <SubTitle label="Our Products" />
                <div className=' flex items-center mb-10'>
                    <Title title="Explore Our Products" />
                </div>
            </div>

            <ProductCard products={exampleProducts} />
            <ProductCard products={exampleProducts} />

              <div>
                <SubTitle label="Featured" />
                <div className=' flex items-center mb-10'>
                    <Title title="New Arrival" />
                </div>
            </div>
        </>
    )
}