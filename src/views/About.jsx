import React from 'react';
import Me from '../assets/me2.svg'
import '../styles/about.scss'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

function About() {
    return (
        <section className='flex min-h-screen items-center text-dark dark:text-light sm:items-start'>
            <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-16">
                <div className='me-svg-wrapper'>
                    <img src={Me}/>
                </div>
                <div className='content'>
                    <div className='inline-block text-dark dark:text-light text-8xl font-bold w-full capitalize  !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl'>
                        <h1>
                            My name<br />
                            is Lukawa
                        </h1>
                    </div>
                    
                    <p class="my-4 text-base font-medium">
                        名前：Luka<br />
                        専門：情報工学<br/>
                        学歴：大学<br/>
                        部活：吹奏楽<br/>
                        趣味：吹奏楽<br/>
                    <br/>
                        人間×情報工学の分野で研究しています<br />
                        Web開発とPythonによる機械学習ができます
                    </p>
                    <div className='mt-2 flex items-center self-start lg:self-center'>
                        <button className='more-button flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base'>
                            test
                            <OpenInNewOutlinedIcon/>
                        </button>
                        <a className='ml-4 text-lg font-medium capitalize text-dark underline  dark:text-light md:text-bases'>
                            test
                        </a>
                    </div>
                    
                </div>
                
                
                
            </div>

            
        </section>
        
    )
};

export default About