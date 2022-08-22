import * as React from 'react';
import { useLocation } from 'react-router';
import './Content.css';

import { withRouter } from '../../Utils/router-util';
import { PathEntryProperty } from '../../routes';
import { Row } from '../../Components/UI/Grid/Grid';
import PageHeader from './PageHeader/PageHeader';
import Footer from './Footer/Footer';
import { getPathEntryFromPath } from '../../routes';

const Content = () => {
    const location = useLocation();

    const getPageTitle = () => {
        const pathEntry: PathEntryProperty | undefined = getPathEntryFromPath(location.pathname);
        return pathEntry.pageTitle;
    }

    const getPageSubtitle = () => {
        const pathEntry: PathEntryProperty | undefined = getPathEntryFromPath(location.pathname);
        return pathEntry?.pageSubtitle;
    }

    getPageTitle();

    return <section className='content-wrapper bg-light'>
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

export default withRouter(Content);
