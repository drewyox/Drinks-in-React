import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../scss/whiskey.scss';



class Whiskey extends React.Component{

  constructor(props) {
    super(props);
    this.state= {
      manhattanDisplay: false,
      whiSourDisplay: false,
      oldDisplay: false,
      mjDisplay: false
    }
  };

  handleManhattan(){
    console.log('clicked');
  }

  render(){
  return(
    <div className="containerWhiskey">
      <h1>Whiskey</h1>
      <div className="drinksWhiskey">
        <div className="rows" className="topRow">

          <div className="drink1W drinkthumb">
            <div className="cups">
              <div className="ingredient1">
                <p className="ingrName">1 Muddled Cherry</p>
              </div>
              <div className="ingredient2">
                <p className="ingrName">1 Sugar Cube</p>
              </div>
              <div className="ingredient3">
                <p className="ingrName">1 Shake of Bitters</p>
              </div>
              <div className="ingredient4">
                <p className="ingrName">Orange Peel</p>
              </div>
              <div className="ingredient5">
                <p className="ingrName">Whiskey 2oz</p>
              </div>
            </div>
            <button onClick={this.handleClick} type="button" name="buttonOld" className="buttonOld button"><h2>Old Fashioned</h2></button>
          </div>

          <div className="drink2W drinkthumb">
            <div className="cups">
              <div className="w-s1">
                <p className="ingrName">Simple Syrup 1/2oz</p>
              </div>
              <div className="w-s2">
                <p className="ingrName">Lemon Juice 1oz</p>
              </div>
              <div className="w-s3">
                <p className="ingrName">Whiskey 2oz</p>
              </div>
            </div>
            <p className="drinkInfo"></p>
            <button onClick={this.handleClick} type="button" name="buttonSou" className="buttonSou button"> <h2>Whiskey Sour</h2></button>
          </div>
        </div>

        <div className="rows" className="bottomRow">

          <div className="drink3W drinkthumb">
            <div className="cups">
              <div className="man-1">
                <p className="ingrName">2 shakes of Bitters</p>
              </div>
              <div className="man-2">
                <p className="ingrName">Sweet Vermouth 1oz</p>
              </div>
              <div className="man-3">
                <p className="ingrName">Whiskey 2oz</p>
              </div>
            </div>
            <p className="drinkInfo"></p>
            <button onClick={this.handleClick} type="button" name="button" className="buttonMan" className="button"> <h2>Manhattan</h2></button>
          </div>

          <div className="drink4W drinkthumb">
            <div className="cups">
              <div className="m-j1">
                <p className="ingrName">*Over Crushed</p>
              </div>
              <div className="m-j2">
                <p className="ingrName">10-12 muddled Mint Leaves</p>
              </div>
              <div className="m-j3">
                <p className="ingrName">.5oz Simple Syrup</p>
              </div>
              <div className="m-j4">
                <p className="ingrName">1oz Club Soda</p>
              </div>
              <div className="m-j5">
                <p className="ingrName">Whiskey 2oz</p>
              </div>
            </div>
            <p className="drinkInfo"></p>
            <button onClick={this.handleClick}  type="button" name="button" className="buttonJ button"> <h2>Mint Julep</h2></button>
          </div>
        </div>

        <div className="back">
          <a href="whiskey.html" className="back-to-whiskey">Back to Whiskey Cocktails</a>
        </div>
      </div>
    </div>
  );}
}

export default Whiskey;
