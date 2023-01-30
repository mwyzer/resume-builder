import React from 'react';

const PersonalDetails = ({ formData, setFormData }) => {
  // name,
  // email,
  // phone,
  // linkedin,
  // github,
  // skills,
  return (
    <div className='container'>
      <div classNameName='d-flex justify-content-center'>
        <form className='row g-3'>
          <div className='col-md-12'>
            <label for='name' className='form-label'>
              Name
            </label>
            <input
              type='name'
              className='form-control'
              id='inputName'
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>
          <div className='col-md-12'>
            <label for='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='inputEmail'
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
          <div className='col-md-12'>
            <label for='inputPhone' className='form-label'>
              Phone
            </label>
            <input
              type='text'
              className='form-control'
              id='inputPhone'
              placeholder='1234 Main St'
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
            />
          </div>
          <div className='col-12'>
            <label for='inputLinkedIn' className='form-label'>
              LinkedIn
            </label>
            <input
              type='text'
              className='form-control'
              id='inputLinkedIn'
              placeholder='Apartment, studio, or floor'
              value={formData.linkedin}
              onChange={(e) => {
                setFormData({ ...formData, github: e.target.value });
              }}
            />
          </div>

          <div className='col-12'>
            <label for='inputGithub' className='form-label'>
              Github
            </label>
            <input
              type='text'
              className='form-control'
              id='inputGithub'
              placeholder='Apartment, studio, or floor'
              value={formData.github}
              onChange={(e) => {
                setFormData({ ...formData, github: e.target.value });
              }}
            />
          </div>
          <div className='col-12'>
            <label for='inputSkills' className='form-label'>
              Skills
            </label>
            <input
              type='text'
              className='form-control'
              id='inputSkills'
              placeholder='Apartment, studio, or floor'
              value={formData.skills}
              onChange={(e) => {
                setFormData({ ...formData, skills: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
