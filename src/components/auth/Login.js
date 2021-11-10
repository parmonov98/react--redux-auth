import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { hideSidebar } from '../../actions/sidebar';
import { hideNavbar } from '../../actions/navbar';
import avatar from "../../img/avatar.jpg";

const Login = ({ login, isAuthenticated, hideSidebar }) => {

  useEffect(() => {
    hideSidebar();
    hideNavbar();
    // eslint-disable-next-line
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <main className="d-flex w-100">
        <div className="container d-flex flex-column">
          <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">

                <div className="text-center mt-4">
                  <h1 className="h2">XATP13 Ishlab chiqarish tizimi</h1>
                  <p className="lead">
                    Login va parolni terib kiring
                  </p>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-4">
                      <div className="text-center">
                        <img src={avatar} alt="Charles Hall" className="img-fluid rounded-circle" width="132"
                          height="132" />
                      </div>
                      <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                          <label className="form-label">Email/Email</label>
                          <input className="form-control form-control-lg" type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}
                            required />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Parol</label>
                          <input className="form-control form-control-lg"
                            type="password"
                            placeholder="Password"
                            name="password"
                            minLength="6"
                            value={password}
                            onChange={(e) => onChange(e)}
                          />

                        </div>
                        {/* <div>
                          <label className="form-check">
                            <input className="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked />
                            <span className="form-check-label">
                              Eslab qolish
                            </span>
                          </label>
                        </div> */}
                        <div className="text-center mt-3 d-grid gap-2">
                          <button type="submit" className="btn btn-lg btn-primary">Tizimga kirish</button>
                          <Link className="btn btn-lg btn-secondary" to="/register">Ro'yxatdan o'tkizish</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, hideSidebar, hideNavbar })(Login);
