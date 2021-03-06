import React from 'react';
import Form from './form';
import { connect } from 'react-redux';
import WarningList from '../utilsComponent/warningList';
import qs from 'query-string';
import { loadInfoUser } from '../../actions/user';
import { bindActionCreators } from 'redux';


class CompleteAuth extends React.Component {
	componentWillMount(){
		if (JSON.stringify(this.props.infoProfil) === '[]')
			this.props.loadInfoUser(qs.parse(this.props.location.search))
	}

	render() {
		if (localStorage.getItem("token")){
			return (
				<div>
					<WarningList warnings={this.props.warningComplete}/>
					<Form />
				</div>
			)
		}else{
			window.location.href = '/';
			return (<div></div>)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		infoProfil: state.infoProfil,
		warningComplete: state.warningReducers
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({loadInfoUser}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteAuth);
