import React from "react";
import './css/login.less';
import imgURL from './img/favicon.ico';
import { Button, Form, Input, ConfigProvider } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { LockOutlined } from '@ant-design/icons'
export default class Login extends React.Component {
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    render() {
        return (
            <div className="login">
                <header>
                    {/* {jsx中不支持直接写img路径} */}
                    <img src={imgURL} alt="cuola" />
                    <h1>商品管理系统</h1>
                </header>
                <section>
                    <div><h1>用户登录</h1></div>
                    <ConfigProvider theme={{ token: { colorPrimary: '#5395ab', },
                        }}>
                        <Form  name="normal_login" className="login-form" initialValues={{remember: true,}}  onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                            <Form.Item name="username" rules={[{required: true,message: '请输入你的用户名！', },{max:12,message:'用户名必须小于12位'},{min:4,message:'用户名必须大于4位'},{pattern:/^\w+$/,message:'用户名必须是字母、数字和下划线组成'}]} >
                                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: '请输入你的密码!' },{max:12,message:'密码必须小于12位'},{min:4,message:'密码必须大于4位'},{pattern:/^\w+$/,message:'密码必须是字母、数字和下划线组成'}]}>
                                <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />}  type="password" placeholder="Password" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" block size="large" htmlType="submit"> Log in </Button>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>                  
                </section>
            </div>
        )
    }
}