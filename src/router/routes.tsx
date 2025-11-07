import { lazy } from 'react';
import Disclaimer from '../pages/Disclaimer';
import Policy from '../pages/Policy';
import Makluman from '../pages/Makluman';
import Kejayaan from '../pages/Kejayaan';
const Index = lazy(() => import('../pages/index'));
const Products = lazy(() => import('../pages/Products'));
const Services = lazy(() => import('../pages/Services'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Career = lazy(() => import('../components/Career'));
const ServicesDetail = lazy(() => import('../pages/ServicesDetail'));
const PortfolioDetail = lazy(() => import('../pages/PortfolioDetail'));
const NewsDetail1 = lazy(() => import('../pages/News/NewsDetail1'));
const NewsDetail2 = lazy(() => import('../pages/News/NewsDetail2'));
const NewsDetail3 = lazy(() => import('../pages/News/NewsDetail3'));

// const Blog = lazy(() => import('../pages/Blog'));
const TermsCondition = lazy(() => import('../pages/TermsConditions'));
// const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const Error404 = lazy(() => import('../pages/404'));

const Jobapply = lazy(() => import('../pages/Jobapply'));

const routes = [
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/Products',
        element: <Products />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    
    {
        path: '/about-us',
        element: <AboutUs />,
    },
    {
        path: '/careers',
        element: <Career />,
    },
     {
        path: '/makluman',
        element: <Makluman />,
    },
     {
        path: '/Kejayaan',
        element: <Kejayaan />,
    },
    {
        path: '/services-detail',
        element: <ServicesDetail />,
    },
    {
        path: '/portfolio-detail',
        element: <PortfolioDetail />,
    },
    {
        path: '/terms-conditions',
        element: <TermsCondition />,
    },
    {
        path: '/disclaimer',
        element: <Disclaimer />
    },
    {
        path: '/policy',
        element: <Policy />
    },
    // {
    //     path: '/privacy-policy',
    //     element: <PrivacyPolicy />,
    // },
    {
        path: '/news-detail-1',
        element: <NewsDetail1 />,
    },
    {
        path: '/news-detail-2',
        element: <NewsDetail2 />,
    },
    {
        path: '/news-detail-3',
        element: <NewsDetail3 />,
    },
    {
        path: '*',
        element: <Error404 />,
    },
    {
        path: '/jobapply',
        element: <Jobapply />,
    },
];

export { routes };
