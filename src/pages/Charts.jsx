
import React from 'react';
import MyDataTable from '../components/MyDataTable';
import { Link } from 'react-router-dom';
import AreaChart from '../components/AreaChart';
import BarChart from '../components/BarChart';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PieChart from '../components/PieChart';

function Charts() {
  return (
    <div className="sb-nav-fixed">
      <Navbar/>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <Link  className="nav-link" to='/'>
                  <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                  Dashboard
                  </Link>
                <div className="sb-sidenav-menu-heading">Interface</div>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Layouts
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                      <Link to='/sidenavbar' className="nav-link">Light Sidenav</Link>
                      <Link to='/staticLayout' className="nav-link">Static Navigation</Link>

                  </nav>
                </div>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                  <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                  Pages
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                      Authentication
                      <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </a>
                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link to='/login' className="nav-link">Login</Link>
                        <Link to='/register' className="nav-link">Register</Link>
                        <Link to='/password' className="nav-link">Forgot Password</Link>

                      </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                      Error
                      <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </a>
                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                      <Link to='/error401' className="nav-link">
                           401 Page
                      </Link>
                        <Link to='/error404' className="nav-link" >
                           404 Page
                        </Link>
                        <Link to='/error500' className="nav-link">
                           500 Page
                        </Link>
                      </nav>
                    </div>
                  </nav>
                </div>
                <div className="sb-sidenav-menu-heading">Addons</div>
                <Link  className="nav-link" to='/charts'>
                  <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                  Charts
                  </Link>
               <Link  className="nav-link" to='/tables'>
                  <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                  Tables
                </Link>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Charts</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
              <li className="breadcrumb-item active">Charts</li>
            </ol>
            <div className="card mb-4">
              <div className="card-body">
                Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official
                <a target="_blank" href="https://www.chartjs.org/docs/latest/">Chart.js documentation</a>
                .
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-area me-1"></i>
                Area Chart Example
              </div>
              <div className="card-body">
              <AreaChart/>
              </div>
              <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-bar me-1"></i>
                    Bar Chart Example
                  </div>
                  <div className="card-body">
                  <BarChart/>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-pie me-1"></i>
                    Pie Chart Example
                  </div>
                  <div className="card-body">
                  <PieChart/>
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
              </div>
            </div>
          </div>
          </main>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Charts
;



