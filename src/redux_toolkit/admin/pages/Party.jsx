import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_party, delete_party } from '../api/api';

const Party = () => {
  let party_name = useRef();
  let short_code = useRef();
  let party_logo = useRef();

  let dispatch = useDispatch();

  let party = useSelector((state) => state.adminSlice)
  let addParty = () => {
    let data = {
      party_name: party_name.current.value,
      short_code: short_code.current.value,
      party_logo: party_logo.current.files[0],
    }

    let formdata = new FormData();
    formdata.append("party_name", data.party_name);
    formdata.append("short_code", data.short_code);
    formdata.append("party_logo", data.party_logo);

    dispatch(add_party(formdata));
    party_name.current.value = " ";
    short_code.current.value = " ";
    party_logo.current.value = null;

  }
  let remove = (party) => {
    dispatch(delete_party(party))
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
                <label>party name : <input type="text" className="form-control" ref={party_name} /></label>
                <label>short code : <input type="text" className="form-control" ref={short_code} /></label>
                <label>pary logo : <input type="file" className="form-control" ref={party_logo} /></label>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="button bg-secondary" data-bs-dismiss="modal">Close</button>
              <button className='button' data-bs-dismiss="modal" onClick={addParty}>Add party</button>
            </div>
          </div>
        </div>
      </div>
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
              party.party?.map((val, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td><img src={val.party_logo} alt="logo image" /></td>
                      <td>{val.party_name}</td>
                      <td>{val.short_code}</td>
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

export default Party
