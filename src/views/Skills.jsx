import React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Stack from '@mui/material/Stack';
import { motion, useScroll } from "framer-motion"
import { NpmIcon } from '../components/Icon';

import '../styles/skills.scss'
import '../index.css'

const Language = ({ name, background, color }) => {
    return (
        <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, type: "spring" }}
        
        >
            <button className="lanIcon cursor-pointer w-max origin-center ml-2 mr-2 my-2 font-semibold bg-dark text-light py-3 px-6 rounded-full shadow-lg dark:bg-light dark:text-dark lg:py-2 lg:px-4 text-base py-1\5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:font-bold " style={{"background": background, "color": color }}>
                {name}
            </button>

        </motion.div>
        
    )
}

const styleGenerator = ({ background, color }) => ({
    color: color ,
    background: background ? background : "#639"
});

const Skills= () => {
    return (
        <section className='min-h-screen items-center text-dark dark:text-light sm:items-start '>
            <div className='flex w-1/2 flex-col items-center self-center w-full text-center my-20'>
                <Stack direction="row" alignItems="center" gap={0}>
                    <h2 className='font-bold text8xl text-center'>Basic</h2>
                    <SettingsOutlinedIcon/>
                </Stack>
                
                <div 
                    className="mt-2 flex flex-wrap items-center self-start self-center">
                    <Language name="Javascript" background="#9313" color="#444"/>
                    <Language name="Typescript" background="#9313" color="#444"/>
                    <Language name="Python" background="#9313" color="#444"/>
                    <Language name="PHP" background="#9313" color="#444"/>
                    <Language name="C" background="#9313" color="#444"/>
                    <Language name="C++" background="#9313" color="#444" />
                    <Language name="java" background="#9313" color="#444"/>
                </div>
            </div>
            <div className='flex w-1/2 flex-col items-center self-center w-full text-center my-24'>
                <Stack direction="row" alignItems="center" gap={0}>
                    <h2 className='font-bold text8xl text-center'>Web Develop</h2>
                    <NpmIcon/>
                </Stack>
                <div className="mt-2 flex flex-wrap items-center self-start self-center">
                    <Language name="React" background="#FF5351" color="#fff" />
                    <Language name="Vue" background="#FF5351" color="#fff" />
                    <Language name="Vite" background="#FF5351" color="#fff" />
                    <Language name="Express" background="#FF5351" color="#fff" />
                </div>
            </div>
        </section>
        
    )
};

export default Skills