import { has } from "lodash";
import Home from './Views/Home/Home';
import TestPage from './Views/TestPage/TestPage';

export type PathEntryProperty = {
    path: string,
    pageTitle: string,
    pageSubtitle?: string,
    navFAIconClass?: string, //FA stand for Font Awesome
    includeInViewNavigation: boolean,
    component: React.FunctionComponent,
    submenu?: PathEntry
}

export type PathEntry = {
    [P: string]: PathEntryProperty;
}

export const DefaultPathEntry: PathEntryProperty = {
    path: "/",
    pageTitle: "Home Page",
    pageSubtitle: "This is a test home page",
    navFAIconClass: "fas fa-home",
    includeInViewNavigation: false,
    component: Home
}

export const PathEntry: PathEntry = {
    home: DefaultPathEntry,
    testPage: {
        path: "/test-page",
        pageTitle: "Test Page",
        pageSubtitle: "This is a test page",
        navFAIconClass: "fas fa-tachometer-alt",
        includeInViewNavigation: false,
        component: TestPage,
        submenu: {
            TestPageSubmeny: {
                path: "/test-page",
                pageTitle: "Test Page",
                pageSubtitle: "This is a test page",
                includeInViewNavigation: false,
                component: TestPage,
            },
            TestPageSubmeny2: {
                path: "/test-page2",
                pageTitle: "Test Page2",
                pageSubtitle: "This is a test page2",
                includeInViewNavigation: false,
                component: TestPage,
            },
        }
    },
    Products: {
        path: "/products",
        pageTitle: "Products Test Page",
        pageSubtitle: "This is a products test page",
        navFAIconClass: "fas fa-archive",
        includeInViewNavigation: false,
        component: TestPage,
        submenu: {
            product1: {
                path: "/products/1",
                pageTitle: "Product 1",
                pageSubtitle: "This is a product 1 test page",
                includeInViewNavigation: false,
                component: TestPage,
            },
            product2: {
                path: "/products/2",
                pageTitle: "Product 2",
                pageSubtitle: "This is a product 2 test page",
                includeInViewNavigation: false,
                component: TestPage,
            },
        }
    }
}

export const getPathEntryFromPath = (path: string): PathEntryProperty => {
    for (let i in PathEntry) {
        if (has(PathEntry[i], "submenu")) {
            for (let j in PathEntry[i].submenu) {
                if (PathEntry[i].submenu![j].path === path)
                    return PathEntry[i].submenu![j];
            }
        }
        if (PathEntry[i].path === path)
            return PathEntry[i];
    }
    return DefaultPathEntry;
}