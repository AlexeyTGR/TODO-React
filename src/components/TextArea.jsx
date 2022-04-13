const TextArea = (props) => {
  return (
    <div
      className={props.classNameForItem}
    >
      {props.value}
    </div>
  )
}

export default TextArea