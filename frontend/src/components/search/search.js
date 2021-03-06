import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { loadInfoUser, loadUsers, loadLanguage } from '../../actions/user';
import qs from 'query-string';
import FormSearch from './formSearch';
import Menu from '../utilsComponent/menu';
import ListMovies from '../library/listMovies';
import React from 'react';
import BottomScrollListener from 'react-bottom-scroll-listener';
import { addMovies} from '../../actions/movie';


class Search extends React.Component {
    componentWillMount(){
        if (localStorage.getItem("token") == null)
            this.props.loadInfoUser(qs.parse(this.props.location.search))
        else {
            let query = {}
            query.token = localStorage.getItem("token")
            this.props.loadInfoUser(query)
        }
        this.props.loadUsers()
    }

    render(){
        if (localStorage.getItem("token")){
            return (
                <div id='Search_block'>
                  <Menu />
                  <FormSearch />
                  <ListMovies movies={this.props.fluxMovies}/>
                  <BottomScrollListener onBottom={(e) => {this.props.addMovies(this.props.fluxMovies, this.props.allMovies);}} />
                </div>
            )
        }
        else {
			window.location.href = '/';
			return(<div></div>)
		}
    }
}

const mapStateToProps = (state) => {
	return {
		allMovies: state.allMovies,
		fluxMovies: state.fluxMovies,
        infoProfil: state.infoProfil,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({addMovies, loadInfoUser, loadUsers, loadLanguage}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
