import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import  './m10lesson1.scss'
// import *  from 'mdb-react-ui-kit'; // lib
// import { Input } from 'mdb-react-ui-kit'; // module

export default function Index() {
      return (
        <div>
          
          <div className="header_2" id="header2">
          <a ><Link to="/dashboard/courses/math10">Home</Link></a>
            <div className="section-title">
              <div className="subject-name">
                <h1>Math 10</h1>
              </div>
              <h2 className="lesson-name"> Unit 1: Trigonometric Fuctions</h2>
            </div>
          </div>
          {/* <div className="wrapper">
            <div className="slidebar">
              <h2>index</h2>
              <div className="mode-button">
                <button type="button" id="btn_test" onclick="toggle()">Switch Mode</button>
              </div>
              <ul>
                <li><a href="#">Angle Measure (Basic)</a></li>
                <li><a href="#part2">Trigonometry of Right Triangles</a></li>
                <li><a href="#part3">Trigonometric Functions of Angles</a></li>
                <li><a href="#part4">The Law of Cosines</a></li>
              </ul>
            </div>
          </div> */}
          {/* End of Header Section 2 */}
          <div className="content content-container">
            <div className="box-item" style={{marginTop: '30px'}}>
              <section id="part1">
                <div className="row_content">
                  <div className="learn">
                    <div className="lesson-title">
                      Angle Measure
                    </div>
                    <div className="content_">
                      <h1>Video</h1>
                      <div className="content-inside">
                        <a href="#videostory_1" className="button more" id="videolink_1">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          Angles in Standard Position
                        </a>
                        <div id="videostory_1" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                          {/* <iframe width={1000} height={560} src="https://www.youtube.com/embed/0ndu27bJQaU" title="YouTube video player" frameBorder={0} allow="accelerometer;
                                  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
                        </div>
                      </div>
                      <div className="content-inside">
                        {/* Embedded Video 2 on Link*/}
                        <a href="#videostory_2" className="button more" id="videolink_2">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          Length of a Cicular Arc 
                        </a>
                        {/* <div id="videostory_2" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                          <iframe width={1000} height={560} src="https://www.youtube.com/embed/C9z3FXS7nlo" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div> */}
                      </div>
                      <div className="content-inside">
                        {/* Embedded Video 3 on Link*/}
                        <a href="#videostory_3" className="button more" id="videolink_3">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          Area of a Circular Sector
                        </a>
                        {/* <div id="videostory_3" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                          <iframe width={1000} height={560} src="https://www.youtube.com/embed/tD6wigYAYMk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div> */}
                      </div>
                    </div> {/* End of content */}
                    <div className="document-option">
                      <div className="lesson-title "><h1>Document</h1></div>
                      <a href="../pdf_content/pdf.html">Lesson 1</a>
                      <a href="../pdf_content/pdf2.html">Lesson 2</a>
                    </div>  
                  </div>
                  <div className="learn">
                    <div className="practice-field">Practice</div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="./quiz_lesson1.html">Test 1: Angles in Standard Position</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Test 2: Area of a Circular Sector</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="box-item" style={{marginTop: '30px'}}>
              <section id="part2">
                <div className="row_content">
                  <div className="learn">
                    <div className="lesson-title">
                      Trigonometry of Right Triangles
                    </div>
                    <div className="content_ ">
                      <h1>Video</h1>
                      <div className="content-inside">
                        {/* Embedded Video 4 on Link*/}
                        <a href="#videostory_4" className="button more" id="videolink_4">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          Trigonometric Ratious
                        </a>
                        {/* <div id="videostory_4" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                          <iframe width={1000} height={560} src="https://www.youtube.com/embed/9-eHMMpQC2k" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div> */}
                      </div>
                      <div className="content-inside">
                        {/* Embedded Video 5 on Link*/}
                        <a href="#videostory_5" className="button more" id="videolink_5">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          Special Triangles
                        </a>
                        {/* <div id="videostory_5" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                          <iframe width={1000} height={560} src="https://www.youtube.com/embed/p70UBGCHZrQ" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div> */}
                      </div>
                      <div className="content-inside">
                        {/* Embedded Video 6 on Link*/}
                        <a href="#videostory_6" className="button more" id="videolink_6">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          Applications of Trigonometry of Right Triangles
                        </a>
                        {/* <div id="videostory_6" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                          <iframe width={1000} height={560} src="https://www.youtube.com/embed/qXxTu0fg4_8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div> */}
                      </div>
                    </div> 
                    <div className="document-option">
                      <div className="lesson-title "><h1>Document</h1></div>
                      <a href="../pdf_content/pdf.html">Lesson 1</a>
                      <a href="../pdf_content/pdf2.html">Lesson 2</a>
                    </div>    
                    {/* End Embedded Video*/}
                  </div>
                  <div className="learn">
                    <div className="practice-field">Practice</div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="./quiz_lesson1.html">Test 1: Angles in Standard Position</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Test 2: Area of a Circular Sector</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="box-item" style={{marginTop: '30px'}}>
              <section id="part3">
                <div className="row_content">
                  <div className="learn">
                    <div className="lesson-title">
                      Trigonometry Function of Angles
                      <h1>Video</h1>
                    </div>
                    <div className="content-inside">
                      {/* Embedded Video 4 on Link*/}
                      <a href="#videostory_7" className="button more" id="videolink_7">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        Trigonometry Function of Angles
                      </a>
                      {/* <div id="videostory_7" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                        <iframe width={1000} height={560} src="https://www.youtube.com/embed/lJ9K4eupKkI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div> */}
                    </div>
                    <div className="content-inside">
                      {/* Embedded Video 5 on Link*/}
                      <a href="#videostory_8" className="button more" id="videolink_8">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        Trigonometric Identities
                      </a>
                      {/* <div id="videostory_8" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                        <iframe width={1000} height={560} src="https://www.youtube.com/embed/-ClDsLayiC8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div> */}
                    </div>
                    <div className="content-inside">
                      {/* Embedded Video 6 on Link*/}
                      <a href="#videostory_9" className="button more" id="videolink_9">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        Areas of Triangles
                      </a>
                      {/* <div id="videostory_9" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                        <iframe width={1000} height={560} src="https://www.youtube.com/embed/svWYgZs33bA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div> */}
                    </div>
                    {/* End Embedded Video*/}
                  </div>
                  <div className="learn">
                    <div className="practice-field">Practice</div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Practice 1: Title 1</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Practice 1: Title 1</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                  </div>
                </div>
              </section> 
            </div>
            <div className="box-item" style={{marginTop: '30px'}}>
              <section id="part4">
                <div className="row_content">
                  <div className="learn">
                    <div className="lesson-title">
                      The Law of Cosines
                      <h1>Video</h1>
                    </div>
                    <div className="content-inside">
                      {/* Embedded Video 4 on Link*/}
                      <a href="#videostory_10" className="button more" id="videolink_10">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        The Law of Cosines
                      </a>
                      {/* <div id="videostory_10" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                        <iframe width={1000} height={560} src="https://www.youtube.com/embed/9CGY0s-uCUE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div> */}
                    </div>
                    <div className="content-inside">
                      {/* Embedded Video 5 on Link*/}
                      <a href="#videostory_11" className="button more" id="videolink_11">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        Navigation: Heading and Bearing
                      </a>
                      {/* <div id="videostory_11" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                        <iframe width={1000} height={560} src="https://www.youtube.com/embed/cSKAqfGXOPI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div> */}
                    </div>
                    <div className="content-inside">
                      {/* Embedded Video 6 on Link*/}
                      <a href="#videostory_12" className="button more" id="videolink_12">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        The Area of Triangles
                      </a>
                      {/* <div id="videostory_12" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                        <iframe width={1000} height={560} src="https://www.youtube.com/embed/svWYgZs33bA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      </div> */}
                    </div>
                    {/* End Embedded Video*/}
                  </div>
                  <div className="learn">
                    <div className="practice-field">Practice</div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Practice 1: Title 1</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Practice 1: Title 1</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                  </div>
                </div>
              </section> 
            </div>
          </div>
        </div>
      );
    }


