import React, {useState} from 'react'
import './userInfo.css'
import Headers from '../../components/Headers'
// import {dataTable} from '../../FakeData/data'
import UserForm from '../userInfo/UserForm'
import Popup from '../../components/Controls/Popup';
import Controls from '../../components/Controls/Controls'
import SideBar from '../../components/sidebar/SideBar';
export default function UserInfo() {

    // const [data, setData] = useState(dataTable);
    const [userData, setUserData] = useState();
    const [isChanged, setisChanged] = useState(false)
    const [openPopup, setOpenPopup] = useState(false)

    // const openInPopup = (id) =>{
    //     console.log(id)
    //     setUserData(data.find(item => item.id === id))
    //     setOpenPopup(true)
    //     console.log(data.find(item => item.id === id))
    // }
    return (
        <>
            <Headers/>  
            <div className='container'>
                <SideBar/>
                <div className="userinfo">
                    <Controls.Table setUserData={setUserData} setOpenPopup={setOpenPopup}/>
                    <Popup
                        title="Редактирование пользователя"
                        openPopup= {openPopup}
                        setOpenPopup= {setOpenPopup}
                    >
                        <UserForm userData={userData} 
                                setisChanged={setisChanged} 
                                setUserData={setUserData} 
                                setOpenPopup={setOpenPopup} 
                                // isChanged={isChanged}
                        />
                    </Popup> 
                </div>
            </div>
        </>
    )
}
