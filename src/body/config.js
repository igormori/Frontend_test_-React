
export const ChangeStyle =  function(selection,checkBox01,checkBox02,checkBox03,checkBox04,checkBox05){
      return    selection === "Appraisal Company 01 $150" ? checkBox01 = 'chkBox01' :
                selection === "Appraisal Company 02 $200" ? checkBox02 = 'chkBox02' :
                selection === "Appraisal Company 03 $170" ? checkBox03 = 'chkBox03' :
                selection === "Appraisal Company 04 $150" ? checkBox04 = 'chkBox04' :
                selection === "Appraisal Company 05 $300" ? checkBox05 = 'chkBox05' :
                checkBox05 = "notSelected";
  }