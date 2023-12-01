'use client'

import React from 'react';
import { Card, Typography, Image, Rate } from 'antd';
import { IoIosWater, IoIosColorPalette } from 'react-icons/io';
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import { GiGrapes } from 'react-icons/gi'
import { useRouter } from 'next/navigation';
import { Pages } from '@/config/constant';


const { Title, Text } = Typography;

const WineCard = (props: any) => {
    const { name, year, region, description, image } = props.wine;
    const { Meta } = Card;
    const router = useRouter()


    const goToZoomin = () => {
        router?.push(Pages.zoomin)
    }
    return (

        <div className="md:flex flex-col">
            <div className="mt-2">
                <img className=" w-full object-cover h-44 " src="https://cavesdomaines.be/wp-content/uploads/2021/07/Pierre-Amadieu-Vacqueyras.jpg" alt="Modern building architecture" />
                <div className="uppercase tracking-wide text-md text-black  font-semibold text-center">{props?.wine?.elements}</div>

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
                    </div>
                </div>
            </div>


        </div>

    )
};

export default WineCard;
