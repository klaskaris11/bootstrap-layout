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
import {isSidebarNarrow} from '../../Utils/LayoutUtils/LayoutUtils';

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

    const getPageTitle = (): string => {
        const pathEntry: PathEntryProperty | undefined = getPathEntryFromPath(location.pathname);
        return pathEntry.pageTitle;
    }

    const getPageSubtitle = (): string | undefined => {
        const pathEntry: PathEntryProperty | undefined = getPathEntryFromPath(location.pathname);
        return pathEntry?.pageSubtitle;
    }

    return <section className={`content-wrapper${isSidebarNarrow(props.width) ? " content-wrapper-narrow" : ""} bg-light`}>
        <PageHeader
            title={getPageTitle()}
            subtitle={getPageSubtitle()}
        />
        <Row classes={["px-3"]}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed massa lacinia, posuere nulla quis, bibendum ex. Curabitur cursus commodo libero, vel luctus libero lacinia ut. Fusce turpis lacus, rutrum eu ligula ut, pellentesque volutpat risus. Quisque tincidunt mauris tristique tortor vehicula, tincidunt imperdiet neque tristique. In hac habitasse platea dictumst. Proin ac mi vel velit commodo laoreet ut a odio. Ut luctus mauris sed lorem posuere luctus sed a urna. Cras vulputate tortor nulla, non interdum eros ultricies id. Praesent pharetra euismod sapien et porttitor. Nulla ut elementum elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
            <p>
                Sed blandit eros suscipit, varius lectus sed, dignissim felis. Morbi et mi hendrerit, varius dolor id, venenatis sapien. Nunc dui nunc, auctor quis efficitur sit amet, suscipit vel lacus. Suspendisse venenatis consequat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam finibus tellus nisl. Donec aliquet nec odio molestie varius. Nulla sit amet bibendum elit. Vivamus elementum tortor a lacus ultrices, sit amet porttitor mi dictum. Morbi quis mauris neque. Proin sed est scelerisque enim consequat posuere ut ut ex. Etiam vitae mauris turpis. Suspendisse accumsan dapibus sapien, sed tempor diam porta vel.
            </p>
        </Row>
        <Footer>
            <span className='px-3'>This is a Footer</span>
        </Footer>
    </section>;
};

export default connector(withRouter(Content));
