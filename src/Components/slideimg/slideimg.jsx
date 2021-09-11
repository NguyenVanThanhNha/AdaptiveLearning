// import './App.css';
import  Carousel  from './carousel'

const Apptest = ()=> {
  const data = [
    {
      image: "https://imageadaptivelearning.s3.ap-southeast-1.amazonaws.com/mindmap1.jpg",
      caption: `<div>
        Mindmap<br/><span></span>
      </div>`
    },
    {
      image: "https://imageadaptivelearning.s3.ap-southeast-1.amazonaws.com/img2.PNG",
      caption: "<div>CheatSheet</div>"
    },
    {
      image: "https://imageadaptivelearning.s3.ap-southeast-1.amazonaws.com/mindmap1.jpg",
      caption: `<div>
        Mindmap<br/><span></span>
      </div>`
    },
    {
      image: "https://imageadaptivelearning.s3.ap-southeast-1.amazonaws.com/img2.PNG",
      caption: "<div>CheatSheet</div>"
    },
    {
      image: "https://imageadaptivelearning.s3.ap-southeast-1.amazonaws.com/mindmap1.jpg",
      caption: `<div>
        Mindmap<br/><span></span>
      </div>`
    },
    {
      image: "https://imageadaptivelearning.s3.ap-southeast-1.amazonaws.com/img2.PNG",
      caption: "<div>CheatSheet</div>"
    },
    {
      image: "https://imageadaptivelearning.s3.ap-southeast-1.amazonaws.com/mindmap1.jpg",
      caption: `<div>
        Mindmap<br/><span></span>
      </div>`
    },
    {
      image: "https://imageadaptivelearning.s3.ap-southeast-1.amazonaws.com/img2.PNG",
      caption: "<div>CheatSheet</div>"
    },
    {
      image: "https://imageadaptivelearning.s3.ap-southeast-1.amazonaws.com/mindmap1.jpg",
      caption: `<div>
        Mindmap<br/><span></span>
      </div>`
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>Chapter 5: Angle Measure</h2>
        {/* <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Apptest
