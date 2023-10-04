import React from 'react'
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import "./technologyCard.css"

function TechnologyCard(props) {

    function technology(technology){
        console.log("JavaScript", technology)
        switch (technology) {
            case "JavaScript":
                return <JavascriptIcon sx={{ fontSize: 100 }} />;
            case "HTML":
                return <HtmlIcon sx={{ fontSize: 100 }} />;
            case "CSS":
                return <CssIcon sx={{ fontSize: 100 }} />;
            case "SCSS":
                return <JavascriptIcon sx={{ fontSize: 100 }} />;
            case "React JS":
                return <CodeIcon sx={{ fontSize: 100 }} />;
            case "Node JS":
                return <TerminalIcon sx={{ fontSize: 100 }} />;
            default:
                return null;
        }
    }

    console.log(technology())
  return (
    <div class="card">
        <div class="content">
            <div class="back">
            <div class="back-content">
                <strong className='title_cardTechnology'>{props.technology}</strong>
                {technology(props.technology)} 
            </div>
            </div>
            <div class="front">
            <div class="img">
                <div class="circle">
                </div>
                <div class="circle" id="right">
                </div>
                <div class="circle" id="bottom">
                </div>
            </div>

            <div class="front-content">
                <small class="badge">{props.category}</small>
                <div class="description">
                <div class="title">
                    <p class="title">
                    <strong>Spaguetti Bolognese</strong>
                    </p>
                 </div>
                <p class="card-footer">
                    30 Mins &nbsp; | &nbsp; 1 Serving
                </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TechnologyCard