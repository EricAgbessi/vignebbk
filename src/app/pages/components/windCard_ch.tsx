'use client'

import React from 'react';
import { Card, Typography, Image, Rate } from 'antd';
import { IoIosWater, IoIosColorPalette } from 'react-icons/io';
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import { GiGrapes } from 'react-icons/gi'
import { useRouter } from 'next/navigation';
import { ApiUrl, Pages } from '@/config/constant';
import { Carousel } from 'antd';

import { FaWhatsapp } from 'react-icons/fa6'

import {
    PhoneOutlined
} from '@ant-design/icons';




const { Title, Text } = Typography;

const WineCard_CH = (props: any) => {
    const { name, year, region, description, image } = props.wine;
    const { Meta } = Card;
    const router = useRouter()


    console.log("BLAVLA", props?.wine);


    const contentStyle: React.CSSProperties = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };



    const goToZoomin = () => {
        router?.push(Pages.zoomin)
    }
    return (
        <div className="max-w-sm bg-white rounded-lg" >
            <a href={`${Pages.zoomin_ch}?id=${props?.wine?.id}`}>
                <img className="rounded-t-lg h-56" src={props?.wine?.url === null ? `${ApiUrl}/placeholder.png` : `${props?.wine?.url}`} alt="" />
            </a>


            <div className="p-5">
                <a href={`${Pages.zoomin}?id=${props?.wine?.id}`}>
                    <h5 className="mb-2 text-md  sm:text-md md:text-md lg:text-xl  font-bold tracking-tight ">{props?.wine?.Nom}</h5>
                </a>
                <div className="flex flex-row">
                    <div>
                        <div className='flex flex-col m-2'>
                            <p className="" style={{ color: "#ba1628", fontWeight: "bold" }}>Taille</p>
                            <span>{props?.wine?.Taillebouteille}</span>
                        </div>
                        <div className='flex flex-col m-2'>
                            <p style={{ color: "#ba1628", fontWeight: "bold" }}>Catégorie</p>
                            <span>{props?.wine?.Catégorie}</span>
                        </div>

                        <div className='flex flex-col m-2'>
                            <p style={{ color: "#ba1628", fontWeight: "bold" }}>Marque</p>
                            <span>{props?.wine?.Marque}</span>
                        </div>

                        <div className='flex flex-col m-2'>
                            <p style={{ color: "#ba1628", fontWeight: "bold" }}>Teneur en alcool</p>
                            <span>{props?.wine?.Teneurenalcool}</span>
                        </div>

                        <div className='flex flex-col m-2'>
                            <span className='mr-2 font-bold' style={{ color: "#ba1628", fontWeight: "bold" }}>Prix</span>
                            <span>{props?.wine?.PrixdeVente}</span>
                        </div>


                        <div className='flex flex-col m-2'>
                            <span className='mr-2 font-bold' style={{ color: "#ba1628", fontWeight: "bold" }}>Age du Cognac</span>
                            <span>{props?.wine?.AgeduCognac}</span>
                        </div>


                        <div className='flex flex-row m-2'>
                            <PhoneOutlined style={{ fontSize: "22px" }} />
                            <span style={{ fontSize: "10px" }}> +33 7 66 19 53 41 </span>
                        </div>




                        <div className='flex flex-row m-2'>
                            <FaWhatsapp style={{ fontSize: "22px" }} />
                            <span style={{ fontSize: "10px" }}>+229 95 06 70 17 </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};

export default WineCard_CH;
