
import './App.css';
import Exercise2a from './Exercise2a';
import Sum from './Sum';
import User from './User';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4 ';


function App() {
  let user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <div>
        <Exercise4/>
        <h2>Hello World</h2>
        <Exercise2a/>
        <Sum/>
        <h2>I dont use JSX</h2>
        <User first_name={user.first_name} last_name={user.last_name}/>
          {
          user.fav_animals.map(item=>{
            return(
              <UserFavoriteColors fav_animals={item}/>
            )
          })
          }
    </div>
  )
}

export default App;
