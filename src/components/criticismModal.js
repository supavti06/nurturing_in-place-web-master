import axios from 'axios';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { navigate } from 'gatsby';
import TextField from '@material-ui/core/TextField';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


export default function CriticismModal(props) {
  const [open, setOpen] = React.useState(true);
  const [terms, setTerms] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [content, setContent] = React.useState("");
  const handleInputChange = event => {
    if(event.target.name == "terms"){
       setTerms(!terms)
    }
    else if(event.target.name == "email"){
        setEmail(event.target.value)
    }
    else if(event.target.name == "content"){
        setContent(event.target.value)
      }
}

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const sendData = (event) => {
    event.preventDefault()
    if(!terms){
        alert("You must agree to the Terms of Service")
    }
    // else if(state.email == ""){
    //     alert("You must enter a valid email address")
    // }
    else if(content == ""){
        alert("You must enter a message")
    }
    else{
      axios.post('https://nurturinginplace.net:3000/feedbacks',
        {
            email: email,
            message: props.pathname + ': ' + content
        })
      .then(res => {
        navigate("/feedback-confirmation")
      })
      .catch((error) => {
        alert("We're sorry. There was an error sending your feedback")
      })
    }
  };


  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogContent dividers>
        <Typography component="h3">
            Let us know how we can do better
          </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address(optional)"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
            />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="content"
            label="Message"
            name="content"
            multiline
            rows={4}
            onChange={handleInputChange}
        />
        </DialogContent>
        <DialogActions>
            <Checkbox name="terms" onChange={handleInputChange} checked={terms}></Checkbox>
            <Typography style={{marginLeft: -5, marginRight: 20 }}>I agree to the <Link rel="noopener noreferrer" target="_blank" href="/termsofservice">Terms of Service</Link></Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={sendData}
              style={{width: 80}}
            >
                Send
            </Button>
            <Button fullWidth
              variant="contained"
              style={{width: 80}}
              onClick={handleClose}
              >
              Cancel
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
