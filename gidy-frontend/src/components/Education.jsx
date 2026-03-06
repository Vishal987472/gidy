import { useState } from "react";
import { addEducation } from "../services/api";

export default function Education({ education, profileId, reloadProfile }) {

    const [form, setForm] = useState({
        degree: "",
        university: "",
        startDate: "",
        endDate: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = async () => {

        await addEducation(profileId, form);

        reloadProfile();

        const modal = bootstrap.Modal.getInstance(
            document.getElementById("educationModal")
        );

        modal.hide();
    };

    return (

        <div className="card shadow-sm p-4">

            <div className="d-flex justify-content-between">

                <h5>Education</h5>

                <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#educationModal"
                >
                    +
                </button>

            </div>

            {education?.map((edu) => (

                <div key={edu.id} className="mt-3">

                    <h6>{edu.degree}</h6>

                    <p className="text-muted mb-1">{edu.university}</p>

                    <small className="text-muted">
                        {edu.startDate} - {edu.endDate}
                    </small>

                </div>

            ))}

            {/* Modal */}

            <div className="modal fade" id="educationModal">

                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h5>Add Education</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">

                            <input
                                name="degree"
                                className="form-control mb-2"
                                placeholder="Degree"
                                onChange={handleChange}
                            />

                            <input
                                name="university"
                                className="form-control mb-2"
                                placeholder="University"
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