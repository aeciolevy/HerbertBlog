import React, { Component } from 'react';
import NavBar from '../components/navbar';
import VideoList from '../components/video-list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideoInfo } from '../actions/action';


const videosID = [
  'LYhm2oSk5z4',
  'dDhQcHiPrNc',
  '5MGlXW8zWYE',
  'C6_cgGv1_gQ',
  'NpwcGyTo0UA'
];

const url = `https://www.youtube.com/embed/NpwcGyTo0UA`;


class Videos extends Component {


  componentDidMount() {
    videosID.forEach( elem => {
      this.props.fetchVideoInfo(elem);
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="video-detail col-sm-8">
          <div className ="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className="details">
            <h4> Liderança: O equilíbiro entre Resiliência e Tenacidade</h4>
            <div>No vídeo se faz uma analogia entre os conceitos da "resiliência" e "tenacidade" no campo da engenharia mecânica, com tais conceitos no contexto da liderança e ambiente de trabalho. Apresentando aspectos importantes na busca da harmonia entre a pressão no ambiente do trabalho com a vida pessoal.</div>
          </div>
        </div>
        <VideoList  />
      </div>
    );
  }
}

function mapDispatchtoProps(dispatch){
  return bindActionCreators({fetchVideoInfo}, dispatch);
}

export default connect(null, mapDispatchtoProps)(Videos);