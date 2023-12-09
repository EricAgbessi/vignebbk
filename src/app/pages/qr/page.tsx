'use client'
import React, { useState } from 'react';
import { Input, QRCode, Row, Space } from 'antd';

const App: React.FC = () => {
    const [text, setText] = useState('https://ant.design/');

    return (
        <Row style={{ width: "100%", height: "100vh" }} justify={"center"} align={"middle"}>
            <Space direction="vertical" align="center">
                <QRCode value={text || '-'}
                    icon="http://92.222.164.174/vignebbk_php/logo.png"
                />
                <Input
                    className=' hidden'
                    placeholder="-"
                    maxLength={60}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Space>

        </Row>

    );
};

export default App;