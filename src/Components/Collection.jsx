import React from 'react'
import './Collection.css'

function Collection() {



  return (
    <div className = 'collection' id = 'Collection'>
        <h1>
            My <span>Projects</span>
        </h1>
        <div className = "collections-container">
            <div className = "cl-row row1">
                <div className = "project1">
                </div>
                <div className = "project2"></div>
                <div className = "project3"></div>
                <div className = "project4"></div>
            </div>
        </div>
    </div>
  )
}

export default Collection