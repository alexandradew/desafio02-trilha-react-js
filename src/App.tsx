import { useState } from 'react';

import { Sidebar } from './components/SideBar';
import { Content } from './components/Content';



import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';



export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    
    <Sidebar selectedGenreId = {selectedGenreId} setSelectedGenreId = {setSelectedGenreId}/>
    
    <Content selectedGenreId = {selectedGenreId}/>
    
    </div>
  )
}