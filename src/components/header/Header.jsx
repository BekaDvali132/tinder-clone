import React from 'react'
import './Header.css' 
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>

        <IconButton>
            <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>
        
    </div>
  )
}

export default Header