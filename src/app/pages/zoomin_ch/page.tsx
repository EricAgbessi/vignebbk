'use client'
import { Badge, Button, Card, Drawer, DrawerProps, Menu, MenuProps, QRCode, Rate, Row } from "antd";
import CustomHeader from "../../compotents/Header";
import WineCard from "../components/windCard";
import Filter from "../../compotents/Filter";
import { useEffect, useState } from "react";
import { GETALIMENTZOOMIN, GETALIMENTZOOMIN_V, GETCEPAGESZOOMIN, GETCEPAGESZOOMIN_V, GETIMAGESZOOMIN, GETIMAGESZOOMIN_CH, GETIMAGESZOOMIN_V, GETWINE, GETWINEZOOMIN, GETWINEZOOMIN_CH, GETWINEZOOMIN_V } from "@/utils/axios";
import { useParams } from "next/navigation";
import { useRouter } from 'next/navigation';
import { IoIosWater, IoIosColorPalette } from 'react-icons/io';
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import { GiGrapes } from 'react-icons/gi'
import FooterCustom from "@/app/compotents/Footer";
import { ApiUrl, FrontendUrl, Pages } from "@/config/constant";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaWhatsapp } from 'react-icons/fa6'
import {
    PhoneOutlined
} from '@ant-design/icons';

export default function Vin() {
    const router = useRouter()


    interface Wine {
        Nom: string;
        Taillebouteille: string;
        Catégorie: string;
        Marque: string;
        Teneurenalcool: string;
        PrixdeVente: string;
        AgeduCognac: string;
        id: string;
        url: string;
    }



    interface Images {
        id: Number,
        url: string,
        id_cognac: Number,
        main: Number
    }
    const [wineData, setWineData] = useState<Wine>()
    const [cepageData, setCepageData] = useState([]);
    const [alimentData, setAlimentData] = useState([]);
    const [imagesData, setImagesData] = useState<Images[]>([]);


    useEffect(() => {
        /* GETWINEZOOMIN(id).then((res) => {
             setWineData(res?.data)
             console.log(res)
         })*/
        const urlSearchParams = new URLSearchParams(window.location.search);

        const queryParamsExist = urlSearchParams.size;
        if (queryParamsExist) {
            const id = urlSearchParams.get('id');
            GETWINEZOOMIN_CH(id).then((res) => {
                setWineData(res?.data[0])
                console.log(res?.data[0])
            })




            GETIMAGESZOOMIN_CH(id).then((res) => {
                const data = res?.data
                if (res?.data === "") {
                    setImagesData([])
                } else {
                    const sortedData = [...data].sort((a, b) => (a.main === "1" ? -1 : 1));
                    setImagesData(sortedData)
                }

            })

        } else {
        }

    }, [])

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const onClose = () => {
        setOpen(false);
    };

    const contentStyle: React.CSSProperties = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return <div>
        <Row className=' lg:ml-[10%] lg:mr-[10%]  mb-4 mt-20'>
            <CustomHeader />
            <div className="flex flex-row justify-around w-full block lg:hidden mr-4" >
                <a href={`${FrontendUrl}/pages/champagne`}><Button icon={<ArrowLeftOutlined />} className="m-2 rounded-full" /></a>
            </div>

            <div className="flex flex-col md:flex-row md:justify-center  mt-4 w-full"  >
                <div className="w-full md:w-1/2 lg:w-4/5 bg-white rounded-xl  overflow-hidden">
                    <div className="md:flex w-full flex-row justify-between " style={{ width: "100%" }}>
                        <div className="md:w-[30%]" >
                            <Badge.Ribbon text={wineData?.Catégorie} color="red" >
                                {
                                    imagesData.length === 0 ? <img style={{ height: "500px", width: "100%" }} className="h-48 md:h-96 w-[100%] object-cover  md:w-[30%]" src={`${ApiUrl}/placeholder.png`} alt="#" />
                                        :
                                        <Carousel>
                                            {

                                                imagesData?.map((images: Images, keys) => {
                                                    let i = 1;
                                                    return <div key={keys}>
                                                        <div
                                                            style={{
                                                                height: "500px",
                                                                width: "100%",
                                                                position: "relative", // Ajout de la position relative pour positionner l'image
                                                                overflow: "hidden" // Cacher tout contenu qui dépasse les limites de la div
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    bottom: 0,
                                                                    left: 0,
                                                                    right: 0,
                                                                    backgroundImage: `url(${images?.url})`,
                                                                    backgroundSize: "contain", // Taille de l'image pour couvrir toute la div
                                                                    backgroundPosition: "center", // Centrer l'image horizontalement et verticalement
                                                                    width: "100%", // Largeur de l'image en tant que 100% de la div parente
                                                                    height: "100%", // Hauteur de l'image en tant que 100% de la div parente
                                                                }}
                                                            />
                                                        </div>
                                                        <p className="legend">{wineData?.Nom} {keys + 1}</p>

                                                    </div>
                                                })
                                            }


                                        </Carousel>
                                }

                            </Badge.Ribbon>
                        </div>






                        <div className="md:w-[70%] px-4" >
                            <div className="p-2 w-[100%]">
                                <div >
                                    <div className='flex flex-row m-2 font-bold '>
                                        <span className=" text-4xl">{wineData?.Nom}</span>
                                    </div>
                                    <div className='flex flex-row m-2'>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <span className="font-bold">Taille de la bouteille</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a>{wineData?.Taillebouteille}</a>

                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <span className="font-bold">Catégorie</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a>{wineData?.Catégorie}</a>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <span className="font-bold">Marque</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a>{wineData?.Marque}</a>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <span className="font-bold">Teneur en alcool</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a>{wineData?.Teneurenalcool}</a>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <span className="font-bold">Prix</span>
                                        </div>

                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a >{wineData?.PrixdeVente}</a>
                                        </div>
                                    </div>


                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <PhoneOutlined style={{ fontSize: "22px" }} />
                                            <span className="font-bold">Contact</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a>+33 7 66 19 53 41 </a>
                                        </div>
                                    </div>


                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <FaWhatsapp style={{ fontSize: "22px" }} />
                                            <span className="font-bold">Whatsapp</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a>+229 95 06 70 17</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="w-full md:w-1/2 lg:w-1/5 p-4">

                    <QRCode
                        errorLevel="H"
                        value={`${FrontendUrl}${Pages.zoomin}?id=${wineData?.id}`}
                        icon={`${ApiUrl}/logo.png`}
                    />
                </div>
            </div>

            <Drawer
                className="fixed"
                title={<h3 className="mr-4 font-bold" style={{ color: "#ba1628", fontSize: "25px" }}>Filtres</h3>}
                placement={placement}
                width={350}
                onClose={onClose}
                getContainer={false}
                open={open}

            >
                <Filter />
            </Drawer>

        </Row >


    </div >
}