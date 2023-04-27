import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion"
import '../index.css'
import LiIcon from './LiIcon';

const Details = ({ positon, compony, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return <li ref={ ref } className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ ref } />
        <motion.div
            initial={{ y: 50 }}
            whileHover={{ y: 0 }}
            transition={{duration:0.5, type:"spring"}}
        >
            
            <h3 className='capitalize font-bold text-2xl'>{positon}&nbsp;<a href={companyLink}
                target="_blank"
                className='text-primary capitalize'
            >@{compony}</a></h3>
            <span className='capitalize font-medium text-2xl text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    
    return (
        <div className='my-64'>
            <h2 className='font-bold text8xl mb-32 text-center'>Experience</h2>    
            
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'></motion.div>
                <ui className="w-full flex flex-col items-start justify-between ml-4">
                    
                    <Details
                        positon="test"
                        compony="彦根東"
                        time="2022"
                        address="tadd"
                        companyLink="tes"
                        work="自治会(生徒会)に入り、学年代表を担当"
                    />
                    <Details
                        positon="test"
                        compony="彦根東"
                        time="2022"
                        address="tadd"
                        companyLink="tes"
                        work="自治会(生徒会)に入り、学年代表を担当"
                    />
                    <Details
                        positon="test"
                        compony="彦根東"
                        time="2022"
                        address="tadd"
                        companyLink="tes"
                        work="自治会(生徒会)に入り、学年代表を担当"
                    />
                    <Details
                        positon="test"
                        compony="彦根東"
                        time="2022"
                        address="tadd"
                        companyLink="tes"
                        work="自治会(生徒会)に入り、学年代表を担当tttttttttttttttttttttttttttttttttttttttt"
                    />
                    <Details
                        positon="test"
                        compony="彦根東"
                        time="2022"
                        address="tadd"
                        companyLink="tes"
                        work="自治会(生徒会)に入り、学年代表を担当tttt"
                    />
                    <Details
                        positon="test"
                        compony="彦根東"
                        time="2022"
                        address="tadd"
                        companyLink="tes"
                        work="自治会(生徒会)に入り、学年代表を担当tttttttttttttttttttttttttttttttttttttttt"
                    />
                </ui>
            </div>
        </div>
        
    )
    
};


export default Experience