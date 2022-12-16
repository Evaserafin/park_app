import React from 'react';
import './kontakt.css';



class Kontakt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Wpisz wiadomość...'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('wiadomosc została wysłana: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <main className="kontakt">
                <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="mt-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Adres mailowy</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="sekretariat@biebrza.org.pl" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Napisz do nas</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                  value={this.state.value} onChange={this.handleChange}></textarea>
                    </div>
                    <input type="submit" value="Wyślij" className="btn btn-primary mt-5" />
                </form>
                </div>
            </main>
        );
    }
}

export default Kontakt;
