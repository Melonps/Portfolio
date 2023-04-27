import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

import '../index.css'

const Footer = () => {


    return (
        <footer className='w-full border-t-2 border-t-2 border-solid border-dark
        font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; </span>
                <a href="https://www.google.com">test</a>
                <a href="https://www.google.com">test</a>
            </Layout>

        </footer>

    )
}

export default Footer