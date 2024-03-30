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
        <div className=' min-w-sm w-sm max-w-[100%] border-1  h-[100%] flex flex-row  w-full p-0 m-0 '    >
            <div className="w-[30%] sm:w-[30%] sm:max-w-[20%] md:w-[30%] md:max-w-[30%] m-2">
               <img className="rounded-t-lg max-h-[90%] max-w-[100%]" src={props?.wine?.url === null ? `${ApiUrl}/placeholder.png` : `${props?.wine?.url}`} alt="" />
           </div>


           <div className="p-5 sm:w-70%">
                <a href={`${Pages.zoomin}?id=${props?.wine?.id}`}>
                    <h5 className="mb-2 text-md  sm:text-md md:text-md lg:text-xl  font-bold tracking-tight ">{props?.wine?.Nom}</h5>
                </a>
                <div className="flex flex-row">
                    <div>
                        <div>
                            <span style={{ color: "#ba1628", fontWeight: "bold" }}>Taille :</span>
                            <span>{props?.wine?.Taillebouteille}</span>
                        </div>
                        <div >
                            <span style={{ color: "#ba1628", fontWeight: "bold" }}>Catégorie :</span>
                            <span>{props?.wine?.Catégorie}</span>
                        </div>

                        <div>
                            <span style={{ color: "#ba1628", fontWeight: "bold" }}>Marque :</span>
                            <span>{props?.wine?.Marque}</span>
                        </div>

                        <div >
                            <span style={{ color: "#ba1628", fontWeight: "bold" }}>Teneur en alcool :</span>
                            <span>{props?.wine?.Teneurenalcool}</span>
                        </div>

                        <div >
                            <span className='mr-2 font-bold' style={{ color: "#ba1628", fontWeight: "bold" }}>Prix : </span>
                            <span>{props?.wine?.PrixdeVente}</span>
                        </div>



                        <div >
                            <span  className='flex flex-row' style={{ color: "#ba1628", fontWeight: "bold" }}>Téléphone:</span> 
                            <span> +33 7 66 19 53 41 </span>
                        </div>




                        <div>
                            <span className='flex flex-row' style={{ color: "#ba1628", fontWeight: "bold" }}>Whatsapp:</span>
                            <span>+229 95 06 70 17 </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};

export default WineCard_v;
