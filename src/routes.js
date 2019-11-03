import AboutUs from './components/pages/AboutUs';
import OurMenu from './components/pages/OurMenu';
import Order from './components/pages/Order';
import ContactUs from './components/pages/ContactUs';
import YourOrder from './components/pages/YourOrder';

export default [
    { path: '', component: AboutUs},
    { path: '/home', component: AboutUs },
    { path: '/menu', component: OurMenu },
    { path: '/order', component: Order },
    { path: '/contact', component: ContactUs },
    { path: '/review', component: YourOrder }
]
