import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    notification,
    Modal
} from "antd";
import confetti from "canvas-confetti";

import * as S from "./styles";

export const Quote = () => {
    const { t } = useTranslation();

    const formRef = React.useRef(null);

    const onReset = () => {};

    const [state, handleSubmit] = useForm("mjvjwqaq");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onFinish = async (values: any) => {
        return (await handleSubmit(values)) && setIsModalOpen(true);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <S.Container>
            <div>
                <h1>{t("Request a Free Quote")}</h1>
                <p>{t("Fill out the form and receive a custom quotation:")}</p>
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
                        label={t("Full Name")}
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: `${t("Please input your name!")}`
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={t("Email")}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: `${t("Please input your email!")}`
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("Phone")}
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: `${t("Please input your phone!")}`
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label={t("Desired service")} name="service">
                        <Select>
                            <Select.Option value="sea import">
                                Sea importation
                            </Select.Option>
                            <Select.Option value="sea export">
                                Sea exportation
                            </Select.Option>
                            <Select.Option value="air import">
                                Air importation
                            </Select.Option>
                            <Select.Option value="air export">
                                Air exportation
                            </Select.Option>
                            <Select.Option value="truck freight">
                                Truck freight
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={t("City of departue")}
                        name="cargoout"
                        rules={[
                            {
                                required: true,
                                message: `${t(
                                    "Please input your cargo origin!"
                                )}`
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("Delivery city")}
                        name="cargoin"
                        rules={[
                            {
                                required: true,
                                message: `${t(
                                    "Please input your cargo destination!"
                                )}`
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("Cargo description")}
                        name="cargodesc"
                        rules={[
                            {
                                required: true,
                                message: `${t(
                                    "Please input your cargo description!"
                                )}`
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
                            {t("GET A QUOTE")}
                        </Button>
                    </Form.Item>
                </Form>
                <Modal
                    title="Quote sent!"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    onOk={handleOk}
                >
                    <p>
                        {t(
                            "Thank you for getting in touch, a consultant will contact you in a few moments"
                        )}{" "}
                        👋
                    </p>
                </Modal>
            </S.Wrapper>
        </S.Container>
    );
};
