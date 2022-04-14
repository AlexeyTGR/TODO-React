import { useState } from "react"

const TextArea = (props) => {
//   return (
//     <div
//       className={props.classNameForItem}
//     >
//       {props.value}
//     </div>
//   )
// }

// export default TextArea
const [state, setState] = useState(true)

return (
  <div
    className={props.classNameForItem}
    onDoubleClick={() => setState(!state)}
  >
    {state
      ? (
        <div>
          {props.value}
        </div>
      )
      : (
        <input
          // onChange
          id="text-to-edit"
          value={props.value}
        />
      )
    }
  </div>
)
}

export default TextArea