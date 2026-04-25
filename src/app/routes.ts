import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Details } from "./details/details";
import { HousingDemo } from "./housing-demo/housing-demo";
import { CollapsableDemo } from "./collapsable-demo/collapsable-demo";

const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page',
    },
    {
        path: 'collapsable-demo',
        component: CollapsableDemo,
        title: 'Collapsable Demo',
    },
    {
        path: 'housing-demo',
        component: HousingDemo,
        title: 'Housing Demo',
    },
    {
        path: 'details/:id',
        component: Details,
        title: 'Home Details',
    },
];

export default routeConfig;