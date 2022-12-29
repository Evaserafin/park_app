import React, {useState, useEffect} from "react";
import CloseIcon from '@mui/icons-material/Close';
import './gallery.css';

import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpg';
import Img7 from './img/img7.jpg';
import Img8 from './img/img8.jpg';
import Img9 from './img/img9.jpg';
import Img10 from './img/img10.jpg';
import Img11 from './img/img11.jpg';
import Img12 from './img/img12.jpg';
import Img13 from './img/img13.jpg';
import Img14 from './img/img14.jpg';
import Img15 from './img/img15.jpg';
import Img16 from './img/img16.jpg';
import Img17 from './img/img17.jpg';
import Img18 from './img/img18.jpg';
import Img19 from './img/img19.jpg';
import Img20 from './img/img20.jpg';
import Img21 from './img/img21.jpg';
import Img22 from './img/img22.jpg';
import Img23 from './img/img23.jpg';
import Img24 from './img/img24.jpg';
import Img25 from './img/img25.jpg';
import Img26 from './img/img26.jpg';
import Img27 from './img/img27.jpg';
import Img28 from './img/img28.jpg';
import Img29 from './img/img29.jpg';
import Img30 from './img/img30.jpg';
import Img31 from './img/img31.jpg';
import Img32 from './img/img32.jpg';
import Img33 from './img/img33.jpg';
import Img34 from './img/img34.jpg';
import Img35 from './img/img35.jpg';
import Img36 from './img/img36.jpg';
import Img37 from './img/img37.jpg';
import Img38 from './img/img38.jpg';
import Img39 from './img/img39.jpg';
import Img40 from './img/img40.jpg';
import Img41 from './img/img41.jpg';
import Img42 from './img/img42.jpg';
import Img43 from './img/img43.jpg';
import Img44 from './img/img44.jpg';
import Img45 from './img/img45.jpg';
import Img46 from './img/img46.jpg';
import Img47 from './img/img47.jpg';
import Img48 from './img/img48.jpg';
import Img49 from './img/img49.jpg';
import Img50 from './img/img50.jpg';
import Img51 from './img/img51.jpg';
import Img52 from './img/img52.jpg';
import Img53 from './img/img53.jpg';
import Img54 from './img/img54.jpg';


const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc: Img21,
        },
        {
            id: 22,
            imgSrc: Img22,
        },
        {
            id: 23,
            imgSrc: Img23,
        },
        {
            id: 24,
            imgSrc: Img24,
        },
        {
            id: 25,
            imgSrc: Img25,
        },
        {
            id: 26,
            imgSrc: Img26,
        },
        {
            id: 27,
            imgSrc: Img27,
        },
        {
            id: 28,
            imgSrc: Img28,
        },
        {
            id: 29,
            imgSrc: Img29,
        },
        {
            id: 30,
            imgSrc: Img30,
        },
        {
            id: 31,
            imgSrc: Img31,
        },
        {
            id: 32,
            imgSrc: Img32,
        },
        {
            id: 33,
            imgSrc: Img33,
        },
        {
            id: 34,
            imgSrc: Img34,
        },
        {
            id: 35,
            imgSrc: Img35,
        },
        {
            id: 36,
            imgSrc: Img36,
        },
        {
            id: 37,
            imgSrc: Img37,
        },
        {
            id: 38,
            imgSrc: Img38,
        },
        {
            id: 39,
            imgSrc: Img39,
        },
        {
            id: 40,
            imgSrc: Img40,
        },
        {
            id: 41,
            imgSrc: Img41,
        },
        {
            id: 42,
            imgSrc: Img42,
        },
        {
            id: 43,
            imgSrc: Img43,
        },
        {
            id: 44,
            imgSrc: Img44,
        },
        {
            id: 45,
            imgSrc: Img45,
        },
        {
            id: 46,
            imgSrc: Img46,
        },
        {
            id: 47,
            imgSrc: Img47,
        },
        {
            id: 48,
            imgSrc: Img48,
        },
        {
            id: 49,
            imgSrc: Img49,
        },
        {
            id: 50,
            imgSrc: Img50,
        },
        {
            id: 51,
            imgSrc: Img51,
        },
        {
            id: 52,
            imgSrc: Img52,
        },
        {
            id: 53,
            imgSrc: Img53,
        },
        {
            id: 54,
            imgSrc: Img54,
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
            <h1 className="header-gallery">Galeria najciekawszych okazów</h1>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="animals"/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>
            <div className="gallery">

                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}} alt="animals"/>

                        </div>

                    )
                })}

            </div>

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
export default Gallery;