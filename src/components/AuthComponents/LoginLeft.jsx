import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function LoginLeft() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email) {
      alert("Email is required");
      return;
    }
    if (!formData.password) {
      alert("Password is required");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/v1/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log(response);
      localStorage.setItem("userData", data);
      if (response?.status == 200) {
        navigate(`/planner`);
      }
      // Handle the success response
    } catch ({ response }) {
      alert(response?.data?.message);
      console.log("Error", response);
      // Handle the error response
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // padding: 4,
        m: 4,
      }}
    >
      <Typography
        sx={{ fontSize: "24px", fontWeight: "400", color: "#2d333a" }}
      >
        Welcome
      </Typography>
      <Typography
        sx={{ fontSize: "14px", color: "#2d333a", fontWeight: "300" }}
      >
        Login to your account below
      </Typography>
      <Box sx={{ mt: 2, width: "100%" }}>
        <TextField
          id="email"
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth={true}
        />
        <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>

      <Link href="#" sx={{ mt: 2 }} color="#0063B5">
        Forgot password?
      </Link>

      <Button
        variant="contained"
        sx={{
          m: 2,
          height: "48px",
          backgroundColor: "#0063B5",
          fontWeight: "500",
        }}
        fullWidth={true}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginLeft;
