import { FrontendUrl, Pages } from "@/config/constant";
import { Button, Card, Carousel, Divider, Row, Select, Slider } from "antd";

const HomeBody = () => {
    const contentStyle: React.CSSProperties = {
        height: '300px',
        color: '#fff',
        textAlign: 'center',
        backgroundPosition: "center",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "60px"
    };
    const rangStyle = {
        track: {
            background: 'transparent',
        },
        tracks: {
            background: "#ba1628",
        },
        handle: {
            background: "#ba1628",
        },
        background: "#ba1628",
        color: "#ba1628"
    }

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="w-[100%]">
            <div style={{ marginTop: "100px" }} className="bg-[url('../../public/photo1.webp')] w-[100%] align-center flex flex-row justify-center align-middle bg-position-center" >
                <p style={{ ...contentStyle, backgroundColor: 'rgba(0, 0, 0, 0.3)', fontWeight: "bold" }} className="lg:w-[50%] md:w-[100%] sm:w-[100%] md:p-2 sm:p-2   align-center" >Découvrez les vins et champagne et cognac  parfait</p>
            </div>
            <Row className='lg:mr-[10%] lg:ml-[10%] className="w-[100%] "'>
                <div className="w-[100%] max-md:h-[400px]  flex flex-row max-md:flex-col justify-center align-middle">
                    <div className="flex flex-row  mr-4 overflow-x-auto w-full">
                        <a href={`${FrontendUrl}/pages/vin?classification=Grand%20Cru`}> <Button type="link" block
                            className={`m-2 rounded-full`} >Grands crus</Button></a>

                        <a href={`${FrontendUrl}/pages/vin?classification=Petite%20crue`}> <Button type="link" block
                            className={`m-2 rounded-full `} >Petits crus</Button></a>

                        <a href={`${FrontendUrl}/pages/cognac`}> <Button type="link" block
                            className={`m-2 rounded-full bg-red-700 text-white`} >Cognac</Button> </a>

                        <a href={`${FrontendUrl}/pages/champagne`}> <Button type="link" block
                            className={`m-2 rounded-full`} >Champagnes</Button> </a>
                    </div>
                </div>
            </Row>


        </div>
    )
}
export default HomeBody