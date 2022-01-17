// import "./phaseVideoCard.css";
import { Button } from "../../Imports/genericComponents"
function Card(props) {
  return (
    <div className={`card ${props.className}`} style={{ width: "22rem" }}>
      <div class="card-body">
        <h5 className="card-title">Application Tips</h5>
        <p class="card-text textColor" >Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidid unt. 50 0 word limit,  </p>
        <iframe width="300" height="180"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        {/* <video width="270" height="180" controls>
  <source src="https://www.youtube.com/watch?v=MRIMT0xPXFI" />
  <source src="https://www.youtube.com/watch?v=MRIMT0xPXFI" type="video/ogg"/>
  Your browser does not support the video tag.
</video> */}
        <br />
        <hr />
        <h5 className="card-title">Best practices Blog Title</h5>
        <p class="card-text textColor">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidid unt. 50 0 word limit,  </p>
        <Button text={"Read More"} style={{ width: "50%" }} />
      </div>
    </div>
  );
}

export default Card;
