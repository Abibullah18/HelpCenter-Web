import Company from '../components/pages/Forms/Company'
import User from '../components/pages/Forms/User'
import Roles from '../components/pages/Forms/Roles'
import Scope from '../components/pages/Forms/Scope'
import Tag from '../components/pages/Forms/Tag'
import Article from '../components/pages/Forms/Articles'
import ArticleContent from '../components/pages/Forms/Articles/articlePage'
import Articlepreview from '../components/pages/Forms/Articles/articlePage/preview'


const routes = [
    {
        path: "/company",
        component: Company,
        protectedRoute: true,
    },
    {
        path: "/user",
        component: User,
        protectedRoute: true,
    },
    {
        path: "/tag",
        component: Tag,
        protectedRoute: true,
    },
    {
        path: "/article",
        component: Article,
        protectedRoute: true,
    },
    {
        path: "/articlecontent",
        component: ArticleContent,
        protectedRoute: true,
    },
    {
        path: "/articlepreview",
        component: Articlepreview,
        protectedRoute: false,
    },
];


export default routes;