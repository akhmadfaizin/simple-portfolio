import { BlogPage } from '../pages/Blog'
import { HomePage } from '../pages/Home'
import { ProjectsPage } from '../pages/Projects'

export const listRoute = {
    home: {
        path: '/home',
        component: HomePage,
        requiredPermission: [],
    },
    projects: {
        path: '/projects',
        component: ProjectsPage,
        requiredPermission: [],
    },
    blog: {
        path: '/blog',
        component: BlogPage,
        requiredPermission: [],
    },
}
