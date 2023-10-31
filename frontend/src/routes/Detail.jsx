import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import Table from "react-bootstrap/Table";
import Layout from "../components/layouts/Layout";

function Detail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const number = searchParams.get("number");

    const [numberDetail, setNumberDetail] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/number-details/' + number)
            .then(response => response.json())
            .then(data => {
                    console.log(data)
                    setNumberDetail(data)

                    setSearchParams({"number": number})
                }
            );
    }, [number]);

    if (number === undefined || number === null || numberDetail == null) {
        return (
            <Layout>
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Please pass a valid a number
                    </h1>
                </div>
            </Layout>
        );
    }

    function handleBackClick() {
        window.history.back();
    }

    return (
        <Layout>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal text-body-emphasis">Number Details</h1>
            </div>
            <div className={'row'}>
                <div className={'col-12'}>
                    {numberDetail && (
                        <Table striped bordered hover>
                            <tr>
                                <th>Info</th>
                                <th>Status</th>
                            </tr>
                            <tr key={1}>
                                <td>Selected number</td>
                                <td>{numberDetail.number}</td>
                            </tr>
                            <tr key={1}>
                                <td>Is prime</td>
                                <td>{numberDetail.number_detail.is_prime.toString()}</td>
                            </tr>
                            <tr key={1}>
                                <td>Is even</td>
                                <td>{numberDetail.number_detail.is_even.toString()}</td>
                            </tr>
                            <tr key={1}>
                                <td>Is odd</td>
                                <td>{numberDetail.number_detail.is_odd.toString()}</td>
                            </tr>
                            <tr key={1}>
                                <td>Is palindrome</td>
                                <td>{numberDetail.number_detail.is_palindrome.toString()}</td>
                            </tr>
                            <tr key={1}>
                                <td>Is armstrong</td>
                                <td>{numberDetail.number_detail.is_armstrong.toString()}</td>
                            </tr>
                            <tr key={1}>
                                <td>Factorial</td>
                                <td>{numberDetail.number_detail.factorial.toString()}</td>
                            </tr>
                            <tr key={1}>
                                <td>Log id</td>
                                <td>{numberDetail.number_log.id.toString()}</td>
                            </tr>
                            <tr key={1}>
                                <td>Hit count</td>
                                <td>{numberDetail.number_log.hit_count.toString()}</td>
                            </tr>
                        </Table>
                    )}
                </div>
            </div>
            <hr/>
            <div className={'row'}>
                <div className={'col-6'}>
                    <button className={'btn btn-primary'} onClick={handleBackClick}>Back</button>
                </div>
            </div>
        </Layout>
    );
}

export default Detail;
