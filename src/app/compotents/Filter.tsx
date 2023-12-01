import { GETFILTRE } from "@/utils/axios";
import { Button, Rate } from "antd";
import { useEffect, useState } from "react";



const Filter = () => {
    const [filterData, setFilterData] = useState([])



    useEffect(() => {
        GETFILTRE().then((res) => {
            //console.log(res);
            const reformattedData = res?.data.map((item: { DistinctValues: string; AttributeName: any; }) => {
                const valuesArray = item.DistinctValues.split(',').filter(value => value.trim() !== '');

                const values = valuesArray.map(value => ({ name: value }));

                return {
                    name: item.AttributeName,
                    values,
                    type: "button"
                };
            });

            console.log(reformattedData);
            setFilterData(reformattedData)
        })
    }, [])

    return (
        <div className=" overflow-x-scroll">
            {filterData?.map((d: any) => {
                return <div className="mb-4 mr-4">
                    <p className=" font-bold text-lg">{d?.name}</p>
                    {d.values.map((value: any) => {
                        if (d.type === 'button') return <Button danger className="m-2 rounded-full" style={{ fontSize: "12px" }} >{value?.name}</Button>
                        if (d.type === 'rate') return <Rate allowHalf defaultValue={parseFloat(value?.name)} />
                    })}
                </div>
            })}
        </div>
    )
};
export default Filter 