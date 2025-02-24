import { Route, Routes, BrowserRouter, Navigate } from 'react-router'
import { listRoute } from './listRoute'

const generateRoutes = () => {
    return Object.entries(listRoute).map(([, routeConfig]) => {
        const Component = routeConfig.component
        const element = <Component />
        return <Route key={routeConfig.path} path={routeConfig.path} element={element} />
    })
}

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {generateRoutes()}
                <Route path="/" element={<Navigate to={listRoute.home.path} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
