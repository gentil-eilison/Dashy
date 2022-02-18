import { Routes, Route } from 'react-router-dom'
import DashBoard from '../../pages/DashBoard'

const Router = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<DashBoard />}></Route>
        </Routes>
    )
}

export default Router