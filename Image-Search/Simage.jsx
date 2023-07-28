import React from "react"

const Simage = (props) => {
 const img = `https://source.unsplash.com/600x300/?${props.name}`
 const fallbackImg = "https://via.placeholder.com/600x300" // Fallback image URL

 const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px", // Set the height to the desired value
 }

 const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "5px",
 }

 return (
  <div style={containerStyle}>
   <img
    src={img}
    alt="None"
    onError={(e) => {
     e.target.src = fallbackImg
    }}
    style={imageStyle}
   />
  </div>
 )
}

export default Simage
