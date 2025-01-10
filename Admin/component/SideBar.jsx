import * as React from 'react';
import { Drawer, List, ListItem, ListItemText } from "@mui/material";


function SideBar() {

    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <>
    <div className='p-1 mt-5' >
      <div className='mt-5'>
      <div style={{ display: "flex" }}>
      {/* Permanent Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            marginTop:'6%'
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="ITEMS" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      {/* <main style={{ flexGrow: 1, padding: "16px" }}>
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main content area.</p>
      </main> */}
    </div>
      </div>
    </div>
    </>
  )
}

export default SideBar