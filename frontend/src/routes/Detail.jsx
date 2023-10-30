import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import Layout from "../components/layouts/Layout";

function Detail() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log()
    const number = searchParams.get("number");

    const [numberDetail, setNumberDetail] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/number-details/' + number)
            .then(response => response.json())
            .then(data => {
                    console.log(data)
                    setNumberDetail(data)
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
                        <div>
                            <h2>Selected number <span className="badge bg-secondary">{numberDetail.number}</span></h2>
                            <hr/>
                            <h2>Details</h2>
                            <h3>Is prime
                                <span
                                    className="badge bg-secondary">{numberDetail.number_detail.is_prime.toString()}</span>
                            </h3>
                            <h3>Is even
                                <span
                                    className="badge bg-secondary">{numberDetail.number_detail.is_even.toString()}                                </span>
                            </h3>
                            <h3>Is odd
                                <span
                                    className="badge bg-secondary">{numberDetail.number_detail.is_odd.toString()}                                </span>
                            </h3>
                            <h3>Is palindrome
                                <span
                                    className="badge bg-secondary">{numberDetail.number_detail.is_palindrome.toString()}                                </span>
                            </h3>
                            <h3>Is armstrong
                                <span
                                    className="badge bg-secondary">{numberDetail.number_detail.is_armstrong.toString()}                                </span>
                            </h3>
                            <h3>Factorial
                                <span
                                    className="badge bg-secondary">{numberDetail.number_detail.factorial.toString()}                                </span>
                            </h3>
                            <hr/>
                            <h2>Logs</h2>
                            <h3>Id
                                <span
                                    className="badge bg-secondary">{numberDetail.number_log.id.toString()}</span>
                            </h3>
                            <h3>Hit count
                                <span
                                    className="badge bg-secondary">{numberDetail.number_log.hit_count.toString()}</span>
                            </h3>
                        </div>
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
