import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
// import UserForm from './UserForm';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/user';
import Spinner from '../layout/Spinner';

const Users = ({ getUsers, user: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container-fluid p-0">


        <div className="row mb-2">
          <div className="col-md-12 col-lg-8">
            <h1 className="h3 mb-3"><strong>Firmadagi</strong> xodimlar </h1>
          </div>
          <div className="col-lg-4">
            <div className="crud_actions text-end">
              <button className="btn btn-primary">Foydalanuvchi <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus align-middle mr-3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 col-xxl-12 d-flex">

            <div className="card w-100 table-responsive">
              <table className="table custom-table">
                <thead className="table-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">FIO</th>
                    <th scope="col">Lavozimi</th>
                    <th scope="col">Amallar</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => (
                    <UserItem key={item.id} user={item} />
                  ))}

                </tbody>
              </table>

            </div>

          </div>


        </div>

      </div>
      {/* <PostForm /> */}
    </Fragment>
  );
};


Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(Users);
