'use client'
import { Badge, Button, Card, Drawer, DrawerProps, Menu, MenuProps, QRCode, Rate, Row } from "antd";
import CustomHeader from "../../compotents/Header";
import WineCard from "../components/windCard";
import Filter from "../../compotents/Filter";
import { useEffect, useState } from "react";
import { GETALIMENTZOOMIN, GETCEPAGESZOOMIN, GETWINE, GETWINEZOOMIN } from "@/utils/axios";
import { useParams } from "next/navigation";
import { useRouter } from 'next/navigation';
import { IoIosWater, IoIosColorPalette } from 'react-icons/io';
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import { GiGrapes } from 'react-icons/gi'
import FooterCustom from "@/app/compotents/Footer";
import { ApiUrl, FrontendUrl, Pages } from "@/config/constant";

export default function Vin() {
    const router = useRouter()


    interface Wine {
        Style_de_Vin: string;
        elements: string;
        Region_domaine: string;
        cepages: string;
        teneur_en_alcool: string;
        allergenes: string;
        aliments_compatibles: string;
        classification: string;
        annees: string;
        cote: string;
        id: string;
    }

    interface Cepage {
        designation: string,
        id_vin: string,
        id: string
    }
    const [wineData, setWineData] = useState<Wine>()
    const [cepageData, setCepageData] = useState([]);
    const [alimentData, setAlimentData] = useState([]);



    useEffect(() => {
        /* GETWINEZOOMIN(id).then((res) => {
             setWineData(res?.data)
             console.log(res)
         })*/
        const urlSearchParams = new URLSearchParams(window.location.search);

        const queryParamsExist = urlSearchParams.size;
        if (queryParamsExist) {
            const id = urlSearchParams.get('id');
            GETWINEZOOMIN(id).then((res) => {
                setWineData(res?.data[0])
                console.log(res?.data[0])
            })


            GETCEPAGESZOOMIN(id).then((res) => {
                setCepageData(res?.data)
                console.log(res?.data)
            })

            GETALIMENTZOOMIN(id).then((res) => {
                setAlimentData(res?.data)
                console.log(res?.data)
            })
        } else {
        }

    }, [])

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const onClose = () => {
        setOpen(false);
    };
    return <div>
        <Row className=' lg:ml-[10%] lg:mr-[10%]  mb-4 mt-20'>
            <CustomHeader />
            <div className="flex flex-row justify-around w-full block lg:hidden mr-4" >
                <Button danger onClick={() => { setOpen(true) }} className="m-2 rounded-full" >Filtres</Button>
                <Button danger className="m-2 rounded-full" >Trier</Button>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center  mt-4 w-full"  >
                <div className="w-full md:w-1/2 lg:w-4/5 bg-white rounded-xl  overflow-hidden">
                    <div className="md:flex w-full " style={{ width: "100%" }}>
                        <Badge.Ribbon text={wineData?.Style_de_Vin} color="red" >
                            <img style={{ height: "500px" }} className="h-48 md:h-96 w-[100%] object-cover  md:w-[40%]" src="https://cavesdomaines.be/wp-content/uploads/2021/07/Pierre-Amadieu-Vacqueyras.jpg" alt="Modern building architecture" />
                        </Badge.Ribbon>

                        <div className="md:w-[70%] px-4">
                            <div className="p-2 w-[100%]">
                                <div >
                                    <div className='flex flex-row m-2 font-bold '>
                                        <span className=" text-4xl">{wineData?.elements}</span>
                                    </div>
                                    <div className='flex flex-row m-2'>
                                        <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu&apos;il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum</p>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <CiLocationOn style={{ fontSize: "22px" }} />
                                            <span className="font-bold">Région/Domaine</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a href={`${FrontendUrl}${Pages.vin}?Region_domaine=${wineData?.Region_domaine}`}>{wineData?.Region_domaine}</a>

                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <GiGrapes style={{ fontSize: "22px" }} />
                                            <span className="font-bold">CEPAGES</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            {
                                                Array.isArray(cepageData) && cepageData.map((cp: Cepage, index) => (
                                                    <a href={`${FrontendUrl}${Pages.vin}?cepages=${cp.designation}`} key={index} className="mr-2">{cp.designation}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <IoIosWater style={{ fontSize: "22px" }} />
                                            <span className="font-bold">Teneur en alcool</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a href={`${FrontendUrl}${Pages.vin}?teneur_en_alcool=${wineData?.teneur_en_alcool}`}>{wineData?.teneur_en_alcool}</a>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <span className="font-bold">Allergenes</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a href={`${FrontendUrl}${Pages.vin}?allergenes=${wineData?.allergenes}`}>{wineData?.allergenes}</a>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <span className="font-bold">Aliments compatibles</span>
                                        </div>

                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            {
                                                Array.isArray(alimentData) && alimentData.map((cp: Cepage, index) => (
                                                    <a href={`${FrontendUrl}${Pages.vin}?aliments_compatibles=${cp.designation}`} key={index} className="mr-2">{cp.designation}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <span className="font-bold">Classification</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a href={`${FrontendUrl}${Pages.vin}?classification=${wineData?.classification}`}>{wineData?.classification}</a>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <span className="font-bold">Annees</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a href={`${FrontendUrl}${Pages.vin}?annees=${wineData?.annees}`}>{wineData?.annees}</a>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 py-2">
                                        <div className='flex flex-row m-2'>
                                            <IoIosColorPalette style={{ fontSize: "22px" }} />
                                            <span className="font-bold">Style de Vin</span>
                                        </div>
                                        <div style={{ color: "#ba1628", fontWeight: "bold" }}>
                                            <a href={`${FrontendUrl}${Pages.vin}?Style_de_Vin=${wineData?.Style_de_Vin}`}>{wineData?.Style_de_Vin}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/5 p-4">
                    <div className="mb-8" >
                        <div className="max-w-sm rounded overflow-hidden shadow-lg h-32">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {wineData?.cote != undefined ?
                                        <Rate style={{ color: "#ba1628" }} disabled allowHalf defaultValue={parseFloat(wineData?.cote)} /> : ""
                                    }
                                </div>
                            </div>
                            <div className="px-6 py-4" style={{ backgroundColor: "#ba1628" }}>
                                <div className="font-bold text-xl mb-2 text-white">Note VigneBBK</div>
                            </div>
                        </div>
                    </div>

                    <QRCode
                        errorLevel="H"
                        value={`${FrontendUrl}${Pages.zoomin}?id=${wineData?.id}`}
                        icon={`${ApiUrl}/logo.png`}
                    />
                </div>




            </div>




            <Drawer
                title={<h3 className="mr-4 font-bold" style={{ color: "#ba1628", fontSize: "25px" }}>Filtre</h3>}
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