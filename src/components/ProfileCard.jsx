import './ProfileCard.css';

const ProfileCard = ({ name, major, description }) => {
    return (
        <div className="profile-card">
            <h3>{name}</h3>
            <p>Major: {major}</p>
            <p>{description}</p>
        </div>
    );
};

export default ProfileCard;
