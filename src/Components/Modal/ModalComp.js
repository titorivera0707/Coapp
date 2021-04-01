import React, { useState, useEffect } from 'react'
import './Modal.css';
import Modal from '@material-ui/core/Modal';
import logo from '../../Assets/logo_transp.png';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../../Firebase';
import { Button, Input } from '@material-ui/core';


function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: ` translate(-${top}%, -${left}%)`,
  }
}
const useStyles = makeStyles((theme) =>({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ModalComp() {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((autUser) => {
    if (autUser) {
      console.log(autUser);
      setUser(autUser);
    } else {
      setUser(null);
    }

    }) 
    return() =>{
      unsubscribe();
    }
    } , [user, username]);

    const signUp =(event) => {
      event.preventDefault();

      auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
       return authUser.user.updateProfile({
          displayName:  username
        })
      })
      .catch((error) => alert(error.message));
      setOpen(false);
    }

    const signIn =(event) => {
      event.preventDefault();
      auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
      setOpenSignIn(false);
    }



    return(
      <div className="ModalComp">
       <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
        <form className="ModalComp__register">
        
       <center>
      <img className="ModalComp__headerImage" src={logo} alt="ModalComp logo" />
      </center>
      <Input
      placeholder="username"
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)} />
      <Input 
      placeholder="email"
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <Input 
      placeholder="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" onClick={signUp}>Sign up</Button>
      </form>
       
    </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
        <form className="ModalComp__register">
       <center>
      <img className="ModalComp__headerImage" src={logo} alt="ModalComp logo" />
      </center>
   
      <Input 
      placeholder="email"
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <Input 
      placeholder="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" onClick={signIn}>Log In</Button>
      </form>
       
    </div>
      </Modal>
      <div className="ModalComp__header">
    
        {user ? (
        <Button onClick={() => auth.signOut()}>Log out</Button>
      ): (
        <div className="ModalComp__loginContainer">
        <Button onClick={() => setOpenSignIn(true)}>Login</Button>
        <Button onClick={() => setOpen(true)}>Register</Button>
        </div>
      )}
      </div>
    </div>
    )
}

export default ModalComp