import React from 'react';
import './park.css'
import o_parku from './images/o_parku.jpg';


const Park = () => {
    return (

        <div className="park-main">
            <img className="park-picture" src={o_parku} alt="Zdjęcie parku z drona" />
        <div className="about-park">

            <h2>O PARKU</h2>
            <div className="park-description">
                <p className="text-information-park">Biebrzański Park Narodowy (BbPN) został utworzony na podstawie Rozporządzenia Rady Ministrów z dnia 9
                września 1993 roku jako 18-ty z kolei polski park narodowy. Obecnie, spośród 23 polskich parków
                narodowych BbPN jest największym parkiem narodowym i jednym z większych w Europie. Celem Parku jest
                ochrona rozległych torfowisk Kotliny Biebrzańskiej oraz niewielkiego fragmentu Wzgórz Sokólskich o
                łącznej powierzchni 59.223 ha. Otulina Parku obejmuje także nieduże części przylegających do Kotliny
                Biebrzańskiej mezoregionów: Wzgórz Sokólskich, Wysoczyzny Białostockiej, Wysoczyzny Kolneńskiej i Doliny
                Górnej Narwi. W granicach Parku znajduje się osiem wyłączonych z niego enklaw, obejmujących głównie
                wyspy mineralne w obrębie Kotliny Biebrzańskiej, zajęte pod uprawy, łąki i osadnictwo 7 wsi. Jedna
                enklawa to Las Wroceński.
                </p>
                <p className="text-information-park">
                Najcenniejsze walory Parku to szeroka dolina mającej charakter naturalny silnie meandrującej rzeki
                Biebrzy, z największym zespołem torfowisk w Polsce, zwanych Bagnami Biebrzańskimi. Wraz z unikatową
                mozaiką i strefowością siedlisk mokradłowych, a także ekstensywnym rolnictwem zachowały się tu rzadkie,
                zagrożone i ginące w kraju i Europie gatunki roślin, ptaków i innych zwierząt. Charakterystyczne dla
                Biebrzańskiego Parku Narodowego są również rozległe krajobrazy, ekosystemy i siedliska, które gdzie
                indziej zostały już bezpowrotnie zniszczone, w wyniku melioracji, osuszania bagien i torfowisk.
               </p>
                <p className="text-information-park">
                Bagna Biebrzańskie są uznawane za jedną z najważniejszych w kraju i w Europie Środkowej ostoi ptaków
                wodno-błotnych. Jako niezwykle cenny obszar wodno-błotny Biebrzański Park Narodowy w roku 1995 został
                wpisany na listę Konwencji Ramsar o obszarach wodno-błotnych mających znaczenie międzynarodowe,
                zwłaszcza jako środowisko życiowe ptactwa wodnego. O międzynarodowej randze walorów przyrodniczych
                doliny Biebrzy świadczy również uznanie jej za ostoję ptaków o randze europejskiej, wg klasyfikacji
                BirdLife International. W 2004 dolinę Biebrzy włączono do sieci Natura 2000. Obecnie jest to Obszar
                Specjalnej Ochrony Ptaków (PLB 200006 Ostoja Biebrzańska o powierzchni 148 509,33 ha) i Specjalny Obszar
                Ochrony Siedlisk (PLH 200008 Dolina Biebrzy o powierzchni 121 206,23 ha).
                </p>
                <p className="text-information-park">autor: A. Grygoruk, data: 2020-03-31</p>
            </div>
        </div>
        </div>
    )
}

export default Park;

