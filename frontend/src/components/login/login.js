import React from 'react';
import Form from './form';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadLanguage } from '../../actions/user';
import { Link } from 'react-router-dom'


class Login extends React.Component{
	componentWillMount() {
		this.props.loadLanguage('English', this.props.filterMovies)
	}
	changeLanguage = () => {
		(this.props.language.language === 'English') ? this.props.loadLanguage('Français', this.props.filterMovies) : this.props.loadLanguage('English', this.props.filterMovies)
	}
	render(){
		if (!localStorage.getItem('token')) {
			return(
				<div className='Login_background'>
					<Link id='Login_logo' to='/'><img src="https://res.cloudinary.com/dzhnhtkyv/image/upload/v1541086474/Netflix42/netflix.logo.png" alt="hypertube"/></Link>
					<Form/>
					<div id='language' onClick={this.changeLanguage}>{this.props.language.language}<div id='arrowLanguage'/></div>
				</div>
			)
		}
		else {
			window.location.href = '/search';
			return (<div></div>);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		warningLogin: state.warningReducers,
		language: state.loadLanguage,
        filterMovies: state.filterMovies		
	}
}

const mapDispatchToProps = (dispatch) => {
    return{
        ...bindActionCreators({loadLanguage}, dispatch)
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
