//Body.jsx

import React from "react";
import './body.css';
import Top from './top section/Top';
import Activity from './activity section/Activity';
import Hero from './hero section/Hero';
import RssFeed from './rssFeed section/RssFeed';


// ======================> RSS Feed imports
import axios from "axios";
import { useEffect, useState } from "react";

// Imported Icons ============>
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';

const Body = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
        const res = await axios.get("http://localhost:4000/")
        setArticles(res.data);
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <div className="mainContent">
            <Top />
            <div className="bottom">
                <Hero />
                <Activity />
                <a classname="newsTitle" href="/news">Eco News</a>
                <div className="scrollContainer flex">
                    <IoIosArrowBack className="icon" />
                    <div className="newsBlock">
                        {articles.map((item, i) =>
                            <RssFeed 
                                key={i}
                                title={item.item.title}
                                date={item.item.pubDate}
                            />
                        )}
                    </div> 
                    <IoIosArrowForward className="icon" />
                </div>
            </div>
        </div>
    );
}

export default Body;
