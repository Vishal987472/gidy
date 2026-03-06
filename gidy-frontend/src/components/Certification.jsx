import { useState } from "react";
import { addCertification } from "../services/api";

export default function Certification({ certifications, profileId, reloadProfile }) {

    const [form, setForm] = useState({
        name: "",
        provider: "",
        date: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = async () => {

        await addCertification(profileId, form);

        reloadProfile();

        const modal = bootstrap.Modal.getInstance(
            document.getElementById("certModal")
        );

        modal.hide();
    };

    return (

        <div className="card shadow-sm p-4">

            <div className="d-flex justify-content-between">

                <h5>Certification</h5>

                <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#certModal"
                >
                    +
                </button>

            </div>

            {certifications?.map((cert) => (

                <div key={cert.id} className="mt-3">

                    <h6>{cert.name}</h6>

                    <p className="text-muted mb-1">{cert.provider}</p>

                    <small className="text-muted">{cert.date}</small>

                </div>

            ))}

            {/* Modal */}

            <div className="modal fade" id="certModal">

                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h5>Add Certification</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">

                            <input
                                name="name"
                                className="form-control mb-2"
                                placeholder="Certification name"
                                onChange={handleChange}
                            />

                            <input
                                name="provider"
                                className="form-control mb-2"
                                placeholder="Provider"
                                onChange={handleChange}
                            />

                            <input
                                type="date"
                                name="date"
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