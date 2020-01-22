import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { filterByTitle } from '../../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function FilterTitle(props) {
    const { dispatch } = props;
    const [title, setTitle] = useState('');

    useEffect(() => {
        dispatch(filterByTitle(title))
    }, [dispatch, title])

    return (
        <div className="filter__title mt-3 pb-3">
            <div className="filter__title-header d-flex justify-content-between align-items-center" data-toggle="collapse" data-target=".filter__title-body">
                <span className="font-weight-bold">Title</span>
                <span><FontAwesomeIcon icon={faChevronDown}/></span>
            </div>
            <div className="filter__title-body collapse mt-3">
                <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Product title" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}

export default connect()(FilterTitle);
