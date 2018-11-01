import React from 'react';
import Form from './form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ForgetPassword extends React.Component{
	render(){
		if (!localStorage.getItem("token")){
			return(
				<div className='ForgetPwd_background'>
					<Link id='ForgetPwd_logo' to='/'><img src="https://res.cloudinary.com/dzhnhtkyv/image/upload/v1541086474/Netflix42/netflix.logo.png" alt="hypertube"/></Link>
					<Form />
					<div id='language' onClick={this.changeLanguage}>{this.props.language.language}<div id='arrowLanguage'/></div>
				</div>
			)
		}else{
			window.location.href = '/search';
			return (<div></div>)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		warningForget: state.warningReducers,
		language: state.loadLanguage
	}
}

export default connect(mapStateToProps)(ForgetPassword);
