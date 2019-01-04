import React from 'react';
import { getAuthority } from '../../utils/authority'
import RenderAuthorized from 'ant-design-pro/lib/Authorized';
import { Redirect } from 'dva/router';
import Edit from './view';


export default class EditAuthority extends React.Component {
    render() {
        const Authority = getAuthority();
        const Authorized = RenderAuthorized(Authority);
        return (
            <Authorized authority={['wien']} noMatch={<Redirect to="/login" />}>
                <Edit />
            </Authorized>
        )
    }
}