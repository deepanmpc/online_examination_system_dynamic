export const Checkbox = ({name,onChangeHandler }) => {
    return (
      <>
      <input type="checkbox" value={name} id={name}  onChange={onChangeHandler}  />
      <label htmlFor={name}>{name}</label>     
    
    </>
    )
  }