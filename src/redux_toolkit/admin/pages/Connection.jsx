import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_connection, post_connection } from '../api/api';

const Connection = () => {

  let connection = useSelector((state) => state.adminSlice)
  console.log(connection);

  let election = useRef();
  let party = useRef();
  let dispatch = useDispatch();

  let addconnection = () => {
    let data = {
      election: election.current.value,
      party: party.current.value,
    }
    dispatch(post_connection(data))
  }

  let remove = (connection) => {
    console.log(connection);
    dispatch(delete_connection(connection))
  }


  return (
    <div>
      <section className="connection">
        <div className="row">
          <div className="col-lg-8">
            <div className="admintable">
              <table cellPadding="8px">
                <thead>
                  <tr>
                    <th>symbol</th>
                    <th>indian politicle party</th>
                    <th>code</th>
                    <th>view/delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    connection.Connection?.map((val, index) => {
                      return (
                        <React.Fragment key={index}>
                          <tr>
                            <td><img src={val.party?.party_logo} alt="logo image" /></td>
                            <td>{val.party?.party_name}</td>
                            <td>{val.election?.election_name}</td>
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
          <div className="col-lg-4">
            <div className="collection-card">
              <div className="form-card">
                <div className="form-data">
                  <h2>Details</h2>
                  <div className="form-body mt-3">
                    <label className='d-block'>Select Election Name:
                      <select className="form-select mt-2 mb-3" ref={election}  >
                        {
                          connection.election?.map((val, index) => (
                            <option key={index} value={val._id} >{val.election_name}</option>
                          ))
                        }
                      </select>
                    </label>
                    <label className='d-block'>Select Party Name:
                      <select className="form-select mt-2 mb-3" ref={party} >
                        {
                          connection.party?.map((val, index) => (
                            <option key={index} value={val._id}>{val.party_name}</option>
                          ))
                        }
                      </select>
                    </label>
                  </div>
                  <div className="collection_btn text-center">
                    <button className='button' onClick={addconnection} >Add Party</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Connection
