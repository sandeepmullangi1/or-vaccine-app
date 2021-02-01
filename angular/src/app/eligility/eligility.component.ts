import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligility',
  templateUrl: './eligility.component.html',
  styleUrls: ['./eligility.component.css']
})
export class EligilityComponent implements OnInit {

  constructor() { }

  liveInHealthCareSetting;
  workInHealthCareSetting;
  noDisabled = false;
  yesDisabled = false;
  selectedLiveInHealthCareDropdown;
  selectedWorkInHealthCareDropdown;

  yesNo = ['Yes','No']


  allQuestions = {
    'question4': {'key':'','value':''},
    'question5': {'key' :'', 'value':''}
  }


  liveInHealthCareDropdown=['Resident at a skilled nursing or memory care facility ', 'Resident in adult foster care', 'Resident in group homes for people with intellectual and developmental disabilities', 'Adult or age-eligible child who has a medical condition or disability who receive services in their homes']

  workInHealthCareDropdown = ['Hospital staff with patient care responsibilities', 'Urgent care staff', 'Skilled nursing and memory care facility health care personnel', 'Health care interpreter or traditional health worker ', 'Paid or unpaid health care personnel who meets the age requirement of residential care facilities ', 'Paid or unpaid health care personnel who meets the age requirement of adult foster care', 'Paid or unpaid health care personnel who meets the age requirement of group homes for people with intellectual and developmental disabilities', 'Other congregate care sites', 'Hospice programs', 'Mobile crisis care and related services', 'Health care provider in outpatient settings serving specific high-risk groups', 'Day treatment centers', 'Non-emergency medical transport', 'Paid or unpaid caregivers including parents or foster parents of medically fragile children or adults who live at home', 'Other health care provider who provides direct service to people with I/DD and other high-risk populations', 'Other public health settings such as health care providers serving WIC or CBOs with direct or indirect exposures', 'Any other health care providers']

  question4Dropdown = ['Early learning or child care provider or staff', 'Emergency Child Care (ECE) facility provider or staff (including young adults ages 16-18)', 'License-exempt caregivers providing Oregon Department of Human Services subsidized child care in the home', 'Licensed and recorded non-ECE facility provider or staff', 'Office of Child Care investigator', 'Individual in the substitute provider pool'];
  
  question5Dropdown = ['Teacher', 'Substitute teacher ', 'Paraprofessional ', 'Bus driver', 'Custodian: maintenance/facilities ', 'Nutrition staff ', 'School office administrators', 'School administrators', 'Counselors and mental health support staff ', 'Health staff ', 'Childcare staff ', 'Library staff ', 'Other educators and school staff in the school ', 'Student and practicum teacher or their supervisor ', 'Early Intervention/Early Childhood Special Education staff ', 'Coach or official ', 'Extracurricular and program staff (including community partners who provide services to students and families on school campuses, as well as programs like outdoor school) ', 'District and education service district staff who spend time on school campuses (teacher coaches, TOSAs, IT, etc.)']
  
  ngOnInit(): void {
  }

  onChangeCheckbox(value) {
    if (value) {
      if (this.liveInHealthCareSetting) {
        this.noDisabled = true;
      }
      else if (this.workInHealthCareSetting) {
        this.noDisabled = true;
      }
      else {
        this.yesDisabled = true;
      }
    }
    else {
      this.yesDisabled = false;
      if (!this.liveInHealthCareSetting && !this.workInHealthCareSetting)
        this.noDisabled = false;
    }
  }

}
