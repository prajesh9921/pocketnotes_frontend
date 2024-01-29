import * as React from "react"

function Lock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={21}
      viewBox="0 0 17 21"
      fill="none"
      {...props}
    >
      <path
        d="M2.125 21a2.113 2.113 0 01-1.501-.588C.207 20.02-.001 19.549 0 19V9c0-.55.208-1.021.625-1.413A2.108 2.108 0 012.125 7h1.063V5c0-1.383.518-2.563 1.554-3.538C5.778.487 7.03-.001 8.5 0c1.47 0 2.723.488 3.76 1.463 1.035.975 1.553 2.154 1.553 3.537v2h1.062c.584 0 1.085.196 1.501.588.417.392.625.863.624 1.412v10c0 .55-.208 1.021-.625 1.413a2.108 2.108 0 01-1.5.587H2.125zM8.5 16c.584 0 1.085-.196 1.501-.588.417-.392.625-.863.624-1.412 0-.55-.208-1.021-.625-1.413A2.108 2.108 0 008.5 12c-.584 0-1.085.196-1.501.588-.417.392-.625.863-.624 1.412 0 .55.208 1.021.625 1.413.416.392.916.588 1.5.587zM5.312 7h6.375V5c0-.833-.31-1.542-.93-2.125C10.139 2.292 9.386 2 8.5 2s-1.638.292-2.258.875c-.62.583-.93 1.292-.93 2.125v2z"
        fill="#292929"
      />
    </svg>
  )
}

export default Lock
