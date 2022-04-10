import alanBtn from '@alan-ai/alan-sdk-web';
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const Alan = () => {
    const navigate=useNavigate()
    useEffect(() => {
        alanBtn({
            key: '906acbcb700f0c51e0f36ef4d094b55d2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command}) => {
              if (command === 'goHome') {
                navigate('/')
              }
            }
        });
      }, []);  
  return (
    <></>
  )
}

export default Alan