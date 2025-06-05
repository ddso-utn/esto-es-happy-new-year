import Carousel from "../../components/carousel/Carousel";
import './Home.css'
import {Button, TextField} from "@mui/material";
import {useState} from "react";


const Home = () => {
  return (
    <div className="root">
      <div className="title">
        <h1 className="collection-name">Winter 2025</h1>
        <span>NEW COLLECTION</span>
      </div>
      <div className="search">
      <TextField
        fullWidth
        variant="standard"
        placeholder="Buscar por nombre"
      />
        <Button variant="contained">Buscar</Button>
      </div>
      <Carousel/>
    </div>
  )
};

export default Home;