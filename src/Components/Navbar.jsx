import React from 'react'
import { Link } from 'react-router-dom'
import  {useContextGlobal}  from '../Components/utils/global.context';

const Navbar = () => {
  const {state, dispatch,themes,stylesComponentsSwitch } = useContextGlobal();
  return (
    <nav  style={stylesComponentsSwitch}>
      <h1><span>D</span>H Odonto</h1>
      <div className='nav'>
      <Link to='/' style={stylesComponentsSwitch} >Home</Link>
      <Link to='/contact' style={stylesComponentsSwitch}>Contact</Link>
      <Link to='/favs' style={stylesComponentsSwitch}>Favs</Link>

      {state.theme === themes.light ? <button onClick={() => {
                dispatch({type: 'THEME_DARK', payload: true})
                }
            } style={{backgroundColor: "#222222"}} className='switch'>🌚</button> 
            :
            <button onClick={() => {
              dispatch({type: 'THEME_LIGHT', payload: false})
              }
          } style={{backgroundColor: "#F7F5F2"}} className='switch'>🌞</button>}
      
      </div>
    </nav>
  )
}

export default Navbar