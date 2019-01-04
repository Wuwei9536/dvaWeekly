import React from 'react';
import { getAuthority } from '../../utils/authority'
import RenderAuthorized from 'ant-design-pro/lib/Authorized';
import { Redirect } from 'dva/router';
import LayOut from './view';

export default class LayOutAuthority extends React.Component {
    render() {
        const Authority = getAuthority();
        const Authorized = RenderAuthorized(Authority);
        const { route } = this.props;
        return (
            <Authorized authority={['wien']} noMatch={<Redirect to="/login" />}>
                <LayOut route={route} />
            </Authorized>
        )
    }
}