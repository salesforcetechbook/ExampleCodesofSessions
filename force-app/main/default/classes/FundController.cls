global with sharing class FundController {
    
    public class PagedResult {
        
        @AuraEnabled
        public Integer pageSize { get;set; }
        
        @AuraEnabled
        public Integer page { get;set; }
        
        @AuraEnabled
        public Integer total { get;set; }
        
        @AuraEnabled
        public List<Fund__c> funds { get;set; }
        
    }

    public class Filter {
        
        @AuraEnabled
        public String searchKey { get;set; }

        @AuraEnabled
        public String assetClass { get;set; }

        @AuraEnabled
        public String sector { get;set; }

        @AuraEnabled
        public Decimal minYtdReturn { get;set; }
        
        @AuraEnabled
        public Decimal maxYtdReturn { get;set; }

        @AuraEnabled
        public Decimal min1YearReturn { get;set; }
        
        @AuraEnabled
        public Decimal max1YearReturn { get;set; }
        
        @AuraEnabled
        public Decimal min5YearReturn { get;set; }
        
        @AuraEnabled
        public Decimal max5YearReturn { get;set; }
    }

    @AuraEnabled
    public static PagedResult getFunds(String filters, Decimal pageSize, Decimal pageNumber) {
        Filter filter = (Filter) JSON.deserializeStrict(filters, FundController.Filter.class);
        Integer pSize = (Integer)pageSize;
        String key = '%' + filter.searchKey + '%';
        Integer offset = ((Integer)pageNumber - 1) * pSize;
        PagedResult r =  new PagedResult();
        r.pageSize = pSize;
        r.page = (Integer) pageNumber;
        r.total = [SELECT count() FROM Fund__c 
                   WHERE name LIKE :key
                   AND Asset_Class__c like : (filter.assetClass == '' ? '%' : filter.assetClass)
                   AND Sector__r.Name like : (filter.sector == '' ? '%' : filter.sector)
                   AND YTD_Return__c >= :filter.minYtdReturn AND YTD_Return__c <= :filter.maxYtdReturn
                   AND One_Year_Return__c >= :filter.min1YearReturn AND One_Year_Return__c <= :filter.max1YearReturn
                   AND Five_Year_Return__c >= :filter.min5YearReturn AND Five_Year_Return__c <= :filter.max5YearReturn
                  ];
        r.funds = [SELECT id, name, abbreviation__c, asset_class__c, sector__r.Name, rating__c, YTD_Return__c, One_Year_Return__c, Two_Year_Return__c, Five_Year_Return__c FROM Fund__c 
                   WHERE name LIKE :key
                   AND Asset_Class__c like : (filter.assetClass == '' ? '%' : filter.assetClass)
                   AND Sector__r.Name like : (filter.sector == '' ? '%' : filter.sector)
                   AND YTD_Return__c >= :filter.minYtdReturn AND YTD_Return__c <= :filter.maxYtdReturn
                   AND One_Year_Return__c >= :filter.min1YearReturn AND One_Year_Return__c <= :filter.max1YearReturn
                   AND Five_Year_Return__c >= :filter.min5YearReturn AND Five_Year_Return__c <= :filter.max5YearReturn
                   LIMIT :pSize OFFSET :offset];
        return r;
    }
    
    @AuraEnabled
    public static List<String> getAssetClasses() {
        Schema.DescribeFieldResult result = Fund__c.Asset_Class__c.getDescribe();
        List<Schema.PicklistEntry> entries = result.getPicklistValues();
        List<String> values = new list <String>();
        for (Schema.PicklistEntry entry: entries) {
            values.add(entry.getValue());
        }
        return values;
    }
    
    @AuraEnabled
    public static Sector__c[] getSectors() {
        return [SELECT Id, Name FROM Sector__c ORDER BY Name];
    }
    
}