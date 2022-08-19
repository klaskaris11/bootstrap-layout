import Home from './Views/Home/Home';

type PathEntryProperty = {
    path: string,
    pageTitle: string,
    includeInViewNavigation: boolean,
    component: React.FunctionComponent
}

type PathEntry = {
    [P: string]: PathEntryProperty;
}

export const PathEntry: PathEntry = {    
    home: {
        path: "/",
        pageTitle: "Αρχική Σελίδα",
        includeInViewNavigation: false,
        component: Home
    }
}

export const getPathEntryFromPath = (path: string) => {
    for (let i in PathEntry) {
        if (PathEntry[i].path === path)
            return PathEntry[i];
    }
    return "/";
}