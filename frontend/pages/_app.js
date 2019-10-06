import App, { Container } from 'next/app';
import Head from 'next/head';

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
                 <Head>
                    <title>Asmac &amp; Co (Surfacing) Ltd</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="Surfacing contractors with over 30 years of experience."/>
                    <meta name="keywords" content="asmac, surfacing, macadam, ilford, driveways, roofing, contractors"/>
                </Head>
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