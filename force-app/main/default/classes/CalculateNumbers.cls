public with sharing class CalculateNumbers {
    public CalculateNumbers() {

    }
    @AuraEnabled
    public static integer getSummResult(integer firstNumber,integer secondNumber){
        
        return (firstNumber+secondNumber);
    }
}