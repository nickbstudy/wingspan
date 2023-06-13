import React from 'react'

const Scorecard = () => {
  return (
    <>
      <div className="container">
        <table>
          <thead>
            <td className="tableStatic">Players:</td>
            <td className="tableIn"><input type="text" /></td>
            <td className="tableIn"><input type="text" /></td>

          </thead>
          <tr>
            <td className="tableStatic">Birds</td>
            <td className="tableIn"><input type="number" /></td>
            <td className="tableIn"><input type="number" /></td>

          </tr>
        </table>
      </div>
    </>
  )
}

export default Scorecard