import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GroupsPage from './pages/GroupsPage'
const router = createBrowserRouter([
    {path:"/", element: <LandingPage />},
    {path: "/groups", element: <GroupsPage />},
    {path: "/{groupId}/transactions", element: <LandingPage />}
  ])
const Router = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router