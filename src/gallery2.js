import React, {useState,useEffect} from "react";
import CloseIcon from '@mui/icons-material/Close';
import './gallery2.css';

import Img55 from './img/img55.jpg';
import Img56 from './img/img56.jpg';
import Img57 from './img/img57.jpg';
import Img58 from './img/img58.jpg';
import Img59 from './img/img59.jpg';
import Img60 from './img/img60.jpg';
import Img61 from './img/img61.jpg';
import Img62 from './img/img62.jpg';
import Img63 from './img/img63.jpg';
import Img64 from './img/img64.jpg';
import Img65 from './img/img65.jpg';
import Img66 from './img/img66.jpg';
import Img67 from './img/img67.jpg';
import Img68 from './img/img68.jpg';
import Img69 from './img/img69.jpg';
import Img70 from './img/img70.jpg';
import Img71 from './img/img71.jpg';
import Img72 from './img/img72.jpg';
import Img73 from './img/img73.jpg';
import Img74 from './img/img74.jpg';


const Gallery2 = () => {
    let data = [
        {
            id: 55,
            imgSrc: Img55,
        },
        {
            id: 56,
            imgSrc: Img56,
        },
        {
            id: 57,
            imgSrc: Img57,
        },
        {
            id: 58,
            imgSrc: Img58,
        },
        {
            id: 59,
            imgSrc: Img59,
        },
        {
            id: 60,
            imgSrc: Img60,
        },
        {
            id: 61,
            imgSrc: Img61,
        },
        {
            id: 62,
            imgSrc: Img62,
        },
        {
            id: 63,
            imgSrc: Img63,
        },
        {
            id: 64,
            imgSrc: Img64,
        },
        {
            id: 65,
            imgSrc: Img65,
        },
        {
            id: 66,
            imgSrc: Img66,
        },
        {
            id: 67,
            imgSrc: Img67,
        },
        {
            id: 68,
            imgSrc: Img68,
        },
        {
            id: 69,
            imgSrc: Img69,
        },
        {
            id: 70,
            imgSrc: Img70,
        },
        {
            id: 71,
            imgSrc: Img71,
        },
        {
            id: 72,
            imgSrc: Img72,
        },
        {
            id: 73,
            imgSrc: Img73,
        },
        {
            id: 74,
            imgSrc: Img74,
        },

    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);

    }
    return (
        <>
            <h1 className="header-gallery2">Galeria najciekawszych okazów</h1>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="animals"/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>
            <div className="gallery2">

                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}} alt="animals"/>

                        </div>

                    )
                })}

            </div>
            useEffect(() => {
            // 👇️ scroll to top on page load
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }
        }, []);
            <button className="bounce"
                onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}
                style={{
                    position: 'fixed',
                    padding: '1rem',
                    borderRadius: "50%",
                    border: "none",
                    bottom: '130px',
                    backgroundColor: "#696969",
                    color: '#9ADE61',
                    textAlign: 'center',
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "12px",
                }}
            >
                Top
            </button>
        </>
    );
}
export default Gallery2;