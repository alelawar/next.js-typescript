import { log } from "console";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default async function UsersServer() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const response = await fetch("https://jsonplaceholder.typicode.com/usrs")
    const users: User[] = await response.json();
    // log(users)
    return (
        <ul className="space-y-4 p-4">
            {users.map((user) => (
                <li
                    key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm">
                        <div>Username: {user.username}</div>
                        <div>Email: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
}