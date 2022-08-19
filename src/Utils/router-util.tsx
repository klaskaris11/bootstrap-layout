// https://stackoverflow.com/a/65794238/274677
import React from "react";
import { NavigateFunction, useLocation, useNavigate, useParams } from "react-router";

export interface RoutedProps<Params = any, State = any> {
  routing: RoutingSE<Params, State>
}

export interface RoutingSE<Params = any, State = any> { // Routing Side Effects
    location: State;
    navigate: NavigateFunction;
    params: Params;
}


export function withRouter<P extends RoutedProps>( Child: React.FunctionComponent<P> ) {
    return ( props: Omit<P, keyof RoutedProps> ) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Child { ...props as P } routing={{navigate, location, params}}/>;
    }
}
