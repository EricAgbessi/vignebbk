"use client"
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { DrawerProps, MenuProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Input, Menu, Row, Space } from 'antd';
import Search, { SearchProps } from 'antd/es/input/Search';
import { GiWineGlass, GiGrapes, GiPositionMarker } from 'react-icons/gi'
import { AiOutlineMenu } from 'react-icons/ai'
import { LiaCheeseSolid } from 'react-icons/lia'
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import Link from 'next/link';
import { Pages } from '@/config/constant';

const items: MenuProps['items'] = [
    {
        label: <Link href={Pages.vin}>
            vin
        </Link>,
        key: 'vin',
        icon: <GiWineGlass style={{ fontSize: "22px" }} />,
    },
    {
        label: 'Accords mets et vins',
        key: 'accord',
        disabled: true,
        icon: <LiaCheeseSolid style={{ fontSize: "22px" }} />,
        children: [
            {
                type: 'group',
                label: 'Item 1',

            },
            {
                type: 'group',
                label: 'Item 2',

            },
            {
                type: 'group',
                label: 'Item 2',

            },
            {
                type: 'group',
                label: 'Item 2',

            },

        ],
    },
    {
        label: 'Cépages',
        key: 'Cépages',
        disabled: true,
        icon: <GiGrapes style={{ fontSize: "22px" }} />,
        children: [
            {
                type: 'group',
                label: 'Item 1',

            },
            {
                type: 'group',
                label: 'Item 2',

            },
            {
                type: 'group',
                label: 'Item 2',

            },
            {
                type: 'group',
                label: 'Item 2',

            },

        ],
    },
    {
        label: 'Régions',
        disabled: true,
        key: 'Régions',
        icon: <CiLocationOn style={{ fontSize: "22px" }} />,
        children: [
            {
                type: 'group',
                label: 'Item 1',

            },
            {
                type: 'group',
                label: 'Item 2',

            },
            {
                type: 'group',
                label: 'Item 2',

            },
            {
                type: 'group',
                label: 'Item 2',

            },

        ],
    },

];

const CustomHeader: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setOpen(false);
    };





    return (
        <div style={{ width: "100%" }} className='mb-2'>
            <div className='mb-4'>
                <div className='flex flex-row justify-between w-full mt-4 ' >
                    <div className='flex flex-row ml-4 '>
                        <Button onClick={showDrawer} className='block lg:hidden mr-4'><AiOutlineMenu /></Button>
                        <h3 className="mr-5 font-bold" style={{ color: "#ba1628", fontSize: "30px" }}>VingneBBK</h3>

                        <Input
                            placeholder="Chercher un vin"
                            className='visible max-sm:hidden max-md:hidden lg:visible p-2 rounded-full'
                            prefix={<CiSearch />}
                            style={{ width: 304, height: "40px", fontSize: "16px" }}

                        />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <Drawer
                title={<h3 className="mr-4 font-bold" style={{ color: "#ba1628", fontSize: "25px" }}>VingneBBK</h3>}
                placement={placement}
                width={300}
                onClose={onClose}
                getContainer={false}
                open={open}

            >
                <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />

            </Drawer>



            <Menu className='visible max-sm:hidden max-md:hidden lg:visible' style={{ fontSize: "16px" }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    )
}
export default CustomHeader;