import React from 'react';
import s from './Demo.module.css'
import demoImage from "./../../../public/demoImage.jpg"

const Demo = () => {
    return (
        <div className={s.demo}>
            Демонтрация
            <img src={demoImage} alt={"duck"}></img>
        </div>
    );
};

export default Demo;