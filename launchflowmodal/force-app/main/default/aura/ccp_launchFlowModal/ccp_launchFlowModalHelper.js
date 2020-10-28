({
    showModal : function(component,event,helper){

        if($A.util.isEmpty(component.get("v.flowName")))
        {
            helper.showToast(component,'error','ERROR','No Flow Name Defined', 'dismiss');
        }
        else
        {
            var modalBody;
            var modalFooter;
            $A.createComponents([
                                    ["c:ccp_renderFlow", 
                                    {
                                        flowName: component.get("v.flowName"),
                                        flowInputVariables: component.get("v.flowInputVariables"),
                                        flowOutputVariables: component.getReference("v.flowOutputVariables"),
                                        hideFlowTransitionOverlay: component.get("v.hideFlowTransitionOverlay"),
                                        refreshPageOnFlowCompletion: component.get("v.refreshPageOnFlowCompletion"),
                                        redirectUrlOnFlowCompletion: component.get("v.redirectUrlOnFlowCompletion"),
                                        fixedModalWidthHeight: component.get("v.fixedModalWidthHeight"),
                                        modalWidth: component.get("v.modalWidth"),
                                        modalHeight: component.get("v.modalHeight")
                                    }],
                                    ["c:ccp_renderFlowFooter", 
                                    {
                                        renderFooter: component.get("v.renderFooter"),
                                        hideModalCloseButton: component.get("v.hideModalCloseButton")
                                    }]
                                ],
                               function(components, status) {
                                   if (status === "SUCCESS") {
                                        var fixedModalWidthHeight = component.get("v.fixedModalWidthHeight");
                                        var cssClass = 'lfm-modal-container';
                                        cssClass += (fixedModalWidthHeight === true) ? ' lfm-modal-fixed-width-height' : '' ;
                                        modalBody = components[0];
                                        modalFooter = components[1];
                                        
                                        component.find('overlayLib').showCustomModal({
                                            header: component.get("v.flowModalHeader"),
                                            body: modalBody, 
                                            footer: (component.get("v.renderFooter")) ? modalFooter : null,
                                            showCloseButton: !component.get("v.hideModalCloseButton"),
                                            cssClass: cssClass,
                                            closeCallback: function() {
                                                //alert('You closed the alert!');
                                            }
                                        })
                                   }                               
                               });
        }

    },
    
    showToast : function(component,type,title,message, mode){
        
        var toastEvent = $A.get("e.force:showToast");
        
        toastEvent.setParams({
            "title": title,
            "message": message,
            "type" : type,
            "mode" : mode,
            "duration" : 8000
            
        });
        toastEvent.fire();        
    }
})