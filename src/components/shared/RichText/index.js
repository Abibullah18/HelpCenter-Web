import React, { Fragment, Component } from 'react'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import { Tune } from '@material-ui/icons';
class richtext extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            stateTitle: props.title !== '' ? props.title : 'Rich Text Editor',
            statePlaceholder: props.placeholder !== '' ? props.placeholder : 'Enter Text',
            touched: false,
            value: props.articles ? props.articles : '', // Default value here 
            errorMessage: 'Required',
            error: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(value) {
        const { onRichTextChange } = this.props;
        this.setState({
            value
        })
        onRichTextChange(value);
    }
    // handleChange(value) {
    //     const { onKeyDown, isRequired } = this.props;
    //     // Validation
    //     if (isRequired && (value === '' || value === '<p><br></p>' || value.trim() === '')) {
    //         this.setState({
    //             error: true,
    //             value,
    //             errorMessage: 'Required'
    //         })
    //         onKeyDown(value, true)
    //     }
    //     // If no error 
    //     else {
    //         this.setState({
    //             error: false,
    //             value,
    //             errorMessage: ''
    //         })
    //         onKeyDown(value, false)
    //     }
    // }
    render() {
        const { value } = this.state;
        const modules = {
            toolbar: [
                ['bold', 'italic', 'underline'],                    // toggled buttons
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                ['image'],
                ['clean']
            ],
        };
        return (
            <Fragment>
                <div className="form-input-fields">
                    <ReactQuill
                        value={ value }
                        onChange={ this.handleChange }
                        // onFocus={ () => { this.setState({ touched: true }) } }
                        // onKeyDown={ () => onKeyDown(value) }
                        modules={ modules }
                    />
                </div>
            </Fragment>
        )
    }
}
export default richtext;