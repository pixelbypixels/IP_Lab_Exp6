import ProfileCard from '../components/ProfileCard';
import Courses from '../components/Courses';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to My Profile!</h2>
            <ProfileCard 
                name="Kshitij Hundre"
                major="INFT"
                description="Aspiring software engineer with a passion for developing innovative solutions."
            />
            <Courses />
        </div>
    );
};

export default Home;
