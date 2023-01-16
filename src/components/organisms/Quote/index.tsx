import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";

import * as S from "./styles";

export const Quote = () => {
    const onFinish = (values: any) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <S.Container>
            <div>
                <h1>Request a Free Quote</h1>
                <p>Fill out the form and receive a custom quotation:</p>
            </div>
            <S.Wrapper>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8
                    }}
                    wrapperCol={{
                        span: 16
                    }}
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Full Name"
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "Please input your phone!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select>
                            <Select.Option value="seaimp">
                                Sea importation
                            </Select.Option>
                            <Select.Option value="seaexp">
                                Sea exportation
                            </Select.Option>
                            <Select.Option value="airimp">
                                Air importation
                            </Select.Option>
                            <Select.Option value="airexp">
                                Air exportation
                            </Select.Option>
                            <Select.Option value="truckfr">
                                Truck freight
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="City of departue"
                        name="cargoout"
                        rules={[
                            {
                                required: true,
                                message: "Please input your cargo origin!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Delivery city"
                        name="cargoin"
                        rules={[
                            {
                                required: true,
                                message: "Please input your cargo destination!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Cargo description"
                        name="cargodesc"
                        rules={[
                            {
                                required: true,
                                message: "Please input your cargo description!"
                            }
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="btn"
                        >
                            GET A QUOTE
                        </Button>
                    </Form.Item>
                </Form>
            </S.Wrapper>
        </S.Container>
    );
};
