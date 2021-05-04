import React, { Component } from "react";
import Script from "react-load-script";

class ReactPocketGL extends Component{
    constructor(){
        super();
        
        // Make unique ID's via indexing
        this.id = "ReactPocketGL_" + ReactPocketGL.count;
        ReactPocketGL.count += 1;
    }

    static count = 0;

    onLibLoad(){
        const PocketGL = window.PocketGL; // Load from script tag
        new PocketGL(this.id, this.props.opts);
    }

    render(){
        return (
        <div>
            <Script 
                url="https://cdn.rawgit.com/gportelli/pocket.gl/v1.2.4/dist/pocket.gl.min.js"
                onLoad={this.onLibLoad.bind(this)} 
            />
            <div id={this.id}></div>
        </div>
        );
    }
}

export default ReactPocketGL;