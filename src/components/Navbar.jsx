import "../styles/Navbar.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signupMode, setSignupMode] = React.useState(false);
  const [isSignedUp, setIsSignedUp] = React.useState(false);
  const [signupEmail, setSignupEmail] = React.useState("");
  const [signupPassword, setSignupPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleMode = () => {
    setSignupMode(!signupMode);
  };

  const handleSignup = () => {
    console.log("Signing up with:", signupEmail, signupPassword);

    alert("Successfully signed up!");
    setIsSignedUp(true);
    setSignupMode(false);
    setEmail(signupEmail);
    setPassword(signupPassword);
  };

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
    if (isSignedUp) {
      if (email === signupEmail && password === signupPassword) {
        setIsLoggedIn(true);
        alert("Successfully logged in!");
        handleClose();
      } else {
        alert("Invalid email or password!");
      }
    } else {
      alert("Please sign up first!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out successfully!");
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar_left">
          <a href="/women">Women</a>
          <a href="/men">Men</a>
        </div>
        <div className="navbar_center">
          <a href="/homepage" className="navbar_logo ">
            LARZO
          </a>
        </div>
        <div className="navbar_right">
          {isLoggedIn ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <React.Fragment>
              <Button variant="outlined" onClick={handleClickOpen}>
                {signupMode ? "Signup" : "Login"}
              </Button>
              <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <DialogTitle>{signupMode ? "Signup" : "Login"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {signupMode
                      ? "Please enter your email and password to sign up."
                      : "Please enter your email and password to login."}
                  </DialogContentText>
                  {signupMode ? (
                    <React.Fragment>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="signup-email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="signup-password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                      />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </React.Fragment>
                  )}
                </DialogContent>
                <DialogActions>
                  {signupMode ? (
                    <Button onClick={handleSignup}>Signup</Button>
                  ) : (
                    <React.Fragment>
                      <Button onClick={handleToggleMode}>
                        Switch to Signup
                      </Button>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleLogin} color="primary">
                        Login
                      </Button>
                    </React.Fragment>
                  )}
                </DialogActions>
              </Dialog>
            </React.Fragment>
          )}
          <a
            onClick={() => {
              window.location.href = "http://localhost:3000/shoppingcart";
            }}
          >
            <ShoppingBagIcon />
          </a>
          <a
            onClick={() => {
              window.location.href = "http://localhost:3000/wishlist";
            }}
          >
            <FavoriteIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
