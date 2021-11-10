import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { hideNavbar } from '../../actions/navbar';
import { hideSidebar } from '../../actions/sidebar';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated, hideSidebar, hideNavbar }) => {

  useEffect(() => {
    hideSidebar();
    hideNavbar();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({ name, email, password, password_confirmation: password2 });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">

              <div className="text-center mt-4">
                <h1 className="h2">Xush kelibsiz!</h1>
                <p className="lead">
                  Bu test uchun chiqarilgan sahifa ishga tushirilganda ishlamaydi!
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form className="form" onSubmit={onSubmit} >
                      <div className="mb-3">
                        <label className="form-label">Ism:</label>
                        <input className="form-control form-control-lg"
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={name}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input className="form-control form-control-lg"
                          type="email"
                          placeholder="Email Adres"
                          name="email"
                          value={email}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Parol:</label>
                        <input className="form-control form-control-lg"
                          type="password"
                          placeholder="Parol"
                          name="password"
                          minLength="6"
                          value={password}
                          onChange={(e) => onChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Parolni takrorlang:</label>
                        <input className="form-control form-control-lg"
                          type="password"
                          placeholder="Parol"
                          name="password2"
                          minLength="6"
                          value={password2}
                          onChange={(e) => onChange(e)}
                        />
                      </div>
                      <div className="text-center mt-3 d-grid gap-2">
                        <a href="index.html" className="btn btn-lg btn-block btn-primary">Ro'yxatdan o'tish</a>
                        <Link to="/login" className="btn btn-lg btn-secondary btn-block">Kirish</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  hideNavbar: PropTypes.func.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register, hideNavbar, hideSidebar })(Register);
