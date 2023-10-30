import React, {useState} from 'react';

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
                data: labels.map(() => faker.datatype.number({min: 0, max: 100})).sort(),
                backgroundColor: 'rgba(99,198,255,0.5)',
            },
        ],
    });

    function handleSortClick(e) {
        e.preventDefault();
        let tempData = dataList.datasets[0].data;
        tempData.reverse()
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

        if (sortOrder === "Sort ascending") {
            setSortOrder("Sort descending");
        } else {
            setSortOrder("Sort ascending")
        }
    }

    function handleRandomizeClick(e) {
        e.preventDefault();
        let tempData = labels.map(() => faker.datatype.number({min: 0, max: 100}));
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
        </Layout>
    );
}

export default Home;
