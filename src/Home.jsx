import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
        
            <div>
                <img src="http://localhost:3000/assets/30.jpeg" alt="me" height="300" />
                <p>
                    To select an issue, let’s create another link beside the Edit link in the table of issues. This time, let’s use a NavLink to highlight the selected issue. Ideally, we should be able to select by clicking anywhere in the row, and it should be highlighting the entire row when selected. But let’s keep that for a later chapter, where we will have better tools to implement this effect. The NavLink will point to /issues/, whe is the ID of the issue in the row being selected.
                </p>
           </div>
        );
    }
}


