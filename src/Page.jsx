import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Contents from './Contents.jsx';
// import { LinkContainer } from 'react-router-bootstrap';

export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showFooter: true };
        this.onChange = this.onChange.bind(this);
    }

    onChange(props) {
        this.setState({ showFooter: false })
    }

    render () {
        return (
            <div>
                <NavBar />
                <Contents data={this.props.data} />
                <Footer />      
            </div>        
        );
    }


}



