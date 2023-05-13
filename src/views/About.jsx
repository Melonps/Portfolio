import React from 'react';
import Me from '../assets/image/me.png'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

function About() {
    return (
        <section className='flex min-h-screen my-64 text-dark '>
            <div className="z-0 inline-block h-full w-full p-12 bg-light  dark:bg-dark 
                md:p-12 sm:p-8  xl:p-64 lg:p-20 !pt-0 md:pt-16 sm:!pt-16">
                <div className='w-full items-start flex justify-center flex-low xl:flex-low'>
                    <div className='inline-block text-dark  font-bold capitalize !text-left'>
                        <h2 className='font-bold text-4xl mb-16 text-center lg:text-8xl'>About</h2> 
                        <div className=' md:grid w-full grid-cols-8 gap-8 lg:gap-24 item-center font-medium text-base lg:text-xl'>
                            <div className='relative col-span-4 h-88 rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 order-last'>
                                <img src={Me}  className='w-90 md:h-88 m-auto'/>
                            </div>
                            <div className='col-span-8 flex flex-col items-start justify-center md:col-span-4 sm:col-span-8'>
                                <p class="my-4 ">
                                <br />
                                名前：筧 万里<br />
                                学歴：大阪府立大学 卒業 →  大阪公立大学大学院 在学中<br />
                                専門：基幹情報学 知能情報学分野<br/>
                                部活：吹奏楽（正指揮者）、コンピューターサークル<br/>
                                特技：中規模の人の前で喋ること(5~100人)<br /><br />
                                研究について<br />
                                人間×情報工学の分野で研究しています<br />
                                Web開発とPythonによる機械学習ができます<br /><br />
                                    学士
                                    <br />
                                    視覚障害者のためのグラフ要約システムの提案をし、PythonとReactによるweb開発で提案手法の有効性を検証しました<br />

                                
                                </p>
                                    <div className='mt-2 flex items-center self-start '>
                                    <a href=""  className='more-button flex items-center rounded-lg border-2 border-solid p-2.5 px-6 font-semibold
                                            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                            md:p-2 md:px-4 bg-primary'>
                                        Mail
                                        <OpenInNewOutlinedIcon/>
                                    </a>
                                    <a href="https://github.co.jp/" className='ml-4 font-medium capitalize text-dark underline hover:border-dark hover:bg-transparent hover:text-primary  dark:text-light  dark:hover:text-light dark:hover:bg-dark'>
                                        Github
                                    </a>
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