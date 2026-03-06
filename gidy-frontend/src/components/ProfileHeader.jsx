export default function ProfileHeader({ profile }) {

    return (

        <div className="card shadow-sm p-4">

            <div className="d-flex justify-content-between">

                <div className="d-flex">

                    <img
                        src={profile.profilePicture || "https://i.pravatar.cc/80"}
                        className="rounded-circle me-3"
                        width="70"
                        height="70"
                    />

                    <div>

                        <h5 className="mb-0">{profile.name}</h5>

                        <small className="text-muted">
                            {profile.role}
                        </small>

                        <div className="text-muted">
                            {profile.location}
                        </div>

                    </div>

                </div>

                <div className="text-end">

                    <div>
                        <strong>League:</strong> {profile.league}
                    </div>

                    <div>
                        <strong>Rank:</strong> {profile.rank}
                    </div>

                    <div>
                        <strong>Points:</strong> {profile.points}
                    </div>

                </div>

            </div>

            <p className="mt-3">{profile.bio}</p>

            <a href="#" className="text-primary">
                {profile.email}
            </a>

        </div>
    );
}