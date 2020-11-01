import React from 'react';
import './styles.css';

export default class FormField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    {this.props.label}: <input type="text"
                    value={this.props.value} onChange={this.props.onChange} />
                </label>
            </div>
        );
    }
}