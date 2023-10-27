import * as React from "react";
import {Box} from "@mui/material";
import { Button, Stack, Switch } from "@mui/material";
import ThreeDIcon from "../../assets/RightSideBar/3dIcon.svg";
import TwoDIcon from "../../assets/RightSideBar/2dIcon.svg";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";


function RightSideBar() {

    const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box
      sx={{
        padding: 2,
        position: "fixed",
        right: 0,
        // backgroundColor: "red",
      }}
    >
      <Box>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          color="warning"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <img src={ThreeDIcon} />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <img src={TwoDIcon} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Stack>
          <Button>
            <ZoomInIcon size="large" />
          </Button>
          <Button>
            <ZoomOutIcon size="large" />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default RightSideBar;