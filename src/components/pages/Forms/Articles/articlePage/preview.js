import React, { Fragment, useEffect, useState } from 'react'

import cookies from "browser-cookies";
import axios from "axios";

import './style.scss'

import Sidenav from '../../../../shared/SideNav/SideNav'
import history from '../../../../../helpers/history';

const API_URL = process.env.API_URL;

function preview() {
  const id = history.location.pathname.split('/')[2]
  const [article, setArticle] = useState('');
  useEffect(() => {
    fetchArticle();
  }, [])

  const fetchArticle = () => {
    const token = cookies.get('token');
    axios.get(`${API_URL}/api/v1/article/${id}?token=${token}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.data) {
          setArticle(res.data);
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }


  return (
    <div className='preview-page-container'>
      <div className='sidenav-container'>
        <Sidenav />
      </div>
      <div className='preview-container'>
        <div dangerouslySetInnerHTML={ { __html: article.description } }></div>
      </div>
    </div>
  )
}


export default preview