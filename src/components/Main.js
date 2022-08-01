
function Main(props){
    return(
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="heading">Fun Facts About React</h1>
            <ul className="list">
                    <li className="list-items">Was first released in 2013</li>
                    <li className="list-items">Was originally created by Jordan Walke</li>
                    <li className="list-items">He we ll over 100k stars on github</li>
                    <li className="list-items">Is maintained by facebook</li>
                    <li className="list-items">Powers 100s of enterprise app, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main;