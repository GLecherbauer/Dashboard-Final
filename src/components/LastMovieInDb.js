import React from 'react';
import imagenFondo from '../assets/images/banner.png';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800"> Me Sierra</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Somos un grupo de jovenes amantes del buen mate y la yerba. Nuestra funcion es que te adentres en el amplio mundo del mate, sabiendo sobre los diferentes tipos que existen, ademas de conocer las diferentes yerbas que hoy por hoy se venden en el mercado 🧉 </p>
                    
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
