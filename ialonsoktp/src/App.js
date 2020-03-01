// @flow
import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Person/Person.css';
import Person from './Person/Person';
import ListOrganizations from './Organisations/ListOrganisations'

import NavTop from './TopBar/NavTop';
import ListRepositories from './Repos/ListRepositories';
import RepoInfo from './RepoInfo/RepoInfo';
import CopyRights from './Copyrights/CopyRights';
import SpinnerContainer from './LoadingContents/SpinnerContainer';
import LoadingContainer from './Loading/LoadingContainer';
import PersonProfile from './PersonProfile/PersonProfileContainer';
import MainInfoContainer from './Container/MainInfoContainer';
import * as gitapi from './apiGit/gitApi.js'; 

//import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(){
    super();
    this.showInfo=false;

    this.state={
      user:{
        login: "Github",
        followers: 10,
        following: 20,
        created_at:"25/02/2020",
        updated_at:"28/02/2020",
        avatar_url: "https://myavatar.svg",
        bio: "Computer science engineer from Basque Country"
      },
      orgs:[{
        login:"Github",
        description: "It company.",
        avatar_url: "Cat Avatar"
      },{
        login: "Microsoft",
        description: "IT company",
        avatar_url: "square"
      },
      {
        login:"Github",
        description: "It company.",
        avatar_url: "Cat Avatar"
      },{
        login: "Microsoft",
        description: "IT company",
        avatar_url: "square"
      }],
      public_repos:[{
        name: "CountriesRepo",
        private: false,
        owner:{
          login: "Inigo"
        },
        watchers: 100,
      },{
        name: "CitiesRepo",
        private: true,
        owner:{
          login: "EEUU"
        },
        watchers: 1000,
      },{
        name: "Bitcoin",
        private: true,
        owner:{
          login: "EEUU"
        },
        watchers: 100,
      },{

        name: "Study Of Biology",
        private: true,
        owner:{
          login: "EEUU"
        },
        watchers: 1000,
      }],
      renderIntro:true,
      inputField:"",
      loading:false
    };
    
  }
 
  handleChangeInput= async(event)=>{
    this.setState({ inputField: event.target.value });
    console.log("input field:");
    console.log(this.state.inputField);
  }

  handleClickSearch= async()=>{

    const first=gitapi.getUserData(this.state.inputField).then(response => {
        this.setState({orgs: response.orgs, user: response.user, loading:true});
      }).catch(error =>{
        
        if (error.response.status === 404){
          this.setState({orgs:[], user:[]});
        }else{
          console.log(error.response.status);
        }
      });

    const second=gitapi.getRepos(this.state.inputField).then(sresponse => {
        let myCA=[];
        sresponse.map(rp => myCA.push(rp));

        this.setState({public_repos: myCA, loading:true});

    }).catch(error =>{

        if (error.response.status === 404){
          this.setState({public_repos:[]})
        }else{
          console.log(error.response.status);
        }
        

    });


    if(this.showInfo==true){
      Promise.all([first, second]).then(() =>{
        console.log(this.state);
        this.setState({loading:false})
      });
    }
  }

  componentDidMount= async()=>{
    setTimeout(() => {
      this.setState({ renderIntro: false });
      this.showInfo=true;
    }, 1200);
  }

  /*check*/
  componentWillUnmount= async()=>{

    this.showInfo=false;

  }

  render(){
    if(this.state.renderIntro){
      console.log("1");
      return (<div className="App">
        <LoadingContainer />
      </div>);
      
    }else{
        return (
          <div className="App">
            <NavTop click={this.handleClickSearch.bind(this)} type={this.handleChangeInput} userInfo={this.state.user.login}/>
            <MainInfoContainer person={this.state.user} repositories={this.state.public_repos} organisations={this.state.orgs} loading={this.state.loading}/>
            <CopyRights />
          </div>
        );
      }
    }
}

export default App;


