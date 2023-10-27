import {
  Box,
  Button,
  Checkbox,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BathRoom from "../assets/bathroom.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData?.password != formData?.rpassword) {
      alert("Please enter same password");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/v1/auth/register`,
        {
          name: `${formData?.fname} ${formData?.lname}`,
          email: formData?.email,
          password: formData?.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      localStorage.setItem("userData", data);
      if (response?.status == 201) {
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
    <Grid container sx={{ background: "#FFF", width: "100%", height: "100vh" }}>
      <Grid item xs={12} md={6} height="100%">
        <img src={BathRoom} height="100%" width="100%" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ mx: 6, my: 2 }}>
          <Typography
            sx={{ fontSize: "36px", color: "#00497a", fontWeight: "500" }}
          >
            Register
          </Typography>

          <Stack flexDirection="row" justifyContent="space-between" mt={2}>
            <TextField
              required
              id="fname"
              label="First Name"
              name="fname"
              onChange={handleChange}
              value={formData.fname}
              variant="outlined"
              fullWidth={true}
              sx={{ width: "48%" }}
            />
            <TextField
              required
              id="lname"
              label="Last Name"
              name="lname"
              onChange={handleChange}
              value={formData.lname}
              variant="outlined"
              fullWidth={true}
              sx={{ width: "48%" }}
            />
          </Stack>

          <TextField
            required
            id="email"
            label="Email Address"
            name="email"
            onChange={handleChange}
            value={formData.email}
            variant="outlined"
            fullWidth={true}
            sx={{ mt: 2 }}
          />

          <TextField
            id="postcode"
            label="Suburb / Postcode"
            variant="outlined"
            name="postcode"
            onChange={handleChange}
            value={formData.postcode}
            fullWidth={true}
            sx={{ mt: 2 }}
          />

          <TextField
            required
            id="password"
            label="Password"
            variant="outlined"
            name="password"
            onChange={handleChange}
            value={formData.password}
            fullWidth={true}
            sx={{ mt: 2 }}
          />

          <TextField
            required
            id="rpassword"
            label="Re-enter Password"
            name="rpassword"
            onChange={handleChange}
            value={formData.rpassword}
            variant="outlined"
            fullWidth={true}
            sx={{ mt: 2 }}
          />

          <Stack flexDirection="row" alignItems="center" mt={2}>
            <Checkbox {...label} sx={{ m: 0 }} />
            <Typography
              sx={{
                color: "#222222",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: 1.2,
                ml: 1,
              }}
            >
              I'd like to sign up to receive news, tips, product information,
              updates and other communications from the Reece Group. I have read
              the Privacy Policy.
            </Typography>
          </Stack>

          <Typography
            sx={{ color: "#333", lineHeight: 1.4, fontSize: "14px", mt: 2 }}
          >
            By proceeding, you agree to our
            <Link
              href="#"
              sx={{
                ml: 0.6,
                mr: 0.6,
                fontWeight: "500",
                color: "#000",
                textDecoration: "none",
              }}
            >
              Terms & Conditions
            </Link>
            and
            <Link
              href="#"
              sx={{
                ml: 0.6,
                mr: 0.6,
                fontWeight: "500",
                color: "#000",
                textDecoration: "none",
              }}
            >
              {" "}
              Privacy Policy.
            </Link>
          </Typography>

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: "240px",
              mt: 2,
              borderRadius: 0,
              backgroundColor: "#6bccb8",
            }}
          >
            Register
          </Button>

          <Typography
            sx={{ color: "#333", lineHeight: 1.4, fontSize: "14px", mt: 2 }}
          >
            Already have an account?
            <Link
              href="#"
              sx={{
                ml: 0.6,
                fontWeight: "500",
                color: "#000",
                textDecoration: "none",
              }}
              onClick={() => navigate(`/login`)}
            >
              {" "}
              Login Here
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Register;
