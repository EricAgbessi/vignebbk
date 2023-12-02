'use client'
import { Button, Drawer, DrawerProps, Menu, MenuProps, Row } from "antd";
import CustomHeader from "../../compotents/Header";
import WineCard from "../components/windCard";
import Filter from "../../compotents/Filter";
import { useEffect, useState } from "react";
import { GETWINE } from "@/utils/axios";
import { useRouter } from 'next/navigation';
import { Pages } from "@/config/constant";
import FooterCustom from "@/app/compotents/Footer";


export default function Vin() {
    const [wineData, setWineData] = useState([])
    useEffect(() => {
        GETWINE().then((res) => {
            setWineData(res?.data)
            console.log(res);

        })

    }, [])


    const router = useRouter()


    const goToZoomin = (id: Number) => {
        router?.push(`${Pages.zoomin}?id=${id}`)
    }
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const onClose = () => {
        setOpen(false);
    };
    return <div>
        <Row className='lg:mr-[10%] lg:ml-[10%] mb-4'>
            <CustomHeader />
            <div className="flex flex-row justify-around w-full block lg:hidden mr-4" >
                <Button danger onClick={() => { setOpen(true) }} className="m-2 rounded-full" >Filtres</Button>
                <Button danger className="m-2 rounded-full" >Trier</Button>
            </div>
            <div className="flex flex-row mt-4">
                <div className=" w-[25%] visible max-sm:hidden max-md:hidden lg:visible">
                    <Filter />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
                    {wineData?.map((wine: any, index) => (
                        <div key={index} onClick={() => {
                            goToZoomin(wine?.id)
                        }} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-2" >
                            <WineCard key={index} wine={wine} />
                        </div>
                    ))}
                </div>
            </div>
            <FooterCustom />
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
        </Row>


    </div>
}