import React from 'react';
import Me from '../assets/me2.svg'
import '../styles/about.scss'

function About() {
    return (
        <section className='About'>
            <div className="background about" >
                <div className='me-svg-wrapper'>
                    <img src={Me}/>
                </div>
                <div className='content'>
                    <div className='title'>
                        <h1>
                            My name<br />
                            is Lukawa
                        </h1>
                    </div>
                    
                    <p>
                        名前：Luka<br />
                        専門：情報工学<br/>
                        学歴：大学<br/>
                        部活：吹奏楽<br/>
                        趣味：吹奏楽<br/>
                    <br/>
                        人間×情報工学の分野で研究しています<br />
                        Web開発とPythonによる機械学習ができます
                    </p>
                </div>
                
                
                
            </div>

            
        </section>
        
    )
};

export default About