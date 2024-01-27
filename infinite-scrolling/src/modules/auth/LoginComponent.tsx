import { QuestionCircleOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Form, Input, Popover, Row, Typography, notification } from "antd";
import { useEffect, useState } from "react";
import { login } from "../../utils/auth/login";
import { TypeUser } from "./model";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const onLogin = async (value: {
        userName?: string,
        password?: string
    }) => {
        if (value.userName && value.password) {
            try {
                setLoading(true)
                const response: TypeUser = await login({
                    username: value.userName,
                    password: value.password
                })
                if (response.token) {
                    notification.success({
                        message: 'Success',
                    })
                    navigate("/")
                    sessionStorage.setItem('TOKEN', response.token)
                } else {
                    notification.error({
                        message: 'Error',
                        description: 'Some thing went wrong!'
                    })
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                notification.error({
                    message: 'Error',
                    description: 'Some thing went wrong!'
                })
            }

        }
    }

    useEffect(() => {
        form.setFieldsValue({
            userName: 'kminchelle',
            password: '0lelplR'
        })
    }, [])


    return (
        <div id="login">
            <Row justify={'center'}>
                <Col xs={24} sm={12} md={10} lg={8} xl={6}>
                    <Card
                        bordered
                    >
                        <Form onFinish={onLogin} form={form} layout={"vertical"}>
                            <Avatar
                                shape={"square"}
                                size={50}
                                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNFRMSEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--58a3524117ac2ffd2f1e0deba2d90445779f3c9b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/burning%201.jpg"
                            />
                            <Form.Item name={'userName'} label={<span>
                                User Name <Popover title="Default" content={<Typography.Text copyable>kminchelle</Typography.Text>}>
                                    <QuestionCircleOutlined />
                                </Popover>
                            </span>}>
                                <Input required defaultValue={'kminchelle'} placeholder="Name" />
                            </Form.Item>
                            <Form.Item name={'password'} label={<span>
                                Password <Popover title="Default" content={<Typography.Text copyable>0lelplR</Typography.Text>}>
                                    <QuestionCircleOutlined />
                                </Popover>
                            </span>}>
                                <Input required defaultValue={'0lelplR'} type={'password'} placeholder="Password" />
                            </Form.Item>
                            <Button loading={loading} htmlType="submit" type="primary">Login</Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LoginComponent;
