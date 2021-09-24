
import './App.css'
import background from './michellelugomusic_cropped.jpg'

import { Grid } from '@mui/material';


const backgroundStyle = {
  backgroundImage:`url(${background})`, 
  backgroundSize: 'auto 100%', 
  backgroundPosition: 'center',
  width: '100vw', 
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column'
}

const titleFontStyle = {
  textDecoration: 'none', 
  fontFamily: 'Yaldevi', 
  color: 'white', 
  fontSize: '1.5vw'
}
function App() {

  return (
    <div style={backgroundStyle}>
      <div style={{width: '100%', flex: 3, marginTop: '1.7%'}}>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item>
            <a href="" style={titleFontStyle}>Home</a>
          </Grid>
          <Grid item>
            <a href="" style={titleFontStyle}>Biography</a>
          </Grid>
          <Grid item>
            <a href="" style={titleFontStyle}>Portfolio</a>
          </Grid>
          <Grid item>
            <a href="" style={titleFontStyle}>Contact</a>
          </Grid>
        </Grid>
      </div>
      <div style={{width: '100%', flex: 0.9, backgroundColor: 'clear', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{fontFamily: "Merienda", color: 'white', fontSize: '12vh', lineHeight: '10vh'}}>Michelle Lugo</div>
      </div>
      <div style={{width: '100%', flex: 1.1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
        <div style={{fontFamily: 'Yaldevi', color: 'white', fontSize: '2vw'}}>Composer | Arranger | Producer</div>
      </div>
    </div>
  )
}

export default App
