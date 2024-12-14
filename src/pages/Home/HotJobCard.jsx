import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;
    return (
        <div className="card card-compact bg-base-100 w-[305px] shadow-xl">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className=''>
                    <h4 className='text-2xl'>{company}</h4>
                    <p className='flex gap-1 items-center'><MdOutlineLocationOn />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title text-wrap">{title} <div className="badge badge-secondary">NEW</div></h2>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map((skill, index) => <p key={index}
                        className='border border-md text-center px-2 hover:text-yellow-400 hover:bg-gray-400'
                        >{skill}</p>)
                    }
                </div>
                <div className="flex card-actions justify-end items-center">
                    <p className='flex items-center'>Salary: <BsCurrencyDollar />{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                    <button className="bg-purple-700 p-3 text-white rounded-xl">Apply</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;