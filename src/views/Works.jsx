import React, { useRef, useState } from 'react';

import myterminal_logo from '../assets/image/myterminal_logo.png'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '../index.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '60%',
    bgcolor: '#F9F7F8',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Card = ({ title, detail, image, list}) => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const l = [];
    for (const animal of list) {
        l.push(<li>{animal}</li>)
    }

    return <li ref={ ref } className=' flex justify-center md:w-2/5 p-4 md:px-6'>
        <div className='text-center shadow-lg shadow-primary-200 ring-primary rounded-sm hover:shadow-2xl ring-1 hover:ring-4 hover:-translate-y-3 duration-200 md:h-full bg-gray-50'
            onClick={handleOpen}
        >
            <img src={image} className='font-medium w-full ' ></img>
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
                    <Box sx={style} className="font-medium">
                        <p className="font-medium">
                            {detail}
                        </p>
                        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <ul>
                        {l}
                    </ul>
                    </Box>
                </Fade>
            </Modal>
    </li>
}

const Works= () => {
    return (
        <section className='min-h-screen items-center'>
            <h2 className='font-bold text8xl mb-32 text-center'>Works</h2> 
            <div className="mt-2 flex flex-wrap items-center  self-start self-center justify-center">
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