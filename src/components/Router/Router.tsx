import { Routes, Route } from 'react-router-dom'
import DashBoard from '../../pages/DashBoard'
import App from '../../pages/App'

const Router = () => {
    return (
            <Routes>
                <Route path='/dashboard' element={<DashBoard />}></Route>
                <Route path='/' element={<App />}></Route>
            </Routes>
    )
}

export default Router