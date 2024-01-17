import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";

const Dashboard = () => {
    return (
        <>
            <div className="flex">
                {/* Side Navigation Bar */}
                <Navbar />
                {/* Main component on basis of selected navigation from nav bar */}
                <main className="grow">
                    <Hero />
                </main>
            </div>
        </>
    )
}

export default Dashboard;