function initData() {
  jimData.variables["ProjectImage"] = "";
  jimData.variables["ProjectName"] = "null";
  jimData.variables["SelectedProject"] = "";
  jimData.variables["Uncompleted"] = "";
  jimData.variables["ProjectDescription"] = "";
  jimData.variables["ClickedGrid"] = "";
  jimData.datamasters["TaskThirdRow"] = [
  ];

  jimData.datamasters["Proyectos"] = [
    {
      "id": 1,
      "datamaster": "Proyectos",
      "userdata": {
        "6471dba6-0520-4443-b579-b44120110c06": "02/04/2022",
        "dbd250a0-4c24-4a80-a112-0a68108ac260": "02/25/2022",
        "9aa2a6c6-138c-4260-bebc-b571b9d1027a": "02/04/2022",
        "2b7ca7f2-d2c9-4ee5-8bd2-ded5246a8d96": "Shamana Project\n",
        "b0572b83-0d88-431c-8d8c-32159a9d5632": "This project need to be ready for our costumers",
        "30db0626-e035-4beb-9e4d-859b890c2be8": "./resources/jim/images/common/crossimage.png"
      }
    }
  ];

  jimData.datamasters["Resume"] = [
    {
      "id": 1,
      "datamaster": "Resume",
      "userdata": {
        "05cf3555-04ee-4916-a800-13bb40e547d7": "This is an example test that will be used to show this prototype in the class, only if someone sees this, should cough"
      }
    }
  ];

  jimData.datamasters["Lists"] = [
  ];

  jimData.datamasters["TaskSecondRow"] = [
  ];

  jimData.datamasters["Task"] = [
  ];

  jimData.isInitialized = true;
}