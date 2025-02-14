'use client';

import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { use } from "react";

import VacenciesData from "@/components/Career/careerData";

const JobListingPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const router = useRouter();

    const vacency = VacenciesData.find((vacency) => vacency.id.toString() === id);

    if (!vacency) {
        return <div>Card not found</div>;
    }

    const handleBackClick = () => {
        router.push("/career");
    };
    const handleCardClick = () => {
        router.push(`/singlepage/${id}`); // Navigate to a new page
    };

    return (
        <div className="bg-gray-50">

            <div className="lg:mx-20 p-6">
                {/* Back Button */}
                <button
                    onClick={handleBackClick}
                    className="mt-4 text-black rounded-md inline-flex items-center lg:my-10"
                >
                    <IoIosArrowRoundBack className="mr-2" /> Back to Careers
                </button>
                <h2 className="text-3xl font-bold text-blue-900">{vacency.jobTitle}</h2>

                <div className="flex flex-wrap">
                    {/* Left Section */}
                    <div className="flex-1 bg-gray-100 p-6 rounded-md my-6 lg:w-3/5">
                        {/* Job Details Section */}
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <div className="text-gray-600">
                                <strong>Current Job Vacancies:</strong> {vacency.vacancies}
                            </div>
                            <div className="text-gray-600">
                                <strong>Deadline:</strong> {vacency.deadline}
                            </div>
                            <div className="text-gray-600">
                                <strong>Functional Designation:</strong> {vacency.functionalDesignation}
                            </div>
                            <div className="text-gray-600">
                                <strong>Department:</strong> {vacency.department}
                            </div>
                            <div className="text-gray-600">
                                <strong>Location:</strong> {vacency.location}
                            </div>
                        </div>

                        {/* Responsibilities Section */}
                        <div className="my-6">
                            <h2 className="text-2xl font-bold">Responsibilities:</h2>
                            <ul className="list-disc ml-6 mt-2 text-gray-600">
                                {vacency.responsibilities.map((responsibility, index) => (
                                    <li key={index}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Qualifications Section */}
                        <div className="my-6">
                            <h2 className="text-2xl font-bold">Qualifications:</h2>
                            <div className="ml-6 mt-2 text-gray-600">
                                <strong>Education:</strong> {vacency.qualifications.education}
                            </div>
                            <div className="ml-6 mt-2 text-gray-600">
                                <strong>Experience:</strong> {vacency.qualifications.experience}
                            </div>
                            <div className="my-4">
                                <h3 className="text-xl font-semibold">Skills:</h3>
                                <ul className="list-disc ml-6 text-gray-600">
                                    {vacency.qualifications.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1   rounded-md lg:w-2/5 lg:ml-64  sm:ml-20  ">
                        {/* Organization Section */}
                        <div className="my-6   bg-blue-200  rounded-md  w-3/5 p-4 ">
                            <h2 className="   text-2xl font-bold">Organization</h2>
                            <p className="  text-gray-600">
                                WorldLink Communications Ltd. is one of the largest and most trusted internet service providers in Nepal.
                            </p>
                            <div className="flex justify-between items-center  hover:cursor-pointer  px-2 text-blue-500 font-bold rounded-xl  mt-4 "
                                onClick={handleCardClick}
                            >
                                Learn More  →
                            </div>
                        </div>

                        {/* Parent Section */}
                        <div className="my-6   bg-blue-200  rounded-md  w-3/5 p-4 ">
                            <h2 className="   text-2xl font-bold">Organization</h2>
                            <p className="  text-gray-600">
                                WorldLink Communications Ltd. is one of the largest and most trusted internet service providers in Nepal.
                            </p>
                            <div className="flex justify-between items-center  hover:cursor-pointer  px-2 text-blue-500 font-bold rounded-xl  mt-4 "
                                onClick={handleCardClick}
                            >
                                Learn More  →
                            </div>
                        </div>
                        <div className="my-6   bg-blue-200  rounded-md  w-3/5 p-4 ">
                            <h2 className="   text-2xl font-bold">Organization</h2>
                            <p className="  text-gray-600">
                                WorldLink Communications Ltd. is one of the largest and most trusted internet service providers in Nepal.
                            </p>
                            <div className="flex justify-between items-center  hover:cursor-pointer  px-2 text-blue-500 font-bold rounded-xl  mt-4 "
                                onClick={handleCardClick}
                            >
                                Learn More  →
                            </div>
                        </div>
                        <div className="my-6   bg-blue-200  rounded-md  w-3/5 p-4 ">
                            <h2 className="   text-2xl font-bold">Organization</h2>
                            <p className="  text-gray-600">
                                WorldLink Communications Ltd. is one of the largest and most trusted internet service providers in Nepal.
                            </p>
                            <div className="flex justify-between items-center  hover:cursor-pointer  px-2 text-blue-500 font-bold rounded-xl  mt-4 "
                                onClick={handleCardClick}
                            >
                                Learn More  →
                            </div>
                        </div>

                        {/* Why WorldLink? Section */}
                        <div className="my-6   bg-blue-200  rounded-md  w-3/5 p-4 ">
                            <h2 className="   text-2xl font-bold">Organization</h2>
                            <p className="  text-gray-600">
                                WorldLink Communications Ltd. is one of the largest and most trusted internet service providers in Nepal.
                            </p>
                            <div className="flex justify-between items-center  hover:cursor-pointer  px-2 text-blue-500 font-bold rounded-xl  mt-4 "
                                onClick={handleCardClick}
                            >
                                Learn More  →
                            </div>
                        </div>
                    </div>
                </div>

                {/* Application Form Section */}
                <div className="my-6 bg-blue-100 p-6 rounded-md w-full lg:w-2/5">
                    <h2 className="text-xl font-bold">Apply Now</h2>
                    <form className="mt-4 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Temporary Address"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Permanent Address"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Total Experience"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Last/Current Designation"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Expected Salary"
                                className="border p-2 rounded w-full"
                            />
                        </div>

                        {/* Cover Letter */}
                        <textarea
                            placeholder="Cover Letter"
                            className="border p-2 rounded w-full"
                        ></textarea>

                        {/* File Upload */}
                        <div className="mt-4">
                            <label className="block text-gray-700 font-medium mb-2">Upload Resume/CV</label>
                            <input
                                type="file"
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-800 text-white px-4 py-2 rounded mt-4"
                        >
                            Apply Now
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default JobListingPage;
