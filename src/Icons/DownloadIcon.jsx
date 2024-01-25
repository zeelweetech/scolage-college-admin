import * as React from "react"
const DownloadIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 17}
    height={props.height || 15}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#707070"}
      d="M7.92 3.786V.622a.594.594 0 0 1 .566-.618.588.588 0 0 1 .583.539l.005.079v3.164h3.587a3.485 3.485 0 0 1 3.34 3.456v4.147a3.507 3.507 0 0 1-3.177 3.61h-8.5a3.473 3.473 0 0 1-3.332-3.455v-4.14A3.51 3.51 0 0 1 4.16 3.793H7.916v5.05l-1.2-1.304a.547.547 0 0 0-.8-.018l-.017.018a.685.685 0 0 0-.06.81l.06.079 2.184 2.379a.54.54 0 0 0 .762.056l.056-.056 2.184-2.38a.67.67 0 0 0 0-.888.547.547 0 0 0-.75-.061l-.064.06-1.193 1.3v-5.05L7.92 3.786Z"
    />
  </svg>
)
export default DownloadIcon
