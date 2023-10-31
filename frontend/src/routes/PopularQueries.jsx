import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Layout from "../components/layouts/Layout";

function PopularQueries() {
   const [numberDetail, setNumberDetail] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/popular-queries')
            .then(response => response.json())
            .then(data => {
                    console.log(data)
                    setNumberDetail(data)
                }
            );
    }, []);

    if (numberDetail == null) {
        return (
            <Layout>
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        There is no query available now
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
                <h1 className="display-4 fw-normal text-body-emphasis">Popular queries</h1>
            </div>
            <div className={'row'}>
                <div className={'col-12'}>
                    {numberDetail && (
                        <Table striped bordered hover>
                            <tr>
                                <th>Log id</th>
                                <th>Number</th>
                                <th>Hit count</th>
                            </tr>
                            {numberDetail.db_query_log.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.id}</td>
                                        <td>{val.number}</td>
                                        <td>{val.hit_count}</td>
                                    </tr>
                                )
                            })}
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

export default PopularQueries;
