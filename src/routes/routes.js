// routes/routes.js
import Home from '../pages/Home';
import About from '../pages/About';
import Orders from '../pages/Orders';
import Services from '../pages/Services';
import Search from '../pages/Search';

const RouteConfig = () => {
  // initiate hooks and pass as props
  const routes = [
    {
      path: '/',
      element: Home,
      props: {
        // Add props if available
      },
    },
    {
      path: '/about',
      element: About,
      props: {
        // Add props if available
      },
    },
    {
      path: '/orders',
      element: Orders,
      props: {
        // Add props if available
      },
    },
    {
      path: '/services',
      element: Services,
      props: {
        // Add props if available
      },
      
    },
    {
      path: '/search',
      element: Search,
      props: {
        // Add props if available
      },
      
    }
  ];

  return routes;
};

export default RouteConfig;
