'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({emr_name_prefix: 'dw_'}, function() {
    console.log("The EMRs shown are belongs to DW");
  });
   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlContains: 'https://console.aws.amazon.com/elasticmapreduce/'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});
