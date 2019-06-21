import React from 'react';
import { connect } from 'react-redux';
import { getCandidates } from '../../store/actions/candidateActions';

class ViewCandidate extends React.Component {

    componentDidMount(){
        this.props.getCandidates();
        console.log(this.props)
    }

    render(){
        return(
            <div>View Candidate</div>
        )
    }
    
}

export default connect(null, {getCandidates})(ViewCandidate);