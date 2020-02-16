@isTest
private with sharing class TestClass1 {
    @TestSetup
    static void makeData(){
        
    }
    @IsTest
    static void  testFirstMethod(){
        
        Test.startTest();
        /*System.runAs(contextuser){
            
        }*/
        Test.stopTest();
        
    }
}