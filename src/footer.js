import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container-footer">
                <div className="row">
                    {/*Column1 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                        <h3>Biebrzański Park Narodowy</h3>
                        <ul className="list-unstyled">
                            <li>Osowiec-Twierdza 8</li>
                            <li>19-110 Goniądz</li>
                        </ul>
                    </div>
                    {/*Column2 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                        <h3>E-mail:</h3>
                        <ul className="list-unstyled">
                            <li>sekretariat@biebrza.org.pl</li>
                        </ul>
                    </div>

                    {/*Column3 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                        <h3>Kontakt telefoniczny:</h3>
                        <ul className="list-unstyled">
                            <li>+48 85 738 06 20</li>
                            <li>+48 85 738 30 00 wew. 233</li>
                            <li>fax +48 85 738 30 21</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} BPN | All right reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;