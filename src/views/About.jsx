import React from 'react';
import Me from '../assets/image/me.png'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

function About() {
    return (
        <section className='flex min-h-screen my-64 text-dark '>
            <div className="z-0 inline-block h-full w-full p-12 bg-light  dark:bg-dark  lg:p-16
                md:p-12 sm:p-8 !pt-0 md:pt-16 sm:!pt-16">
                <div className='w-full items-start flex justify-center flex-low xl:flex-low'>
                    <div className='inline-block text-dark  font-bold capitalize !text-left'>
                        <h2 className='font-bold text-6xl mb-16 text-center lg:text-8xl'>About</h2> 
                        <div className=' md:grid w-full grid-cols-8 gap-8 item-center font-medium text-base lg:text-xl'>
                            <div className='relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 order-last'>
                                <img src={Me}  className='w-80 m-auto'/>
                            </div>
                            <div className='col-span-8 flex flex-col items-start justify-start md:col-span-4 sm:col-span-8'>
                                <p class="my-4  ">
                                <br />
                                名前：kake<br />
                                専門：情報工学<br/>
                                学歴：某大学 卒業 → 某大学院 在学中<br/>
                                部活：吹奏楽、コンピューターサークル<br/>
                                趣味：吹奏楽、作編曲、デザイン<br/>
                                特技：100人規模の人の前で喋ること<br/>
                                <br />
                                専門について詳しく：<br />
                                人間×情報工学の分野で研究しています<br />
                                Web開発とPythonによる機械学習ができます<br />
                                </p>
                                    <div className='mt-2 flex items-center self-start '>
                                    <button className='more-button flex items-center rounded-lg border-2 border-solid p-2.5 px-6 font-semibold
                                            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                            md:p-2 md:px-4 bg-primary'>
                                        Mail
                                        <OpenInNewOutlinedIcon/>
                                    </button>
                                    <button className='ml-4 font-medium capitalize text-dark underline hover:border-dark hover:bg-transparent hover:text-primary  dark:text-light  dark:hover:text-light dark:hover:bg-dark'>
                                        Github
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    
                </div>
                

                
                
                
            </div>

            
        </section>
        
    )
};

export default About