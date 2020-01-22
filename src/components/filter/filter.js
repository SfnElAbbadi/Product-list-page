import React from 'react';
import FilterTitle from './filterTitle/filterTitle';
import FilterPrice from './filterPrice/filterPrice';
import './filter.scss';

function Filter() {
    
    return (
        <div className="filter border border-dark">
            {header()}
            <div className="">
                <FilterTitle />
                <FilterPrice />
            </div>
        </div>
    )
}

const header = () => (
    <div className="filter__header pb-2">
        <span className="navbar-brand mb-0 h1 font-weight-bold">Filter</span>
    </div>
)

export default Filter;
