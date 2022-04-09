import alanBtn from '@alan-ai/alan-sdk-web';
import {useEffect} from 'react'
const Alan = () => {
    useEffect(() => {
        alanBtn({
            key: '906acbcb700f0c51e0f36ef4d094b55d2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command}) => {
              if (command === 'testCommand') {
                alert('code executed')
              }
            }
        });
      }, []);  
  return (
    <></>
  )
}

export default Alan