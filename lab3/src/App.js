import logo from './logo.svg';
import './App.css';
import FavouriteButton from "./components/card/FavouriteButton";
import CompareButton from "./components/card/CompareButton";

function App() {
  return (
    <div className="result">
        <Task4 markets={markets}/>
        <div className="notificationContainer" />
    </div>
  );
}
const markets = [
  {
    image: 'https://content1.rozetka.com.ua/goods/images/preview/25088160.jpg', 
    cost: '383', 
    info: '10м USB 2.0 активний подовжувач репітер'
  },
  {
    image: 'https://content2.rozetka.com.ua/goods/images/preview/216522468.jpg', 
    cost: '720', 
    action: '1 039', 
    info: 'Чоловіча сумка SumWin 2345MJ Чорна'
  },
  {
    image: 'https://content2.rozetka.com.ua/goods/images/preview/264186522.jpg', 
    cost: '3 499', 
    action: '2 950', 
    info: 'Графічний планшет XP-Pen Deco 01 V2 Чорний', 
    active: true
  },
  
  
];
function Task4(market)
{
  const cards = market.markets.map((info) =>
    <div class='card'>
      <FavouriteButton id={info.cost} />
      <CompareButton title={info.info} />
      <div class='card-image'>
        <a href='#'><img src={info.image} alt={info.info}></img></a>
      </div>
      <div class='card-information'>
        <a href='#'><h4>{info.info}</h4></a>
        {info.action != null && 
         <span class='action'>{info.action} ₴</span>
        }
        <p>{info.cost} ₴</p>
        {info.active === true &&
          <span class='active'>Немає в наявності</span>
        }
      </div>
    </div>
  )
  const forms = (
    <form>
      <input type='submit' value='показать больше'></input>
    </form>
  )
  const titles = (
    <h2>Заголовок</h2>
  )
  return(
    <div class='container'>
      {titles}
      <div class='wrapper'>
        {cards}
      </div>
      {forms}
    </div>

  );
}
export default App;
