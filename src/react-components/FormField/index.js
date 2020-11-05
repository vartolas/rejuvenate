import React from 'react';
import './styles.css';

export default class FormField extends React.Component {
    render() {
        const { label, value, onChange } = this.props;
        return (
            <div>
                <label>
                    <input type="text" value={value} onChange={onChange} placeholder={label}/>
                </label>
            </div>
        );
    }
}