import React, { useState, useEffect, Fragment } from "react";

import cookies from "browser-cookies";
import axios from "axios";

import { Link } from 'react-router-dom';
import Delete from '../../../shared/DeleteModal/DeleteModal'
import MediumModal from '../../../shared/Modals/MediumModal'
import Edit from './edit'
import Create from './create'
import '../index.scss'
import history from "../../../../helpers/history";

const API_URL = process.env.API_URL;

function ReactTable({ items, deleteContact, isLoading }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [createModal, setCreateModal] = useState(false)
    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        fetchArticle();
    }, [])

    const fetchArticle = () => {
        const token = cookies.get('token');
        console.log('token: ', token);
        axios.get(`${API_URL}/api/v1/article?token=${token}`, {
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.data) {
                    console.log('res: ', res);
                    setArticleList(res.data)
                }
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const handleDelete = (id) => {
        console.log('id: ', id);
        const token=cookies.get('token');
        axios.delete(`${API_URL}/api/v1/article/${id}?token=${token}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                fetchArticle();
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    const handlePreview = (id) => {
        history.push(`/articlepreview/${id}`)
    }

    const renderTableData = () => {
        return articleList.map((item, index) => (
            <tr key={ index }>
                <td className="td-hover">{ item.title }</td>
                <td className="td-hover">{ item.status }</td>
                <td className="td-hover">{ item.tags ? item.tags.tagName : '' }</td>
                <td className="td-hover"><button type="button" onClick={ () => handlePreview(item.id) }><i className="fa fa-share" aria-hidden="true"></i></button></td>
                <td className="td-hover"><button type="button" onClick={ () => handleDelete(item.id) }><i className="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>
        ))
    }

    return (
        <Fragment>
            <div className='table-body-container'>
                <div className='formslist-lable'>
                    <div className='lable-header'><label name="prd">Article</label></div>
                    <div className='filter-submit'>
                        <Link to='/articlepreview'><div className="submit-lable"> <i className='fa fa-eye'></i>Preview</div></Link>
                        <Link to='/articleContent'><div className="submit-lable"> <i className='fa fa-plus'></i>New Article</div></Link>
                    </div>
                </div>
                <div className='formslist-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Tag</th>
                                <th>Preview</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                renderTableData()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                createModal && <MediumModal ><Create setCreateModal={ setCreateModal } /></MediumModal>
            }
            {
                editModal && <MediumModal><Edit setEditModal={ setEditModal } /></MediumModal>
            }
            {
                modalIsOpen && <Delete setModalIsOpen={ setModalIsOpen } />
            }
        </Fragment>
    );
}

export default ReactTable;
