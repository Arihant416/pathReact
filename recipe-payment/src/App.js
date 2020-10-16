/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
function App() {
	const ListLoading = withListLoading(List);
	const [appState, setAppState] = useState({
		loading: false,
		data: [],
	});
	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://starlord.hackerearth.com/recipe`;
		fetch(apiUrl)
			.then(res => res.json())
			.then(recipe => {
				setAppState({ loading: false, data: recipe });
			});
	}, [setAppState]);
	return (
		<div className='App bg-primary'>
			<div className='container'>
				<h1 className='text-center'>Recipes</h1>
				<div className='my-10'>
					<ListLoading isLoading={appState.loading} data={appState.data} />
				</div>
				<footer>
					<div className='footer text-center'>
						Built{' '}
						<span role='img' aria-label='love'>
							💚
						</span>{' '}
						with by Arihant Jain
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
