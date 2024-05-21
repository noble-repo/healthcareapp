import React, { useState } from "react"
import { useDropzone } from "react-dropzone"

function Dropzone(props) {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "180px" }} alt="preview" />
      </div>
    </div>
  ))

  return (
    <div >
      <div {...getRootProps()}>
        <input  {...getInputProps()} style={{display:"flex", width: "180px",fontSize:"12px"}} onChange={props.onFileChange} disabled={props.disabled || false}/>
        
      </div>
      <img src={props.url || ''} className={props?.imageCSS || "w-100"}/>
    </div>
  )
}

export default Dropzone


