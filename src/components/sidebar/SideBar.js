import React from 'react'
import './sidebar.css'
export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className='sidebarMenu'>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Пользователи
                        </li> 
                        <li className="sidebarListItem">
                            Заказы
                        </li>
                        <li className="sidebarListItem">
                            Публикации
                        </li>   
                    </ul>  
                </div>
            </div>  
        </div>
    )
}
