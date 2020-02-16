public class Calculatorcontroller {
        public decimal firstNumber{get;set;}
        public decimal secondNumber{get;set;}
        public decimal result{get;set;}
        
        public void sum(){
            result = firstNumber + secondNumber;
        }
        
        public void sub(){
            
            result = firstNumber - secondNumber;
        }
        public void multi(){
            
            result = firstNumber * secondNumber;
        }
}