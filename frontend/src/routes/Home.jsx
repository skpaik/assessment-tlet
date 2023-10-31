import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setChartBarValue} from '../app/store/chartSlice'
import Layout from "../components/layouts/Layout";

import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function Home() {
    const barList = useSelector((state) => state.chartSlice.barList)
    const dispatch = useDispatch()

    useEffect(() => {
        const tempData = labels.map(() => faker.datatype.number({min: 0, max: 100})).sort()
        dispatch(setChartBarValue(tempData));
        updateDataList(tempData);
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bar Chart',
            },
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const [sortOrder, setSortOrder] = useState("Sort ascending");

    const [dataList, setDataList] = useState({
        labels,
        datasets: [
            {
                label: 'Monthly Average Temperature 2023',
                data: barList,
                backgroundColor: 'rgba(99,198,255,0.5)',
            },
        ],
    });

    function handleSortClick(e) {
        e.preventDefault();

        let tempData = barList;

        Object.freeze(tempData);
        const arrCopy = [...tempData];
        arrCopy.reverse()

        updateDataList(arrCopy);

        dispatch(setChartBarValue(arrCopy));

        if (sortOrder === "Sort ascending") {
            setSortOrder("Sort descending");
        } else {
            setSortOrder("Sort ascending")
        }
    }

    function updateDataList(tempData) {
        setDataList({
            labels,
            datasets: [
                {
                    label: 'Monthly Average Temperature 2023',
                    data: tempData,
                    backgroundColor: 'rgba(99,198,255,0.5)',
                },
            ],
        })
    }

    function handleRandomizeClick(e) {
        e.preventDefault();
        let tempData = labels.map(() => faker.datatype.number({min: 0, max: 100}));
        updateDataList(tempData);
        dispatch(setChartBarValue(tempData));
    }

    return (
        <Layout>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal text-body-emphasis">Bar Chart</h1>
            </div>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Bar options={options} data={dataList}/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-6'}>
                    <button className={'btn btn-primary'} onClick={handleSortClick}>{sortOrder}</button>
                </div>
                <div className={'col-6'}>
                    <button className={'btn btn-primary'} onClick={handleRandomizeClick}>Randomize</button>
                </div>
            </div>
            <div className={'row mt-5'}>
                <div className={'col-4'}>
                    Click on number
                </div>
                <div className={'col-8'}>
                    {barList.map((val, key) => {
                        return (
                            <a key={key} className={"px-4"} href={'http://localhost:3000/detail?number=' + val}>
                                {val}
                            </a>
                        )
                    })}
                </div>
            </div>
        </Layout>
    );
}

export default Home;
