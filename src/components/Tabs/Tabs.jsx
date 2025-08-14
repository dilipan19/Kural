import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Tabs() {
   const[tab, setTab] = useState('home')
  return (
    <div className="max-w-4xl mx-auto mt-10">
  <Tab.Container id="tabs" activeKey={tab} onSelect={(k) => setTab(k)}>
      <Nav variant="tabs" className="mb-4 border-b-2 border-gray-300">
        <Nav.Item>
          <Nav.Link eventKey="home" className="py-3 px-6 text-lg font-medium text-gray-700 hover:text-blue-500">
            Home
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link eventKey="contact" className="py-3 px-6 text-lg font-medium text-gray-700 hover:text-blue-500">
            Post Issues
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="home" className="p-4 bg-gray-100 rounded-lg">
          <h4>Home Tab Content</h4>
          <p>This is the Home tab content.</p>
        </Tab.Pane>
        <Tab.Pane eventKey="contact" className="p-4 bg-gray-100 rounded-lg">
          <h4>Profile Tab Content</h4>
          <p>This is the Profile tab content.</p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </div>
)
}

export default Tabs

