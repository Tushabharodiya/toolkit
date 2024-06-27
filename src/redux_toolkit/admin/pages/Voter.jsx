import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_voter, post_voter } from '../api/api';

const Voter = () => {
  let voter = useSelector((state) => state.adminSlice)

  let cardNo = useRef();
  let name = useRef();
  let fatherName = useRef();
  let sex = useRef();
  let dob = useRef();
  let address = useRef();
  let assemblyNoandName = useRef();
  let partNoandName = useRef();
  let password = useRef();

  let dispatch = useDispatch();


  let addVoter = () => {
    let voter = {
      cardNo: cardNo.current.value,
      name: name.current.value,
      fatherName: fatherName.current.value,
      sex: sex.current.value,
      dob: dob.current.value,
      address: address.current.value,
      assemblyNoandName: assemblyNoandName.current.value,
      partNoandName: partNoandName.current.value,
      password: password.current.value,
    }
    console.log(voter);
    dispatch(post_voter(voter))
  }

  //remove
  let remove = (voter) => {
    console.log(voter);
    dispatch(delete_voter(voter))
  }

  return (
    <div>
      <div className="plus d-flex justify-content-end align-items-center">
        <button data-bs-toggle="modal" data-bs-target="#partymodel" className='button'>ADD <i className="fa-solid fa-plus"></i></button>
      </div>
      <div className="modal fade" id="partymodel">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Party Deatails</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-6">
                    <label> cardNo: <input type="text" name='cardNo' ref={cardNo} className="form-control" /></label>
                    <label> name: <input type="text" name='name' ref={name} className="form-control" /></label>
                    <label> fatherName: <input type="text" name='fatherName' ref={fatherName} className="form-control" /></label>
                    <label> sex: <input type="text" name='sex' ref={sex} className="form-control" /></label>
                  </div>
                  <div className="col-6">
                    <label> dob: <input type="date" name='dob' ref={dob} className="form-control" /></label>
                    <label> address: <input type="text" name='address' ref={address} className="form-control" /></label>
                    <label> assemblyNoandName: <input type="text" name='assemblyNoandName' ref={assemblyNoandName} className="form-control" /></label>
                    <label> partNoandName: <input type="text" name='partNoandName' ref={partNoandName} className="form-control" /></label>
                    <label> password: <input type="password" name='password' ref={password} className="form-control" /></label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="button bg-secondary" data-bs-dismiss="modal">Close</button>
              <button className='button' data-bs-dismiss="modal" onClick={addVoter}>Add party</button>
            </div>
          </div>
        </div>
      </div>
      <div className="admintable">
        <table cellPadding="8px">
          <thead>
            <tr>
              <th>cardNo</th>
              <th>name</th>
              <th>fatherName</th>
              <th>sex</th>
              <th>dob</th>
              <th>NoandName</th>
              <th>partName</th>
              <th>password</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {
              voter.voter?.map((val, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td>{val.cardNo}</td>
                      <td>{val.name}</td>
                      <td>{val.fatherName}</td>
                      <td>{val.sex}</td>
                      <td>{val.dob}</td>
                      <td>{val.assemblyNoandName}</td>
                      <td>{val.partNoandName}</td>
                      <td>{val.password}</td>
                      <td><button><i className="fa-regular fa-pen-to-square"></i></button>
                        <button onClick={() => remove(val._id)}><i className="fa-solid fa-trash"></i></button>
                      </td>
                    </tr>
                  </React.Fragment>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Voter
