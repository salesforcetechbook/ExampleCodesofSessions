public class QeryUtilcls {
	 @Auraenabled
    public static List<sObject> retrieveDetails(String sobjectName){
        List<Sobject> sObjectList = new List<sObject>();
        String query = 'select id,name from '+sobjectName+' order by createddate desc limit 5';            
        sObjectList = database.query(query);        
        return sObjectList;
    }
}