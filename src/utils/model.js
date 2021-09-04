export function userHasName(user) {
	return user?.first_name || user?.last_name;
}

export function getFullName(user) {
	return `${user?.first_name} ${user?.last_name}`;
}

export function getRoleDisplay(user) {
	if (user?.position && user?.position !== "") {
		return user.position;
	} else {
		return "None provided yet";
	}
}
