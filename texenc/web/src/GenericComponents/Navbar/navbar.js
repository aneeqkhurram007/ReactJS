
import logo from "../../Images/logo.jpg"
import { Image, Button, Avatar } from "../../Imports/genericComponents"
import { useHistory } from "react-router-dom";

function NavBar(props) {
  const history = useHistory();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <Image src={logo} style={{ width: "100px" }} alt={"No image Found"} />
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item">
            <a class="nav-link" onClick={() => history.push("/home")}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => history.push("/findjobs")}>Find Jobs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Explore</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Analytics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">My Projects</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Profile
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" onClick={() => history.push("/profile")}>My Profile</a>
              <a class="dropdown-item" href="profile">Applied Jobs</a>
              <a class="dropdown-item" onClick={() => history.push("/addservice")}>Services</a>
              <a class="dropdown-item" onClick={() => history.push("/addproject")}>Portfolio Projects</a>
              <a class="dropdown-item" onClick={() => {
                localStorage.clear();
                window.location.reload()
              }}>Logout</a>
              {/* <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a> */}
            </div>
          </li>

        </ul>
        <div className="d-flex align-items-center">
          <Button filled={true} text="Buy Services" />
          <Avatar src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
        </div>
      </div>
    </nav>






  );
}

export default NavBar;
