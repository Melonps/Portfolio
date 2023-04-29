import React, { useRef, useState } from 'react';

import myterminal_logo from '../assets/image/myterminal_logo.png'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '../index.css'


const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '60%',
    bgcolor: '#F9F7F8',
    border: '1px solid #3E3E3D',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    borderRadius: '16px'
};

const Card = ({ title, detail, image, list}) => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const l = [];
    for (const animal of list) {
        l.push(<li>#{animal}</li>)
    }

    return <li ref={ ref } className=' flex justify-center md:w-2/5 p-4 md:px-6'>
        <div className='text-center shadow-lg shadow-primary-200 ring-primary rounded-sm hover:shadow-2xl ring-1 hover:ring-4 hover:-translate-y-3 duration-200 md:h-full bg-gray-50'
            onClick={handleOpen}
        >
            <img src={image} className='w-full ' ></img>
            <p className='font-medium w-full text-primary'>
                {title}
            </p>
        </div>
        <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                    <div className='relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark   lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 '>
                        <div className='m-auto w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'></div>
                            <img src={image} className='h-auto w-full' ></img>
                        </div>
                        <div className='my-16 flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                            <div className='underline-offset-2 hover:underline'>
                                <h2 className='font-bold text-xl mb-16 text-center lg:text-4xl'>{title}</h2>
                            </div>
                            <p className="flex text-base lg:text-xl w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                                {detail}
                            </p>
                            <ul className='mt-2 flex items-center'>
                                {l}
                            </ul>    
                        </div>
                    </Box>
                </Fade>
            </Modal>
    </li>
}

const Works= () => {
    return (
        <section className='min-h-screen items-center'>
            <h2 className='font-bold text-4xl mb-16 text-center lg:text-8xl'>Works</h2> 
            <div className="mt-2 flex flex-wrap items-center self-center justify-center">
                <Card
                    title="My Terminal"
                    detail="BehaviorTracking
                        研究で開発した学習支援アプリ
                        スマートフォンで英文を読んでいる最中の 読書行動データ（読書時間やスマホの加速度）を用いることで、 学習者に応じた未知単語を推定するアプリです。
                        アイトラッカを使用せずにどの英単語を読んでいるかが判別できる、新しいUIを実装しています。"
                    image={myterminal_logo}
                    list={["犬", "ゴリラ", "たぬき"]}
                ></Card>
                <Card
                    title="kakehi's Profile"
                    detail="kakehi's Profile"
                    image={myterminal_logo}
                    list={["犬", "ゴリラ", "たぬき"]}
                ></Card>
            </div>
            
        </section>
        
    )
};

export default Works