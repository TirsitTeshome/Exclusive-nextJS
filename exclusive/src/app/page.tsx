"use client";

import CategoryBrowser from './Landing/Browsing';
import FlashSales from './Landing/Categories';
import MusicBanner from './Landing/Music';
import Header from './shared-components/Header/index';
import SidebarVoucher from './shared-components/SideBar';



export default function Home(){
    return(
        <>
        <Header />
        <SidebarVoucher/>
        <FlashSales/>
        <CategoryBrowser/>
        <MusicBanner/>
        </>
    )
}