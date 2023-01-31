import React from 'react';

const Education = ({ formData, setFormData }) => {
  // edu1_school,
  // edu1_year,
  // edu1_qualification,
  // edu1_desc,
  // edu2_school,
  // edu2_year,
  // edu2_qualification,
  // edu2_desc,
  return (
    <div className='container'>
      <div classNameName='d-flex justify-content-center'>
        <form className='row g-3'>
          <div className='col-md-12'>
            <label for='school' className='form-label'>
              Enter your first Institute name
            </label>
            <input
              type='name'
              className='form-control'
              id='inputSchool'
              placeholder=''
              value={formData.edu1_school}
              onChange={(e) => {
                setFormData({ ...formData, edu1_school: e.target.value });
              }}
            />
          </div>
          <div className='col-md-12'>
            <label for='year' className='form-label'>
              Year you graduated
            </label>
            <input
              type='text'
              className='form-control'
              id='inputYear'
              value={formData.edu1_year}
              onChange={(e) => {
                setFormData({ ...formData, edu1_year: e.target.value });
              }}
            />
          </div>
          <div className='col-md-12'>
            <label for='inputQualification' className='form-label'>
              Degree you pursued
            </label>
            <input
              type='text'
              className='form-control'
              id='inputQualification'
              placeholder='1234 Main St'
              value={formData.edu1_qualification}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  edu1_qualification: e.target.value,
                });
              }}
            />
          </div>
          <div className='col-12'>
            <label for='inputDescription' className='form-label'>
              Description
            </label>
            <input
              type='text'
              className='form-control'
              id='inputDescription'
              placeholder='Apartment, studio, or floor'
              value={formData.edu1_description}
              onChange={(e) => {
                setFormData({ ...formData, edu1_description: e.target.value });
              }}
            />
          </div>
          <div className='col-md-12'>
            <label for='school' className='form-label'>
              School
            </label>
            <input
              type='name'
              className='form-control'
              id='inputSchool2'
              value={formData.edu2_school}
              onChange={(e) => {
                setFormData({ ...formData, edu2_school: e.target.value });
              }}
            />
          </div>
          <div className='col-md-12'>
            <label for='year' className='form-label'>
              Year
            </label>
            <input
              type='text'
              className='form-control'
              id='inputYear2'
              value={formData.year}
              onChange={(e) => {
                setFormData({ ...formData, edu2_year: e.target.value });
              }}
            />
          </div>
          <div className='col-md-12'>
            <label for='inputQualification' className='form-label'>
              Qualification
            </label>
            <input
              type='text'
              className='form-control'
              id='inputQualification2'
              placeholder='1234 Main St'
              value={formData.edu2_qualification}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  edu2_qualification: e.target.value,
                });
              }}
            />
          </div>
          <div className='col-12'>
            <label for='inputDescription2' className='form-label'>
              Description
            </label>
            <input
              type='text'
              className='form-control'
              id='inputDescription2'
              placeholder='Apartment, studio, or floor'
              value={formData.edu2_description}
              onChange={(e) => {
                setFormData({ ...formData, edu2_description: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Education;
