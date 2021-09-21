import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import  './m10lesson1.scss'
// import *  from 'mdb-react-ui-kit'; // lib
// import { Input } from 'mdb-react-ui-kit'; // module
import '../../../node_modules/react-modal-video/scss/modal-video.scss'
import VideoModal from '../modalvideo/modalvideo'
import WebViewer from "@pdftron/webviewer";
// import pdf from "../../data/Algebra_Trigonometry_c5.pdf"

var a=JSON.parse(sessionStorage.getItem('verbal'));
var b=JSON.parse(sessionStorage.getItem('visual'));


export default function Index() {

  if(true){
    console.log("Hello I'm Le Hoai Nam");
  }
  // const viewerDiv = useRef(null)

  // useEffect(() => {
  //   WebViewer({ 
  //     path: 'lib', 
  //     initialDoc:'/core/pdf/Algebra_Trigonometry_c5.pdf'
  //   }, 
  //   viewerDiv.current  ).then(instance => {
  //     const { documentViewer, annotationManager, Annotations } = instance.Core;

  //     documentViewer.addEventListener('documentLoaded', () => {
  //       const rectangleAnnot = new Annotations.RectangleAnnotation({
  //         PageNumber: 1,
  //         // values are in page coordinates with (0, 0) in the top left
  //         X: 100,
  //         Y: 150,
  //         Width: 200,
  //         Height: 50,
  //         Author: annotationManager.getCurrentUser()
  //       });

  //       annotationManager.addAnnotation(rectangleAnnot);
  //       // need to draw the annotation otherwise it won't show up until the page is refreshed
  //       annotationManager.redrawAnnotation(rectangleAnnot);
  //     });
  //   })
  // }, []);
      
      return (
        
        <div className="m10l1_background">
          <div className="header_2" id="header2">
            <div className="section-title">
              <div className="subject-name">
              <Link to="/dashboard/courses/math10"><h1>Home</h1></Link>
              </div>
              <Link to="/dashboard/courses/math10"><h2 className="lesson-name"> Unit 1: Trigonometric Fuctions</h2></Link>
            </div>
          </div>
          
          <div className="content content-container">
            <div className="box-item" style={{marginTop: '30px'}}>
              <section id="part1">
                <div className="row_content">
                  <div className="learn">
                    <div className="lesson-title">
                      Angle Measure
                    </div>
                    {b>a&&<div className="content_">
                      <h1>Video</h1>
                      <div className="content-inside">
                        <a href="#videostory_1" className="button more" id="videolink_1">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          <VideoModal title="Angles Measure" id="hy95VyPet-M"/>
                        </a>
                        <div id="videostory_1" className="mfp-hide" style={{maxWidth: '75%', margin: '0 auto'}}>
                        </div>
                      </div>
                      <div className="content-inside">
                        <a href="#videostory_2" className="button more" id="videolink_2">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          <VideoModal title="Angles in Standard Position " id="0ndu27bJQaU"/>
                        </a>
                      </div>
                      <div className="content-inside">
                        <a href="#videostory_3" className="button more" id="videolink_3">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          <VideoModal title="Length of a Circular Arc" id="C9z3FXS7nlo"/>
                        </a>
                      </div>
                      <div className="content-inside">
                        <a href="#videostory_3" className="button more" id="videolink_3">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          <VideoModal title="Area of a Circular Sector" id="C9z3FXS7nlo"/>
                        </a>
                      </div>
                      <div className="content-inside">
                        <a href="#videostory_3" className="button more" id="videolink_3">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          <VideoModal title="Circular Motion" id="_psIWtPBHzA"/>
                        </a>
                      </div>
                    </div>}
                    {a>b&&<div className="document-option " >
                      <div className="lesson-title "><h1>Document</h1></div>
                      <li>< Link to="./c5l1/d1">Angles Measure</Link></li>
                      <li>< Link to="./c5l1/d1">Angles in Standard Position</Link></li>
                      <li>< Link to="./c5l1/d1">Length of a Circular Arc</Link></li>
                      <li>< Link to="./c5l1/d1">Area of a Circular Sector</Link></li>
                      <li>< Link to="./c5l1/d1">Circular Motion</Link></li>
                    </div>  }
                  </div>
                  <div className="learn">
                    <div className="practice-field">Practice</div>
                    <div className="box-content">
                      <div className="practice-title">
                      < Link to="./c5l1/test1">Test 1: Angles in Standard Position</Link>
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
                    {b>a&&<div className="content_ ">
                      <h1>Video</h1>
                      <div className="content-inside">
                        <a href="#videostory_4" className="button more" id="videolink_4">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          <VideoModal title="Trigonometric Ratious"/>
                        </a>
                      </div>
                      <div className="content-inside">
                        <a href="#videostory_5" className="button more" id="videolink_5">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          <VideoModal title="Special Triangles"/>
                        </a>
                      </div>
                      <div className="content-inside">
                        <a href="#videostory_6" className="button more" id="videolink_6">
                          <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                          <VideoModal title="Applications of Trigonometry"/>
                        </a>
                      </div>
                    </div> }
                    {a>b&&<div className="document-option">
                      <div className="lesson-title "><h1>Document</h1></div>
                      <li>< Link to="./c5l1/d1">Trigonometric Ratious</Link></li>
                      <li>< Link to="./c5l1/d1">Special Triangles</Link></li>
                      <li>< Link to="./c5l1/d1">Applications of Trigonometry</Link></li>
                    </div>}
                  </div>
                  <div className="learn">
                    <div className="practice-field">Practice</div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="./quiz_lesson1.html">Test 1: Trigonometric Ratious</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Test 2: Special Triangles</a>
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
                    </div>
                    {b>a&&<div className="content_ ">
                    <h1>Video</h1>
                    <div className="content-inside">
                      <a href="#videostory_7" className="button more" id="videolink_7">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        <VideoModal title="Trigonometry Function of Angles"/>
                      </a>
                    </div>
                    <div className="content-inside">
                      <a href="#videostory_8" className="button more" id="videolink_8">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        <VideoModal title="Trigonometric Identities"/>
                      </a>
                    </div>
                    <div className="content-inside">
                      <a href="#videostory_9" className="button more" id="videolink_9">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        <VideoModal title="Areas of Triangles"/>
                      </a>
                    </div>
                  </div>}
                  {a>b&&<div className="document-option " >
                      <div className="lesson-title "><h1>Document</h1></div>
                      <li>< Link to="./c5l1/d1">Trigonometry Function of Angles</Link></li>
                      <li>< Link to="./c5l1/d1"> Trigonometric Identities</Link></li>
                      <li>< Link to="./c5l1/d1"> Areas of Triangles</Link></li>
                    </div>  }
                  </div>
                  <div className="learn">
                    <div className="practice-field">Practice</div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Test 1: Trigonometric Identities</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Test 2: Areas of Triangles </a>
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
                      
                    </div>
                    {b>a&&<div className="content_ ">
                    <h1>Video</h1>
                    <div className="content-inside">
                      <a href="#videostory_10" className="button more" id="videolink_10">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        <VideoModal title="The Law of Cosines"/>
                      </a>
                    </div>
                    <div className="content-inside">
                      <a href="#videostory_11" className="button more" id="videolink_11">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        <VideoModal title="Navigation: Heading and Bearing"/>
                      </a>
                    </div>
                    <div className="content-inside">
                      <a href="#videostory_12" className="button more" id="videolink_12">
                        <i className="fa fa-play-circle" aria-hidden="true"> &nbsp;</i>
                        <VideoModal title="The Area of Triangles"/>
                      </a>
                    </div>
                  </div>}
                  {a>b&&<div className="document-option " >
                      <div className="lesson-title "><h1>Document</h1></div>
                      <li>< Link to="./c5l1/d1">The Law of Cosines</Link></li>
                      <li>< Link to="./c5l1/d1">Navigation: Heading and Bearing</Link></li>
                      <li>< Link to="./c5l1/d1">The Area of Triangles</Link></li>
                    </div>  }
                  </div>
                  <div className="learn">
                    <div className="practice-field">Practice</div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Test 1: The Law of Cosines</a>
                      </div>
                      <div className="practice-noti">
                        Try more to be better
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Test 2: The Area of Triangles</a>
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

