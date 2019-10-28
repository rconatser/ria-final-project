import AboutUs from './components/pages/AboutUs';
import OurMenu from './components/pages/OurMenu';
import Order from './components/pages/Order';
import ContactUs from './components/pages/ContactUs';

export default [
    { path: '', component: AboutUs},
    { path: '/home', component: AboutUs },
    { path: '/our-menu', component: OurMenu },
    { path: '/order', component: Order },
    { path: '/contact', component: ContactUs }
]
