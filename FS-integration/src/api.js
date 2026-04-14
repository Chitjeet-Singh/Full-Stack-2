// API configuration
const API_BASE_URL = "http://localhost:8080/api";

// Get all students
export const getAllStudents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/students`);
    if (!response.ok) throw new Error("Failed to fetch students");
    return await response.json();
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

// Get student by ID
export const getStudentById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/students/${id}`);
    if (!response.ok) throw new Error("Student not found");
    return await response.json();
  } catch (error) {
    console.error("Error fetching student:", error);
    throw error;
  }
};

// Add a new student
export const addStudent = async (student) => {
  try {
    const response = await fetch(`${API_BASE_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
    if (!response.ok) throw new Error("Failed to add student");
    return await response.json();
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};
