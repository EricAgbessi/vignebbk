'use client'

import React from 'react';
import { Card, Typography, Image, Rate } from 'antd';
import { IoIosWater, IoIosColorPalette } from 'react-icons/io';
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import { GiGrapes } from 'react-icons/gi'
import { useRouter } from 'next/navigation';
import { ApiUrl, Pages } from '@/config/constant';
import { Carousel } from 'antd';



const { Title, Text } = Typography;

const WineCard_v = (props: any) => {
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
        <div className="max-w-sm bg-white rounded-lg ">
            <a href={`${Pages.zoomin_v}?id=${props?.wine?.id_important}`}>
                <img className="rounded-t-lg" src={props?.wine?.url === null ? `${ApiUrl}/placeholder.png` : `${props?.wine?.url}`} alt="" />
            </a>


            <div className="p-5">
                <a href={`${Pages.zoomin}?id=${props?.wine?.id_important}`}>
                    <h5 className="mb-2 text-md  sm:text-md md:text-md lg:text-xl  font-bold tracking-tight ">{props?.wine?.elements}</h5>
                </a>
                <div className="flex flex-row">
                    <div>
                        <div className='m-2'><Rate style={{ color: "#ba1628" }} disabled allowHalf defaultValue={parseFloat(props?.wine?.cote)} /></div>
                        <div className='flex flex-row m-2'>
                            <CiLocationOn style={{ fontSize: "22px" }} />
                            <span>{props?.wine?.Region_domaine}</span>
                        </div>
                        <div className='flex flex-row m-2'>
                            <GiGrapes style={{ fontSize: "22px" }} />
                            <span>{props?.wine?.cepages}</span>
                        </div>

                        <div className='flex flex-row m-2'>
                            <IoIosWater style={{ fontSize: "22px" }} />
                            <span>{props?.wine?.teneur_en_alcool}</span>
                        </div>

                        <div className='flex flex-row m-2'>
                            <IoIosColorPalette style={{ fontSize: "22px" }} /> <span>{props?.wine?.Style_de_Vin}</span>
                        </div>

                        <div className='flex flex-row m-2'>
                            <span className='mr-2 font-bold'>Prix</span>
                            <span>{props?.wine?.prix_unitaire}</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
};

export default WineCard_v;
