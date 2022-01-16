import "./ContentModal.css"
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import { img_500 } from '../config/config';
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function ContentModal({children , cover , id}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async() => {
        const { data } = await axios.get(`https://floran-book-api.herokuapp.com/${id}`);
        // console.log(data);
        setContent(data);

  }

  useEffect(() => {
     fetchData();
  }, [])

  return (
    <div>
      <button type="button" className="poster" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
         {content && (
          <div className={classes.paper}>
            <div className="models">
            <div className="ContentModal">
                <div className="model">
                <img className="Content_portrait" 
                        src={content.cover? `${content.cover}`: img_500}
                        alt={content.name} />
                </div>
            </div>
            <div className="ContentModal__about">
                <span className="ContentModal__title">{content.name}</span>
                <span className="ContentModal__title">Author:- {content.author}</span>
                <div className="ContentModal__description">Description:- {content.description}</div>
                <span className="ContentModal__title">Market Price:- {content.price}</span>
                <span className="ContentModal__title">Total Pages:- {content.pages}</span>
            </div>
            </div>
          </div>
            )}
         
        </Fade>
      </Modal>
    </div>
  )
}