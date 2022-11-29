import logo from './logo.svg'
import './Exercise4.css'

const Exercise4 = () => {

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

    return(
        <div>
            <h1 style={style_header}>This is Header</h1>
            <p class="para">This is a Paragraph</p>
            <a href="#"> This is a link</a>
            <form>
                <h3>This is a Form:</h3>
                <label>Enter your name:</label>
                <input></input>
                <button>Submit</button>
            </form>
            <h3>Here is your Image:</h3>
            <img src={logo} alt="Logo" />
            <ul>
                <p>This is a List:</p>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>

    )
}

export default Exercise4