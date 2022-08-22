import Home from './Views/Home/Home';

export type PathEntryProperty = {
    path: string,
    pageTitle: string,
    pageSubtitle?: string,
    navFAIconClass?: string, //FA stand for Font Awesome
    includeInViewNavigation: boolean,
    component: React.FunctionComponent
}

type PathEntry = {
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
    home: DefaultPathEntry
}

export const getPathEntryFromPath = (path: string): PathEntryProperty => {
    for (let i in PathEntry) {
        if (PathEntry[i].path === path)
            return PathEntry[i];
    }
    return DefaultPathEntry;
}