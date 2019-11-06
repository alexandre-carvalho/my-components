/**
 * Header | Comum para todas as páginas
 */

import React from 'react';
import { useDispatch } from "react-redux";
import './index.scss';
import { push } from 'connected-react-router';
import Toggle from '../../toggle';


const HeaderComponent = () => {
    const dispatch = useDispatch();

    //Navegação para menu inicial a partir da imagem de logo DSB
    const home = [
        {
            link: '/',
            image: 'logo-dsb.png'
        },
    ]

    //Navegação para menu a partir da lista do header
    const menu = [
        {
            text: "Home",
            link: '/'
        },
    ]

    const navigate = (link) => () => dispatch(push(`/${link}`));

    return (
        <header className="header">
            <div className="children">
                {
                    home.map(item => <a href={item.link} onClick={navigate(item.link)}><img src={require(`./img/${item.image}`)} alt="" /></a>)
                }
                <nav className="menu">
                    {
                        //{ <Toggle />
                        menu.map(item => <a key={item.text} href={item.link} onClick={navigate(item.link)}>{item.text}</a>)
                    }
                </nav>
            </div>
        </header>
    )
};

export default HeaderComponent;
