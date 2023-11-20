import React, {useState} from "react";
import {sculptureList} from './dataLab1';
export class Gallery extends React.Component{

    state = { index: 0, show: true };

    handleClickNext = () => {
        this.setState((prevState) => ({
            index: (prevState.index + 1) % sculptureList.length,
        }));
    };

    handleClickBack = () => {
        this.setState((prevState) => ({
            index: (prevState.index - 1 + sculptureList.length) % sculptureList.length,
        }));
    };

    handleClickShow = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        const sculpture = sculptureList[this.state.index];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="card">
                            <img src={sculpture.url} className="card-img-top" alt={sculpture.name} />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {sculpture.name} <br /> {sculpture.artist}
                                </h5>
                                <button type="button" className="btn btn-outline-secondary" onClick={this.handleClickShow}>
                                    {this.state.show ? 'Hide' : 'Show'} Detail
                                </button>
                                {this.state.show && <p className="card-text">{sculpture.description}</p>}
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button type="button" className="btn btn-info" onClick={this.handleClickBack}>
                                    Back
                                </button>
                                <button type="button" className="btn btn-info" onClick={this.handleClickNext}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        );
    }
}
