import React, { Fragment } from 'react'
import './tagModal.scss'

function Create({setCreateModal}) {
    const NumericOnly= (e) => {
        const reg = /^[ 0-9_@./#&+-]*$/
        let preval=e.target.value
        if (e.target.value === '' || reg.test(e.target.value)) return true
        else e.target.value = preval.substring(0,(preval.length-1))
   }
    return (
        <Fragment>
            <div className="model-body">
                <div className="tag-modal-body-content">
                <div className='modal-header'>
                        <span>Create Tag</span>
                        <i className="fa fa-times" onClick={()=>setCreateModal(false)}></i>
                    </div>
                    <div className="modal-input-content">
                        <div className="row">
                            <div className="input-field">
                                <label>Tag Name </label>
                                <input type="text" placeholder="Enter your Company Name" />
                            </div>
                            <div className="input-field">
                                <label> Description </label>
                                <input type="text" placeholder="Enter your Domains" />
                            </div>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button >Save</button>
                        <button className='cancel' onClick={()=>setCreateModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Create

