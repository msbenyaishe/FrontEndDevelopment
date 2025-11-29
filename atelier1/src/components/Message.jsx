export default function Message() {
    const isLogged = true;
    return (
        <div>
            <h3>
                {isLogged ? "You are logged in!" : "Please Log in"}
            </h3>
        </div>
    )
}