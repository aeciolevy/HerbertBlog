import React, { Component } from 'react';
import NavBar from '../components/navbar';
import { CSSTransitionGroup } from 'react-transition-group';


class About extends Component {
  constructor(props) {
    super(props);
  }



  render(){

    return (
      <div >
        <NavBar />
        <div className="about-container">
          <h1 className="about-title"> Sobre Herbert </h1>
          <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1400} >
          <p className="about-p">
            Graduado em Engenharia Mecânica pela UFCG (1997), em Direito pela UEPB (1998), mestrado em Engenharia Mecânica pela UFPB (2008), Doutorado em Engenharia de Produção pela UFRGS (2013), também com especialização em Tecnologia Mineral pela UFPA (2008) e Gestão Empresarial pela PUCCAMP (2003).
            <br/><br/>Herbert Viana Iniciou sua carreira profissional  na AMBEV (1997 a 1999), desenvolvendo atividades no área de Packaging da empresa. Em 1999 ingressou na Mineração Rio do Norte (1999 a 2003), onde atuou nas áreas engenharia e manutenção industrial. Assumiu na Votorantim o cargo de coordenador de manutenção (2003 a 2006), gerenciando a manutenção industrial de uma das unidades de cimento da companhia (CIPASA - PB). Em 2006 iniciou suas atividades na VALE S.A.. Atuou a frente de diversos desafios nas áreas de engenharia, manutenção, produção e automação, como Gerente Geral de Engenharia e Manutenção de equipamentos de mina e Gerente Executivo de Tratamento Mineral, liderou diversas equipes de operação e manutenção no site de Carajás.
            <br/><br/>Em 2016 ingressa na Universidade Federal do Rio Grande do Norte, onde atua do departamento de engenharia de produção (DEP) e no programa de pós graduação em Engenharia de Produção (PEP)
          </p>
          </CSSTransitionGroup>
          <h1 className="about-title"> Especialidades </h1>
          <div className="flex-container">
            <div className="flex-item">
                <i className="fa fa-industry fa-3x" aria-hidden="true" style={{color: 'white'}}></i>
                 <span className="knowlegde"> Gestão de Ativos </span>
            </div>
            <div className="flex-item">
                <i className="fa fa-area-chart fa-3x" aria-hidden="true" style={{color: 'white'}}></i>
                 <span className="knowlegde"> Análise Estratégica </span>
            </div>
            <div className="flex-item">
                <i className="fa fa-ship fa-3x" aria-hidden="true" style={{color: 'white'}}></i>
                <span className="knowlegde"> Gestão de Operações </span>
            </div>
          </div>
          <div className="flex-container">
            <div className="flex-item">
                <i className="fa fa-search-plus fa-3x" aria-hidden="true" style={{color: 'white'}}></i>
                 <span className="knowlegde"> Avaliação de Eficiência Empresarial </span>
            </div>
            <div className="flex-item">
                <i className="fa fa-wrench fa-3x" aria-hidden="true" style={{color: 'white'}}></i>
                 <span className="knowlegde"> Planejamento de Manutenção </span>
            </div>
            <div className="flex-item">
                <i className="fa fa-suitcase fa-3x" aria-hidden="true" style={{color: 'white'}}></i>
                 <span className="knowlegde"> Gestão de Pessoas</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;