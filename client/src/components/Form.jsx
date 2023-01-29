import React, { useState } from 'react';
import Education from './Education';
import Experience from './Experience';
import Extras from './Extras';
import PersonalDetails from './PersonalDetails';
import Project from './Project';

const Form = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    skills: '',

    exp1_org: '',
    exp1_pos: '',
    exp1_desc: '',
    exp1_dur: '',
    exp2_org: '',
    exp2_pos: '',
    exp2_desc: '',
    exp2_dur: '',

    proj1_title: '',
    proj1_link: '',
    proj1_desc: '',
    proj2_title: '',
    proj2_link: '',
    proj2_desc: '',

    edu1_school: '',
    edu1_year: '',
    edu1_qualification: '',
    edu1_desc: '',
    edu2_school: '',
    edu2_year: '',
    edu2_qualification: '',
    edu2_desc: '',

    extra_1: '',
    extra_2: '',
    extra_3: '',
    extra_4: '',
    extra_5: '',
  });

  const [page, setPage] = useState(0);
  const FormTitle = [
    'Personal Details',
    'Education',
    'Experience',
    'Projects',
    'Extras',
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails />;
    } else if (page === 1) {
      return <Education />;
    } else if (page === 2) {
      return <Experience />;
    } else if (page === 3) {
      return <Project />;
    } else {
      return <Extras />;
    }
  };
  return (
    <div>
      <h1 className='text-center'>Form</h1>
      <div className='justify-content-center'>
        <h1 className='text-center'>{FormTitle[page]}</h1>
        <div>{PageDisplay()}</div>
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          disabled={page === 4}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Form;
