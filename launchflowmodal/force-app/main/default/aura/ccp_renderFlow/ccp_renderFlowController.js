/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

({
    doInit:function(component, event, helper){
        var flow = component.find("flowRenderer");
        /*var inputVariables = [
            { 
                name : "currRecordId", type : "String", value: component.get("v.sprdRecordId") 
            }
        ];*/
        var flowName = component.get("v.flowName");
        var flowInputVariables = component.get("v.flowInputVariables");
        if($A.util.isEmpty(flowInputVariables))
        {
            flow.startFlow(flowName);
        }
        else
        {
            flow.startFlow(flowName, flowInputVariables);
        }
        
    },
    
    handleStatusChange : function (component, event) {
        if(event.getParam("status") === "FINISHED") {
            component.set("v.flowStatus", "FINISHED");
            var flowOutputVariables = event.getParam("outputVariables");
            component.set("v.flowOutputVariables",flowOutputVariables);
            
            var refreshPageOnFlowCompletion = component.get("v.refreshPageOnFlowCompletion");
            var redirectUrlOnFlowCompletion = component.get("v.redirectUrlOnFlowCompletion");
            
            if(redirectUrlOnFlowCompletion !== undefined && redirectUrlOnFlowCompletion.trim() !== '')
            {
                window.location.href = redirectUrlOnFlowCompletion;
            }
            else if(refreshPageOnFlowCompletion)
            {
                window.location.reload();
            }
            
            component.find("overlayLib").notifyClose();

        }
    }
    
})