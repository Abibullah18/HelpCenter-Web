import { lazy } from 'react';


const Signin = lazy(() => import('./SignIn'));
const Signup = lazy(() => import('./SignUp'));

import Home from "../components/pages/Home/Home";

import NotFound from "../components/includes/NotFound";
import Company from '../components/pages/Forms/Company'
import User from '../components/pages/Forms/User'
import Tag from '../components/pages/Forms/Tag'
import Article from '../components/pages/Forms/Articles'
import ArticleContent from '../components/pages/Forms/Articles/articlePage'
import Articlepreview from '../components/pages/Forms/Articles/articlePage/preview'
import Helpdesk from '../components/includes/helpCenter'

const routes = [
    {
        path: "/",
        component: Signin,
        protectedRoute: false,
    },
    {
        path: "/dashboard",
        component: Home,
        protectedRoute: true,
    },
    {
        path: "/signup",
        component: Signup,
        protectedRoute: false,
    },
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
        path: "/helpdesk",
        component: Helpdesk,
        protectedRoute: true,
    },
    {
        path: "/articlecontent",
        component: ArticleContent,
        protectedRoute: true,
    },
    {
        path: "/articlepreview/:articleId",
        component: Articlepreview,
        protectedRoute: false,
    },
    // {
    //     component: NotFound, // Always Should be here
    // },
]


export default routes;