public class EmployeeCtrl {
    public Employee__c empObj{get;set;}
    public String empNo{get;set;}
    public EmployeeCtrl(){
        empObj = new Employee__c();
    }
    public pagereference rertrieEmaployeeRecord(){
        
        empObj = [select id,name,Employee_Name__c,HRA__C,Basic__C,Gross__c From Employee__c where name=:empNo];
        return null;
    }
}