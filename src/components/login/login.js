import {Form, Input} from 'antd'
import './login.css'

const Login = () => {
    return <div className={'body'}>
        <Form className={'container'}>
            <label>Username</label>
            <Input/>
        </Form>
    </div>
}

export default Login;