import {Button, Form, Input, notification} from 'antd'
import './login.css'
import Axios from "../../api_config/axios";
import {Api} from "../../api_config/api_address";
import Notification from "../../utils/notification";
import {useEffect} from "react";

const Login = () => {

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, title="Error", description) => {
        api[type]({
            message: title,
            description: description
        });
    };

    useEffect(() => {
        openNotificationWithIcon("error", "Error", "data.response.data.message")
    }, [])

    const onFinish = async (values) =>{
        console.log(`api is: ${Api}`)
        await Axios.post('', `${Api}/users/v1/login`, values).then((data) => {
            console.log("data is: ", data);
            openNotificationWithIcon("error", "Error", data.response.data.message)
        }).catch((err) => {
            console.log("error is: ", err)
        })
    }


    return <div className={'body'}>
        <div className={'container'}>
            <h1>Login</h1>
        <Form onFinish={onFinish}>
            <Form.Item name={"username"}
                       rules={[
                           {
                               required: true,
                               message: <p style={{color: "#000000"}}>Please input your username!</p>,
                           },
                       ]}
            >
                <Input placeholder={"Username"} className={'inputs'}/>
            </Form.Item>

            <Form.Item name={"password"}
                       rules={[
                           {
                               required: true,
                               message: <p style={{color: "#000000"}}>Please input your password!</p>,
                           },
                       ]}
            >
            <Input placeholder={"Password"} style={{marginTop: "65px"}}/>
            </Form.Item>

            <Form.Item>
            <Button htmlType="submit" type={"primary"} style={{marginTop: "65px", width: "30%", backgroundColor: "#000000"}}>Submit</Button>
            </Form.Item>

        </Form>

        </div>
    </div>
}

export default Login;