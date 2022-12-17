
export default function translateDangerous(t, value){
    return <div dangerouslySetInnerHTML={
                    {__html: t(value, {interpolation: {escapeValue: false}})}
                } />
  
  }