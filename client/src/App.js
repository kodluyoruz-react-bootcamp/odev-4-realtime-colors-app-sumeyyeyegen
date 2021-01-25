import { useEffect, useContext } from 'react'
import { SketchPicker } from 'react-color';
import ColorContext from './context/ColorContext'
import User from './components/User'
import { initSocket, setBgColor, subscribeToBgColor } from './socketServices';

function App() {
  const { user, login, setColor, showColorPicker, disconnectSocket, setColorPicker, color } = useContext(ColorContext);
  useEffect(() => {
    initSocket();

    if (showColorPicker && color.background !== '#04FA9C') {
      setBgColor(color.background, color.changerName);
    }
    subscribeToBgColor((color) => {
      setColor(color)
    });
  }, [color, disconnectSocket, setColor, showColorPicker, user]);
  return (
    <div style={{ backgroundColor: color.background, minHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="color" >
      { login ?
        < div>
          <button className="btn btn-dark btn-sm" onClick={() => setColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'Close Color Picker' : 'Open Color Picker'}</button>
          {showColorPicker &&
            <SketchPicker color={color.background} onChange={updatedColor => setColor({ background: updatedColor.hex, changerName: user })}>
            </SketchPicker>
          }
          <strong>Mevcut Renk HEX Kodu: </strong> {color.background}
          <br />
          <strong>Rengi Değiştiren: </strong> {color.changerName}
        </div>
        :
        <User />
      }
    </div>
  )
}
export default App;
