import React, { memo } from "react";
import { ConfigProvider } from "antd";
import { Routes as ReacrRoutesDom, Route } from "react-router-dom";
import App from './../App.js'
import Login from'../components/login/login'

function Routes() {
    return (
        <ConfigProvider>
            <ReacrRoutesDom>
                <Route exact path="/" element={<App />} />
                <Route exact path="/user-list" element={<App />} />
                <Route exact path="/logout" element={<App/>}/>
                <Route exact path="/login" element={<Login />} />
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </ReacrRoutesDom>
        </ConfigProvider>
    );
}
export default memo(Routes);