import App, { Container } from 'next/app';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


import '../styles/base.scss';

export default class Application extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }
    
        return { pageProps };
    }

    render() {
        const { Component } = this.props;
        return (
            <Container>
                <div className="app">
                    <Navigation />
                    <main className="app__content">
                        <Component />
                    </main>
                    <Footer />
                </div>
            </Container>
        );
    }
};