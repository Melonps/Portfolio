import React, { useRef, useState } from 'react';

import myterminal_logo from '../assets/image/myterminal_logo.png'
import my_logo from '../assets/image/my_logo.png'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
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
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center'
};

const Card = ({ title, detail, image, list}) => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const l = [];
    for (const animal of list) {
        l.push(<li>#{animal}&nbsp;&nbsp;</li>)
    }

    return <li ref={ ref } className='flex justify-center rounded-sm hover:shadow-2xl ring-1 duration-200 h-full bg-gray-50 h-68 w-3/5 md:w-2/6 ring-primary shadow-primary-200 m-8 p-4 md:px-6 shadow-lg hover:ring-4 hover:-translate-y-3'>
        <div className='text-center'
            onClick={handleOpen}
        >   
            <div className='object-contain min-h-24 max-h-52 lg:max-h-96 my-0 lg:my-2'>
                <img src={image} className='h-auto lg:h-48 w-auto' ></img>
            </div>
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
                    <div className='relative flex flex-col lg:flex-row justify-center'>
                        <div className='m-auto w-full md:w-4/6 cursor-pointer rounded-lg lg:w-1/2'>
                            <img src={image} className='h-auto w-full' ></img>
                        </div>
                        <div className='my-8 mx-12 flex w-full flex-col items-start text-left justify-between px-6 lg:w-1/2  lg:pl-0 lg:py-6'>
                            <div className='underline-offset-2 hover:underline'>
                                <h2 className='font-bold text-xl mb-8 text-center lg:text-4xl'>{title}</h2>
                            </div>
                            <p className="flex text-base lg:text-xl flex-col items-start justify-between  lg:w-full lg:pl-0 lg:pt-6">
                                {detail}
                                <ul className='mt-2 flex items-center'>
                                    {l}
                                </ul>  
                            </p>
                        </div>
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
                    image={my_logo}
                    list={["犬", "ゴリラ", "たぬき"]}
                ></Card>
            </div>
            
        </section>
        
    )
};

export default Works