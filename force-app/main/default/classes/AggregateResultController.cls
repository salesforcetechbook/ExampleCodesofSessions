public with sharing class AggregateResultController {
    public List<AggregateResult> aggregateResultList{get;set;}
    public List<AggregateResult> campaignResultList{get;set;}
    public AggregateResultController() {
        aggregateResultList = new List<AggregateResult>();
        aggregateResultList = [select count(id) oppCount,sum(Amount) oppSum,StageName oppStage 
                            from Opportunity group by StageName];
        campaignResultList = [select count(id),Type from Campaign group by Type];
        //aggregateResultList = [select count(id),sum(Amount),StageName 
                            //from Opportunity group by StageName];
        //expr0,expr1
    }
}