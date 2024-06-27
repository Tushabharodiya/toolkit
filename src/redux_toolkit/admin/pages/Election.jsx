import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_election, post_election } from '../api/api';

const Election = () => {
  let election = useSelector((state) => state.adminSlice);

  let election_name = useRef();
  let date = useRef();
  let dispatch = useDispatch();


  let addElection = () => {
    let election = {
      election_name: election_name.current.value,
      date: date.current.value,
    }
    dispatch(post_election(election))
    election_name.current.value = " ";
    date.current.value = null;
  }

  let remove = (election) => {
    dispatch(delete_election(election))
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
                <label>election name : <input type="text" className="form-control" ref={election_name} /></label>
                <label>date: <input type="date" className="form-control" ref={date} /></label>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="button bg-secondary" data-bs-dismiss="modal">Close</button>
              <button className='button' data-bs-dismiss="modal" onClick={addElection}>Add party</button>
            </div>
          </div>
        </div>
      </div>
      <div className="admintable">
        <table cellPadding="8px">
          <thead>
            <tr>
              <th>election name</th>
              <th>date</th>
              <th>view/delete</th>
            </tr>
          </thead>
          <tbody>
            {
              election.election?.map((val, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td>{val.election_name}</td>
                      <td>{val.date}</td>
                      <td><button><i className="fa-regular fa-pen-to-square"></i></button>
                        <button onClick={() => remove(val._id)} ><i className="fa-solid fa-trash"></i></button>
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

export default Election
