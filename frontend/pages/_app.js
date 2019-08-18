import App, { Container } from 'next/app';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer'

export default class Application extends App {

    render() {

        const { Component } = this.props;

        return (
            <Container>
                <Navigation />
                <h1>Hello World</h1>
                <Component />
                <Footer />
            </Container>
        );
    }

};