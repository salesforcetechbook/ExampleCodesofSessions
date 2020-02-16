global class DeleteOpportunities implements Database.Batchable<sobject>,Database.stateful {
    global integer i=0;
    global Database.QueryLocator  start(Database.BatchableContext bc) {
        // collect the batches of records or objects to be passed to execute
        return database.getQueryLocator('select id from Opportunity');
    }
    global void execute(Database.BatchableContext bc, List<sObject> records){
        // process each batch of records
        delete records;
        i+=records.size();
        
    } 
    global void finish(Database.BatchableContext bc){
        // execute any post-processing operations
    } 
}