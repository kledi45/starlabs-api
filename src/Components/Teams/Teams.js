import React, {useState} from 'react';
import './teams.scss';
import SearchBox from '../Search/SearchBar';
export default class Teams extends React.Component {

  state = {
    loading: true,
    people: [],
    searchField: ''
  }

  async componentDidMount(){
    const url = "https://api.first.org/data/v1/teams/?results=5";
    const repsonse = await fetch(url);
    const data = await repsonse.json();
    this.setState({people : data.data, loading: false})
    console.log(data.data);
  }

  render(){
    const {people, searchField} = this.state
    const filteredTeams = people.filter(team =>(
      team.team.toLowerCase().includes(searchField.toLocaleLowerCase())
    ))
    return(
      <div>
        <SearchBox  placeholder = "Enter team name" handleChange = {(e) => this.setState({searchField:e.target.value})}/>
        {this.state.loading || !this.state.people ? (
         <div>loading...</div>) : (  
         <div className = "">
           {this.state.people.map(person => (
             <div className = "team-cards">
               <div className = "team-name">{person.team}</div>
               <div>{person.establishment}</div>
               <div>{person.address}</div>
               <div>{person.website}</div>
               <div>{person.email}</div>
               <div>{person.phone}</div>
            </div>
           ))}
         </div> )}
      </div>
    ) 
  }
}