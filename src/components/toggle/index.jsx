/**
 * Componente do hamburguer menu (toggle)
 */
import React from 'react';
import './index.css';
import { push } from 'connected-react-router';
import { useDispatch } from "react-redux";

const Toggle = () => {
    const dispatch = useDispatch();

    //Navegação para menu a partir da lista do header
    const menu = [
        {
            text: "Home",
            link: '/'
        },
        {
            text: "Option 2",
            link: '#'
        },
        {
            text: "Option 3",
            link: '#'
        },
        {
            text: "Option 4",
            link: '#'
        },
    ]

    const navigate = (link) => () => dispatch(push(`/${link}`));

    return (
        <nav role="navigation">
            <div id="menuToggle">
                {/*A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.*/}
                <input type="checkbox" />

                {/*Some spans to act as a hamburger.*/}
                <span></span>
                <span></span>
                <span></span>

                {/*Options*/}
                <ul id="menu">
                    {
                        menu.map(item => <a key={item.text} href={item.link} onClick={navigate(item.link)}><li>{item.text}</li></a>)
                    }
                </ul>
            </div>
        </nav>
    )
};

export default Toggle;