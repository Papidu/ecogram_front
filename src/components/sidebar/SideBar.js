import React from 'react'
import './sidebar.css'
import {Link} from "react-router-dom";

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className='sidebarMenu'>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="sideLink" to='/users'>
                                Пользователи
                            </Link>                            
                        </li> 
                        <li className="sidebarListItem">
                            <Link to='/table2'>
                                Заказы
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to='/table2'>
                                Публикации
                            </Link>
                        </li>   
                    </ul>  
                </div>
            </div>  
        </div>
    )
}
