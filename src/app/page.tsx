"use client";
import { Box } from "@mui/material";

import Demo from "./components/demo/Demo";


export default function Home() {

  const drawerWidth = 140;
  return (
    <>
      <Box sx={{ display: 'flex', height: "50px", background: "white" }}>
      </Box>
      <Box sx={{ display: 'flex', height: "50px", background: "#F0F4F9" }}>
      </Box>
      <Box sx={{ display: 'flex', background: "#F0F4F9" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth } }}
          aria-label="mailbox folders"
        >
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, background: "white", marginRight: "30px" }}
        >
          <Demo></Demo>
        </Box>

      </Box>
      <Box sx={{ display: 'flex', height: "50px", background: "#F0F4F9" }}>
      </Box>
    </>
  )
}
