import React from 'react'
import  {useContextGlobal}  from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const {datos} = useContextGlobal();
  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {datos.map(dentista => <Card dentista={dentista} key={dentista.id} />)}
      </div>
    </main>
  )
}

export default Home