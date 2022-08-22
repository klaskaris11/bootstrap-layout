import {
   connect,
   ConnectedProps
} from "react-redux";
import './NavItem.css';

import { UIReducerState } from '../../../Store/Reducers/UIReducer';
import { Constants } from '../../../Constants';

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
   onClick: Function
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = OwnProps & PropsFromRedux;

const NavItem = (props: Props) => {

   const iconAlignment = props.width === Constants.WIDDE_SIDEBAR_WIDTH ? "left" : "center";
   const active = props.isActive ? props.isActive : false;

   return <button
      className={`nav-link nav-button${active ? " active" : ""} text-${iconAlignment}`}
      onClick={() => props.onClick}
   >
      {
         props.faIconClass && <i className={`me-2 ${props.faIconClass} ${props.width === Constants.NARROW_SIDEBAR_WIDTH && "fa-1_5x"}`} />
      }
      {
         props.width === Constants.WIDDE_SIDEBAR_WIDTH
            ? props.text
            : null
      }
   </button>;
};

export default connector(NavItem);
