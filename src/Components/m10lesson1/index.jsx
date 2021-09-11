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

export default function Index() {

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
              <a ><Link to="/dashboard/courses/math10"><h1>Home</h1></Link></a>
              </div>
              <a ><Link to="/dashboard/courses/math10"><h2 className="lesson-name"> Unit 1: Trigonometric Fuctions</h2></Link></a>
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
                    <div className="content_">
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
                    </div>
                    <div className="document-option">
                      <div className="lesson-title "><h1>Document</h1></div>
                      <a>< Link to="./c5l1/d1">Document 1</Link></a>
                      <a>< Link to="./c5l1/d1">Document 2</Link></a>
                    </div>  
                  </div>
                  <div className="learn">
                    <div className="practice-field">Practice</div>
                    <div className="box-content">
                      <div className="practice-title">
                      <a>< Link to="./c5l1/test1">Test 1: Angles in Standard Position</Link></a>
                      </div>
                      <div className="practice-noti">
                      <VideoModal title="Try more to be better"/>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="practice-title">
                        <a href="#">Test 2: Area of a Circular Sector</a>
                      </div>
                      <div className="practice-noti">
                      <VideoModal title="Angles"/>Try more to be better
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
                          <VideoModal title="Applications of Trigonometry of Right Triangles"/>
                        </a>
                      </div>
                    </div> 
                    <div className="document-option">
                      <div className="lesson-title "><h1>Document</h1></div>
                      <a>< Link to="./c5l1/d1">Document 1</Link></a>
                      <a>< Link to="./c5l1/d1">Document 2</Link></a>
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
              <section id="part3">
                <div className="row_content">
                  <div className="learn">
                    <div className="lesson-title">
                      Trigonometry Function of Angles
                      <h1>Video</h1>
                    </div>
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


