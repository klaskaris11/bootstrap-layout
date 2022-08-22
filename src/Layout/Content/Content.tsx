import { useLocation } from 'react-router';
import {
    connect,
    ConnectedProps
 } from "react-redux";
import './Content.css';

import { withRouter, RoutedProps } from '../../Utils/router-util';
import { PathEntryProperty } from '../../routes';
import { Row } from '../../Components/UI/Grid/Grid';
import PageHeader from './PageHeader/PageHeader';
import Footer from './Footer/Footer';
import { getPathEntryFromPath } from '../../routes';
import { UIReducerState } from '../../Store/Reducers/UIReducer';
import { Constants } from '../../Constants';

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
 type Props = PropsFromRedux & RoutedProps;

const Content = (props: Props) => {
    const location = useLocation();

    const getPageTitle = () => {
        const pathEntry: PathEntryProperty | undefined = getPathEntryFromPath(location.pathname);
        return pathEntry.pageTitle;
    }

    const getPageSubtitle = () => {
        const pathEntry: PathEntryProperty | undefined = getPathEntryFromPath(location.pathname);
        return pathEntry?.pageSubtitle;
    }

    return <section className={`content-wrapper${props.width === Constants.NARROW_SIDEBAR_WIDTH ? " content-wrapper-narrow" : ""} bg-light`}>
        <PageHeader
            title={getPageTitle()}
            subtitle={getPageSubtitle()}
        />
        <Row classes={["px-3"]}>
            this is fucking content
        </Row>
        <Footer>
            <span className='px-3'>This is a Footer</span>
        </Footer>
    </section>;
};

export default connector(withRouter(Content));
