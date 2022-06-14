import React, { useState, useEffect } from 'react'
import cookies from "browser-cookies";
import axios from "axios";

import './style.scss'

import BaseCode from '../../../../../__template__/pages/BaseCode'
import RichText from '../../../../shared/RichText'
import Select from 'react-select'
import history from '../../../../../helpers/history';

const API_URL = process.env.API_URL;

function Articles() {

  const [state, setstate] = useState(
    {
      title: "",
      status: "",
      tags: "",
      keyword: "",
      articles: "",
    }
  )
  const [optionList, setOptionList] = useState([])


  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: state.selectProps.menuColor,
      padding: 5,
    }),

    option: (provided, state) => ({
      ...provided,
      color: state.selectProps.menuColor,
      backgroundColor: state.selectProps.menuBgColor,
      cursor: 'pointer',
      fontSize: 15
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: 13
    }),
  }

  useEffect(() => {
    fetchTag();
  }, [])

  const fetchTag = () => {
    const token = cookies.get('token');
    console.log('token: ', token);
    axios.get(`${API_URL}/api/v1/tag?token=${token}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log('res: ', res);
        const sortedList = [];
        if (res.data) {
          res.data.forEach(li => {
            sortedList.push({
              value: li.id,
              label: li.tagName
            })
          })
          setOptionList(sortedList)
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }


  const optionsStatus = [
    { label: 'Public', value: 'PUBLIC' },
    { label: 'Private', value: 'PRIVATE' },
    { label: 'Draft', value: 'DRAFT' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  }

  const handleDropdown = (e, id) => {
    setstate({ ...state, [id]: e });
  }

  const handleRichTextChange = (data) => {
    setstate({ ...state, articles: data });
  }

  const handleSubmit = () => {
    const { title, tags, status, keyword, articles } = state;
    const token = cookies.get('token');

    const body = {
      title, status: status.value, keywords: keyword, description: articles
    }
    axios.post(`${API_URL}/api/v1/article/create?tagid=${tags.value.toString()}&token=${token}`, { ...body }, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        history.push('/article')

      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }


  return (
    <BaseCode>
      <div className='article-container'>
        <div className='setting-container'>
          <span className='text'>Article Setting</span>
          <div className='body-container'>
            <div className="input-field">
              <label> Title </label>
              <input type="text"
                placeholder="Enter your TItle"
                name="title"
                value={ state.title }
                onChange={ handleChange }
              />
            </div>
            <div className='input-field'>
              <label>Status</label>
              <Select
                options={ optionsStatus }
                styles={ customStyles }
                placeholder="Choose Status"
                isSearchable
                isClearable
                onChange={ (e) => handleDropdown(e, 'status') }
              />
            </div>
            <div className='input-field'>
              <label>Show in Tags</label>
              <Select
                options={ optionList }
                styles={ customStyles }
                menuColor='black'
                menuBgColor='white'
                placeholder="Choose Tags"
                isSearchable
                isClearable
                onChange={ (e) => handleDropdown(e, 'tags') }
              />
            </div>
            <div className='input-field'>
              <label>Keywords</label>
              <textarea name="keyword" onChange={ handleChange } value={ state.keyword } />
            </div>
            <div className='btn-container'>
              <button onClick={ () => handleSubmit() }>Save</button>
            </div>
          </div>
        </div>
        <div className='richtext-container'>
          <RichText onRichTextChange={ handleRichTextChange } articles={ state.articles } />
        </div>
      </div>
    </BaseCode>
  )
}


export default Articles