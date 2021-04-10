import React from 'react';
import { Spinner } from 'reactstrap';

export const LoadMore = (props) => {
    if (props.show){
        return <div id="loadmore" className="text-center"><Spinner type="border" color="primary"/></div>
    }
    else{
        return <div />
    }
}
