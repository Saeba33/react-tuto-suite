function Search({searchStr, searchHandler}) {
	return (
		<>
			<input 
				type="text" 
				placeholder="Chercher..."
				value={searchStr}
				onChange={searchHandler} 
			/>
		</>
	)
}

export default Search;
