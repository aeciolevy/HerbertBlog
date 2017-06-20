import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideoInfo } from '../actions/action';
import NavBar from '../components/navbar';
import VideoList from '../components/video-list';
import VideoDetail from '../components/video-details';

const videosID = [
  'LYhm2oSk5z4',
  'dDhQcHiPrNc',
  '5MGlXW8zWYE',
  'C6_cgGv1_gQ',
  'NpwcGyTo0UA'
];




class Videos extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: null
    }

  }



  componentDidMount() {
    videosID.forEach( elem => {
      this.props.fetchVideoInfo(elem);
    });

  }


  render() {

    return (
      <div>
        <NavBar />
        <VideoDetail video={this.state.selected ? this.state.selected : this.props.video[0]}/>
        <VideoList onVideoClick = { selected => this.setState({selected}) } />
      </div>
    );
  }
}

function mapStateToProps({ video }) {
  return { video };
}

function mapDispatchtoProps(dispatch){
  return bindActionCreators({fetchVideoInfo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(Videos);