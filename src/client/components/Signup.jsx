import React, { Component } from 'react';
import { PostUser } from './../Utils/api.jsx';

import './../../style/form.css';


export default class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      age: 18,
      state: '',
      zip: 99999,
      status: '',
      seeking: '',
      scene: []
    }
    this.handleCreateProfile = this.handleCreateProfile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    let obj = this.state;
    obj[name] = value;
    this.setState(obj);
    // POST request to create profile
  }

  addScene (e) {
    let scenes = this.state.scene;
    scenes.push(e.target.value);
    this.setState({
      scene: scenes
    });
  }
  removeScene (e) {
    const sceneConverter = {
      hipster: "Hipster", bro: "Bro", punk: "Punk", yuppie: "Yuppie", emo: "Emo", hiphop: "Hip Hop", college: "College", edge: "Straight Edge", nerd: "Nerd", freak: "Freak", steampunk: "Steampunk", juggalo: "Juggalo", sports: "Sports", hippie: "Hippie", raver: "Raver", latenight: "Late Night", gamer: "Gamer", religious: "Religious", musician: "Musician"
    };
    let scene = e.target.innerHTML;
    let convertedScene;
    let counter = 0;
    for (let key in sceneConverter) {
      if (sceneConverter[key] === scene) {
        convertedScene = key;
        break;
      }
    }
    for (counter; counter < this.state.scene.length; counter++) {
      if (this.state.scene[counter] === convertedScene) {
        break;
      }
    }
    let scenes = this.state.scene;
    console.log(scenes, "scenes", counter, 'index')
    scenes.splice(counter, 1);
    console.log('new scenes', scenes)
    this.setState({
      scene: scenes
    });
  }

  handleCreateProfile () {
    PostUser(this.state, (err, response) => {
      if (!err) {
        console.log('Created profile', response)
      }
    })
  }

  render() {
    const sceneConverter = {
      hipster: "Hipster", bro: "Bro", punk: "Punk", yuppie: "Yuppie", emo: "Emo", hiphop: "Hip Hop", college: "College", edge: "Straight Edge", nerd: "Nerd", freak: "Freak", steampunk: "Steampunk", juggalo: "Juggalo", sports: "Sports", hippie: "Hippie", raver: "Raver", latenight: "Late Night", gamer: "Gamer", religious: "Religious", musician: "Musician"
    };
    return (
      <div className="ui container">
      <form className="ui form">
        <h4 className="ui dividing header">Profile Information</h4>
        <div className="field">
          <label>Username</label>
          <div className="field">
            <input onChange={e => this.handleChange(e)} type="text" name="username" placeholder="Pick a username" />
          </div>
        </div>
        <div className="field">
          <label>Username</label>
          <div className="field">
            <input onChange={e => this.handleChange(e)} type="text" name="email" placeholder="What's your email?" />
          </div>
        </div>
        <div className="field">
          <label>Age</label>
          <input onChange={e => this.handleChange(e)} type="number" name="age" placeholder="Select your age" />
        </div>
        <div className="field">
          <label>State</label>
          <select onChange={e => this.handleChange(e)} name="state" className="ui fluid dropdown">
            <option value="">State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="field">
          <label>Zip Code</label>
          <input onChange={e => this.handleChange(e)} type="number" name="zip" placeholder="Enter your zip code" />
        </div>
        <div className="field">
          <label>Tagline</label>
          <input onChange={e => this.handleChange(e)} type="text" name="tagline" placeholder="Give yourself a tagline" />
        </div>
        <div className="field">
          <label>Relationship status</label>
          <select onChange={e => this.handleChange(e)} name="status" className="ui fluid dropdown">
            <option value="">Status</option>
            <option value="single">Single</option>
            <option value="relationship">In a relationship</option>
          </select>
        </div>
        <div className="field">
          <label>Seeking</label>
          <select onChange={e => this.handleChange(e)} name="seeking" className="ui fluid dropdown">
            <option value="">Seeking</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="other">Other/Impartial</option>
          </select>
        </div>
        <div className="field">
          <label>Minimum Age Seeking</label>
          <input onChange={e => this.handleChange(e)} type="number" name="minAge" placeholder="Minimum age seeking" />
        </div>
        <div className="field">
          <label>Maximum Age Seeking</label>
          <input onChange={e => this.handleChange(e)} type="number" name="maxAge" placeholder="Maximum age seeking" />
        </div>
        <div className="field">
          <label>Scenes</label>
          {this.state.scene.map((scene, key) => {
            return (
              <span key={key} onClick={e => this.removeScene(e)} className="scene-card">{sceneConverter[scene]}</span>
              )
          })}
        </div>
        <div className="field">
          <select onChange={e => this.addScene(e)} multiple="" className="ui dropdown">
            <option value="">Select scenes</option>
            <option name="Hipster" value="hipster">Hipster</option>
            <option value="bro">Bro</option>
            <option value="yuppie">Yuppie</option>
            <option value="punk">Punk</option>
            <option value="emo">Emo</option>
            <option value="hiphop">Hip Hop</option>
            <option value="college">College</option>
            <option value="edge">Straight Edge</option>
            <option value="nerd">Nerd</option>
            <option value="freak">Freak</option>
            <option value="steampunk">Steampunk</option>
            <option value="juggalo">Juggalo</option>
            <option value="sports">Sports</option>
            <option value="hippie">Hippie</option>
            <option value="raver">Raver</option>
            <option value="latenight">Late Night</option>
            <option value="gamer">Gamer</option>
            <option value="religious">Religious</option>
            <option value="musician">Musician</option>
          </select>
        </div>
        <div onClick={this.handleCreateProfile} className="ui button">Create Profile</div>
      </form>
      </div>
    );
  }
}