import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function FilterPrice() {
    return (
        <div className="filter__price mt-3 pb-3">
            <div className="filter__price-header d-flex justify-content-between align-items-center mb-3" data-toggle="collapse" data-target=".filter__price-body">
                <span className="font-weight-bold">Price</span>
                <span><FontAwesomeIcon icon={faChevronDown}/></span>
            </div>
            <div className="filter__price-body collapse">
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Descendent</label>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Ascendent</label>
                </div>
            </div>
        </div>
    )
}

export default FilterPrice
