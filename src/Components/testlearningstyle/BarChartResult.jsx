import React from "react"
import { Bar } from 'react-chartjs-2'
import { Link } from "react-router-dom";
import "./testlearningstyle.scss"

const  BarChartResult = () =>{
    return (
        <div className="root">
			<div className='app'>
                <div>
                    <Bar
                    data={{
                        labels: ['Active', 'Reflective', 'Sensing', 'Retuitive', 'Visual', 'Verbal','Sequential','Global'],
                        datasets: [
                            {
                                label: 'YOUR LEARNING STYLE',
                                data: [
                                        JSON.parse(sessionStorage.getItem('active')),
                                        JSON.parse(sessionStorage.getItem('reflective')),
                                        JSON.parse(sessionStorage.getItem('sensing')),
                                        JSON.parse(sessionStorage.getItem('retuitive')),
                                        JSON.parse(sessionStorage.getItem('visual')),
                                        JSON.parse(sessionStorage.getItem('verbal')),
                                        JSON.parse(sessionStorage.getItem('sequential')),
                                        JSON.parse(sessionStorage.getItem('global'))],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(205, 175, 149, 0.2)',
                                    'rgba(106, 90, 205, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(205, 175, 149, 1)',
                                    'rgba(106, 90, 205, 1)'

                                ]
                            }
                        ]
                    }

                }
                height={400}
                width={600}
                />
                <h1 class = "end" >Thank you for completing the test, we can now recommend the most suitable lessons for you.<br></br></h1>
                <div><button onClick={()=> localStorage.removeItem('firstLogin')} className="btn-end-testlearningstyle"><Link className="btn-learning" to= '/dashboard'>Let's Enjoy!</Link></button></div>
            </div>
        </div>
        </div>
    )
}

export default BarChartResult