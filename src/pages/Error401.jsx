import React from 'react';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';
function Error401() {
  return (
    <div>
      <div id="layoutError">
        <div id="layoutError_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center mt-4">
                    <h1 className="display-1">401</h1>
                    <p className="lead">Unauthorized</p>
                    <p>Access to this resource is denied.</p>
                    <Link to='/'>
                    <i className="fas fa-arrow-left me-1"></i>
                      Return to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutError_footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Error401;
