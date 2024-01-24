'use client'
import { Button, Col, Drawer, DrawerProps, Menu, MenuProps, Row } from "antd";
import CustomHeader from "../../compotents/Header";
import WineCard from "../components/windCard";
import Filter from "../../compotents/Filter";
import { useEffect, useState } from "react";
import { GETWINE } from "@/utils/axios";
import { useRouter } from 'next/navigation';
import { FrontendUrl, Pages } from "@/config/constant";
import FooterCustom from "@/app/compotents/Footer";
import { ArrowLeftOutlined } from '@ant-design/icons';


export default function Vin() {
    const router = useRouter()
    const [wineData, setWineData] = useState([])
    const [isFiltre, setIsFiltre] = useState(false)
    const [listFiltre, setListFiltre] = useState<string[]>([])
    const [filtre, setFiltre] = useState<string | null>("Tous nos vins")

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const queryParamsExist = urlSearchParams.size;
        let filter;
        let tableFiltre: string[] = []


        if (queryParamsExist) {
            if (urlSearchParams.get('cepages') !== null) {
                tableFiltre.push("Cépages")
            }
            if (urlSearchParams.get('Region_domaine') !== null) {
                tableFiltre.push("Régions")
            }
            if (urlSearchParams.get('teneur_en_alcool') !== null) {
                tableFiltre.push("Teneur en alcool")
            }
            if (urlSearchParams.get('allergenes') !== null) {
                tableFiltre.push("Allergènes")
            }
            if (urlSearchParams.get('classification') !== null) {
                tableFiltre.push("Classification")

                const classif = urlSearchParams.get('classification');
                if (classif === "Petite crue")
                    setFiltre("Petits crus")
                if (classif === "Grand Cru")
                    setFiltre("Grands crus")
            }
            if (urlSearchParams.get('annees') !== null) {
                tableFiltre.push("Année")
            }
            if (urlSearchParams.get('Style_de_Vin') !== null) {
                tableFiltre.push("Style de Vin")


                const classif = urlSearchParams.get('Style_de_Vin');
                setFiltre(classif)

            }

            setListFiltre(tableFiltre)

            setIsFiltre(true)
            filter = {
                cepages: urlSearchParams.get('cepages'),
                Region_domaine: urlSearchParams.get('Region_domaine'),
                teneur_en_alcool: urlSearchParams.get('teneur_en_alcool'),
                allergenes: urlSearchParams.get('allergenes'),
                classification: urlSearchParams.get('classification'),
                annees: urlSearchParams.get('annees'),
                Style_de_Vin: urlSearchParams.get('Style_de_Vin')
            }
        }

        GETWINE(filter).then((res) => {
            console.log(res?.data);
            setWineData(res?.data)
        })
    }, [])




    const goToZoomin = (id: Number) => {
        router?.push(`${Pages.zoomin}?id=${id}`)
    }
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const onClose = () => {
        setOpen(false);
    };
    const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };


    const navigate = () => {
        document.location.reload()
    }
    return <div>
        <Row className='lg:mr-[10%] lg:ml-[10%] mb-4 mt-20 '>
            <CustomHeader />
            <div className="flex flex-row w-full mr-4" >
                {isFiltre === true ?
                    <a href={`${FrontendUrl}/pages/vin`}><Button icon={<ArrowLeftOutlined />} className="m-2 rounded-full" /></a>
                    : ""}
                <Button danger onClick={() => { setOpen(true) }} className="m-2 rounded-full" >Filtres</Button>
                {isFiltre === true ?
                    <>
                        {listFiltre?.map((filtre, index) => {
                            return <Button key={index} type="primary" danger className="m-2 rounded-full" >{filtre}</Button>
                        })}
                    </>

                    : ""}





            </div>


            <div className="flex flex-row w-full mr-4 overflow-x-auto w-full">
                <a href={`${FrontendUrl}/pages/vin?classification=Grand%20Cru`}> <Button type="link" onClick={navigate} block
                    className={`m-2 rounded-full ${filtre === 'Grands crus' ? 'bg-red-700 text-white' : ''}`} >Grands crus</Button></a>

                <a href={`${FrontendUrl}/pages/vin?classification=Petite%20crue`}> <Button type="link" onClick={navigate} block
                    className={`m-2 rounded-full ${filtre === 'Petits crus' ? 'bg-red-700 text-white' : ''}`} >Petits crus</Button></a>

                <a href={`${FrontendUrl}/pages/cognac`}> <Button type="link" block
                    className={`m-2 rounded-full ${filtre === 'Cognac' ? 'bg-red-700 text-white' : ''}`} >Cognacs & Eau de vie</Button> </a>

                <a href={`${FrontendUrl}/pages/champagne`}> <Button type="link" block
                    className={`m-2 rounded-full ${filtre === 'Champagne' ? 'bg-red-700 text-white' : ''}`} >Champagnes</Button> </a>


            </div>



            <Row className=" bg-red-700 w-full text-white text-center p-2 rounded-md" justify="center" ><p>{filtre}</p></Row>

            <div className="flex flex-row mt-4 ">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
                    {wineData?.map((wine: any, index) => (
                        <div key={index} className="max-w-md h-auto mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-2 h-[500px] m-0">
                            <WineCard key={index} wine={wine} />
                        </div>
                    ))}
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