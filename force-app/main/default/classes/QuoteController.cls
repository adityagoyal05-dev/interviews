public with sharing class QuoteController {
    public QuoteController() {

    }

    @AuraEnabled(cacheable=true)
    public static QuoteDto getQuote (String recordDataId)
    {

        Quote__c quote = new Quote__c();
        quote = [SELECT Id, Name, EndDate__c, Start_Date__c, TotalQuotedAmount__c FROM Quote__c Where Id =:recordDataId];
        QuoteDto quoteDto = new QuoteDto(quote);
        return quoteDto;
    }

}