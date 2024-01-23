"use client"
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { DrawerProps, MenuProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Input, Menu, Row, Space } from 'antd';
import Search, { SearchProps } from 'antd/es/input/Search';
import { GiWineGlass, GiGrapes, GiBrokenBottle } from 'react-icons/gi'
import { AiOutlineMenu, AiOutlineQq } from 'react-icons/ai'
import { LiaCheeseSolid } from 'react-icons/lia'
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import Link from 'next/link';
import { ApiUrl, Pages } from '@/config/constant';
import { IoIosWater } from 'react-icons/io';
import { LuGlassWater } from "react-icons/lu";
import { BiSolidWine } from "react-icons/bi"
import { PiWineThin } from "react-icons/pi"
import { FaWineBottle } from "react-icons/fa6"
import Image from 'next/image';

const items: MenuProps['items'] = [
    {
        label: <Link href={`${Pages.vin}`}>
            vins
        </Link>,
        key: 'vin',
        icon: <GiWineGlass style={{ fontSize: "22px" }} />,
    },
    {

        label: <Link href={`${Pages.vin}?classification=Petite%20crue`}>
            Petits crus
        </Link>,
        key: 'petitecrue',
        icon: <PiWineThin style={{ fontSize: "22px" }} />,

    },

    {
        label: <Link href={`${Pages.vin}?classification=Grand%20Cru`}>
            Grands crus
        </Link>,
        key: 'grandcrue',
        icon: <BiSolidWine style={{ fontSize: "22px" }} />,
    },
    {
        label: <Link href={`${Pages.vin}`}>
            Champagnes
        </Link>,
        key: 'Champagnes',
        icon: <FaWineBottle style={{ fontSize: "22px" }} />,
    },
    {
        label: <Link href={`${Pages.cognac}`}>
            Cognac
        </Link>,
        key: 'Cognac',
        icon: <GiBrokenBottle style={{ fontSize: "22px" }} />,
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
        <>
            <div style={{ width: "100%" }} className='mb-2'>

                <Drawer
                    className="fixed"
                    title={<h3 className="mr-4 font-bold" style={{ color: "#ba1628", fontSize: "25px" }}>
                        <img src={`${ApiUrl}/logo.png`} width="80px" />
                    </h3>}
                    placement={placement}
                    width={300}
                    onClose={onClose}
                    getContainer={false}
                    open={open}

                >
                    <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />

                </Drawer>



            </div>









            <nav className="bg-white mb-2   dark:bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={`${ApiUrl}/logo.png`} className="h-14 w-14" alt="Logo" />
                    </a>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <button onClick={showDrawer} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            <li>
                                <Link href={Pages.vin} className=" flex flex-row block py-2 px-3 text-gray-700 bg-blue-700 rounded md:bg-transparent " aria-current="page">
                                    <GiWineGlass style={{ fontSize: "22px" }} /><span>vins</span>
                                </Link>
                            </li>

                            <li>
                                <Link href={`${Pages.vin}?classification=Petite%20crue`} className=" flex flex-row block py-2 px-3 text-gray-700 bg-blue-700 rounded md:bg-transparent " aria-current="page">
                                    <PiWineThin style={{ fontSize: "22px" }} /><span>Petite crue</span>
                                </Link>
                            </li>

                            <li>
                                <Link href={`${Pages.vin}?classification=Grand%20Cru`} className=" flex flex-row block py-2 px-3 text-gray-700 bg-blue-700 rounded md:bg-transparent " aria-current="page">
                                    <BiSolidWine style={{ fontSize: "22px" }} /><span>Grande crue</span>
                                </Link>
                            </li>

                            <li>
                                <Link href={Pages.vin} className=" flex flex-row block py-2 px-3 text-gray-700 bg-blue-700 rounded md:bg-transparent " aria-current="page">
                                    <FaWineBottle style={{ fontSize: "22px" }} /><span>Champagnes</span>
                                </Link>
                            </li>

                            <li>
                                <Link href={Pages.cognac} className=" flex flex-row block py-2 px-3 text-gray-700 bg-blue-700 rounded md:bg-transparent " aria-current="page">
                                    <GiBrokenBottle style={{ fontSize: "22px" }} /><span>Cognac</span>
                                </Link>
                            </li>





                        </ul>
                    </div>








                    { /* <Input
                        placeholder="Chercher un vin"
                        className=''
                        prefix={<CiSearch />}
                        style={{ width: '50', height: "40px", fontSize: "16px" }}

                        />*/}
                </div>
            </nav>








        </>

    )
}
export default CustomHeader;