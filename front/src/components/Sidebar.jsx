import 'rsuite/styles/index.less';
// import { Sidenav, Nav, Toggle } from "rsuite";
// import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
// import GroupIcon from "@rsuite/icons/legacy/Group";
// import MagicIcon from "@rsuite/icons/legacy/Magic";
// import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import React from "react";

import '../css/Sidebar.css'

function Sidebar() {
  // const [expanded, setExpanded] = React.useState(true);
  // const [activeKey, setActiveKey] = React.useState("1");

  return (
    <div>
    {/* <div 
      className="offcanvas offcanvas-start show"
      tabindex="-1"
      id="offcanvasDark"
      aria-labelledby="offcanvasDarkLabel"
    >
      <div>
        <Toggle 
          className= "rs-toggle-presentation"
          onChange={setExpanded}
          checked={expanded}
          checkedChildren="Expand"
          unCheckedChildren="Collapse"
        />
        <hr />
        <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
          <Sidenav.Body className="rs-sidenav-body">
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                Find Job
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<GroupIcon />}>
                Find Talent
              </Nav.Item>
              <Nav.Menu
                placement="rightStart"
                eventKey="3"
                title="Filters"
                icon={<MagicIcon />}
              >
                <Nav.Item eventKey="3-1">Area</Nav.Item>
                <Nav.Item eventKey="3-2">Budget</Nav.Item>
                <Nav.Item eventKey="3-3">Duration</Nav.Item>
                <Nav.Item eventKey="3-4">Language</Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                placement="rightStart"
                eventKey="4"
                title="Settings"
                icon={<GearCircleIcon />}
              >
                <Nav.Item eventKey="4-1">My profile</Nav.Item>
                <Nav.Item eventKey="4-2">Applications</Nav.Item>
                <Nav.Item eventKey="4-3">Messages</Nav.Item>
                <Nav.Menu eventKey="4-5" title="Help">
                  <Nav.Item eventKey="4-5-1">FAQs</Nav.Item>
                  <Nav.Item eventKey="4-5-2">Contact Us</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
          <Sidenav.Toggle
            expanded={expanded}
            onToggle={(expanded) => setExpanded(expanded)}
          />
        </Sidenav>
      </div>
    </div> */}
  </div>
  );
}

export default Sidebar;
