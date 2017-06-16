import React, { Component } from 'react';
import NavBar from '../components/navbar';
import articleData from '../db/article';
import _ from 'lodash';

class ArticleRead extends Component {
  constructor(props){
    super(props);
  }

  articleID() {
    return this.props.match.params.articleId;
  }

  render(){

    const article = _.find(articleData, obj => obj.id == this.articleID())

    return (
      <div>
        <NavBar />
        <div className="big-container">
          <main>
            <h2> {article.title} </h2>
            <p className="date-smaller"> 02/03/2017 | Herbert Ricardo Viana Garcia </p>
            <article>
              *Este post trata-se de uma continuação do post "Você é Resiliente ou Tenaz? ”, publicado no blog em 03/02/2017.

              Quem não desejaria ser imune às pressões do trabalho? Este deve ser o desejo de 10 em cada 10 líderes no mundo corporativo, esta “imunidade” seria análoga a um material mecânico possuir um ponto de escoamento, ponto “E”, tendendo ao infinito. Seria o sonho dos projetistas mecânicos, dispor de um material que absorvesse toda a energia carregada sobre ele, sem um milímetro de deformação plástica (permanente), a raça humana poderia explorar as profundezas dos oceanos, viajar ao centro da terra, circundar de pertinho a nossa estrela mãe, enfim, ganhar o universo como prêmio.

              Já os líderes com o ponto “E” tendendo ao infinito seriam verdadeiras máquinas de absorver pressão sem perder o prazer da vida, superar desafios no trabalho sem a sombra da perda de tempo e da qualidade no convívio com a família e amigos. A tomada de decisão seria isenta de emoções negativas, tudo seria bacana, por sinal, a pressão iria até diminuir, uma vez que a condução dos negócios por pessoas emocionalmente positivas tende ao sucesso, invariavelmente.

              E como posso ter um limite de escoamento, meu ponto “E” tendendo ao infinito? A resposta desta pergunta não é fácil, pois não existe uma receita mecanicista para tanto, na ciência dos materiais, pode-se com a composição de cristais de dois ou mais elementos químicos, conseguir ligas com maior resiliência, mas no comportamento humano, a receita é altamente customizada, cada homem e mulher deve buscar seu caminho de equilíbrio entre a dicotomia “Tensão – Deformação”, ou “Pressão – Resiliência”, utilizando a nomenclatura mais usual no mundo corporativo.

              Fiz uma varredura em casos de grandes executivos ou grandes líderes políticos que poderiam me apoiar na exemplificação de como lidar com pressões mantendo um campo da resiliência com maior amplitude que a tenacidade, ou seja, exemplos que possam nos ensinar maneiras de elevar o ponto “E”.

              Encontrei vários casos entre personalidades do conhecimento do grande público, mas me cativou a história de um homem simples chamado Raimundo, pois gosto muito de conversar com as pessoas sinto-me mais vivo e mais humano em meios aos debates e histórias reais, o mundo mecanicista que vivemos nos impõe cada vez mais a frieza nas relações e terminamos esquecendo que trabalho, estudos, consumo, tudo isto é meio para vivermos, e não a essência da vida, a vida em sua plenitude repousa nos sentimentos que o mundo nos desperta.

              Achei interessante utilizar um exemplo de uma pessoa comum para falar de resiliência, com o claro objetivo de mostrar que todos podem lidar com pressões e se fazer vencedores, e isto acontece todos os dias, através da vida de milhões de anônimos espalhados pelo mundo, um destes anônimos, Raimundo, me ensinou uma lição de resiliência que agora compartilho.

              Certo dia, ofereci carona a um trabalhador a caminho de uma das tantas minas no sudeste do Pará, logo começamos a conversar, seu nome era Raimundo (nome fictício), nascera em Matões no Maranhão, disse-me ele que vivia com os pais até os cinco anos, juntamente com duas irmãs mais velhas de sete e nove anos, sua família era pobre mas não lhe faltava o básico, até seu pai os abandonar por outra mulher, sua mãe não suportou muito tempo o fardo da criação de três filhos e meses depois fugiu para se dedicar a uma nova relação amorosa, deixando para trás a casa em Matões e três filhos.

              Fiquei espantado quando ele me disse que viveu quase um ano sozinho com suas irmãs em total abandono, não frequentavam escola e viviam o dia em busca de comida para saciar sua fome, contou-me que diversas vezes sua irmã mais velha ajudava uma senhora a alimentar seus porcos e como pagamento podia recolher os milhos grossos que sobravam da refeição dos suínos, com estes grãos ela fazia uma espécie de massa que saciava a fome dos três irmãos.

              Depois de quase um ano de completo abandono, a notícia sobre a condição dos irmãos chegou a sua avó materna que morava em Grajaú também no Maranhão, ela demorou um pouco para viajar até Matões para resgatar as crianças, pois não tinha dinheiro de imediato para as passagens, ao conseguir tal quantia foi até Matões trazendo os irmãos para Grajaú.

              A avó materna conseguiu localizar a mãe de Raimundo, sua filha, trazendo-a à razão, fazendo-a acolher novamente os filhos, mas não durou muito o convívio, o novo marido não aceitava as crianças e fez com que sua mãe novamente as expulsassem da casa. Raimundo disse na sua simplicidade que neste momento já era mais rapazinho e conseguiu se “virar”, ele tinha oito anos, imaginem só, uma criança de oito anos em pleno abandono pelo mundo, e na sua inocência ou melhor na sua visão de mundo, já era um rapaz.

              Pois bem, este rapaz conseguiu um emprego de “faz tudo” para um dono de garagem em Marabá, no começo sua principal função era lavar os ônibus que este senhor alugava, segundo Raimundo seu patrão o colocou na escola municipal e quando completou 18 anos o ajudou a conseguir a carteira de motorista categoria “D”, o que se constituiu a grande oportunidade de Raimundo, conseguiu emprego em empreiteiras em obras e terminou ingressando em uma grande mineradora brasileira, como operador de maquinas de mina nos anos 2000, o que segundo ele lhe deu estabilidade financeira, sendo que hoje se encontra casado com dois filhos.

              Ao falar sobre suas conquistas, Raimundo citou a compra da sua casa própria, seu carro, e a construção da casa da sua mãe, neste ponto, surpreso, o interpelei, “Você construiu uma casa para sua mãe? A mesma que lhe abandonou? ”, ele com grande simplicidade me disse que “sim”, daí retomei a perguntar, “e você a perdoou? ”, sua reposta me emocionou e vi mais uma vez o quanto o homem pode ser grande e virtuoso, ele me respondeu sem mágoa nenhuma, “Perdoar? Perdoar de que? Eu nunca a condenei, sempre a amei, ela é minha mãe.”

              Talvez a inocência de uma criança diante do caos, possa ajudar a aumentar sua resiliência, realmente o ponto “E” é alto em uma pessoa que ver a vida de forma mais simples, passou por aí o antídoto que livrou Raimundo do ponto de ruptura durante sua infância e adolescência, mas há muitos méritos neste homem, um deles, incontestável a meu ver, consiste em não ter guardado uma gota de rancor, sua história reforça o entendimento que resiliência e rancor não combinam, pessoas rancorosas estressam muito mais. Posso afirmar sem sombra de dúvida que o perdão aumenta a resiliência.
            </article>
            <img src={`https://static.wixstatic.com/media/f9ad96_a6b584cf33d848149598eac4cf17c3f5~mv2.png/v1/fill/w_960,h_540,al_c/f9ad96_a6b584cf33d848149598eac4cf17c3f5~mv2.png`} alt="First" className="img-responsive img-1" />
            <article>
              Aos pragmáticos de plantão, confesso de imediato: Não tenho dados científicos para provar, apoio esta afirmação na minha intuição e no meu conhecimento tácito e, principalmente, em exemplos como do Raimundo.

              Perdoar faz bem, na vida pessoal, e na profissional, transportando para o universo produtivo, o perdão equivale à análise de uma falha bem feita e com um claro direcionamento de correções futuras, uma organização saudável procura erros de processos prioritariamente ao de pessoas, claro que o erro humano intencional não pode ser tratado com um perdão descompromissado, as pessoas devem ser responsáveis pelo seu desempenho e terem promoções ou demissões de acordo com ele, o que falo é que o processo deve ser suave e maduro, isento de rancores, as empresas não podem se configurar em calvários, caso se chegue a conclusão sobre a ruptura (demissão) de um profissional com a empresa, que o caminho para tanto tenha sido em bases maduras e assertivas, isento de desgastes desnecessários, como exposições gratuitas de erros, assédios morais, etc.

              Para aquele que perdoa, o exercício é salutar, resolver problemas olhando para frente, trata-se do melhor método, há de ser duro com os problemas e não com as pessoas, uma questão técnica em aberto raramente é carregada para o seio da casa de um profissional, já uma questão de relacionamento mal resolvida faz muitas pessoas perderem o sono, trazendo “deformações plásticas” para sua estrutura íntima.
            </article>
            <img src={article.images} alt="Second" className="img-responsive img-2" />
          </main>
        </div>
      </div>
    );
  }
}

export default ArticleRead