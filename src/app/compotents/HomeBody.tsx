import { Pages } from "@/config/constant";
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
            <div style={{ marginTop: "100px" }} className="bg-[url('../../public/vodun_day.jpg')] w-[100%] align-center flex flex-row justify-center align-middle bg-position-center" >
                <p style={{ ...contentStyle, backgroundColor: 'rgba(0, 0, 0, 0.3)', fontWeight: "bold" }} className="lg:w-[50%] md:w-[100%] sm:w-[100%] md:p-2 sm:p-2   align-center" >Découvrez les vins et champagne et cognac  parfait</p>
            </div>
            <Row className='lg:mr-[10%] lg:ml-[10%] className="w-[100%] "'>
                <div className="mt-4 rounded-md w-[100%] flex flex-row h-[120px] max-md:m-4 max-md:p-2 max-md:h-[400px]  justify-center align-middle" style={{ boxShadow: "-1px 6px 16px 0px rgba(128,127,127,0.75);" }}>
                    <div className="w-[100%] max-md:h-[400px]  flex flex-row max-md:flex-col justify-center align-middle">
                        <div style={{ justifyContent: "center", alignItems: "center" }} className="w-[20%]   max-md:w-[100%] border-r-2 border-back  h-full text-center text-lg flex flex-row justify-center align-middle" >
                            <center>
                                <Select
                                    disabled
                                    defaultValue="vin"
                                    style={{ width: 120 }}
                                    onChange={handleChange}
                                    options={[
                                        { value: 'jack', label: 'Jack' },
                                        { value: 'lucy', label: 'vin' },
                                        { value: 'Yiminghe', label: 'yiminghe' },
                                        { value: 'disabled', label: 'Disabled', disabled: true },
                                    ]}
                                />
                            </center>
                        </div>
                        <div className="w-[30%] max-md:border-t-2  max-md:w-[100%] border-r-2 border-back  h-full text-center text-lg flex flex-col justify-center align-middle">
                            <p>Fourchette de prix</p>
                            <Slider styles={rangStyle} range defaultValue={[20, 50]} />
                        </div>
                        <div className="w-[30%] max-md:border-t-2  max-md:w-[100%] border-r-2 border-back h-full text-center text-lg flex flex-col justify-center align-middle" >
                            <p>Note</p>
                            <Slider styles={rangStyle} range defaultValue={[20, 50]} />
                        </div>
                        <div className="w-[20%]   max-md:w-[100%] max-md:border-t-2 border-r-2 border-back  h-full text-center text-lg flex flex-row justify-center align-middle" style={{ justifyContent: "center", alignItems: "center" }} >
                            <a href={Pages.vin}>
                                <Button className=" rounded-full" style={{ backgroundColor: "#02a78b", color: "white", width: "170px", height: "40px" }} >
                                    voir les vins
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>




            </Row>


        </div>
    )
}
export default HomeBody