import { Link } from 'react-router-dom';
import '../styles/layout/characterDetail.scss';
import PageNotFound from './PageNotFound';

const CharacterDetail = (props) => {
  function changeStatus() {
    const status = props.character.status;
    if (status === 'Alive') {
      return (
        <>
          <i class='fab fa-reddit-alien'></i>
        </>
      );
    } else if (status === 'Dead') {
      return (
        <>
          <i class='fas fa-skull-crossbones'></i>
        </>
      );
    } else {
      return (
        <>
          <i class='far fa-question-circle'></i>
        </>
      );
    }
  }
  console.log(props);
  if (props.character !== undefined) {
    return (
      <main class='detail'>
        <Link to='/' className='characterDetail'>
          <p className='paragraphDetail'>Volver atrás</p>
        </Link>
        <section className='sectionDetail'>
          <img
            className='imgApiDetail'
            src={props.character.img}
            alt={`Foto de: ${props.character.name}`}
            title={`Foto de: ${props.character.name}`}
          />
          <div className='divDetail'>
            <h2 className='nameDetail'>{props.character.name}</h2>
            <ul className='listDetail'>
              <li className='liDetail'>
                Especie :
                <span className='liDetailsResponse'>
                  {' '}
                  {props.character.species}
                </span>
              </li>
              <li className='liDetail'>
                ¿Vivo o muerto? :
                <span className='liDetailsResponse'> {changeStatus()}</span>
              </li>
              <li className='liDetail'>
                <i class='fas fa-home'> </i> :
                <span className='liDetailsResponse'>
                  {' '}
                  {props.character.planet}
                </span>
              </li>
              <li className='liDetail'>
                Episodios :
                <span className='liDetailsResponse'>
                  {' '}
                  {props.character.episode}
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  } else {
    return <PageNotFound />;
  }
};
export default CharacterDetail;
