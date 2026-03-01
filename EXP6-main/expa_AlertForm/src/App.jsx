import { useState } from 'react'
import './App.css'

const initialState = {
  firstName: '',
  lastName: '',
  gender: 'male',
  dob: '',
  skills: [],
  address: '',
  state: 'Select',
}

function calculateAge(dob) {
  if (!dob) return ''
  const birth = new Date(dob)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

function App() {
  const [formData, setFormData] = useState(initialState)

  const skillOptions = ['HTML', 'CSS', 'JavaScript', 'React']
  const stateOptions = ['Select', 'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((s) => ({ ...s, [name]: value }))
  }

  function handleGender(e) {
    setFormData((s) => ({ ...s, gender: e.target.value }))
  }

  function handleSkillToggle(skill) {
    setFormData((s) => {
      const has = s.skills.includes(skill)
      return { ...s, skills: has ? s.skills.filter((x) => x !== skill) : [...s.skills, skill] }
    })
  }

  function handleCancel() {
    setFormData(initialState)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const age = calculateAge(formData.dob)
    const info = `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nGender: ${formData.gender}\nDOB: ${formData.dob}\nAge: ${age}\nSkills: ${formData.skills.join(', ') || 'None'}\nAddress: ${formData.address}\nState: ${formData.state}`
    alert(info)
  }

  return (
    <div className="app-container">
      <h2>Simple Alert Form</h2>
      <form onSubmit={handleSubmit} className="simple-form">
        <div>
          <label>First Name: <input name="firstName" value={formData.firstName} onChange={handleChange} required /></label>
        </div>
        <div>
          <label>Last Name: <input name="lastName" value={formData.lastName} onChange={handleChange} required /></label>
        </div>

        <div>
          <label>Gender:</label>
          <label><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleGender} /> Male</label>
          <label><input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleGender} /> Female</label>
          <label><input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleGender} /> Other</label>
        </div>

        <div>
          <label>Date of Birth: <input type="date" name="dob" value={formData.dob} onChange={handleChange} required /></label>
        </div>

        <div>
          <label>Skills:</label>
          {skillOptions.map((skill) => (
            <label key={skill}>
              <input type="checkbox" checked={formData.skills.includes(skill)} onChange={() => handleSkillToggle(skill)} /> {skill}
            </label>
          ))}
        </div>

        <div>
          <label>Address:</label>
          <div>
            <textarea name="address" value={formData.address} onChange={handleChange} rows={3} />
          </div>
        </div>

        <div>
          <label>State:
            <select name="state" value={formData.state} onChange={handleChange}>
              {stateOptions.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default App
