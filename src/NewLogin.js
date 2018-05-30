import React , {Component} from 'react';
import Helper from './Helper';


class NewLogin extends Component{
     constructor(props){
           super(props);

           this.state = {
               email:'',
               password:''
           }

     }

     setemail = (e)=>{
         this.setState({
                  email:e.target.value


         })
      }

      setpassword = (e)=>{
      this.setState({

                    password:e.target.value

      })

      }
      login=()=>{
        console.log(this.props.history);
        let body = JSON.stringify({
        email: this.state.email,
        password: this.state.password
      });
    let res = Helper("http://vidyapeethclasses.in/api/v1/login",'POST',body);
    res.then((res)=>{ 
      if(res.access_token !== undefined){
        console.log(res);
        this.props.history.push("/nugen");
        // window.location.replace("/panel");
      }else{
        alert("Wrong username/password");
      }
    });
    } 


render()
         {
         return(
          <table>
          <tbody>
          <tr>
            <td>Email:-</td>
            <td>
              <input type='text' onKeyUp={this.setemail}/>
            </td>
          </tr>
          <tr>
            <td>Password:-</td>
            <td>
              <input type='password' onKeyUp={this.setpassword}/>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={this.login}>Login</button>
            </td>
            <td>
  
            </td>
          </tr>
          </tbody>
        </table>   

        )
      }
    
    }
export default NewLogin;