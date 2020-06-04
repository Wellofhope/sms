import React, { Component } from 'react';
import NavBar from "../Common/NavBar";

class Upload extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <NavBar/>
                 <div className="center">
          <br/>
          <h2 className="green-text">Image upload</h2>
          <br/>
          <br/>
        <div className="row">
          <progress value={this.state.progress} max="100" className="progress" />
        </div>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        <br />
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
            </React.Fragment>
         );
    }
}
 
export default Upload;