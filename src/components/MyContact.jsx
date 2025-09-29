import { useEffect, useState } from "react";
import { useUpdateTitle } from "../hooks/useUpdateDocTitle";
import Search from "./Search";
import TableUsers from "./TableUsers";

function MyContact() {
	const [search, setSearch] = useState("");
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [resultSearch, setResultSearch] = useState([]);

	const filterUsers = () => {
		const foundUsers = users.filter((user) => {
			return Object.values(user)
				.join(" ")
				.toLowerCase()
				.includes(search.toLowerCase());
		});

		setResultSearch(foundUsers);
	};

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => {
				setUsers(json);
				setIsLoading(false);
			})
			.catch((error) => console.log(error.message));
	}, []);

	useEffect(() => {
		if (search !== "") {
			filterUsers();
		} else {
			setResultSearch([]);
		}
	}, [search]);

	useUpdateTitle(search);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const msgDisplay = (msg, color) => {
		return <p style={{ textAlign: "center", color: color }}>{msg}</p>;
	};

	return (
		<>
			{isLoading ? (
				msgDisplay("Veuillez patienter !", "red")
			) : (
				<Search searchStr={search} searchHandler={handleChange} />
			)}

			{resultSearch.length === 0 && search !== "" ? (
				msgDisplay("Pas de résultat !", "red")
			) : search === "" ? null : (
				<TableUsers dataArray={resultSearch} />
			)}
		</>
	);
}

export default MyContact;
