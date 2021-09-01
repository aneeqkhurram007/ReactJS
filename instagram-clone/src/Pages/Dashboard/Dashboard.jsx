import Feeds from '../../components/Feeds/Feeds'
import Suggestions from '../../components/Suggestions/Suggestions'
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className="dinDashboard">
            <Feeds />
            <Suggestions />
        </div>
    )
}

export default Dashboard
