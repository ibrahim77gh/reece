import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Select, LinearProgress, MenuItem, FormControl, InputLabel } from "@mui/material";

import axios from "axios";

export default function UploadModel() {
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    modelName: "",
    modelThumbnail: "",
    modelCategory: "",
    modelScaleX: "",
    modelScaleY: "",
    modelScaleZ: "",
    rotationX: "",
    rotationY: "",
    rotationZ: "",
    minY: "",
    maxY: "",
    restrictVertical: false,
    fileName: "",
    rotationAxis: "",
    size: "",
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataWith = new FormData();
    
    setProgress(0); // Start with 0% progress
    const cancelToken = axios.CancelToken.source();

    // Append form fields (excluding files)
    const { file1, file2, ...restFormData } = formData;
    const lowercaseFilename1 = file1.name.toLowerCase();
    const isPNGFile1 = lowercaseFilename1.endsWith(".png");
    if (!isPNGFile1) {
      alert("Model Thumbnail can only be .png");
      return;
    }

    Object.keys(restFormData).forEach((key) => {
      formDataWith.append(key, formData[key]);
    });

    formDataWith.append("files", file1);
    formDataWith.append("files", file2);
    console.log(formDataWith);

    axios({
      method: "post",
      url: `${import.meta.env.VITE_BASE_URL}/v1/users/uploadFile`,
      data: formDataWith,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentCompleted);
      },
      cancelToken: cancelToken.token,
    })
      .then((response) => {
        console.log("Upload successful:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {/* Image goes here */}
          <img
            width="100%"
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt="Sample"
          />
        </Grid>
        <Grid item xs={6} marginTop={20}>
          {/* Form goes here */}
          <div>
            <form onSubmit={handleSubmit}>
              {/* Your form elements */}
              <TextField
                required
                label="Model Name"
                name="modelName"
                value={formData.modelName}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <TextField
                required
                label="Model Scale X"
                name="modelScaleX"
                value={formData.modelScaleX}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <TextField
                required
                label="Model Scale Y"
                name="modelScaleY"
                value={formData.modelScaleY}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <TextField
                required
                label="Model Scale Z"
                name="modelScaleZ"
                value={formData.modelScaleZ}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <TextField
                required
                label="Rotation X"
                name="rotationX"
                value={formData.rotationX}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <TextField
                required
                label="Rotation Y"
                name="rotationY"
                value={formData.rotationY}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <TextField
                required
                label="Rotation Z"
                name="rotationZ"
                value={formData.rotationZ}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <TextField
                required
                label="Min Y"
                name="minY"
                value={formData.minY}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <TextField
                required
                label="Max Y"
                name="maxY"
                value={formData.maxY}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />{" "}
              <TextField
                required
                label="File Name"
                name="fileName"
                value={formData.fileName}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <FormControl variant="outlined" sx={{ m: 1, width: "40ch" }}>
                <InputLabel htmlFor="rotation-axis-select">Rotation Axis</InputLabel>
                <Select
                  value={formData.rotationAxis}
                  onChange={handleChange}
                  label="Rotation Axis"
                  inputProps={{
                    name: "rotationAxis",
                    id: "rotation-axis-select",
                  }}
                >
                  <MenuItem value="x">X</MenuItem>
                  <MenuItem value="y">Y</MenuItem>
                  <MenuItem value="z">Z</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                label="Size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                id="outlined-start-adornment"
                sx={{ m: 1, width: "40ch" }}
              />
              <div>
                <InputLabel style={{ marginLeft: 10 }} htmlFor="modelCategory">
                  Model Category
                </InputLabel>
                <Select
                  label="Model Category"
                  id="modelCategory"
                  name="modelCategory"
                  value={formData.modelCategory}
                  onChange={handleChange}
                  sx={{ m: 1, width: "40ch" }}
                  required
                >
                  <MenuItem value="" disabled defaultValue>
                    Select a Category
                  </MenuItem>
                  <MenuItem value="room-element">Room Element</MenuItem>
                  <MenuItem value="mirror">Bathroom-Mirrors</MenuItem>
                  <MenuItem value="bath">Bathroom-Bath</MenuItem>
                  <MenuItem value="shower">Bathroom-Shower</MenuItem>
                  <MenuItem value="toilet">Bathroom-Toliets</MenuItem>
                  <MenuItem value="basins">Bathroom-Basins</MenuItem>
                  <MenuItem value="tapware">Bathroom-Tapware</MenuItem>
                  <MenuItem value="wastes">Bathroom-Wastes</MenuItem>
                  <MenuItem value="block">Bathroom-Block</MenuItem>

                  {/* Add more MenuItem components for each category */}
                </Select>
              </div>
              <div style={{ display: "flex", alignItems: "center", m: 1 }}>
                <Checkbox
                  label="Restrict Vertical"
                  checked={formData.restrictVertical}
                  onChange={handleChange}
                  name="restrictVertical"
                  sx={{ m: 1 }}
                />
                <Typography variant="body1">Is Restricted Vertical</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  m: 1,
                }}
              >
                <Typography variant="body1">Model Thumbnail</Typography>
                <Input
                  type="file"
                  name="file1"
                  accept=".png"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      ["file1"]: e?.target?.files[0],
                    });
                  }}
                  sx={{ marginLeft: 13.5, marginBottom: 2 }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", m: 1 }}>
                <Typography variant="body1">Model File</Typography>
                <Input
                  type="file"
                  name="file2"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      ["file2"]: e?.target?.files[0],
                    });
                  }}
                  sx={{ marginLeft: 20, marginBottom: 2 }}
                />
              </div>
              {progress > 0 && progress < 100 && (
                <LinearProgress variant="determinate" value={progress} />
              )}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        marginTop: 2,
                        "&:hover": {
                            backgroundColor: "#1976D2",
                        },
                    }}
                >
                    Submit
                </Button>
            </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
