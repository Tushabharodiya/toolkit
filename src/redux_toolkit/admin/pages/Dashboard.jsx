import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../component/Card';

const Dashboard = () => {

  let user = useSelector((state) => state.adminSlice)
  console.log(user);

  const partyVotes = {};
  // Loop through voters to accumulate votes for each party
  user.user?.forEach((val) => {
    const partyName = val?.party.party_name;
    if (partyVotes[partyName]) {
      partyVotes[partyName].votes += 1;
    } else {
      partyVotes[partyName] = {
        logo: val?.party.party_logo,
        votes: 1,
      };
    }
  });

  // const partyVoteList = Object.entries(partyVotes);
  const partyVoteList = Object.entries(partyVotes);
  // Sort partyVoteList by votes in descending order
  partyVoteList.sort(([, a], [, b]) => b.votes - a.votes);

  const totalVotes = partyVoteList.reduce((sum, [, details]) => sum + details.votes, 0);
  const totalVoters = user.voter?.length || 0;
  const totalparty = user.party?.length || 0;

  let vote = [
    {
      title: "vote",
      total: totalVotes,
    },
    {
      title: "user",
      total: totalVoters,
    },
    {
      title: "party",
      total: totalparty,
    }
  ]


  return (
    <div>
      <section className="dashborad">
        <div className="row">
          {
            vote?.map((val) => (
              <div className="col-lg-4">
                <Card title={val.title} total={val.total} />
              </div>
            ))
          }
        </div>
      </section>
      <div className="admintable">
        <table cellPadding="8px">
          <thead>
            <tr>
              <th>symbol</th>
              <th>indian politicle party</th>
              <th>vote</th>
            </tr>
          </thead>
          <tbody>
            {
              partyVoteList?.map(([partyName, details], index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td><img src={details.logo} alt="logo image" /></td>
                    <td>{partyName}</td>
                    <td>{details.votes}</td>
                  </tr>
                </React.Fragment>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
