import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import './Welcome.scss';


export default function Home() {
    return (
        <Layout>
            <main className="welcome-main">
                <div className="welcome-main__wrapper">
                    <h1 className="heading1 welcome">¡Bienvenidos!</h1>
                    <Link className="link" to="/towers">
                        <button className="button1 button-font">Comenzar</button>
                    </Link>
                </div>
            </main>
        </Layout>
    )
}
