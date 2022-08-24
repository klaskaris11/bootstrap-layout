import {
  connect,
  ConnectedProps
} from "react-redux";
import './NavbarBrand.css';

import { UIReducerState } from "../../../Store/Reducers/UIReducer";
import { isSidebarNarrow } from "../../../Utils/LayoutUtils/LayoutUtils";
import { Constants } from '../../../Constants';

type MapStateToProps = {
  width: number
};

const mapStateToProps = (state: UIReducerState): MapStateToProps => {
  return {
    width: state.width,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const NavbarBrand = (props: Props) => {
  return <div className='navbar-brand' title={isSidebarNarrow(props.width) ? Constants.APP_NAME as string : undefined}>
    <i className={`fas fa-box-open me-2${isSidebarNarrow(props.width) ? " fa-2x" : ""}`}></i>
    {
      !isSidebarNarrow(props.width) && <span className="ms-1">{Constants.APP_NAME}</span>
    }
  </div>;
};

export default connector(NavbarBrand);
