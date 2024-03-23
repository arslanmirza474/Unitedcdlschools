import axios from "axios";

import { SERVER_URL } from "../constant/constants";

export const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const deleteModuleResult = async ({ id }) => {
  const data = axios
    .post(`${SERVER_URL}/deleteModuleResultSuper`, {
      id,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const fetchModuleResult = async ({ studentId }) => {
  const data = axios
    .post(`${SERVER_URL}/moduleResultSuper`, {
      studentId,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};
export const approveForm = async ({
  studentId,
  formId,
  checkedBy,
  checkedBySign,
}) => {
  const data = axios
    .post(`${SERVER_URL}/approveForm`, {
      studentId,
      formId,
      checkedBy,
      checkedBySign,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};
export const editFormData = async ({
  formId,
  studentId,
  name,
  address,
  phoneNum,
  dob,
  socialSociety,
  email,
  gender,
  transmission,
  ModifiedId,
}) => {
  const data = axios
    .post(`${SERVER_URL}/editForm`, {
      formId,
      studentId,
      name,
      address,
      phoneNum,
      dob,
      socialSociety,
      email,
      gender,
      transmission,
      ModifiedId,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const createFormData = async ({
  studentId,
  name,
  address,
  phoneNum,
  dob,
  socialSociety,
  email,
  gender,
  transmission,
}) => {
  const data = axios
    .post(`${SERVER_URL}/makeForm`, {
      studentId,
      name,
      address,
      phoneNum,
      dob,
      socialSociety,
      email,
      gender,
      transmission,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};
export const correctResultsById = async (studentId) => {
  const data = axios
    .post(`${SERVER_URL}/correctResultsById`, { studentId })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const correctResults = async (studentName) => {
  const data = axios
    .post(`${SERVER_URL}/correctResults`, { studentName })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const deleteStudentData = async (id, password) => {
  const data = axios
    .post(`${SERVER_URL}/deleteStudent`, { id, password })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};
export const deleteStudentDataByAdmin = async (id, password, admin) => {
  const data = axios
    .post(`${SERVER_URL}/deleteStudentByAdmin`, { id, password, admin })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const getCurrentStats = async (selectedYear) => {
  const data = axios
    .get(`${SERVER_URL}/students/count?year=${selectedYear}`)
    .then(function (response) {
      return { success: true, data: response.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const getStudentStatsByYear = async () => {
  const data = axios
    .post(`${SERVER_URL}/getStudentStatsByYear`)
    .then(function (response) {
      console.log(response.data)
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const getStatsMonthly = async (selectedYear) => {
  console.log(selectedYear)
  const data = axios
    .get(`${SERVER_URL}/students/timestamps?year=${selectedYear}`)
    .then(function (response) {
      console.log(response.data)
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const changePasswordUsingData = async (email, code, password) => {
  const data = axios
    .post(`${SERVER_URL}/changePassword`, {
      password,
      email,
      code,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};
export const forcedDelete = async ({ adminCode, admin, studentId }) => {
  const data = axios
    .post(`${SERVER_URL}/deleteStudentByAdmin`, {
      adminCode,
      admin,
      studentId,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const forcedUpdate = async ({
  adminCode,
  admin,
  studentId,
  studentName,
}) => {
  const data = axios
    .post(`${SERVER_URL}/forcedComplete`, {
      adminCode,
      admin,
      studentId,
      studentName,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const checkPinCode = async (email, code) => {
  const data = axios
    .post(`${SERVER_URL}/checkNumber`, {
      email,
      code,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const resetPasswordLinkUsingEmail = async (email) => {
  const data = axios
    .post(`${SERVER_URL}/resetPassword`, {
      email,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const LoginAsStudent = async (email, password) => {
  const data = axios
    .post(`${SERVER_URL}/loginStudent`, {
      email,
      password,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const LoginAsAdmin = async (email, password) => {
  const data = axios
    .post(`${SERVER_URL}/loginAdmin`, {
      email,
      password,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const attempQuiz = async ({
  studentId,
  questions,
  moduleName,
  moduleNo,
}) => {
  const data = axios
    .post(`${SERVER_URL}/attempQuiz`, {
      studentId,
      questions,
      moduleName,
      moduleNo,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};
// /getAdmins

export const StudentFormById = async (studentId) => {
  const data = axios
    .get(`${SERVER_URL}/forms/${studentId}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const AllForms = async () => {
  const data = axios
    .get(`${SERVER_URL}/forms`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const getAllCollection = async () => {
  const data = axios
    .post(`${SERVER_URL}/dataCollected`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const getAllAgreements = async () => {
  const data = axios
    .post(`${SERVER_URL}/agreement`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const getEnrollments = async () => {
  const data = axios
    .post(`${SERVER_URL}/enrollments`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const getAlldetailsByTerm = async ({ term }) => {
  const data = axios
    .get(`${SERVER_URL}/getAlldetailsByTerm/${term}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const getAllDetails = async () => {
  const data = axios
    .get(`${SERVER_URL}/getAlldetails`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};
export const getAllAdmins = async () => {
  const data = axios
    .get(`${SERVER_URL}/getAdmins`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};
export const getStudentById = (studentId) => {
  const data = axios
    .get(`${SERVER_URL}/getMyInfo/${studentId}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};
export const getMainFormByTerm = async ({ term }) => {
  const data = axios
    .get(`${SERVER_URL}/forms/term/${term}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const getStudentsByTerm = async ({ term }) => {
  const data = axios
    .get(`${SERVER_URL}/getStudentByTerm/${term}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const getStudents = async () => {
  const data = axios
    .get(`${SERVER_URL}/getAllStudents`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};
export const fetchQuestionsByModuleId = async (id) => {
  const data = axios
    .get(`${SERVER_URL}/getQuestionsByModule/${id}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};
export const getModuleById = async (id) => {
  const data = axios
    .get(`${SERVER_URL}/getModule/${id}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const fetchAgreementByEmail = (email) => {
  const data = axios
    .get(`${SERVER_URL}/getAgreementByEmail/${email}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};
export const fetchApplicationEnrollmentByEmail = (email) => {
  const data = axios
    .get(`${SERVER_URL}/getApplicationEnrollmentByEmail/${email}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      // return error?.response?.data;
      return { success: false };
    });
  return data;
};

export const fetchDataCollectionByStudentEmail = (email) => {
  const data = axios
    .get(`${SERVER_URL}/getDataCollectionByEmail/${email}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      // return error?.response?.data;
      return { success: false };
    });
  return data;
};

export const unBlockStudent = (studentId, teacherId) => {
  const data = axios
    .post(`${SERVER_URL}/unBlockStudent`, {
      studentId,
      teacherId,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const blockStudent = (studentId, teacherId) => {
  const data = axios
    .post(`${SERVER_URL}/blockStudent`, {
      studentId,
      teacherId,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const makeStudentInComplete = (studentId, teacherId) => {
  const data = axios
    .post(`${SERVER_URL}/markInComplete`, {
      studentId,
      teacherId,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const makeStudentComplete = (studentId, teacherId) => {
  const data = axios
    .post(`${SERVER_URL}/markCompleteStudent`, {
      studentId,
      teacherId,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};
export const makeStudentInActive = (studentId, teacherId) => {
  const data = axios
    .post(`${SERVER_URL}/makeStudentInActive`, {
      studentId,
      teacherId,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const makeAdminActive = (adminId, superAdminId) => {
  const data = axios
    .post(`${SERVER_URL}/makeAdminActive`, {
      adminId,
      superAdminId,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const makeAdminInActive = (adminId, superAdminId) => {
  const data = axios
    .post(`${SERVER_URL}/makeAdminInActive`, {
      adminId,
      superAdminId,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};
export const markVerified = (id, adminId) => {
  const data = axios
    .post(`${SERVER_URL}/markVerified`, {
      id,
      adminId,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const makeStudentActive = (studentId, teacherId) => {
  const data = axios
    .post(`${SERVER_URL}/makeStudentActive`, {
      studentId,
      teacherId,
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const fetchAdminData = (id) => {
  const data = axios
    .get(`${SERVER_URL}/AdminDetails/${id}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const fetchBasicDataById = (email) => {
  const data = axios
    .get(`${SERVER_URL}/getBasicInfoById/${email}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const fetchBasicDataByEmail = (email) => {
  const data = axios
    .get(`${SERVER_URL}/getBasicInfo/${email}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const getAllModulesByStudentId = async (id) => {
  const data = axios
    .get(`${SERVER_URL}/getAllModulesByStudentId/${id}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const getAllModulesByStudent = async (id) => {
  const data = axios
    .get(`${SERVER_URL}/getAllModulesByStudentId/${id}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const ChapterModuleOfStudent = async ({ studentId, chapterNo }) => {
  const data = axios
    .get(`${SERVER_URL}/getChapterByStudentId/${studentId}/${chapterNo}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const videoUpdate = async ({
  studentId,
  chapterId,
  videoPercentage,
}) => {
  const data = axios
    .post(`${SERVER_URL}/videoUpdate`, {
      studentId,
      chapterId,
      videoPercentage,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};
export const getAllModules = async () => {
  const data = axios
    .get(`${SERVER_URL}/getAllModules`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const changeStudentNameByAdmin = async (newName, id) => {
  const data = axios
    .post(`${SERVER_URL}/changeStudentNameByAdmin`, {
      newName,
      id,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const changePasswordBySuperAdminOfAdmin = async (
  adminId,
  password,
  superAdminId
) => {
  const data = axios
    .post(`${SERVER_URL}/changePasswordBySuperAdminOfAdmin`, {
      adminId,
      password,
      superAdminId,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};
export const changePasswordByAdmin = async ({
  studentId,
  password,
  adminId,
}) => {
  const data = axios
    .post(`${SERVER_URL}/changePasswordByAdmin`, {
      studentId,
      password,
      adminId,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};
export const getMyResults = async (id) => {
  const data = axios
    .get(`${SERVER_URL}/getMyResults/${id}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      return error?.response?.data;
    });
  return data;
};

export const RegisterAsStudent = async (email, password, name) => {
  const data = axios
    .post(`${SERVER_URL}/createStudent`, {
      email,
      password,
      name,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const createAdminBasic = async (email, password, name) => {
  const data = axios
    .post(`${SERVER_URL}/createAdmin`, {
      email,
      password,
      name,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

// export const makeApplicationForEnrollment = async ({
//   studentId,
//   name,
//   address,
//   phoneNum,
//   dob,
//   socialSociety,
//   email,
//   race,
//   gender,
//   hispanicOrigin,
//   militaryVeteran,
//   disablePerson,
//   HighestGradeCompleted,
//   dateOfSign,
//   applicantSign,
// }) => {
//   const data = axios
//     .post(`${SERVER_URL}/makeApplicationForEnrollment`, {
//       studentId,
//       name,
//       address,
//       phoneNum,
//       dob,
//       socialSociety,
//       email,
//       race,
//       gender,
//       hispanicOrigin,
//       militaryVeteran,
//       disablePerson,
//       HighestGradeCompleted,
//       dateOfSign,
//       applicantSign,
//     })
//     .then(function (response) {
//       return { success: true, data: response?.data };
//     })
//     .catch(function (error) {
//       console.log(error.response.data);
//       return { success: false, data: error?.response?.data };
//     });
//   return data;
// };

export const makeAgreement = async ({
  studentId,
  name,
  address,
  phoneNum,
  dob,
  socialSociety,
  email,
  race,
  gender,
  hispanicOrigin,
  militaryVeteran,
  disablePerson,
  HighestGradeCompleted,
  dateOfSign,
  applicantSign,
}) => {
  const data = axios
    .post(`${SERVER_URL}/makeAgreement`, {
      studentId,
      name,
      address,
      phoneNum,
      dob,
      socialSociety,
      email,
      race,
      gender,
      hispanicOrigin,
      militaryVeteran,
      disablePerson,
      HighestGradeCompleted,
      dateOfSign,
      applicantSign,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const createDataCollectionForm = async ({
  studentId,
  name,
  address,
  phoneNum,
  dob,
  socialSociety,
  email,
  race,
  gender,
  hispanicOrigin,
  militaryVeteran,
  disablePerson,
  HighestGradeCompleted,
  dateOfSign,
  applicantSign,
}) => {
  const data = axios
    .post(`${SERVER_URL}/makeDataCollection`, {
      studentId,
      name,
      address,
      phoneNum,
      dob,
      socialSociety,
      email,
      race,
      gender,
      hispanicOrigin,
      militaryVeteran,
      disablePerson,
      HighestGradeCompleted,
      dateOfSign,
      applicantSign,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const createApplicationEnrollment = async ({
  studentId,
  name,
  address,
  phoneNum,
  dob,
  socialSociety,
  email,
  EmergancyAddress,
  EmergancyContactName,
  EmergancyPhone,
  EmergancyRelation,
  EducationHighestGradeCompleted,
  MotorLicenseState,
  MotorVehicleLicense,
  HighestGradeCompleted,
  applicantSign,
}) => {
  const data = axios
    .post(`${SERVER_URL}/makeApplicationForEnrollment`, {
      studentId,
      name,
      address,
      phoneNum,
      dob,
      socialSociety,
      email,
      EmergancyAddress,
      EmergancyContactName,
      EmergancyPhone,
      EmergancyRelation,
      EducationHighestGradeCompleted,
      MotorLicenseState,
      MotorVehicleLicense,
      HighestGradeCompleted,
      applicantSign,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const createAgreement = async ({
  studentId,
  name,
  address,
  phoneNum,
  dob,
  socialSociety,
  email,
  program,
  tranmission,
  // constOfTution,
  // downPayment,
  // thirdPartyPayer,
  // weeklyPayments,
  // loanPayment,
  applicantSign,
}) => {
  const data = axios
    .post(`${SERVER_URL}/makeAgreement`, {
      studentId,
      name,
      address,
      phoneNum,
      dob,
      socialSociety,
      email,
      program,
      tranmission,
      // constOfTution,
      // downPayment,
      // thirdPartyPayer,
      // weeklyPayments,
      // loanPayment,
      applicantSign,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const approveDataCollection = async (name, id, student) => {
  const data = axios
    .post(`${SERVER_URL}/approveDataCollection`, {
      name,
      id,
      student,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const approveAgreement = async (
  name,
  id,
  student,
  constOfTution,
  downPayment,
  thirdPartyPayer,
  weeklyPayments,
  loanPayment
) => {
  const data = axios
    .post(`${SERVER_URL}/approveAgreement`, {
      name,
      id,
      student,
      constOfTution,
      downPayment,
      thirdPartyPayer,
      weeklyPayments,
      loanPayment,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};

export const approveApplicationForEnrollment = async (name, id, student) => {
  const data = axios
    .post(`${SERVER_URL}/approveApplicationForEnrollment`, {
      name,
      id,
      student,
    })
    .then(function (response) {
      return { success: true, data: response?.data };
    })
    .catch(function (error) {
      console.log(error.response.data);
      return { success: false, data: error?.response?.data };
    });
  return data;
};
