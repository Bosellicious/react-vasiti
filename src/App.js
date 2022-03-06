import React from 'react';
import { createRef } from 'react/cjs/react.production.min';
import './App.css';
import ThankYou from './components/ThankYou';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			isSubmited: false,
			fname: '',
			lname: '',
			story: '',
			interactAs: true,
			institution: ''
		}
	}

	handleChange = e =>{
		const { name, value } = e.target;
		this.setState(()=>({
			[name]: value
		}))
	}

	handleClose = () =>{
		this.setState(()=>({ 
			isSubmited: false,
			fname: '', lname: '', story: '', institution: '', interactAs: true
		}));
	}

	handleSubmit = (e) =>{
		e.preventDefault();

		this.setState(()=>({ isSubmited: true }));
	}

	render(){
		const { fname, lname, story, interactAs, institution, isSubmited } = this.state;

		if(isSubmited){
			return <ThankYou closeFunc={this.handleClose} />
		}else{
			return (
				<div className="container">
					<div className="title">Share your amazing story!</div>
					<div className="content">
						<form onSubmit={this.handleSubmit}>
							<div className="user-details">
								<div className="image-box">
									<span className="details">Upload your Picture</span>
									<label htmlFor="file">
										Choose Image
										<input type="file" name="" id="file" style={{display: 'none'}} required/>
									</label>
								</div>
								<div className="input-box">
									<span className="details">First Name</span>
									<input type="text" required name='fname' value={fname} onChange={this.handleChange} />
								</div>
								<div className="input-box">
									<span className="details">Last Name</span>
									<input type="text" required name="lname" value={lname} onChange={this.handleChange} />
								</div>
								<div className="input-box" style={{ width: "160%" }}>
									<span className="details"> Share your story</span>
									<textarea required style={{ width: "100%" }} defaultValue={story} name="story" onChange={this.handleChange}></textarea>
								</div>
								<div className="Vasiti">
									<div style={{ display: "flex", width: "100%", justifyContent: "space-between", marginTop: "5px", marginBottom: "10px"}}>
										<span className="vasiti-title" style={{ fontSize: "1rem"}}>What did you interact with Vasiti as?</span>
										<input type="radio" name="Vasiti" onChange={()=> this.setState(()=> ({ interactAs: true }))} id="dot-1" />
										<input type="radio" name="Vasiti" onChange={()=> this.setState(()=> ({ interactAs: false }))} id="dot-2" />
									
										<div className="category">
											<label htmlFor="dot-1">
												<span className="dot one"></span>
												<span className="gender">Customer</span>
											</label>
											<label htmlFor="dot-2">
												<span className="dot two"></span>
												<span className="gender">Vendor</span>
											</label>
										</div>
									</div>
							
									{interactAs && (
										<div className="input-box" style={{ width: "110%"}}>
											<span className="details">city or Higher Institution(htmlFor Students)</span>
											<input type="text" required name="institution" value={institution} onChange={this.handleChange} />
										</div>
									)}
								</div>
						
							</div>
							<div className="button" style={{ margin:"auto", textAlign: "end"}}>
								<input type="submit" value="Share your story" />
							</div>
						</form>
					</div>
				</div>
			)
		}
	};
}

export default App;
