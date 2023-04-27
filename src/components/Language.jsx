import React from 'react';
import '../styles/language.scss'
import '../index.css'

function Language(props) {

    return (
        <div className="cursor-pointer w-max origin-center ml-4 font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 text-lg md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold" style={styleGenerator(props)}>
                {props.name}
        </div>
        
    )
    
};
const styleGenerator = ({ background }) => ({
    color: "#fff",
    background: background ? background : "#639"
});


export default Language