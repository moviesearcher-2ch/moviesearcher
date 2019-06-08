import {
	GET_MOVIE_REQUEST,
	GET_MOVIE_SUCCESS,
	GET_MOVIE_ERROR,
} from './../constants/constants'

import Axios from './../constants/axios'

export default function fetchMovie(id) {
	return async dispatch => {
		dispatch({
			type: GET_MOVIE_REQUEST,
		})
		try {
			let res = await Axios.get(
				`/movie/${id}?api_key=9d923168206684ddbd944abae426483e`
			)
			if (res.status === 200) {
				res = res.data
				dispatch({
					type: GET_MOVIE_SUCCESS,
					payload: res,
				})
			} else {
				throw new Error(res.status_code)
			}
		} catch (err) {
			dispatch({
				type: GET_MOVIE_ERROR,
				payload: +err.message,
			})
		}
	}
}
