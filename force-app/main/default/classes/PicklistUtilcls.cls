public class PicklistUtilcls {
	@Auraenabled
    public static Map<string,String> retrieveValues(){
        Map<String,String> dummyValuesMap = new Map<String,String>();
        
        for(Contact contObj:[select id,name from Contact limit 10]){
            dummyValuesMap.put(contObj.Id,contObj.Name);
        }       
        return dummyValuesMap;
    }
}