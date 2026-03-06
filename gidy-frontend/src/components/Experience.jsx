import { useState } from "react";
import { addExperience } from "../services/api";

export default function Experience({ experiences, profileId, reloadProfile }) {

    const [form, setForm] = useState({
        company: "",
        role: "",
        description: "",
        startDate: "",
        endDate: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = async () => {

        await addExperience(profileId, form);

        reloadProfile();

        const modal = bootstrap.Modal.getInstance(
            document.getElementById("experienceModal")
        );

        modal.hide();
    };

    return (

        <div className="card shadow-sm p-4">

            <div className="d-flex justify-content-between">

                <h5>Experience</h5>

                <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#experienceModal"
                >
                    +
                </button>

            </div>

            {experiences?.map((exp) => (

                <div key={exp.id} className="mt-3">

                    <h6>{exp.role}</h6>

                    <p className="text-muted mb-1">{exp.company}</p>

                    <small className="text-muted">
                        {exp.startDate} - {exp.endDate}
                    </small>

                </div>

            ))}

            {/* Modal */}

            <div className="modal fade" id="experienceModal">

                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h5>Add Experience</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">

                            <input
                                name="company"
                                className="form-control mb-2"
                                placeholder="Company"
                                onChange={handleChange}
                            />

                            <input
                                name="role"
                                className="form-control mb-2"
                                placeholder="Role"
                                onChange={handleChange}
                            />

                            <textarea
                                name="description"
                                className="form-control mb-2"
                                placeholder="Description"
                                onChange={handleChange}
                            />

                            <input
                                type="date"
                                name="startDate"
                                className="form-control mb-2"
                                onChange={handleChange}
                            />

                            <input
                                type="date"
                                name="endDate"
                                className="form-control"
                                onChange={handleChange}
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
                                onClick={handleAdd}
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