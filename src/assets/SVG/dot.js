import * as React from "react"

function Dot(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      {...props}
    >
      <circle cx={4} cy={4} r={4} fill="#353535" />
    </svg>
  )
}

export default Dot
