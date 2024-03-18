import { useState } from "react";
import { useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { Button, Spinner } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import {
  approveAgreement,
  fetchAgreementByEmail,
} from "../../services/Student";
import withReactContent from "sweetalert2-react-content";

const AdminEnrollmentAgreement = () => {
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(0);
  const navigate = useNavigate();

  const { id } = useParams();
  const MySwal = withReactContent(Swal);
  const user = useSelector((state) => state?.user);
  const [formData, setFormData] = useState({
    constOfTution: 0,
    downPayment: 0,
    thirdPartyPayer: "",
    weeklyPayments: 0,
    loanPayment: 0,
  });
  useEffect(() => {
    setLoading(true);

    async function fetchDataCollection() {
      const data = await fetchAgreementByEmail(id);
      if (data?.agreement?.length !== 0) {
        setCollectedData(data.agreement[0]);
      } else {
        MySwal.fire("User has not entered the data", "", "error");
        navigate(-1);
      }
      setLoading(false);
    }

    fetchDataCollection();
  }, [update]);

  const [collectedData, setCollectedData] = useState({
    userId: "1",
    name: "1",
    address: "",
    phoneNum: "",
    dob: "",
    socialSociety: "",
    email: "",
    program: "",
    transmission: "",

    constOfTution: "",
    downPayment: "",
    thirdPartyPayer: "",
    weeklyPayments: "",
    loanPayment: "",
    // PROGRAMS
    // CLASS: CDL Class B, CDL Class A
    // FULL TIME  (3 Sessions Per Week)

    // <Tranmission></Tranmission>
    // Automatic
    // Manual

    /**
     * COST Of TUITION (Agreement cost)
     *
     * Cost of Tuition : Admin Side
     * Down Payment :  Admin Side
     *
     *
     *
     *
     *
     * **** SUGGESTED METHOD OF PAYMENT:
     *
     * The student offers the following methods for paying for the services provided
     * :  Credit Card / Cash
     *
     * Third-party payer :
     *
     * Weekly Payments :
     *
     * Loan Payment :
     *
     *
     *
     * Authorized School Representative
     * Signer Data
     * */

    dateOfSign: new Date().toUTCString(),
    applicantSign: "",
  });

  return (
    <div className="">
      {loading === true ? (
        <div className="text-center my-5">
          <Spinner width={20} padding={20}></Spinner>
        </div>
      ) : (
        <>
          <div className="p-5 mx-5 d-none d-sm-block">
            <div
              className="main-box shadow-lg"
              style={{ borderRadius: "20px" }}
            >
              <h1 className="form-title">ENROLLMENT AGREEMENT</h1>
              <h5 className="form-subtitle-center">
                This enrollment Agreement is between United CDL Training School
                and:
              </h5>

              {/* <!-- Data Collection basic info --> */}
              <div className="item-row">
                <span className="key">Applicant's Name</span>
                <span className="value">{collectedData?.name}</span>

                <span className="key">Adress</span>
                <span className="value">{collectedData?.address}</span>

                <span className="key">Phone Number</span>
                <span className="value">{collectedData?.phoneNum}</span>

                <span className="key">Date of Birth</span>
                <span className="value">{collectedData?.dob}</span>

                <span className="key">Social Security Number</span>
                <span className="value">{collectedData?.socialSociety}</span>

                <span className="key">Email</span>
                <span className="value">{collectedData?.email}</span>
              </div>

              {/* <!-- AGREEMENT -->
    <!-- Programs --> */}
              <section className="section-box">
                <h2 className="section-title -attention">PROGRAMS</h2>
                <span className="form-subtitle">
                  The object of the Agreement is tuition services. The school
                  agrees to provide the following training (Available Classes):
                </span>
                <div className="item-row">
                  <span className="key">Program</span>
                  <span className="value">{collectedData?.program}</span>

                  {/* <!-- visiting type --> */}
                  <span className="key">Attendance policy *</span>
                  <span className="value">FULL TIME (3 Sessions Per Week)</span>
                </div>
                <span className="form-subtitle">
                  * school visiting obligations
                </span>
              </section>

              {/* <!-- Transmission Type --> */}
              <div className="item-row">
                <span className="key">Transmission type</span>
                <span className="value">{collectedData?.transmission}</span>
              </div>

              {/* <!-- COST of Tuition --> */}
              <section className="section-box">
                <h2 className="section-title">
                  COST Of TUITION (Agreement cost)
                </h2>
                <span className="form-subtitle">
                  The "Total" consists of tuition cost and and fees
                </span>
                <div className="item-row">
                  <span className="key">Cost of Tuition</span>
                  <input
                    name="costOfTution"
                    placeholder="Cost Of Tution"
                    value={formData?.constOfTution}
                    className="form-control"
                    type={"number"}
                    min={0}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        constOfTution: e.target.value,
                      });
                    }}
                  />

                  <span className="key">Down Payment</span>
                  <input
                    name="DownPayment"
                    placeholder="Down Payment"
                    value={formData?.downPayment}
                    className="form-control"
                    type={"number"}
                    min={0}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        downPayment: e.target.value,
                      });
                    }}
                  />

                  <span className="key -bold">TOTAL COST</span>
                  <span className="value -bold">
                    {Number(
                      Number(formData.constOfTution) +
                        Number(formData.downPayment)
                    )}
                    &nbsp;$
                  </span>
                </div>
              </section>
              {/* <!-- Cost Info -->

      <!-- Method of Payment --> */}
              <section className="section-box -hidden">
                <h2 className="section-title">SUGGESTED METHOD OF PAYMENT</h2>
                <span className="form-subtitle">
                  Parties are agreed that the payment of services provided costs
                  can be satisfied with help of:
                </span>
                <div className="item-row">
                  <span className="key">
                    The student offers the following methods for paying for the
                    services provided
                  </span>
                  <span className="value">Credit Card</span>

                  <span className="key">Third-party payer</span>
                  <input
                    name="thirdPartyPayer"
                    placeholder="Third Party Payer"
                    value={formData?.thirdPartyPayer}
                    className="form-control"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        thirdPartyPayer: e.target.value,
                      });
                    }}
                  />

                  <span className="key">Weekly Payments</span>
                  <input
                    name="weeklyPayments"
                    placeholder="Weekly Payments"
                    value={formData?.weeklyPayments}
                    className="form-control"
                    type={"number"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        weeklyPayments: e.target.value,
                      });
                    }}
                    min={0}
                  />

                  <span className="key">Loan Payment</span>
                  <input
                    name="loanPayments"
                    placeholder="Loan Payments"
                    value={formData?.loanPayment}
                    className="form-control"
                    type={"number"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        loanPayment: e.target.value,
                      });
                    }}
                    min={0}
                  />
                </div>
              </section>

              {/* <!-- AGREEMENT NOTICE --> */}
              <div className="item-row">
                <section className="section-box">
                  <h2 className="section-title">AGREEMENT NOTICE</h2>
                  <small>
                    This agreement will be binding only when it has been fully
                    completed, signed, and dated by the Applicant and an
                    authorized representative of the school prior to the time
                    instruction begins.
                  </small>

                  <h2 className="section-title -new-page-when-print">
                    CHANGES TO AGREEMENT NOTICE
                  </h2>
                  <small>
                    Any changes in the agreement will not be binding on either
                    the student or the school unless such changes are
                    acknowledged in writing by an authorized representative of
                    the school and by the student, or student's parent or
                    guardian if he/she is a minor.
                  </small>

                  <h2 className="section-title">
                    CANCELLATION AND REFUND POLICY
                  </h2>
                  <ol type="1">
                    <li>
                      The school must refund all monies paid if the applicant is
                      not accepted. This includes instances where a starting
                      class is cancelled by the school.
                    </li>
                    <li>
                      The school must refund all monies paid if the applicant
                      cancels within five business days (excluding Sundays and
                      holidays) after the day the contract is signed or an
                      initial payment is made, as long as the applicant has not
                      begun training.
                    </li>
                    <li>
                      The school may retain an established registration fee
                      equal to ten percent of the total tuition cost, or one
                      hundred dollars, whichever is less, if the applicant
                      cancels past the fifth business day after signing the
                      contract or making an initial payment. A registration fee
                      is any fee charged by a school to process student
                      applications and establish a student record system.
                    </li>
                    <li>
                      If training is terminated after the student enters
                      classes, the school may retain the registration fee
                      established under (3) of this subsection, plus a
                      percentage of the total tuition as described in the
                      following table:
                    </li>

                    <div className="refund-block">
                      <span>
                        If the student completes this amount of training
                      </span>
                      <span>School may keep this percentage of payment</span>

                      <span>The School has no refund policy</span>

                      <span>
                        All payments are nonrefundable after 3(three) business
                        days from the date of signing the contract. Any refunds
                        after that date will be at the sole discretion of the
                        School
                      </span>
                    </div>

                    <li>
                      When calculating refunds, the official date of a student's
                      termination is the last day of recorded attendance:
                      <ol type="a">
                        <br />
                        <li>
                          When the school receives notice of the student's
                          intention to discontinue the training program; or,
                        </li>
                        <li>
                          When the school receives notice of the student's
                          intention to discontinue the training program; or,
                        </li>
                        <li>
                          When a student, without notice, fails to attend
                          classes for thirty calendar days.
                        </li>
                      </ol>
                    </li>
                    <li>
                      All refunds must be paid within thirty calendar days of
                      the student's official termination date.
                    </li>
                  </ol>
                </section>
              </div>

              <div className="item-row">
                <section className="section-box">
                  <h2 className="section-title">NOTICE TO BUYER</h2>
                  <small>
                    Do not sign this Agreement before you read it or if it
                    contains any blank spaces. This is a legal instrument. All
                    pages of this contract are binding. Read both sides of all
                    pages before signing. You are entitled to an exact copy of
                    the agreement, school catalog, and any other papers you may
                    sign, and are required to sign a statement acknowledging
                    receipt of those.
                  </small>

                  <h2 className="section-title">CANCELLATION OF CONTRACT</h2>
                  <small>
                    If you have not started training, you may cancel this
                    contract by submitting written notice of such cancellation
                    to the school at its address shown on the contract. The
                    notice must be postmarked no later than midnight of the
                    fifth business day (excluding Sundays and holidays)
                    following your signing this contract; the written notice may
                    also be personally or otherwise delivered to the school
                    within that time. In event of dispute over timely notice,
                    the burden to prove service rests on the applicant.
                  </small>

                  <h2 className="section-title">UNFAIR BUSINESS PRACTICES</h2>
                  <small>
                    It is an unfair business practice for the school to sell,
                    discount, or otherwise transfer this contract or promissory
                    note without the signed written consent of the student or
                    his/her financial sponsors if he/she is a minor, and a
                    written statement notifying all parties that the
                    cancellation and refund policy continues to apply.
                  </small>
                </section>
              </div>

              {/* <!-- CERTIFICATION --> */}
              <div className="item-row">
                <h2 className="section-title">CERTIFICATION</h2>
                <small>
                  I certify that I read and understand the cancellation and
                  refund policy and the complaint procedure; I received a copy
                  of the school catalog and I am entitled to an exact copy of
                  this enrollment agreement, school catalog, and any other
                  papers I sign.
                </small>
                <div className="signature">{collectedData?.name}</div>
              </div>

              {/* <!-- Parent Or Guardian info --> */}

              {/* <!-- SCHOOL Manager Signature --> */}
              <section className="section-box">
                <h2 className="section-title">
                  Authorized School Representative
                </h2>

                <small>
                  As the authorized representative of the school, I hereby agree
                  the conditions set forth here in.
                </small>
                <div className="item-row">
                  <span className="key">Authorized Representative</span>
                  <span className="value">{user?.userName}</span>

                  <span className="key">Representative Title</span>
                  <span className="value">President</span>

                  <span className="key">Representative Location</span>
                  <span className="value">Frederick, MD</span>

                  <span className="key">Date of signing</span>
                  <span className="value">
                    {new Date().getMonth() + 1}/{new Date().getDay()}/
                    {new Date().getFullYear()}
                  </span>

                  <span className="key"></span>
                  <div className="signature -manager">{user?.userName}</div>
                </div>
              </section>

              <div className="item-row">
                <section className="section-box">
                  {/* <!-- for WA only --> */}

                  <h2 className="section-title">
                    NOTICE OF FINANCIAL OBLIGATION
                  </h2>
                  <small>
                    State law requires the following information to be supplied
                    to each student enrolling in a private vocational school
                    licensed under State Regulations. One copy of this notice
                    bearing original signatures must be attached by the school
                    as addenda to that individual's enrollment agreement, as
                    well as a copy provided to the enrollee by the school.
                  </small>

                  <h2 className="section-title">ACKNOWLEDGMENT BY ENROLLEE</h2>
                  <ol type="1">
                    <li>
                      I understand and accept that any contract for training I
                      enter into with the above named school contains legally
                      binding obligations and responsibilities.
                    </li>
                    <li>
                      I understand and accept that repayment obligations will be
                      placed upon me by any loans or other financing
                      arrangements I enter into as a means to pay for my
                      training.
                    </li>
                    <li>
                      I understand that any enrollment contract I enter into
                      will not be binding or take effect for at least five days,
                      excluding Sundays and holidays, following the last date
                      such a contract is signed by the school and me, provided
                      that I have not entered classes.
                    </li>
                  </ol>

                  <h2 className="section-title -hidden">STATE EXAMS</h2>
                  <ol type="1" start="4">
                    <li>
                      I understand the course tuition includes truck usage for
                      up to two (2) State Exams. Students requiring more than
                      two exams will need to pay an additional truck rental fee
                      in advance for each additional exam.
                    </li>
                    <li>
                      If a student cancels an exam within 2 business days of the
                      scheduled time, or does not show up for an exam, the
                      student will be issued his/her CDL certificate (assuming a
                      passing grade and the fulfillment of all required hours).
                      This will conclude the course and the student will forfeit
                      any additional time at the school or use of equipment. In
                      this situation the student will bear the responsibility
                      for scheduling an exam with the State and procuring the
                      necessary equipment.
                    </li>
                  </ol>

                  <h2 className="section-title">STUDENT CATALOG</h2>
                  <ol type="1" start="6">
                    <li>
                      I have reviewed and understand the{" "}
                      <a href="../../catalog" target="_blank">
                        CDL School Student Catalog
                      </a>
                      .
                    </li>
                  </ol>
                </section>
              </div>

              <div className="item-row -hidden">
                <section className="section-box">
                  <h2 className="section-title">ACKNOWLEDGMENT BY SCHOOL</h2>
                  <small>
                    Prior to being enrolled in this school, the applicant whose
                    name and signature appears above has been made aware of the
                    legal obligations he/she takes on by entering into a
                    contract for training. Those discussions included cautions
                    by the school about acquiring an excessive debt burden that
                    might become difficult to repay given employment
                    opportunities and average starting salaries in his/her
                    chosen occupation.
                  </small>

                  <h2 className="section-title">HOW TO FILE A COMPLAINT</h2>
                  <small>
                    MD law requires private vocational schools to inform
                    students how to file a complaint. By signing this form you
                    acknowledge this process has been explained to you. Below
                    are the next steps the school must take in discussing this
                    policy with you, along with information about the complaint
                    process.
                  </small>

                  <h2 className="section-title">
                    DISCUSSION ABOUT COMPLAINT POLICY REQUIRED
                  </h2>
                  <small>
                    First, a school representative must discuss the school's
                    complaint policy with you. Following this discussion, you
                    will be provided with this attachment to sign. After you
                    sign this form, the school will give you a copy for your
                    personal records. The school will also keep a copy on file.
                  </small>

                  <h2 className="section-title">
                    ACKNOWLEDGMENT OF COMPLAINT PROCESS BY STUDENT
                  </h2>
                  <ol type="1">
                    <li>
                      The School has described the grievance and/or complaint
                      policy to me.
                    </li>
                    <li>
                      I understand that the policy can also be found in the
                      School{" "}
                      <a
                        href="../../catalog"
                        target="_blank"
                        // onClick="catalog.dataset.clicked = true"
                      >
                        Catalog
                      </a>
                      .
                    </li>
                    <li>
                      I know I should first try to resolve a complaint or
                      concern with my instructor or school administrator.
                    </li>
                    <li>
                      I understand nothing prevents me from contacting the
                      Workforce Board at any time with a concern or complaint.
                    </li>
                    <li>
                      I understand that I have one year to file a complaint from
                      my last date of attendance.
                    </li>
                    <li>
                      I further understand that in the event of a school
                      closure, I have 60 days to file a complaint.
                    </li>
                    <li>
                      I also understand that complaints are public records.
                    </li>
                    <li>
                      Finally, I acknowledge that details about the complaint
                      process, my rights, and any restrictions on the time I
                      have to file a complaint can be found at Workforce Board.
                    </li>
                  </ol>

                  <h2 className="section-title">ACKNOWLEDGMENT BY SCHOOL</h2>
                  <small>
                    Prior to being enrolled in this school, the Applicant, whose
                    name and signature appear above, has been made aware of the
                    school's complaint policy.
                  </small>
                </section>
              </div>

              {/* <!-- SIGNATURE --> */}
              <footer className="mt-5" style={{ gap: 0 }}>
                <div className="date">
                  <span className="key">Date of signing</span>
                  <span className="value">{collectedData?.dateOfSign}</span>
                </div>
                <div className="signature">
                  <span className="key">Applicant signature</span>
                  <span className="value">{collectedData?.applicantSign}</span>
                </div>

                <div className="checkedBy">
                  <span className="key">Checked By</span>
                  <span className="value">
                    {collectedData?.checkedBySign || user?.userName}
                  </span>
                </div>
                <div className="signature">
                  <span className="key">Checker Signature</span>
                  <span className="value">
                    {collectedData?.checkedBySign || user?.userName}
                  </span>
                </div>

                <div className="school-data">
                  <div className="school-title">United CDL Training School</div>
                  <div className="school-addr">
                    66 Waverley Dr, Ste 630, Frederick, MD, 21702, 301-888-6339
                  </div>
                  {collectedData?.checkedBy === undefined && (
                    <div className="d-flex ">
                      <Button
                        onClick={async () => {
                          const result = await approveAgreement(
                            user?.userName,
                            user?.id,
                            collectedData?.email,
                            formData?.constOfTution,
                            formData?.downPayment,
                            formData?.thirdPartyPayer,
                            formData?.weeklyPayments,
                            formData?.loanPayment
                          );

                          if (result.success) {
                            MySwal.fire(
                              "Form Approved Successfully",
                              "",
                              "success"
                            );
                            setUpdate(update + 1);
                          } else {
                            MySwal.fire("Form Approvind Error", "", "error");
                          }
                        }}
                        className="my-3 mx-2"
                      >
                        Sign
                      </Button>
                      <Button
                        onClick={() => {
                          alert("api has to be implemented");
                        }}
                        className="my-3 mx-2"
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </footer>
            </div>
          </div>

          <div className="d-block d-sm-none">
            <div
              className="main-box shadow-lg"
              style={{ borderRadius: "20px" }}
            >
              <h1 className="form-title">ENROLLMENT AGREEMENT</h1>
              <h5 className="form-subtitle-center">
                This enrollment Agreement is between United CDL Training School
                and:
              </h5>

              {/* <!-- Data Collection basic info --> */}
              <div className="item-row">
                <span className="key">Applicant's Name</span>
                <span className="value">{collectedData?.name}</span>

                <span className="key">Adress</span>
                <span className="value">{collectedData?.address}</span>

                <span className="key">Phone Number</span>
                <span className="value">{collectedData?.phoneNum}</span>

                <span className="key">Date of Birth</span>
                <span className="value">{collectedData?.dob}</span>

                <span className="key">Social Security Number</span>
                <span className="value">{collectedData?.socialSociety}</span>

                <span className="key">Email</span>
                <span className="value">{collectedData?.email}</span>
              </div>

              {/* <!-- AGREEMENT -->
    <!-- Programs --> */}
              <section className="section-box">
                <h2 className="section-title -attention">PROGRAMS</h2>
                <span className="form-subtitle">
                  The object of the Agreement is tuition services. The school
                  agrees to provide the following training (Available Classes):
                </span>
                <div className="item-row">
                  <span className="key">Program</span>
                  <span className="value">{collectedData?.program}</span>

                  {/* <!-- visiting type --> */}
                  <span className="key">Attendance policy *</span>
                  <span className="value">FULL TIME (3 Sessions Per Week)</span>
                </div>
                <span className="form-subtitle">
                  * school visiting obligations
                </span>
              </section>

              {/* <!-- Transmission Type --> */}
              <div className="item-row">
                <span className="key">Transmission type</span>
                <span className="value">{collectedData?.transmission}</span>
              </div>

              {/* <!-- COST of Tuition --> */}
              <section className="section-box">
                <h2 className="section-title">
                  COST Of TUITION (Agreement cost)
                </h2>
                <span className="form-subtitle">
                  The "Total" consists of tuition cost and and fees
                </span>
                <div className="item-row">
                  <span className="key">Cost of Tuition</span>
                  <input
                    name="costOfTution"
                    placeholder="Cost Of Tution"
                    value={formData?.constOfTution}
                    className="form-control"
                    type={"number"}
                    min={0}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        constOfTution: e.target.value,
                      });
                    }}
                  />

                  <span className="key">Down Payment</span>
                  <input
                    name="DownPayment"
                    placeholder="Down Payment"
                    value={formData?.downPayment}
                    className="form-control"
                    type={"number"}
                    min={0}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        downPayment: e.target.value,
                      });
                    }}
                  />

                  <span className="key -bold">TOTAL COST</span>
                  <span className="value -bold">
                    {Number(
                      Number(formData.constOfTution) +
                        Number(formData.downPayment)
                    )}
                    &nbsp;$
                  </span>
                </div>
              </section>
              {/* <!-- Cost Info -->

      <!-- Method of Payment --> */}
              <section className="section-box -hidden">
                <h2 className="section-title">SUGGESTED METHOD OF PAYMENT</h2>
                <span className="form-subtitle">
                  Parties are agreed that the payment of services provided costs
                  can be satisfied with help of:
                </span>
                <div className="item-row">
                  <span className="key">
                    The student offers the following methods for paying for the
                    services provided
                  </span>
                  <span className="value">Credit Card</span>

                  <span className="key">Third-party payer</span>
                  <input
                    name="thirdPartyPayer"
                    placeholder="Third Party Payer"
                    value={formData?.thirdPartyPayer}
                    className="form-control"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        thirdPartyPayer: e.target.value,
                      });
                    }}
                  />

                  <span className="key">Weekly Payments</span>
                  <input
                    name="weeklyPayments"
                    placeholder="Weekly Payments"
                    value={formData?.weeklyPayments}
                    className="form-control"
                    type={"number"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        weeklyPayments: e.target.value,
                      });
                    }}
                    min={0}
                  />

                  <span className="key">Loan Payment</span>
                  <input
                    name="loanPayments"
                    placeholder="Loan Payments"
                    value={formData?.loanPayment}
                    className="form-control"
                    type={"number"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        loanPayment: e.target.value,
                      });
                    }}
                    min={0}
                  />
                </div>
              </section>

              {/* <!-- AGREEMENT NOTICE --> */}
              <div className="item-row">
                <section className="section-box">
                  <h2 className="section-title">AGREEMENT NOTICE</h2>
                  <small>
                    This agreement will be binding only when it has been fully
                    completed, signed, and dated by the Applicant and an
                    authorized representative of the school prior to the time
                    instruction begins.
                  </small>

                  <h2 className="section-title -new-page-when-print">
                    CHANGES TO AGREEMENT NOTICE
                  </h2>
                  <small>
                    Any changes in the agreement will not be binding on either
                    the student or the school unless such changes are
                    acknowledged in writing by an authorized representative of
                    the school and by the student, or student's parent or
                    guardian if he/she is a minor.
                  </small>

                  <h2 className="section-title">
                    CANCELLATION AND REFUND POLICY
                  </h2>
                  <ol type="1">
                    <li>
                      The school must refund all monies paid if the applicant is
                      not accepted. This includes instances where a starting
                      class is cancelled by the school.
                    </li>
                    <li>
                      The school must refund all monies paid if the applicant
                      cancels within five business days (excluding Sundays and
                      holidays) after the day the contract is signed or an
                      initial payment is made, as long as the applicant has not
                      begun training.
                    </li>
                    <li>
                      The school may retain an established registration fee
                      equal to ten percent of the total tuition cost, or one
                      hundred dollars, whichever is less, if the applicant
                      cancels past the fifth business day after signing the
                      contract or making an initial payment. A registration fee
                      is any fee charged by a school to process student
                      applications and establish a student record system.
                    </li>
                    <li>
                      If training is terminated after the student enters
                      classes, the school may retain the registration fee
                      established under (3) of this subsection, plus a
                      percentage of the total tuition as described in the
                      following table:
                    </li>

                    <div className="refund-block">
                      <span>
                        If the student completes this amount of training
                      </span>
                      <span>School may keep this percentage of payment</span>

                      <span>The School has no refund policy</span>

                      <span>
                        All payments are nonrefundable after 3(three) business
                        days from the date of signing the contract. Any refunds
                        after that date will be at the sole discretion of the
                        School
                      </span>
                    </div>

                    <li>
                      When calculating refunds, the official date of a student's
                      termination is the last day of recorded attendance:
                      <ol type="a">
                        <br />
                        <li>
                          When the school receives notice of the student's
                          intention to discontinue the training program; or,
                        </li>
                        <li>
                          When the school receives notice of the student's
                          intention to discontinue the training program; or,
                        </li>
                        <li>
                          When a student, without notice, fails to attend
                          classes for thirty calendar days.
                        </li>
                      </ol>
                    </li>
                    <li>
                      All refunds must be paid within thirty calendar days of
                      the student's official termination date.
                    </li>
                  </ol>
                </section>
              </div>

              <div className="item-row">
                <section className="section-box">
                  <h2 className="section-title">NOTICE TO BUYER</h2>
                  <small>
                    Do not sign this Agreement before you read it or if it
                    contains any blank spaces. This is a legal instrument. All
                    pages of this contract are binding. Read both sides of all
                    pages before signing. You are entitled to an exact copy of
                    the agreement, school catalog, and any other papers you may
                    sign, and are required to sign a statement acknowledging
                    receipt of those.
                  </small>

                  <h2 className="section-title">CANCELLATION OF CONTRACT</h2>
                  <small>
                    If you have not started training, you may cancel this
                    contract by submitting written notice of such cancellation
                    to the school at its address shown on the contract. The
                    notice must be postmarked no later than midnight of the
                    fifth business day (excluding Sundays and holidays)
                    following your signing this contract; the written notice may
                    also be personally or otherwise delivered to the school
                    within that time. In event of dispute over timely notice,
                    the burden to prove service rests on the applicant.
                  </small>

                  <h2 className="section-title">UNFAIR BUSINESS PRACTICES</h2>
                  <small>
                    It is an unfair business practice for the school to sell,
                    discount, or otherwise transfer this contract or promissory
                    note without the signed written consent of the student or
                    his/her financial sponsors if he/she is a minor, and a
                    written statement notifying all parties that the
                    cancellation and refund policy continues to apply.
                  </small>
                </section>
              </div>

              {/* <!-- CERTIFICATION --> */}
              <div className="item-row">
                <h2 className="section-title">CERTIFICATION</h2>
                <small>
                  I certify that I read and understand the cancellation and
                  refund policy and the complaint procedure; I received a copy
                  of the school catalog and I am entitled to an exact copy of
                  this enrollment agreement, school catalog, and any other
                  papers I sign.
                </small>
                <div className="signature">{collectedData?.name}</div>
              </div>

              {/* <!-- Parent Or Guardian info --> */}

              {/* <!-- SCHOOL Manager Signature --> */}
              <section className="section-box">
                <h2 className="section-title">
                  Authorized School Representative
                </h2>

                <small>
                  As the authorized representative of the school, I hereby agree
                  the conditions set forth here in.
                </small>
                <div className="item-row">
                  <span className="key">Authorized Representative</span>
                  <span className="value">{user?.userName}</span>

                  <span className="key">Representative Title</span>
                  <span className="value">President</span>

                  <span className="key">Representative Location</span>
                  <span className="value">Frederick, MD</span>

                  <span className="key">Date of signing</span>
                  <span className="value">
                    {new Date().getMonth() + 1}/{new Date().getDay()}/
                    {new Date().getFullYear()}
                  </span>

                  <span className="key"></span>
                  <div className="signature -manager">{user?.userName}</div>
                </div>
              </section>

              <div className="item-row">
                <section className="section-box">
                  {/* <!-- for WA only --> */}

                  <h2 className="section-title">
                    NOTICE OF FINANCIAL OBLIGATION
                  </h2>
                  <small>
                    State law requires the following information to be supplied
                    to each student enrolling in a private vocational school
                    licensed under State Regulations. One copy of this notice
                    bearing original signatures must be attached by the school
                    as addenda to that individual's enrollment agreement, as
                    well as a copy provided to the enrollee by the school.
                  </small>

                  <h2 className="section-title">ACKNOWLEDGMENT BY ENROLLEE</h2>
                  <ol type="1">
                    <li>
                      I understand and accept that any contract for training I
                      enter into with the above named school contains legally
                      binding obligations and responsibilities.
                    </li>
                    <li>
                      I understand and accept that repayment obligations will be
                      placed upon me by any loans or other financing
                      arrangements I enter into as a means to pay for my
                      training.
                    </li>
                    <li>
                      I understand that any enrollment contract I enter into
                      will not be binding or take effect for at least five days,
                      excluding Sundays and holidays, following the last date
                      such a contract is signed by the school and me, provided
                      that I have not entered classes.
                    </li>
                  </ol>

                  <h2 className="section-title -hidden">STATE EXAMS</h2>
                  <ol type="1" start="4">
                    <li>
                      I understand the course tuition includes truck usage for
                      up to two (2) State Exams. Students requiring more than
                      two exams will need to pay an additional truck rental fee
                      in advance for each additional exam.
                    </li>
                    <li>
                      If a student cancels an exam within 2 business days of the
                      scheduled time, or does not show up for an exam, the
                      student will be issued his/her CDL certificate (assuming a
                      passing grade and the fulfillment of all required hours).
                      This will conclude the course and the student will forfeit
                      any additional time at the school or use of equipment. In
                      this situation the student will bear the responsibility
                      for scheduling an exam with the State and procuring the
                      necessary equipment.
                    </li>
                  </ol>

                  <h2 className="section-title">STUDENT CATALOG</h2>
                  <ol type="1" start="6">
                    <li>
                      I have reviewed and understand the{" "}
                      <a href="../../catalog" target="_blank">
                        CDL School Student Catalog
                      </a>
                      .
                    </li>
                  </ol>
                </section>
              </div>

              <div className="item-row -hidden">
                <section className="section-box">
                  <h2 className="section-title">ACKNOWLEDGMENT BY SCHOOL</h2>
                  <small>
                    Prior to being enrolled in this school, the applicant whose
                    name and signature appears above has been made aware of the
                    legal obligations he/she takes on by entering into a
                    contract for training. Those discussions included cautions
                    by the school about acquiring an excessive debt burden that
                    might become difficult to repay given employment
                    opportunities and average starting salaries in his/her
                    chosen occupation.
                  </small>

                  <h2 className="section-title">HOW TO FILE A COMPLAINT</h2>
                  <small>
                    MD law requires private vocational schools to inform
                    students how to file a complaint. By signing this form you
                    acknowledge this process has been explained to you. Below
                    are the next steps the school must take in discussing this
                    policy with you, along with information about the complaint
                    process.
                  </small>

                  <h2 className="section-title">
                    DISCUSSION ABOUT COMPLAINT POLICY REQUIRED
                  </h2>
                  <small>
                    First, a school representative must discuss the school's
                    complaint policy with you. Following this discussion, you
                    will be provided with this attachment to sign. After you
                    sign this form, the school will give you a copy for your
                    personal records. The school will also keep a copy on file.
                  </small>

                  <h2 className="section-title">
                    ACKNOWLEDGMENT OF COMPLAINT PROCESS BY STUDENT
                  </h2>
                  <ol type="1">
                    <li>
                      The School has described the grievance and/or complaint
                      policy to me.
                    </li>
                    <li>
                      I understand that the policy can also be found in the
                      School{" "}
                      <a
                        href="../../catalog"
                        target="_blank"
                        // onClick="catalog.dataset.clicked = true"
                      >
                        Catalog
                      </a>
                      .
                    </li>
                    <li>
                      I know I should first try to resolve a complaint or
                      concern with my instructor or school administrator.
                    </li>
                    <li>
                      I understand nothing prevents me from contacting the
                      Workforce Board at any time with a concern or complaint.
                    </li>
                    <li>
                      I understand that I have one year to file a complaint from
                      my last date of attendance.
                    </li>
                    <li>
                      I further understand that in the event of a school
                      closure, I have 60 days to file a complaint.
                    </li>
                    <li>
                      I also understand that complaints are public records.
                    </li>
                    <li>
                      Finally, I acknowledge that details about the complaint
                      process, my rights, and any restrictions on the time I
                      have to file a complaint can be found at Workforce Board.
                    </li>
                  </ol>

                  <h2 className="section-title">ACKNOWLEDGMENT BY SCHOOL</h2>
                  <small>
                    Prior to being enrolled in this school, the Applicant, whose
                    name and signature appear above, has been made aware of the
                    school's complaint policy.
                  </small>
                </section>
              </div>

              {/* <!-- SIGNATURE --> */}
              <footer style={{ gap: 0 }} className="mt-5">
                <div className="date">
                  <span className="key">Date of signing</span>
                  <span className="value">
                    {new Date(collectedData?.dateOfSign).toDateString()}
                  </span>
                </div>
                <div className="signature">
                  <span className="key">Applicant signature</span>
                  <span className="value">{collectedData?.applicantSign}</span>
                </div>

                <div className="checkedBy">
                  <span className="key">Checked By</span>
                  <span className="value">
                    {collectedData?.checkedBySign || user?.userName}
                  </span>
                </div>
                <div className="signature">
                  <span className="key">Checker Signature</span>
                  <span className="value">
                    {collectedData?.checkedBySign || user?.userName}
                  </span>
                </div>

                <div className="school-data">
                  <div className="school-title">United CDL Training School</div>
                  <div className="school-addr">
                    66 Waverley Dr, Ste 630, Frederick, MD, 21702, 301-888- 6339
                    {collectedData?.checkedBy}
                  </div>
                  {collectedData?.status === "PENDING" && (
                    <div className="d-flex ">
                      <Button
                        onClick={async () => {
                          const result = await approveAgreement(
                            user?.userName,
                            user?.id,
                            collectedData?.email,
                            formData?.constOfTution,
                            formData?.downPayment,
                            formData?.thirdPartyPayer,
                            formData?.weeklyPayments,
                            formData?.loanPayment
                          );

                          if (result.success) {
                            MySwal.fire(
                              "Form Approved Successfully",
                              "",
                              "success"
                            );
                            setUpdate(update + 1);
                          } else {
                            MySwal.fire("Form Approvind Error", "", "error");
                          }
                        }}
                        className="my-3 mx-2"
                      >
                        Sign
                      </Button>
                      <Button
                        onClick={() => {
                          alert("api has to be implemented");
                        }}
                        className="my-3 mx-2"
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </footer>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminEnrollmentAgreement;
