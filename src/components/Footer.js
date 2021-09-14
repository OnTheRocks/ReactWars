import React from "react";

function Footer() {
  const styles = {color: "green", backgroundColor: "black"};
  return (
    <footer>
      {/* <h3 style={{color: "green", backgroundColor: "black"}}>This is my footer element</h3> */}
      <h3 style={styles}>This is my footer element</h3>
    </footer>
  )
}


export default Footer