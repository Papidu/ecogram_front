import React, {useState}  from 'react'
import Headers from '../../components/Headers'
import OrderForm from './OrderForm';
import OrderTable from './OrderTable';
import Popup from '../../components/Controls/Popup';
import SideBar from '../../components/sidebar/SideBar';
import './index.css'
export default function Order() {
    const [userData, setUserData] = useState();
    const [isChanged, setisChanged] = useState(false)
    const [openPopup, setOpenPopup] = useState(false)
    return (
        <div>
            <Headers/>  
            <div className='container'>
                <SideBar/>
                <div className="orderInfo">
                    <OrderTable setUserData={setUserData} setOpenPopup={setOpenPopup}/>
                    <Popup
                        title="Редактирование заказа"
                        openPopup= {openPopup}
                        setOpenPopup= {setOpenPopup}
                    >
                        <OrderForm orderData={userData} 
                                setisChanged={setisChanged} 
                                setUserData={setUserData} 
                                setOpenPopup={setOpenPopup} 
                                // isChanged={isChanged}
                        />
                    </Popup> 
                </div>
            </div>
        </div>
    )
}
