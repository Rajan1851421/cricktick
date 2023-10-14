import React from 'react'

function StaticPage() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 ">

                        <img src="https://static.ffx.io/images/$zoom_1.7685%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/12adcd602405fe2341c92149641d9e65ddd24131"
                            className='img-fluid rounded'
                            alt="" />

                    </div>
                    <div className="col-md-6 ">
                        <img src="https://media3.giphy.com/media/agrGBoO520lcIljtXP/giphy.gif"
                            className='img-fluid rounded float-right'
                            alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <img src="https://img.cricketworld.com/images/e-130988/dharamshala-a-view-of-the-himachal-pradesh-cricket-association-stadium-ians.jpg" alt=""
                            className='img-fluid rounded w-100 my-2'
                        />
                    </div>
                    <div className='row d-flex justify-content-space-around'>
                        <div className="col-md-5 col-sm-12 col-lg-5" >
                            <h3 className='text-center'>
                                2019 Cricket World Cup  <br />
                                <span>(Country Rankings)</span>
                            </h3>
                            <hr />
                            <img src='https://www.insidesport.in/wp-content/uploads/2019/06/unnamed.jpg'
                                className='img-fluid rounded my-2 '
                                style={{ height: '500px',width:'100%' }}
                            />
                        </div>
                        <div className="col-md-5 col-sm-12 col-lg-5 " >
                            <h3 className='text-center'> ICC Rankings <br/> All Country</h3>
                            <hr />
                            <img src='https://www.insidesport.in/wp-content/uploads/2023/01/5aeb7984-3fa6-47a5-9eec-f974d45e9403.jpg'
                                className='img-fluid rounded my-2 float-right'
                                style={{ height: '500px',width:'100%' }}
                            />

                        </div>
                    </div>

                </div>
            </div >

        </>
    )
}

export default StaticPage
