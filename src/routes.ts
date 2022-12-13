// import { wrap } from "svelte-spa-router/wrap";

import Edit from './pages/Edit.svelte';
import NotFound from './pages/404.svelte';

// https://www.npmjs.com/package/svelte-spa-router

const routes = {
    // '/create': Create,
    // "/create": wrap({
    //   asyncComponent: () => import("./routes/Create.svelte"),
    // }),

    '/:notes?': Edit,
    '*': NotFound,
};

export default routes;

export const routesEnum1 = Object.keys(routes).reduce((m: any, r: string) => {
    r = r.split(':')[0];
    m[r] = r;
    return m;
}, {});

export const routesEnum = {
    Home: '/',
    // Create: '/create',
};
