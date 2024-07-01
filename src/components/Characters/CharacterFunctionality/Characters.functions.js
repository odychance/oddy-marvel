export const handleSubmit = async ({ 
    getCharacter,
    characterName,
    setResponseCharacter,
    setStateCharacter,
    setAlertState,
}) => {
    const response = await getCharacter({characterName})
    setResponseCharacter(response?.data?.data?.results[0])

    if(response?.data?.data?.count === 0 || !response) {
      setStateCharacter(false)
      setAlertState(true)
      
        setTimeout(() => {
          setAlertState(false)
        }, 3000);
      } else {
        setStateCharacter(true)
      }
  }


export const handleClose = ({ setStateCharacter, setResponseCharacter}) => {
    setStateCharacter(false)
    setResponseCharacter(null)
}