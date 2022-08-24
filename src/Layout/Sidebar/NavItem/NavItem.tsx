import {
   connect,
   ConnectedProps
} from "react-redux";
import './NavItem.css';

import { UIReducerState } from '../../../Store/Reducers/UIReducer';
import { Constants } from '../../../Constants';
import { isSidebarNarrow } from '../../../Utils/LayoutUtils/LayoutUtils';

type MapStateToProps = {
   width: number
};

const mapStateToProps = (state: UIReducerState): MapStateToProps => {
   return {
      width: state.width,
   };
};

type OwnProps = {
   text: string,
   faIconClass?: string,
   isActive?: boolean,
   onClick: Function,
   submenuTitle?: string,
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = OwnProps & PropsFromRedux;

const NavItem = (props: Props) => {

   const iconAlignment = !isSidebarNarrow(props.width) ? "left" : "center";
   const active = props.isActive ? props.isActive : false;

   return <button
      className={`nav-link nav-button${active ? " active" : ""} text-${iconAlignment}`}
      onClick={() => props.onClick()}
   >
      {
         props.faIconClass && <i className={`me-2 ${props.faIconClass} ${isSidebarNarrow(props.width) && "fa-1_5x"}`} />
      }
      {
         !isSidebarNarrow(props.width)
            ? props.submenuTitle
               ? <>{props.text} <i className="fas fa-angle-down float-end me-2 position-relative" style={{ top: 5 }}></i></>
               : props.text
            : null
      }
   </button>;
};

export default connector(NavItem);
