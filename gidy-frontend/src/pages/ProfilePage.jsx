import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

import ProfileHeader from "../components/ProfileHeader";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certification from "../components/Certification";
import ThemeToggle from "../components/ThemeToggle";

export default function ProfilePage() {

    const [profile, setProfile] = useState(null);

    const profileId = 1;

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        const response = await getProfile(profileId);

        setProfile(response.data);

    };

    if (!profile) return <div>Loading...</div>;

    return (

        <div className="container mt-4">
            <div className="d-flex justify-content-end mb-3">

                <ThemeToggle
                    profileId={profileId}
                    currentTheme={profile.theme}
                />

            </div>

            <ProfileHeader profile={profile} />

            <div className="row mt-4 g-4">

                <div className="col-md-6">

                    <Skills
                        skills={profile.skills}
                        profileId={profileId}
                        reloadProfile={loadProfile}
                    />

                </div>

                <div className="col-md-6">
                    <Experience
                        experiences={profile.experiences}
                        profileId={profileId}
                        reloadProfile={loadProfile}
                    />
                </div>

                <div className="col-md-6">
                    <Education
                        education={profile.education}
                        profileId={profileId}
                        reloadProfile={loadProfile}
                    />
                </div>

                <div className="col-md-6">
                    <Certification
                        certifications={profile.certifications}
                        profileId={profileId}
                        reloadProfile={loadProfile}
                    />
                </div>

            </div>

        </div>

    );
}