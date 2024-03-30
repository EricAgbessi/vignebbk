'use client'
import { Button, Col, Drawer, DrawerProps, Menu, MenuProps, Row } from "antd";
import CustomHeader from "../../compotents/Header";
import WineCard from "../components/windCard";
import Filter from "../../compotents/Filter";
import { useEffect, useState } from "react";
import { GETWINE, GETWINEGROUP, GETWINEV } from "@/utils/axios";
import { useRouter } from 'next/navigation';
import { FrontendUrl, Pages } from "@/config/constant";
import FooterCustom from "@/app/compotents/Footer";
import { ArrowLeftOutlined } from '@ant-design/icons';
import WineCard_v from "../components/windCard_v";
import Filter_V from "@/app/compotents/Filter_v";


export default function Vin() {
    const router = useRouter()
    const [wineData, setWineData] = useState([])


    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        let filter;




        GETWINEV(filter).then((res) => {
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

    return <div>
        <Row className='lg:mr-[10%] lg:ml-[10%] mb-4 mt-20 '>
            <CustomHeader />

            <div className="flex flex-row  mr-4 overflow-x-auto w-full">
                <a href={`${FrontendUrl}/pages/vin?classification=Grand%20Cru`}> <Button type="link" block
                    className={`m-2 rounded-full`} >Grands crus</Button></a>

                <a href={`${FrontendUrl}/pages/vin?classification=Petite%20crue`}> <Button type="link" block
                    className={`m-2 rounded-full `} >Petits crus</Button></a>

                <a href={`${FrontendUrl}/pages/cognac`}> <Button type="link" block
                    className={`m-2 rounded-full bg-red-700 text-white`} >Cognacs & Eau de vie</Button> </a>

                <a href={`${FrontendUrl}/pages/vigne`}> <Button type="link" block
                    className={`m-2 rounded-full`} >Champagnes</Button> </a>


            </div>
   

            <div className="flex flex-row mt-4 " >
                <div className="flex flex-row flex-wrap" >
                    {wineData?.map((wine: any, index) => (
                        
                        <a href={`${Pages.zoomin_v}?id=${wine?.id}`} key={index} style={{boxShadow:"0px 1px 10px 0px rgba(0,0,0,0.75)",color:"black"}} className=" bg-white  flex-grow rounded-xl overflow-hidden lg:w-[30%]  h-[300px]  m-3 p-0 flex flex-row justify-center align-middle"  >
                                <WineCard_v key={index} wine={wine} />
                        </a>
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
                <Filter_V />
            </Drawer>
        </Row >


    </div >
}