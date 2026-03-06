import { useState } from "react";
import { addSkill } from "../services/api";

export default function Skills({ skills, profileId, reloadProfile }) {

    const [skillName, setSkillName] = useState("");

    const handleAddSkill = async () => {

        try {

            await addSkill(profileId, {
                skillName: skillName
            });

            setSkillName("");

            reloadProfile();

            const modal = bootstrap.Modal.getInstance(
                document.getElementById("addSkillModal")
            );

            modal.hide();

        } catch (error) {

            console.error("Error adding skill", error);

        }

    };

    return (

        <div className="card shadow-sm p-4">

            <div className="d-flex justify-content-between mb-3">

                <h5>Skills</h5>

                <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addSkillModal"
                >
                    +
                </button>

            </div>

            <div>

                {skills?.map((skill) => (

                    <span
                        key={skill.id}
                        className="badge bg-light text-dark me-2 mb-2 p-2"
                    >
            {skill.skillName}
          </span>

                ))}

            </div>

            {/* Modal */}

            <div
                className="modal fade"
                id="addSkillModal"
                tabIndex="-1"
            >

                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">

                            <h5 className="modal-title">
                                Add Skill
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>

                        </div>

                        <div className="modal-body">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Skill name"
                                value={skillName}
                                onChange={(e) => setSkillName(e.target.value)}
                            />

                        </div>

                        <div className="modal-footer">

                            <button
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                className="btn btn-primary"
                                onClick={handleAddSkill}
                            >
                                Add
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}