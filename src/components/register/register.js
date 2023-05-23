import {Button, Form, Input} from 'antd'
import './register.css'
import Axios from "../../api_config/axios";
import {Api} from "../../api_config/api_address";
import Notification from "../../utils/notification";


const Register = () => {

    const onFinish = async (values) =>{

        await Axios.post(`${Api}/users/v1/register`, values).then((data) => {
            // console.log("data: ", data)
            if(data.status === 201){
                console.log("data: ", data)
                Notification.success_notification(data.data.message);

                localStorage.setItem("access_token", data.data.data.tokens.accessToken)
                localStorage.setItem("refresh_token", data.data.data.tokens.refreshToken)
            }
            else {
                // console.log("data is: ", data);
                Notification.error_notification(data.response.data.message);
            }
            // Notification.("error", "Error", data.response.data.message)
        }).catch((err) => {
            console.log("error is err: ", err)
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
            <Input placeholder={"Password"} style={{marginTop: "65px"}} type={"password"}/>
            </Form.Item>

            <Form.Item name={"password_retype"}
                       rules={[
                           {
                               required: true,
                               message: <p style={{color: "#000000"}}>Please input password again!</p>,
                           },
                           ({ getFieldValue }) => ({
                               validator(_, value) {
                                   if (!value || getFieldValue('password') === value) {
                                       return Promise.resolve();
                                   }
                                   return Promise.reject(new Error('The two passwords that you entered do not match!'));
                               },
                           }),
                       ]}
            >
                <Input placeholder={"Password(retype)"} style={{marginTop: "65px"}} type={"password"}/>
            </Form.Item>

            <Form.Item>
            <Button htmlType="submit" type={"primary"} style={{marginTop: "55px", width: "30%", backgroundColor: "#000000"}}>Submit</Button>
            </Form.Item>

        </Form>

        </div>
    </div>
}

export default Register;