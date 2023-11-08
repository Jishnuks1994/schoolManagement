// import FixedPlugin from 'components/FixedPlugin/FixedPlugin'
import AdminNavbar from 'components/Navbars/AdminNavbar'
import React from 'react'
import { Row } from 'reactstrap'


function Png() {
  return (
    <div>
        {/* <FixedPlugin></FixedPlugin> */}
        <Row><AdminNavbar></AdminNavbar></Row>

        
        <div className='text-center mt-5 pt-5'>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>

    </div>
  )
}

export default Png